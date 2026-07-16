import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the HKLife homepage and talent guide entry", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Everything about starting a new life in Hong Kong/);
  assert.match(html, /id="talent-guides"/);
  assert.match(html, /香港高才通申请指南/);
  assert.match(html, /href="\/guides\/top-talent-pass-application"/);
  assert.match(html, /href="\/guides\/talent-application-faq"/);
  assert.match(html, /<div class="nav-links"><a href="\/guides\/top-talent-pass-application">高\/优才申请/);
});

test("renders the full top talent pass application guide", async () => {
  const response = await render("/guides/top-talent-pass-application");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /A、B、C类条件、材料、费用与完整流程/);
  assert.match(html, /快速结论/);
  assert.match(html, /申请高才通需要多少钱/);
  assert.match(html, /香港入境事务处：高端人才通行证计划/);
  assert.match(html, /aria-label="高优才文章目录"/);
  assert.match(html, /aria-current="page"/);
  assert.match(html, /href="\/guides\/talent-application-faq"/);
});

test("renders the talent application FAQ guide", async () => {
  const response = await render("/guides/talent-application-faq");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /高才通与优才常见问题/);
  assert.match(html, /现行的优才还是80分制吗/);
  assert.match(html, /18件事/);
  assert.match(html, /香港入境事务处：优秀人才入境计划/);
  assert.match(html, /aria-label="高优才文章目录"/);
  assert.match(html, /aria-current="page"/);
  assert.match(html, /href="\/guides\/top-talent-pass-application"/);
});
