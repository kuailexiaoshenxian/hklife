import type { Metadata } from "next";
import Link from "next/link";
import { LifeGuideDirectory } from "../life-guide-directory";

export const metadata: Metadata = {
  title: "香港储蓄险怎么买？友邦与保诚分红实现率对比 | HKLife",
  description: "从分红实现率、保证利益、终期红利和总现金价值比率，理解友邦与保诚的历史分红表现，并掌握香港储蓄险的选购方法。",
};

const comparisonRows = [
  ["终期红利", "102%", "78%", "100%", "53%"],
  ["周年红利", "89%", "80%", "94%", "83%"],
  ["复归红利", "92%", "81%", "100%", "70%"],
];

type MarketRow = readonly [insurer: string, average: string, aboveSeventy: string, points: string, range: string];

const terminalDividendRows: MarketRow[] = [
  ["中银人寿", "91%", "100%", "39", "72% – 100%"],
  ["中国人寿", "100%", "100%", "15", "100% – 100%"],
  ["中国太平", "100%", "100%", "15", "98% – 100%"],
  ["友邦香港", "102%", "100%", "112", "74% – 169%"],
  ["AXA安盛", "95%", "92%", "159", "50% – 116%"],
  ["安达人寿", "84%", "83%", "29", "64% – 107%"],
  ["周大福人寿", "94%", "89%", "172", "21% – 109%"],
  ["富邦人寿", "N.A.", "N.A.", "N.A.", "N.A."],
  ["富卫", "87%", "75%", "114", "50% – 115%"],
  ["恒生保险", "141%", "100%", "63", "100% – 1022%"],
  ["香港人寿", "94%", "86%", "29", "69% – 100%"],
  ["汇丰保险", "102%", "100%", "69", "86% – 128%"],
  ["宏利", "107%", "100%", "50", "76% – 130%"],
  ["保诚保险", "78%", "53%", "234", "3% – 104%"],
  ["Sun Life永明", "84%", "81%", "43", "52% – 100%"],
  ["万通保险", "97%", "94%", "16", "70% – 101%"],
];

const annualDividendRows: MarketRow[] = [
  ["中银人寿", "93%", "98%", "114", "52% – 102%"],
  ["中国人寿", "82%", "95%", "336", "60% – 109%"],
  ["中国太平", "100%", "100%", "21", "100% – 103%"],
  ["友邦香港", "89%", "94%", "249", "64% – 140%"],
  ["AXA安盛", "94%", "94%", "116", "28% – 117%"],
  ["安达人寿", "82%", "74%", "145", "25% – 109%"],
  ["周大福人寿", "96%", "92%", "169", "60% – 140%"],
  ["富邦人寿", "103%", "100%", "41", "88% – 113%"],
  ["富卫", "87%", "77%", "275", "35% – 190%"],
  ["恒生保险", "81%", "63%", "171", "44% – 102%"],
  ["香港人寿", "96%", "96%", "250", "64% – 100%"],
  ["汇丰保险", "88%", "90%", "131", "61% – 104%"],
  ["宏利", "77%", "55%", "346", "20% – 128%"],
  ["保诚保险", "80%", "83%", "36", "41% – 103%"],
  ["Sun Life永明", "83%", "76%", "29", "58% – 105%"],
  ["万通保险", "97%", "100%", "28", "80% – 100%"],
];

const reversionaryDividendRows: MarketRow[] = [
  ["中国太平", "100%", "100%", "10", "100% – 101%"],
  ["友邦香港", "92%", "100%", "26", "76% – 162%"],
  ["AXA安盛", "98%", "100%", "40", "81% – 100%"],
  ["安达人寿", "100%", "100%", "9", "100% – 100%"],
  ["周大福人寿", "100%", "100%", "19", "100% – 101%"],
  ["保诚保险", "81%", "70%", "198", "12% – 137%"],
  ["Sun Life永明", "95%", "100%", "44", "83% – 120%"],
];

const referenceSources = [
  ["香港保险业监管局：认识分红实现率", "https://www.ia.org.hk/sc/fulfillment_ratio/index.html", "官方"],
  ["香港保险业监管局：分红实现率常见问题", "https://www.ia.org.hk/sc/fulfillment_ratio/faq.html", "官方"],
  ["香港保险业监管局：保险公司披露网站列表", "https://www.ia.org.hk/sc/fulfillment_ratio/list_of_insurer.html", "官方"],
  ["香港保险业监管局：认识分红保单", "https://www.ia.org.hk/sc/participating_policy/index.html", "官方"],
  ["友邦香港：分红产品及分红实现率", "https://www.aia.com.hk/zh-cn/products/further-product-information/participating-products/fulfillment-ratio", "公司披露"],
  ["保诚香港：分红计划过往表现及履行比率", "https://www.prudential.com.hk/performance/fulfillment-ratio/tc/index.html", "公司披露"],
  ["10Life：2025年保险公司分红实现率比较", "https://www.10life.com/zh-HK/blog/Comparing-Dividend-Fulfillment-Ratios-of-savings-insurance-across-Insurers?locale=zh-TW", "第三方汇总"],
];

const purchaseChecks = [
  "把第10、20、30年的保证现金价值与已缴保费单独比较",
  "拆开周年红利、复归红利和终期红利，不只看总现金价值",
  "找到同一产品系列、相近保单年度和相同货币的实现率",
  "同时查看总现金价值比率，确认客户实际可取金额的偏差",
  "用悲观情景测试回本期、教育金或退休提取计划",
  "确认提前退保、部分提取、保单贷款及货币转换的影响",
];

function MarketFulfillmentTable({ rows }: { rows: MarketRow[] }) {
  return <div className="table-wrap market-table-wrap"><table className="market-data-table"><thead><tr><th>保险公司</th><th>平均实现率</th><th>高于70%占比</th><th>数据点</th><th>最低 – 最高</th></tr></thead><tbody>{rows.map(row => {
    const highlighted = row[0] === "友邦香港" || row[0] === "保诚保险";
    return <tr className={highlighted ? "focus-row" : undefined} key={row[0]}>{row.map((cell,index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <b>{cell}</b> : cell}</td>)}</tr>;
  })}</tbody></table></div>;
}

export default function HongKongSavingsInsuranceGuide() {
  return <main className="article-page">
    <nav className="nav shell article-nav" aria-label="主导航">
      <Link className="brand" href="/" aria-label="HKLife 首页"><span className="brand-mark">H</span><span>HKLife<span className="brand-dot">.ai</span></span></Link>
      <div className="nav-links"><Link href="/guides/top-talent-pass-application">高/优才申请</Link><Link className="active" href="/guides/hong-kong-savings-insurance">生活指南</Link><Link href="/#tools">实用工具</Link><Link href="/#timeline">我的路线</Link></div>
      <Link className="nav-cta" href="/">返回首页 <span>↗</span></Link>
    </nav>

    <div className="talent-reader shell">
      <LifeGuideDirectory activeHref="/guides/hong-kong-savings-insurance" />
      <div className="talent-reader-main">
        <header className="article-hero">
          <div className="article-breadcrumb"><Link href="/">首页</Link><span>›</span><Link href="/guides/hong-kong-savings-insurance">生活指南</Link><span>›</span><b>香港储蓄险购买</b></div>
          <span className="article-category life-category">香港储蓄险购买</span>
          <h1>友邦和保诚，谁的分红兑现更稳定？<br/>从分红实现率看香港储蓄险</h1>
          <p>计划书上的长期收益不等于保证回报。本文把分红实现率的含义、友邦与保诚的公开披露口径，以及购买储蓄险真正要比较的项目一次讲清楚。</p>
          <div className="article-meta"><span>HKLife 编辑部</span><span>·</span><span>2026年7月19日更新</span><span>·</span><span>约22分钟阅读</span></div>
        </header>

        <div className="article-layout">
          <aside className="article-toc" aria-label="文章目录"><b>本文目录</b><a href="#quick">先看结论</a><a href="#meaning">什么是实现率</a><a href="#comparison">友邦与保诚怎么比</a><a href="#averages">为什么不能只看平均值</a><a href="#drivers">差异从哪里来</a><a href="#bonus-types">三类红利</a><a href="#buying">购买时怎么筛选</a><a href="#limits">数据局限</a></aside>

          <article className="article-content">
            <section className="quick-answer life-quick" id="quick"><b>先看结论</b><p>按10Life于2025年发布、分析截至2024报告年度数据的简单汇总，友邦在三类红利的平均实现率及低值分布上优于保诚，显示该统计口径下的历史兑现更整齐。<strong>但这不能推导为“友邦所有储蓄险都比保诚好”</strong>：官方数据按产品系列和保单年度披露，并不存在一个可直接代表整家公司的官方实现率。</p><small>资料核对至：2026年7月19日</small></section>

            <h2 id="meaning">什么是分红实现率？</h2>
            <p>香港分红保单的利益通常分成保证利益和非保证利益。保证部分按保单条款支付；非保证部分会受投资回报、索偿经验、费用、退保情况及公司的分红政策影响。</p>
            <div className="formula-card"><span>分红实现率</span><b>实际累积派发的非保证利益</b><i>÷</i><b>销售时演示的累积非保证利益</b></div>
            <p>接近100%代表实际派发接近当初演示；高于100%代表高于演示；低于100%代表低于演示。它衡量的是<strong>实际结果与销售演示之间的距离</strong>，并不是保险公司的投资收益率。</p>
            <p>香港保监局要求保险公司为符合条件的分红产品披露实现率。数据会按产品系列、保单年度及红利类型分别列出，所以“一家公司只有一个实现率”的理解并不准确。</p>

            <h2 id="comparison">友邦与保诚，公开数据应该怎么读？</h2>
            <p>原稿中的数字来自10Life于2025年发布的汇总。该研究分析截至2024报告年度的数据，原始资料覆盖20家保险公司、4,013个数据点及852款分红产品；下表先保留友邦与保诚的直接比较：</p>
            <div className="table-wrap"><table className="comparison-table"><thead><tr><th>红利类型</th><th>友邦平均</th><th>保诚平均</th><th>友邦高于70%</th><th>保诚高于70%</th></tr></thead><tbody>{comparisonRows.map(row => <tr key={row[0]}>{row.map((cell,index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <b>{cell}</b> : cell}</td>)}</tr>)}</tbody></table></div>
            <div className="source-caution"><b>这组统计怎样使用？</b><p>它是10Life按保险公司公开数据整理的第三方简单平均，并非保监局或保险公司发布的官方排名。数据没有按产品销量或保费规模加权，也未统一产品结构、货币和保单年度，适合用来发现差异，不适合单独决定购买。</p></div>

            <h3>其他主要保险公司：同一统计口径</h3>
            <p>以下三张表来自同一研究口径。友邦与保诚用蓝色标出，方便与其他公司一起观察；“高于70%占比”表示该公司所有纳入统计的数据点中，实现率达到70%以上的比例。</p>
            <div className="market-data-group">
              <details className="market-data-details" open><summary><span>终期红利</span><b>16家公司</b></summary><MarketFulfillmentTable rows={terminalDividendRows} /></details>
              <details className="market-data-details"><summary><span>周年红利</span><b>16家公司</b></summary><MarketFulfillmentTable rows={annualDividendRows} /></details>
              <details className="market-data-details"><summary><span>复归／归原红利</span><b>7家公司</b></summary><MarketFulfillmentTable rows={reversionaryDividendRows} /></details>
            </div>
            <p className="data-footnote">特别留意：恒生保险终期红利最高值达到1022%，属于会显著拉高平均值的极端数据；富邦人寿没有可用的终期红利数据。看到高平均值时，必须同时查看范围、占比和数据点数量。</p>
            <p>在这个统计口径下，可以说友邦近年的数据分布较集中；更严谨的表述则是：<strong>部分友邦产品系列的历史派发与销售演示更接近，而保诚不同产品和年代之间的差异较大。</strong></p>

            <h2 id="averages">为什么不能只看平均实现率？</h2>
            <p>平均值很容易被少量极高或极低的数据拉动。一个平均实现率100%的公司，未必比平均93%的公司更稳定；前者可能同时存在140%和60%，后者却多数集中在90%至96%。</p>
            <div className="metric-grid"><div><span>01</span><b>平均值</b><p>观察整体方向，但不代表任何一张保单。</p></div><div><span>02</span><b>最低值与分布</b><p>判断是否存在较多明显落后于演示的年份。</p></div><div><span>03</span><b>数据点数量</b><p>少量样本的平均值可能不够稳定。</p></div><div><span>04</span><b>较后保单年度</b><p>长期非保证利益增加后，数据更有参考意义。</p></div></div>
            <p>保监局也提醒，不同公司采用统一计算方法，并不代表不同产品可直接横向排名。比较时应选择非保证利益类型和产品特点相近的系列，并查看该系列所有可用保单年度。</p>

            <h2 id="drivers">为什么实现率会出现差异？</h2>
            <p>实现率既反映后来派发了多少，也反映当初演示得有多高。假设两款产品最终都派发80万元非保证利益：一款原先演示85万元，实现率约94%；另一款演示120万元，实现率只有约67%。实际派发相同，比例却相差很大。</p>
            <div className="driver-list"><div><b>销售演示假设</b><p>初始假设越进取，后来接近100%的难度越高。</p></div><div><b>保证利益水平</b><p>保证比例会影响资产配置空间及非保证利益结构。</p></div><div><b>产品与资金池</b><p>不同年代、货币和分红账户可能采用不同策略。</p></div><div><b>投资与非投资经验</b><p>债券、股票等回报，以及索偿、费用和退保都会影响派发。</p></div><div><b>分红平滑政策</b><p>公司可能把较好或较差的经验分摊到多个年度。</p></div></div>
            <p>因此，较高实现率可能来自较好的实际经验、较审慎的销售演示，或两者共同作用；较低实现率也不能直接等同于保险公司投资亏损。</p>

            <h2 id="bonus-types">三类红利的不确定性并不相同</h2>
            <div className="table-wrap"><table><thead><tr><th>红利类型</th><th>一般特点</th><th>购买时关注</th></tr></thead><tbody><tr><td><b>周年红利</b></td><td>通常每年宣布；已经派发的金额一般不会改变</td><td>留在保单内的累积利息通常仍属非保证</td></tr><tr><td><b>复归红利</b></td><td>宣布后面值一般附加于保额，身故时支付</td><td>退保时使用的是非保证现金价值，不一定等于面值</td></tr><tr><td><b>终期红利</b></td><td>通常在退保、身故或到期时一次支付</td><td>支付前可以调整，越依赖它，长期现金价值越不确定</td></tr></tbody></table></div>
            <p>如果计划书后期的大部分现金价值来自终期红利，长期演示数字可能很漂亮，但可调整空间也更大。比较产品时，应把保证现金价值、已宣布红利和未锁定终期红利分开看。</p>

            <h2 id="buying">购买香港储蓄险，建议按这6步筛选</h2>
            <ol className="buying-steps">{purchaseChecks.map((item,index) => <li key={item}><span>{String(index + 1).padStart(2,"0")}</span><p>{item}</p></li>)}</ol>
            <div className="source-caution blue"><b>比“实现率”更接近实际到手金额的指标</b><p>总现金价值比率把保证现金价值和实际非保证利益一起计算。若你的目标是某年退保、提取教育金或退休现金流，应把它与分红实现率一起看。</p></div>
            <p>另外还要确认保费负担、保单货币、汇率风险、提前退保损失、保单贷款利率，以及部分提取会否降低身故保障和后续红利。储蓄险是长期合约，不适合用短期内可能要动用的应急资金购买。</p>

            <h2 id="limits">公开数据有哪些局限？</h2>
            <ul><li>保险公司通常没有公开各产品系列的销售量或保费规模，简单平均无法按业务规模加权。</li><li>披露主要覆盖自2010年起曾签发新保单的相关产品，而储蓄险往往持有20年或更久。</li><li>终期红利实现率只统计报告年度内有相关保单终止并实际支付的情况，部分年度会显示不适用。</li><li>产品系列的平均结果不等于个人保单结果；缴费、提取、贷款及保单变更都会造成差异。</li><li>历史实现率不能预测未来派发，也不能取代对个人风险承受能力和现金流的评估。</li></ul>

            <section className="checklist"><h2>签单前最后自查</h2>{["我知道计划书中多少是保证、多少是非保证","我没有只看第30年或第100年的演示总值","我比较的是相近产品系列和相近保单年度","我看过悲观情景、回本期和提前退保损失","这笔保费不会占用家庭应急资金","我理解历史分红不代表未来表现"].map(item => <label key={item}><input type="checkbox"/> {item}</label>)}</section>

            <section className="sources" id="sources"><h2>资料来源与口径</h2><p>本文根据用户提供的原稿重组，并用官方资料核对分红实现率的定义、使用限制及披露入口。全市场表格来自10Life对保险公司公开资料的第三方汇总，并非官方排名。本文不构成保险、投资或个别产品建议；购买前应阅读利益说明、产品资料概要及保单条款。</p><ul>{referenceSources.map(([title,url,type]) => <li key={url}><a href={url} target="_blank" rel="noreferrer">{title}</a><span>{type} · 核对日期：2026年7月19日</span></li>)}</ul></section>
          </article>
        </div>
      </div>
    </div>

    <footer className="article-footer"><div className="shell"><Link className="brand footer-brand" href="/"><span className="brand-mark">H</span><span>HKLife<span className="brand-dot">.ai</span></span></Link><p>Everything about starting a new life in Hong Kong.</p></div></footer>
  </main>;
}
