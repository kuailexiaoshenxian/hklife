"use client";

import { useMemo, useState } from "react";

const paths = [
  { icon: "✦", title: "身份", desc: "从来港到永久居民，每一步都有清晰答案", items: ["高才通", "优才", "受养人", "续签", "永居", "香港身份证"], color: "mint" },
  { icon: "⌂", title: "生活", desc: "把陌生城市，慢慢变成真正的家", items: ["租房", "医疗", "交通", "电话卡", "搬家", "社区生活"], color: "blue" },
  { icon: "☀", title: "孩子", desc: "从建档、生育到升学的家庭成长地图", items: ["建档", "公立医院", "月嫂", "幼儿园", "小学", "DSE"], color: "peach" },
  { icon: "↗", title: "创业", desc: "在香港把一个想法，变成一门生意", items: ["公司注册", "数码港", "科学园", "创业补贴", "办公场地", "AI 创业"], color: "violet" },
  { icon: "◎", title: "财富", desc: "做好银行、税务与家庭资产的长期规划", items: ["香港银行卡", "保险比较", "ETF", "税务", "美元", "家族办公室"], color: "gold" },
];

const guides = [
  { tag: "身份", title: "高才通获批后，30 天内要做的 8 件事", meta: "12 分钟阅读 · 2026 更新", tone: "guide-green" },
  { tag: "孩子", title: "香港建档完整流程：时间、材料与医院选择", meta: "15 分钟阅读 · 附清单", tone: "guide-orange" },
  { tag: "生活", title: "第一次在香港租房：避坑指南与真实预算", meta: "10 分钟阅读 · 新手必读", tone: "guide-blue" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("全部");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return paths.flatMap((p) => p.items.filter((item) => item.toLowerCase().includes(q)).map((item) => ({ item, category: p.title })));
  }, [query]);

  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="HKLife 首页"><span className="brand-mark">H</span><span>HKLife<span className="brand-dot">.ai</span></span></a>
        <div className="nav-links"><a href="#paths">生活指南</a><a href="#tools">实用工具</a><a href="#timeline">我的路线</a><a href="#community">社区</a></div>
        <div className="nav-actions"><button className="lang" aria-label="切换语言">中 / EN</button><a className="login" href="#join">登录</a><a className="nav-cta" href="#ai">问问 AI <span>↗</span></a></div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span className="pulse" /> 为每一个在香港重新出发的家庭</div>
        <h1>在香港开始新生活，<br/><em>不必一个人摸索。</em></h1>
        <p className="hero-copy">身份、生活、孩子、创业与财富——你需要的答案、工具和服务，<br className="desktop"/>都在一个地方。</p>
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="试试搜索：高才续签、香港建档、幼儿园申请…" aria-label="搜索香港生活指南" />
          <kbd>⌘ K</kbd>
          {query && <div className="search-results">{results.length ? results.map((r) => <a key={r.item} href="#paths"><span>{r.item}</span><small>{r.category} · 查看指南 →</small></a>) : <div className="empty">暂时没有结果，试试「建档」或「续签」</div>}</div>}
        </div>
        <div className="quick-links"><span>大家都在看</span><a href="#paths">高才续签</a><a href="#paths">香港建档</a><a href="#paths">学校申请</a><a href="#paths">开户指南</a></div>
        <div className="trust-row"><div className="avatars"><span>琳</span><span>陈</span><span>周</span><span>+8k</span></div><div><b>8,000+ 个家庭</b><small>正在用 HKLife 规划香港生活</small></div><div className="trust-divider"/><div className="rating"><span>★★★★★</span><small>真实经验 · 持续更新</small></div></div>
      </section>

      <section className="paths shell" id="paths">
        <div className="section-heading"><div><span className="section-kicker">EXPLORE HKLIFE</span><h2>你的香港生活，从这里开始</h2></div><p>不用读完一百篇帖子。选择你正在面对的事情，<br/>我们把下一步讲清楚。</p></div>
        <div className="path-grid">{paths.map((path, i) => <article className={`path-card ${path.color}`} key={path.title}>
          <div className="path-top"><span className="path-icon">{path.icon}</span><span className="path-num">0{i + 1}</span></div><h3>{path.title}</h3><p>{path.desc}</p><div className="chips">{path.items.map((item) => <button onClick={() => setQuery(item)} key={item}>{item}</button>)}</div><a href="#guides">探索{path.title}指南 <span>→</span></a>
        </article>)}</div>
      </section>

      <section className="ai-section" id="ai"><div className="shell ai-grid"><div className="ai-copy"><span className="section-kicker light">HKLIFE AI ADVISOR</span><h2>告诉我们你的情况，<br/>AI 为你生成专属路线。</h2><p>不是泛泛而谈的聊天机器人。HKLife AI 理解香港政策、家庭阶段和真实办事流程，帮你把复杂问题变成一张可执行的清单。</p><div className="ai-points"><span>✓ 基于你的身份与家庭阶段</span><span>✓ 重要时间点自动提醒</span><span>✓ 每一步都有可靠资料来源</span></div><a className="primary-btn" href="#demo">生成我的香港路线 <span>→</span></a></div>
        <div className="advisor-card" id="demo"><div className="advisor-head"><span className="mini-mark">H</span><div><b>HKLife AI</b><small><i/> 在线</small></div><button>•••</button></div><div className="chat"><div className="bot-bubble">你好！告诉我一些你的情况，我会帮你规划接下来在香港要做的事 👋</div><div className="prompt-card"><span>我的情况</span><div className="profile-tags"><b>29 岁</b><b>高才通已获批</b><b>怀孕 12 周</b><b>目前住深圳</b></div></div><div className="route-preview"><div className="route-title"><span>✦</span><b>已为你生成 6 个月行动路线</b></div><ol><li><i>1</i><div><b>本周 · 激活香港身份</b><small>预约办理身份证、准备 4 项材料</small></div><span>›</span></li><li><i>2</i><div><b>2 周内 · 选择医院并建档</b><small>根据预产期匹配 3 家医院</small></div><span>›</span></li><li><i>3</i><div><b>1 个月内 · 完成家庭开户</b><small>银行选择与材料清单</small></div><span>›</span></li></ol><button>查看完整路线 →</button></div></div></div>
      </div></section>

      <section className="tools shell" id="tools"><div className="section-heading"><div><span className="section-kicker">TOOLS THAT HELP</span><h2>少一点计算，多一点确定</h2></div><a href="#all-tools">查看全部工具 →</a></div><div className="tool-grid">
        {[{icon:"◷",title:"建档时间计算器",desc:"输入预产期，立即获得医院建档时间表",cta:"开始计算",cls:"tool-mint"},{icon:"◇",title:"高才续签评估",desc:"3 分钟了解你的续签准备度与提升建议",cta:"免费评估",cls:"tool-violet"},{icon:"⌘",title:"学校匹配助手",desc:"根据住址、年龄和偏好生成学校清单",cta:"开始匹配",cls:"tool-peach"}].map(t=><article className={`tool-card ${t.cls}`} key={t.title}><span className="tool-icon">{t.icon}</span><div><h3>{t.title}</h3><p>{t.desc}</p><a href="#join">{t.cta} <span>→</span></a></div></article>)}
      </div></section>

      <section className="timeline shell" id="timeline"><div className="timeline-card"><div className="timeline-copy"><span className="section-kicker">YOUR LIFE TIMELINE</span><h2>每个家庭，都有一条<br/>独一无二的香港路线。</h2><p>记录重要时刻，管理下一步，把你的经验变成能帮助别人的路线图。</p><a className="dark-btn" href="#join">创建我的时间线 →</a></div><div className="life-map"><div className="map-user"><span>安</span><div><b>安安家的香港路线</b><small>2025 年 8 月来到香港</small></div><i>公开</i></div><div className="map-line"><div className="map-item done"><span>✓</span><div><small>2025 · 08</small><b>高才通获批，第一次来到香港</b></div></div><div className="map-item done"><span>✓</span><div><small>2025 · 09</small><b>完成开户与租房</b></div></div><div className="map-item active"><span>●</span><div><small>2026 · 03</small><b>迎接宝宝出生</b></div><em>当前阶段</em></div><div className="map-item future"><span>○</span><div><small>2027 · 09</small><b>计划申请幼儿园</b></div></div></div><div className="share-note">↗ 已有 236 人参考了这条路线</div></div></div></section>

      <section className="guides shell" id="guides"><div className="section-heading"><div><span className="section-kicker">LATEST GUIDES</span><h2>最近更新的实用指南</h2></div><a href="#all">查看全部文章 →</a></div><div className="guide-grid">{guides.map((g,i)=><article className="guide-card" key={g.title}><div className={`guide-art ${g.tone}`}><span>0{i+1}</span><i>{i===0?"HK":i===1?"＋":"⌂"}</i></div><div className="guide-body"><span>{g.tag}</span><h3>{g.title}</h3><small>{g.meta}</small><a href="#read" aria-label={`阅读 ${g.title}`}>↗</a></div></article>)}</div></section>

      <section className="join" id="join"><div className="shell join-inner"><div><span className="join-mark">H</span><h2>准备好开始你的<br/>香港新生活了吗？</h2><p>加入 HKLife，让每一步都有答案。</p></div><div className="join-actions"><a href="#top" className="join-primary">免费创建我的路线 <span>→</span></a><small>无需信用卡 · 永久免费使用基础功能</small></div></div></section>
      <footer><div className="shell footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">H</span><span>HKLife<span className="brand-dot">.ai</span></span></a><p>Everything about starting<br/>a new life in Hong Kong.</p></div><div><b>探索</b><a href="#paths">身份</a><a href="#paths">生活</a><a href="#paths">孩子</a><a href="#paths">创业</a><a href="#paths">财富</a></div><div><b>产品</b><a href="#tools">实用工具</a><a href="#ai">AI 顾问</a><a href="#timeline">我的路线</a><a href="#community">社区</a></div><div><b>关于</b><a href="#about">关于我们</a><a href="#contact">联系我们</a><a href="#privacy">隐私政策</a><a href="#terms">使用条款</a></div><div className="newsletter"><b>每周一封，帮你把香港生活想清楚</b><div><input placeholder="你的邮箱" aria-label="订阅邮箱"/><button aria-label="提交订阅">→</button></div><small>已有 12,000+ 位读者订阅</small></div></div><div className="shell copyright"><span>© 2026 HKLife.ai</span><span>Made with care in Hong Kong 🇭🇰</span></div></footer>
    </main>
  );
}
