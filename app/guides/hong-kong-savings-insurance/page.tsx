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

const officialSources = [
  ["香港保险业监管局：认识分红实现率", "https://www.ia.org.hk/sc/fulfillment_ratio/index.html"],
  ["香港保险业监管局：分红实现率常见问题", "https://www.ia.org.hk/sc/fulfillment_ratio/faq.html"],
  ["香港保险业监管局：保险公司披露网站列表", "https://www.ia.org.hk/sc/fulfillment_ratio/list_of_insurer.html"],
  ["香港保险业监管局：认识分红保单", "https://www.ia.org.hk/sc/participating_policy/index.html"],
  ["友邦香港：分红产品及分红实现率", "https://www.aia.com.hk/zh-cn/products/further-product-information/participating-products/fulfillment-ratio"],
  ["保诚香港：分红计划过往表现及履行比率", "https://www.prudential.com.hk/performance/fulfillment-ratio/tc/index.html"],
];

const purchaseChecks = [
  "把第10、20、30年的保证现金价值与已缴保费单独比较",
  "拆开周年红利、复归红利和终期红利，不只看总现金价值",
  "找到同一产品系列、相近保单年度和相同货币的实现率",
  "同时查看总现金价值比率，确认客户实际可取金额的偏差",
  "用悲观情景测试回本期、教育金或退休提取计划",
  "确认提前退保、部分提取、保单贷款及货币转换的影响",
];

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
          <div className="article-meta"><span>HKLife 编辑部</span><span>·</span><span>2026年7月18日更新</span><span>·</span><span>约18分钟阅读</span></div>
        </header>

        <div className="article-layout">
          <aside className="article-toc" aria-label="文章目录"><b>本文目录</b><a href="#quick">先看结论</a><a href="#meaning">什么是实现率</a><a href="#comparison">友邦与保诚怎么比</a><a href="#averages">为什么不能只看平均值</a><a href="#drivers">差异从哪里来</a><a href="#bonus-types">三类红利</a><a href="#buying">购买时怎么筛选</a><a href="#limits">数据局限</a></aside>

          <article className="article-content">
            <section className="quick-answer life-quick" id="quick"><b>先看结论</b><p>按原稿引用的第三方2025年简单汇总，友邦在三类红利的平均实现率及低值分布上优于保诚，显示该统计口径下的历史兑现更整齐。<strong>但这不能推导为“友邦所有储蓄险都比保诚好”</strong>：官方数据按产品系列和保单年度披露，并不存在一个可直接代表整家公司的官方实现率。</p><small>资料核对至：2026年7月18日</small></section>

            <h2 id="meaning">什么是分红实现率？</h2>
            <p>香港分红保单的利益通常分成保证利益和非保证利益。保证部分按保单条款支付；非保证部分会受投资回报、索偿经验、费用、退保情况及公司的分红政策影响。</p>
            <div className="formula-card"><span>分红实现率</span><b>实际累积派发的非保证利益</b><i>÷</i><b>销售时演示的累积非保证利益</b></div>
            <p>接近100%代表实际派发接近当初演示；高于100%代表高于演示；低于100%代表低于演示。它衡量的是<strong>实际结果与销售演示之间的距离</strong>，并不是保险公司的投资收益率。</p>
            <p>香港保监局要求保险公司为符合条件的分红产品披露实现率。数据会按产品系列、保单年度及红利类型分别列出，所以“一家公司只有一个实现率”的理解并不准确。</p>

            <h2 id="comparison">友邦与保诚，公开数据应该怎么读？</h2>
            <p>原稿引用的第三方2025年汇总，把不同产品系列和保单年度作简单平均，得到以下比较：</p>
            <div className="table-wrap"><table className="comparison-table"><thead><tr><th>红利类型</th><th>友邦平均</th><th>保诚平均</th><th>友邦高于70%</th><th>保诚高于70%</th></tr></thead><tbody>{comparisonRows.map(row => <tr key={row[0]}>{row.map((cell,index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <b>{cell}</b> : cell}</td>)}</tr>)}</tbody></table></div>
            <div className="source-caution"><b>这张表怎样使用？</b><p>它是原稿所引第三方的简单统计，并非保监局、友邦或保诚发布的“公司评分”。由于没有按保费规模加权，也没有统一产品结构、货币和保单年度，适合用来发现问题，不适合单独决定购买。</p></div>
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

            <section className="sources" id="sources"><h2>官方来源</h2><p>本文根据用户提供的原稿重组，并用官方资料核对分红实现率的定义、使用限制及披露入口。文中的公司平均比较来自原稿所引第三方统计，并非官方排名。本文不构成保险、投资或个别产品建议；购买前应阅读利益说明、产品资料概要及保单条款。</p><ul>{officialSources.map(([title,url]) => <li key={url}><a href={url} target="_blank" rel="noreferrer">{title}</a><span>核对日期：2026年7月18日</span></li>)}</ul></section>
          </article>
        </div>
      </div>
    </div>

    <footer className="article-footer"><div className="shell"><Link className="brand footer-brand" href="/"><span className="brand-mark">H</span><span>HKLife<span className="brand-dot">.ai</span></span></Link><p>Everything about starting a new life in Hong Kong.</p></div></footer>
  </main>;
}
