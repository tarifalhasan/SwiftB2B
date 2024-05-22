import { StrapiImage } from "@/components/StrapiImage";
import { getTermsConditionPageData } from "@/data/loaders";
interface Image {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface Description {
  id: number;
  description: string;
}

interface TermsConditionContentBlock {
  id: number;
  title: string;
  description: Description[];
}

interface Icon {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface TableOfContent {
  id: number;
  title: string;
  icon: Icon;
}

interface TermsConditionHero {
  id: number;
  title: string;
  image: Image;
}

interface TermsCondition {
  id: number;
  __component: string;
  TermsConditionHero: TermsConditionHero;
  TermsConditionContentBlocks: TermsConditionContentBlock[];
  TableoFContents: TableOfContent[];
}

const TermsAndConditions = async () => {
  const strapiData = await getTermsConditionPageData();

  const { blocks } = strapiData;

  const data = blocks[0] as TermsCondition;

  // console.dir(blocks, { depth: null });

  return (
    <>
      <section className=" z-20 overflow-hidden relative  min-h-[100vh] bg-cover bg-no-repeat bg-center  flex items-center">
        <StrapiImage
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
          height={1080}
          src={data.TermsConditionHero.image.url}
          width={1920}
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
        />
        <div className=" container relative h-full     space-y-2">
          <div className=" relative z-40 max-w-[886px]">
            <div className=" pt-2">
              <h2 className="  text-balance text-white font-semibold text-5xl xl:text-6xl">
                {data.TermsConditionHero.title}
              </h2>
            </div>
          </div>
          <div className=" absolute  z-10 -translate-y-[40%]  top-[20%] w-[400px] h-[400px]  lg:w-[599px] blur-[100px] lg:h-[599px] rounded-full left-0  bg-black/60 "></div>
        </div>
      </section>
      <section className=" py-10 container flex flex-col lg:flex-row gap-10 lg:items-start">
        <div className="  lg:basis-[25%]">
          <h4 className=" text-2xl font-semibold text-[#06163D]">
            Table of Contents
          </h4>
          <ul className=" pt-8 space-y-5">
            {data.TableoFContents.map((i) => (
              <div className=" inline-flex gap-2 items-center" key={i.id}>
                <StrapiImage
                  alt="Background"
                  className=" inset-0 object-cover w-full h-full"
                  height={17}
                  src={i.icon.url}
                  width={18}
                />
                <span className=" text-lg text-[#2F333D] font-normal">
                  {i.title}
                </span>
              </div>
            ))}
          </ul>
        </div>
        <div className=" hidden lg:block w-[2px] h-[570px] bg-[#D3D3D3]"></div>
        <div className=" lg:basis-[calc(75%-2px)]">
          {data.TermsConditionContentBlocks.map((content) => (
            <div className=" space-y" key={content.id}>
              <h2 className=" text-3xl lg:text-5xl 2xl:text-6xl font-bold">
                {content.title}
              </h2>
              <div className=" py-6 lg:py-10 space-y-8">
                {content.description.map((d) => (
                  <p
                    className=" text-lg font-normal text-[#2F333D]  lg:text-xl"
                    key={d.id}
                  >
                    {d.description}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
