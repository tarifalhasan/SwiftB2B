import { StrapiImage } from "@/components/StrapiImage";
import { ImageProps } from "./Section1";

interface Props {
  data: {
    title: string;
    Section3Card: Section3Card[];
  };
}

interface Section3Card {
  title: string;
  icon: ImageProps;
  bgColor: string;
  id: string;
}
const Section3 = ({ data }: Readonly<Props>) => {
  // console.dir(data, { depth: null });
  return (
    <section className=" py-10 space-y-5 lg:space-y-10 container ">
      <div className=" max-w-[875px] block mx-auto">
        <h2 className=" text-center text-[#06163D] font-bold text-[56px] leading-[114%]">
          {data.title}
        </h2>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.Section3Card.map((c) => (
          <div
            className=" shadow-sm rounded-[8px] flex flex-col justify-center gap-[10px] p-6 h-[200px]"
            style={{
              background: c.bgColor,
            }}
            key={c.id}
          >
            <div>
              <StrapiImage
                width={54}
                height={49}
                src={c.icon.url}
                alt={c.icon.alternativeText}
              />
            </div>
            <p className=" pt-2 text-lg text-balance text-white leading-[122.222%]">
              {c.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
