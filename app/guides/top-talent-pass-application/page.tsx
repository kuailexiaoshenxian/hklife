import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "香港高才通怎么申请？A、B、C类条件、材料、费用与完整流程 | HKLife",
  description: "香港高才通申请攻略：判断A、B、C类资格，准备申请材料，了解费用、审批时间、受养人安排及常见误区。",
};

const officialSources = [
  ["香港入境事务处：高端人才通行证计划", "https://www.immd.gov.hk/hks/services/visas/TTPS.html"],
  ["香港入境事务处：高才通常见问题", "https://www.immd.gov.hk/hks/faq/TTPS.html"],
  ["香港政府一站通：网上申请高才通计划", "https://www.gov.hk/sc/nonresidents/visarequire/visasentrypermits/applyttps.htm"],
  ["香港入境事务处：合资格大学综合名单", "https://www.immd.gov.hk/pdf/aggregate_list.pdf"],
  ["香港入境事务处：指明计划签证申请收费", "https://www.immd.gov.hk/hkt/specifiedschemes.html"],
];

export default function TopTalentPassGuide() {
  return <main className="article-page">
    <nav className="nav shell article-nav" aria-label="主导航">
      <a className="brand" href="/" aria-label="HKLife 首页"><span className="brand-mark">H</span><span>HKLife<span className="brand-dot">.ai</span></span></a>
      <div className="nav-links"><a href="/#talent-guides">高/优才申请</a><a href="/#paths">生活指南</a><a href="/#tools">实用工具</a><a href="/#timeline">我的路线</a></div>
      <a className="nav-cta" href="/">返回首页 <span>↗</span></a>
    </nav>

    <header className="article-hero shell">
      <div className="article-breadcrumb"><a href="/">首页</a><span>›</span><a href="/#talent-guides">高/优才申请</a><span>›</span><b>高才通申请</b></div>
      <span className="article-category">高/优才申请</span>
      <h1>香港高才通怎么申请？<br/>A、B、C类条件、材料、费用与完整流程</h1>
      <p>面向准备申请香港高端人才通行证计划的人士，从资格判断到网上递交，把真正会影响申请结果的步骤一次讲清楚。</p>
      <div className="article-meta"><span>HKLife 编辑部</span><span>·</span><span>2026年7月16日更新</span><span>·</span><span>约14分钟阅读</span></div>
    </header>

    <div className="article-layout shell">
      <aside className="article-toc" aria-label="文章目录"><b>本文目录</b><a href="#quick">快速结论</a><a href="#categories">A、B、C类怎么选</a><a href="#income">A类收入怎么算</a><a href="#university">大学是否合资格</a><a href="#documents">申请材料</a><a href="#steps">申请流程</a><a href="#fees">费用</a><a href="#after">获批后</a><a href="#mistakes">常见误区</a></aside>

      <article className="article-content">
        <section className="quick-answer" id="quick"><b>快速结论</b><p>申请香港高才通，<strong>不需要提前获得香港公司的聘用</strong>。只要符合A、B、C三类资格之一，就可以通过香港政府网上系统递交。A类首次获批一般可在港逗留36个月，B类和C类一般为24个月。</p><small>本文政策核对至：2026年7月16日</small></section>

        <h2 id="categories">先判断：你属于A、B还是C类？</h2>
        <p>高才通不是打分制。申请人需要明确选择一个申请类别，并提交对应证明。</p>
        <div className="table-wrap"><table><thead><tr><th>类别</th><th>核心条件</th><th>首次逗留</th><th>年度配额</th></tr></thead><tbody>
          <tr><td><b>A类</b></td><td>紧接申请前一年，全年收入达到港币250万元或等值外币</td><td>36个月</td><td>官方未列明，默认为无限额</td></tr>
          <tr><td><b>B类</b></td><td>获合资格大学颁授学士学位，并在申请前五年内累计至少三年毕业后全职或自雇工作经验</td><td>24个月</td><td>官方未列明，默认为无限额</td></tr>
          <tr><td><b>C类</b></td><td>在申请前五年内获合资格大学学士学位，工作经验少于三年</td><td>24个月</td><td>有，先到先得</td></tr>
        </tbody></table></div>
        <p className="note">“默认为无限额”是指官方目前未公布A类、B类年度配额，并不代表保证获批。最终仍由香港入境事务处按个案审批，相关安排也可能调整。</p>

        <h2 id="income">A类的250万港币收入，哪些可以计算？</h2>
        <p>A类关注申请前一年的应课税就业或业务收入，包括薪金、津贴、股票期权，以及从申请人拥有的公司取得的利润。<strong>个人投资产生的收入一般不计算在内。</strong></p>
        <p>收入证明可以包括税务机关发出的评税通知书或完税证明、雇主薪酬及股票期权证明、经审计财务报告、企业税务资料和营业损益表。不要只交银行流水；关键是让收入、纳税、任职或持股关系可以互相核验。</p>

        <h2 id="university">B类和C类，怎样确认大学合资格？</h2>
        <p>判断时应直接查询申请当日的<a href="https://www.immd.gov.hk/pdf/aggregate_list.pdf" target="_blank" rel="noreferrer">合资格大学综合名单</a>，不要只看旧文章里的“世界百强”截图。</p>
        <ul><li>核心是符合要求的学士学位，名校硕士或博士不能替代不合资格的本科。</li><li>学历水平须相当于香港认可的学士学位；名誉学士学位不获接受。</li><li>合资格大学的持续教育学院、分校、延伸学院或附属学院学历，不一定获接受。</li><li>B类工作经验是毕业后累计的全职或自雇工作经验。</li><li>B类和C类还需提交认可第三方机构或颁授院校发出的学历认证文件，并提供在线验证资料。</li></ul>

        <h2 id="documents">开始申请前，需要准备哪些材料？</h2>
        <h3>所有申请人通常都要准备</h3>
        <ul><li>近期证件照；</li><li>有效旅行证件或适用身份证明；</li><li>香港身份证，如已经持有；</li><li>内地申请人适用的赴港工作同意书；</li><li>非中文或英文文件的合规认证翻译件。</li></ul>
        <h3>A类额外准备</h3><p>申请前一年收入证明、税务文件、薪酬证明或公司财务资料；如收入来自自有公司，还要准备持股及业务收入证明。</p>
        <h3>B类和C类额外准备</h3><p>正式学士学位毕业证书、学业成绩单及学历认证文件。B类还须提交至少三年毕业后全职或自雇工作经验证明，材料应写明任职单位、职位、工作性质和准确起止日期。</p>
        <h3>携带受养人</h3><p>申请人可为符合条件的配偶及18岁以下未婚子女申请受养人签证。通常需准备照片、旅行证件、结婚证或出生证明等关系材料，以及按个案要求提供生活保障和住所资料。获批受养人的逗留期限一般与主申请人挂钩，按现行政策可在香港就业及就读。</p>

        <h2 id="steps">网上申请分几步？</h2>
        <ol className="steps"><li><b>确定申请类别</b><span>根据收入、毕业院校、毕业时间和工作经验选择A、B或C类。</span></li><li><b>整理电子文件</b><span>检查姓名、证件号码、工作日期、收入数字和学历信息是否一致。</span></li><li><b>网上填写并缴费</b><span>通过<a href="https://www.gov.hk/sc/nonresidents/visarequire/visasentrypermits/applyttps.htm" target="_blank" rel="noreferrer">香港政府一站通</a>填写资料、上传文件并缴付申请费。</span></li><li><b>保存申请记录</b><span>保存申请编号、确认书、付款记录和最终提交版本。</span></li><li><b>留意补件和结果</b><span>入境处在收到全部材料和申请费后，一般约需四星期处理；期间应检查邮箱及垃圾邮件。</span></li></ol>

        <h2 id="fees">申请高才通需要多少钱？</h2>
        <p>主申请人和每名受养人都按一宗申请分别收费。</p>
        <div className="table-wrap"><table><thead><tr><th>收费项目</th><th>金额</th></tr></thead><tbody><tr><td>申请费</td><td>每宗港币600元</td></tr><tr><td>获批后，相关期间超过180日的签证签发费</td><td>港币1,300元</td></tr><tr><td>获批后，相关期间不超过180日的签证签发费</td><td>港币600元</td></tr></tbody></table></div>
        <p>高才通首次逗留通常为24个月或36个月，因此获批后的签证签发费通常为港币1,300元。申请费无论获批、拒绝或撤回都不退还。</p>

        <h2 id="after">获批以后，还要完成什么？</h2>
        <p>缴纳签证签发费后可以下载电子签证。内地居民还需要向内地有关部门申领《往来港澳通行证》及相应赴港签注，办理香港入境手续时同时出示通行证、相关签注和电子签证。</p>

        <h2 id="mistakes">最容易踩的五个坑</h2>
        <div className="mistake-grid"><div><b>01</b><h3>用名校硕士替代本科</h3><p>B类和C类判断符合要求的学士学位。</p></div><div><b>02</b><h3>照抄旧大学名单</h3><p>名单会调整，申请当天必须重新核对。</p></div><div><b>03</b><h3>把投资收益算入A类</h3><p>个人投资收入一般不属于A类认可收入。</p></div><div><b>04</b><h3>工作证明没有日期</h3><p>B类需要证明五年内累计至少三年经验。</p></div><div><b>05</b><h3>把门槛当成获批保证</h3><p>资格只是审批前提，入境处仍会审查个案。</p></div></div>

        <section className="checklist"><h2>申请前最后检查</h2>{["已确认自己属于A、B或C类","已核对最新合资格大学名单","学历、收入或工作资料可以正式核验","所有文件姓名、日期和数字一致","已准备申请费和获批后的签证签发费","已保存全部提交文件及申请编号"].map(item=><label key={item}><input type="checkbox"/> {item}</label>)}</section>

        <section className="sources"><h2>官方来源</h2><p>本文仅提供公开政策和办事路径整理，不构成针对个人情况的法律意见。</p><ul>{officialSources.map(([title, url]) => <li key={url}><a href={url} target="_blank" rel="noreferrer">{title}</a><span>核对日期：2026年7月16日</span></li>)}</ul></section>
      </article>
    </div>
    <footer className="article-footer"><div className="shell"><a className="brand footer-brand" href="/"><span className="brand-mark">H</span><span>HKLife<span className="brand-dot">.ai</span></span></a><p>Everything about starting a new life in Hong Kong.</p></div></footer>
  </main>;
}
