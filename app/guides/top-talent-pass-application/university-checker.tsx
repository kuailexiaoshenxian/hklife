"use client";

import { useId, useMemo, useState } from "react";
import {
  ELIGIBLE_UNIVERSITY_SOURCE,
  eligibleUniversities,
  removedUniversities,
  type EligibleUniversity,
} from "../../data/eligible-universities";

type EligibleRecord = EligibleUniversity & { status: "eligible" };
type RemovedRecord = (typeof removedUniversities)[number] & { status: "removed" };
type UniversityRecord = EligibleRecord | RemovedRecord;
type CheckerResult = UniversityRecord | "not-found" | "choose" | null;

const traditionalCharacters: Record<string, string> = {
  國: "国", 學: "学", 華: "华", 復: "复", 臺: "台", 灣: "湾", 爾: "尔", 門: "门",
  廣: "广", 東: "东", 濟: "济", 師: "师", 範: "范", 開: "开", 漢: "汉", 濱: "滨",
  業: "业", 術: "术", 書: "书", 陸: "陆", 樂: "乐", 體: "体", 醫: "医", 與: "与",
};

const searchableUniversities: readonly UniversityRecord[] = [
  ...eligibleUniversities.map(university => ({ ...university, status: "eligible" as const })),
  ...removedUniversities.map(university => ({ ...university, status: "removed" as const })),
];

function normalizeText(value: string) {
  return [...value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()]
    .map(character => traditionalCharacters[character] ?? character)
    .join("")
    .replace(/&/g, " and ")
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9\u3400-\u9fff]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function recordLabels(record: UniversityRecord) {
  return [record.name, "nameZh" in record ? record.nameZh : undefined, ...(record.aliases ?? [])]
    .filter((label): label is string => Boolean(label));
}

function editDistance(left: string, right: string) {
  const previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    const current = [leftIndex];
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      current[rightIndex] = Math.min(
        current[rightIndex - 1] + 1,
        previous[rightIndex] + 1,
        previous[rightIndex - 1] + (left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1),
      );
    }
    previous.splice(0, previous.length, ...current);
  }
  return previous[right.length];
}

function matchScore(record: UniversityRecord, rawQuery: string) {
  const query = normalizeText(rawQuery);
  if (!query) return Number.POSITIVE_INFINITY;
  const queryCompact = query.replace(/\s/g, "");
  const queryWords = query.split(" ");
  let best = Number.POSITIVE_INFINITY;

  for (const label of recordLabels(record)) {
    const target = normalizeText(label);
    const targetCompact = target.replace(/\s/g, "");
    if (target === query) best = Math.min(best, 0);
    else if (target.startsWith(query)) best = Math.min(best, 1);
    else if (target.includes(query)) best = Math.min(best, 2);
    else if (targetCompact.includes(queryCompact)) best = Math.min(best, 3);
    else {
      const targetWords = target.split(" ");
      if (queryWords.every(word => targetWords.some(targetWord => targetWord.startsWith(word)))) {
        best = Math.min(best, 4);
      } else if (queryCompact.length >= 4 && Math.abs(queryCompact.length - targetCompact.length) <= 2) {
        const distance = editDistance(queryCompact, targetCompact);
        if (distance <= Math.max(1, Math.floor(queryCompact.length * 0.2))) best = Math.min(best, 8 + distance);
      }
    }
  }

  return best;
}

function displayName(record: UniversityRecord) {
  if ("nameZh" in record && record.nameZh) return `${record.nameZh} · ${record.name}`;
  return record.name;
}

export function UniversityChecker() {
  const listboxId = useId();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [result, setResult] = useState<CheckerResult>(null);

  const matches = useMemo(() => {
    if (!query.trim()) return [];
    return searchableUniversities
      .map(record => ({ record, score: matchScore(record, query) }))
      .filter(item => Number.isFinite(item.score))
      .sort((left, right) => left.score - right.score || left.record.name.localeCompare(right.record.name))
      .slice(0, 8);
  }, [query]);

  function choose(record: UniversityRecord) {
    setQuery(displayName(record));
    setResult(record);
    setIsOpen(false);
    setActiveIndex(-1);
  }

  function checkUniversity() {
    const normalizedQuery = normalizeText(query);
    if (!normalizedQuery) {
      setResult("choose");
      return;
    }

    const exact = searchableUniversities.find(record =>
      recordLabels(record).some(label => normalizeText(label) === normalizedQuery),
    );
    if (exact) {
      choose(exact);
      return;
    }

    if (matches.length === 1 || matches[0]?.score <= 1) {
      choose(matches[0].record);
      return;
    }

    if (matches.length > 0) {
      setResult("choose");
      setIsOpen(true);
      return;
    }

    setResult("not-found");
    setIsOpen(false);
  }

  return <section className="university-checker" aria-labelledby="university-checker-title">
    <div className="university-checker-head">
      <div>
        <span className="university-kicker">TTPS UNIVERSITY CHECK</span>
        <h3 id="university-checker-title">查询大学是否在高才通名单</h3>
        <p>输入中文名、英文名、简称或部分关键词，从下拉建议中选择学校。</p>
      </div>
      <span className="university-count"><b>{ELIGIBLE_UNIVERSITY_SOURCE.total}</b> 所大学</span>
    </div>

    <div className="university-search" onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
    }}>
      <div className="university-input-row">
        <div className="university-input-wrap">
          <span className="university-search-icon" aria-hidden="true">⌕</span>
          <input
            aria-activedescendant={isOpen && activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined}
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-expanded={isOpen && matches.length > 0}
            autoComplete="off"
            onChange={event => {
              setQuery(event.target.value);
              setResult(null);
              setIsOpen(Boolean(event.target.value.trim()));
              setActiveIndex(-1);
            }}
            onFocus={() => setIsOpen(Boolean(query.trim()))}
            onKeyDown={event => {
              if (event.key === "ArrowDown" && matches.length) {
                event.preventDefault();
                setIsOpen(true);
                setActiveIndex(index => index < 0 ? 0 : (index + 1) % matches.length);
              } else if (event.key === "ArrowUp" && matches.length) {
                event.preventDefault();
                setIsOpen(true);
                setActiveIndex(index => index <= 0 ? matches.length - 1 : index - 1);
              } else if (event.key === "Enter") {
                event.preventDefault();
                if (isOpen && matches[activeIndex]) choose(matches[activeIndex].record);
                else checkUniversity();
              } else if (event.key === "Escape") {
                setIsOpen(false);
              }
            }}
            enterKeyHint="search"
            placeholder="例如：清华、Oxford、哈佛、UCL"
            role="combobox"
            type="text"
            value={query}
          />
          {query && <button className="university-clear" onClick={() => {
            setQuery("");
            setResult(null);
            setIsOpen(false);
          }} type="button" aria-label="清空大学名称">×</button>}
        </div>
        <button className="university-submit" onClick={checkUniversity} type="button">查询资格</button>
      </div>

      {isOpen && matches.length > 0 && <div className="university-suggestions" id={listboxId} role="listbox">
        {matches.map(({ record }, index) => <button
          aria-selected={activeIndex === index}
          className={activeIndex === index ? "active" : undefined}
          id={`${listboxId}-${index}`}
          key={`${record.status}-${record.name}`}
          onClick={() => choose(record)}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseDown={event => event.preventDefault()}
          role="option"
          type="button"
        >
          <span><b>{displayName(record)}</b><small>{record.country}{record.status === "removed" ? " · 2026年已移除" : ""}</small></span>
          <span aria-hidden="true">→</span>
        </button>)}
      </div>}
    </div>

    <div className="university-examples"><span>试试：</span>{["清华", "Oxford", "哈佛", "UCL"].map(example => <button key={example} onClick={() => {
      setQuery(example);
      setResult(null);
      setIsOpen(true);
      setActiveIndex(-1);
    }} type="button">{example}</button>)}</div>

    <div aria-live="polite">
      {result && typeof result !== "string" && result.status === "eligible" && <div className="university-result eligible">
        <span className="university-result-mark" aria-hidden="true">✓</span>
        <div><b>在当前官方合资格大学名单内</b><h4>{displayName(result)}</h4><p>{result.country} · 可用于判断高才通B类/C类的院校条件{result.newlyAdded ? " · 2026年新增" : ""}</p><small>仍须持有由该校颁授、等同香港认可学士学位标准的学历；分校、延伸学院等学历不一定获接受。</small></div>
      </div>}
      {result && typeof result !== "string" && result.status === "removed" && <div className="university-result removed">
        <span className="university-result-mark" aria-hidden="true">×</span>
        <div><b>已从2026年合资格名单移除</b><h4>{displayName(result)}</h4><p>{result.country} · 自2026年1月1日起不再符合B类及C类的院校条件。</p><small>如申请涉及早期政策或特殊情况，请直接向香港入境事务处核实。</small></div>
      </div>}
      {result === "not-found" && <div className="university-result unknown">
        <span className="university-result-mark" aria-hidden="true">?</span>
        <div><b>当前官方名单中未找到</b><h4>{query}</h4><p>请检查拼写、尝试学校官方英文名称，或打开官方PDF再次核对。</p><small>未找到表示本工具无法确认该校符合B类/C类院校条件，不代表入境处对个案作出了决定。</small></div>
      </div>}
      {result === "choose" && <p className="university-prompt">请输入学校名称，并从下拉建议中选择一所具体大学。</p>}
    </div>

    <div className="university-source-line">
      <span>名单适用于 {ELIGIBLE_UNIVERSITY_SOURCE.effectiveDate.replaceAll("-", ".")} 起 · 核对于 {ELIGIBLE_UNIVERSITY_SOURCE.checkedDate.replaceAll("-", ".")}</span>
      <a href={ELIGIBLE_UNIVERSITY_SOURCE.url} target="_blank" rel="noreferrer">打开入境处官方PDF ↗</a>
    </div>
  </section>;
}
