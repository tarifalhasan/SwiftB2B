import { StrapiImage } from "@/components/StrapiImage";
import { Button } from "@/components/ui/button";

interface Props {
  id: number;
  __component: string;
  subTitle: string;
  title: string;
  image: {
    id: number;
    url: string;
    alternativeText: null | string;
  };

  HowWeEngage: {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    ButtonLink: string;
    image: {
      id: number;
      url: string;
      alternativeText: null | string;
    };
  };
}

const Section7 = ({ data }: { data: Props }) => {
  // console.dir(data, { depth: null });

  return (
    <section className=" bg-[#F0F5FA] relative py-16 bg-top bg-blend-multiply ">
      <div className=" container relative z-30">
        <div className=" flex justify-end">
          <div className=" inline-flex items-center gap-4">
            <span className=" text-[#0F3D99] font-normal ">THE SERVICE</span>
            <span className="  w-32 h-[1px] bg-[#0F3D99]"></span>
          </div>
        </div>
        <div className=" pt-16 flex flex-col lg:flex-row gap-6 lg:items-end">
          <div className=" lg:basis-[60%]">
            <div className=" ">
              <p className=" text-xl xl:text-2xl text-[#2F333D] font-bold">
                {data.title}
              </p>
            </div>
            <div className=" pt-10">
              <h3 className=" text-[#2F333D] font-normal text-2xl lg:text-[40px] leading-[140%]">
                {data.subTitle}
              </h3>
            </div>
          </div>
          <div className=" rounded basis-[40%] bg-white shadow-lg p-3">
            <StrapiImage
              width={457}
              className=" rounded w-full"
              height={352}
              src={data.image.url}
              alt={data.image.alternativeText || data.title}
            />
            <button className=" pt-4 leading-0 flex items-center gap-5">
              <span className=" text-xl leading-none xl:text-2xl font-semibold text-[#0F3D99]">
                VIEW SERVICES
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="29"
                viewBox="0 0 34 29"
                fill="none"
              >
                <path
                  d="M33.9163 14.8385L20.1663 0.876953L18.2275 2.84553L28.65 13.4423H0.91626V16.2346H28.65L18.2275 26.8315L20.1663 28.8L33.9163 14.8385Z"
                  fill="#0F3D99"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className=" pt-[5rem] lg:pt-[8rem]  lg:-space-x-6  flex flex-col lg:flex-row lg:items-center">
          <div className=" basis-[45%] ">
            <StrapiImage
              src={data.HowWeEngage.image.url}
              alt={data.HowWeEngage.title}
              width={616}
              height={490}
            />
          </div>
          <div
            style={{
              boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
            className=" bg-white flex justify-center items-center  basis-[55%]  lg:h-[622px] p-12 lg:p-20 "
          >
            <div className=" space-y-4 lg:space-y-6">
              <h2 className=" text-4xl lg:text-5xl font-bold text-[#06163D]">
                {data.HowWeEngage.title}
              </h2>
              <p className=" text-xl font-normal lg:text-2xl text-[#2F333D]">
                {data.HowWeEngage.description}
              </p>
              <div className=" pt-[calc(40px-24px)]">
                <Button
                  size={"lg"}
                  className=" rounded-full"
                  variant={"primary"}
                >
                  Start Now !
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
