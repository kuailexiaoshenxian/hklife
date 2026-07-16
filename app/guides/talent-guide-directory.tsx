import Link from "next/link";

const talentGuides = [
  {
    number: "01",
    href: "/guides/top-talent-pass-application",
    title: "高才通申请完整指南",
    description: "A、B、C类条件、材料与流程",
  },
  {
    number: "02",
    href: "/guides/talent-application-faq",
    title: "高才通与优才 FAQ",
    description: "申请、受养人、续签与永居",
  },
];

export function TalentGuideDirectory({ activeHref }: { activeHref: string }) {
  return <aside className="talent-directory" aria-label="高优才文章目录">
    <div className="talent-directory-heading"><span>GUIDE LIBRARY</span><h2>高/优才文章</h2><p>选择文章继续阅读</p></div>
    <nav>{talentGuides.map(guide => {
      const active = guide.href === activeHref;
      return <Link className={active ? "active" : ""} href={guide.href} aria-current={active ? "page" : undefined} key={guide.href}>
        <span>{guide.number}</span><div><b>{guide.title}</b><small>{guide.description}</small></div><i>→</i>
      </Link>;
    })}</nav>
  </aside>;
}
