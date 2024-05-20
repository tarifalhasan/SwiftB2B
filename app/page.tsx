import Section1 from "@/components/pages/home/Section1";
import Section2 from "@/components/pages/home/Section2";
import Section3 from "@/components/pages/home/Section3";
import Section4 from "@/components/pages/home/Section4";

import { getHomePageData } from "@/data/loaders";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.section-1":
      return <Section1 key={block.id} data={block} />;
    case "layout.section-2":
      return <Section2 key={block.id} data={block} />;
    case "layout.section-3":
      return <Section3 key={block.id} data={block} />;
    case "layout.section-4":
      return <Section4 key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getHomePageData();
  // console.dir(strapiData, { depth: null });
  const { blocks } = strapiData;
  if (!blocks) return <div>No blocks found</div>;

  return <main>{blocks.map((block: any) => blockRenderer(block))}</main>;
}
