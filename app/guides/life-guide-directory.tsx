import Link from "next/link";

const lifeGuides = [
  {
    number: "01",
    href: "/guides/hong-kong-savings-insurance",
    title: "香港储蓄险购买",
    description: "分红实现率、保证利益与选购方法",
  },
];

export function LifeGuideDirectory({ activeHref }: { activeHref: string }) {
  return <aside className="talent-directory life-directory" aria-label="生活指南文章目录">
    <div className="talent-directory-heading"><span>LIFE GUIDE LIBRARY</span><h2>生活指南文章</h2><p>选择文章继续阅读</p></div>
    <nav>{lifeGuides.map(guide => {
      const active = guide.href === activeHref;
      return <Link className={active ? "active" : ""} href={guide.href} aria-current={active ? "page" : undefined} key={guide.href}>
        <span>{guide.number}</span><div><b>{guide.title}</b><small>{guide.description}</small></div><i>→</i>
      </Link>;
    })}</nav>
  </aside>;
}
