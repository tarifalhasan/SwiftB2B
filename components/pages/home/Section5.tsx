interface Props {
  id: number;
  __component: string;
  title: string;
  description: string;
  image: {
    id: number;
    url: string;
    alternativeText: null | string;
  };
}

import { StrapiImage } from "@/components/StrapiImage";

const Section5 = ({ data }: { data: Props }) => {
  //   console.dir(data, { depth: null });
  return (
    <section className=" py-6 xl:py-16 space-y-12 container">
      <div className=" max-w-[774px] mx-auto  space-y-7">
        <div className="">
          <h2 className=" font-bold  text-4xl xl:text-5xl text-center">
            {data.title}
          </h2>
        </div>
        <p className=" text-[#2F333D] text-center text-base xl:text-2xl">
          {data.description}
        </p>
      </div>
      <div className=" w-full">
        <StrapiImage
          src={data.image.url}
          width={1200}
          height={479}
          alt="Image"
          className="rounded-md w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Section5;
