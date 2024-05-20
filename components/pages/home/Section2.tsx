import { StrapiImage } from "@/components/StrapiImage";
import { ImageProps } from "./Section1";

interface Props {
  data: {
    Title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    Card: Card[];
  };
}

interface Card {
  Title: string;
  linkText: string;
  image: ImageProps;
}
const Section2 = ({ data }: Readonly<Props>) => {
  // console.dir(data, { depth: null });
  return (
    <section className=" py-10 space-y-5 lg:space-y-10 container max-w-[796px]">
      <div>
        <h2 className=" text-center text-[#06163D] font-bold text-[56px] leading-[114%]">
          {data.Title}
        </h2>
      </div>
      <div className=" mt-6 h-[514px] grid grid-cols-2 gap-5">
        <div className="   relative flex flex-col justify-between">
          <StrapiImage
            alt="Background"
            className="absolute z-20 inset-0 object-cover w-full h-full"
            height={1080}
            src={data?.Card[0].image.url || "/"}
            width={1920}
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
          />
          <div className=" relative z-30 flex justify-end">
            <button className=" w-[50px] h-[50px] bg-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M24.9325 0.0675903H5.04508L5.04508 2.87171L20.1297 2.88165L0.0732361 22.9381L2.06197 24.9268L22.1184 4.87039L22.1283 19.955H24.9325V0.0675903Z"
                  fill="#0F3D99"
                />
              </svg>
            </button>
          </div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
            className=" relative z-30  px-2 py-4"
          >
            <p className=" text-2xl lg:max-w-[70%] text-white font-semibold">
              {data?.Card[0].Title}
            </p>
          </div>
        </div>
        <div className=" grid grid-rows-2 gap-5">
          <div className="   relative flex flex-col justify-between">
            <StrapiImage
              alt="Background"
              className="absolute z-20 inset-0 object-cover w-full h-full"
              height={1080}
              src={data?.Card[1].image.url || "/"}
              width={1920}
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
            />
            <div className=" relative z-30 flex justify-end">
              <button className=" w-[50px] h-[50px] bg-white flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M24.9325 0.0675903H5.04508L5.04508 2.87171L20.1297 2.88165L0.0732361 22.9381L2.06197 24.9268L22.1184 4.87039L22.1283 19.955H24.9325V0.0675903Z"
                    fill="#0F3D99"
                  />
                </svg>
              </button>
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
              className=" relative z-30  px-2 py-4"
            >
              <p className=" text-2xl lg:max-w-[70%] text-white font-semibold">
                {data?.Card[1].Title}
              </p>
            </div>
          </div>
          <div className="   relative flex flex-col justify-between">
            <StrapiImage
              alt="Background"
              className="absolute z-20 inset-0 object-cover w-full h-full"
              height={1080}
              src={data.Card[2].image.url || "/"}
              width={1920}
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
            />
            <div className=" relative z-30 flex justify-end">
              <button className=" w-[50px] h-[50px] bg-white flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M24.9325 0.0675903H5.04508L5.04508 2.87171L20.1297 2.88165L0.0732361 22.9381L2.06197 24.9268L22.1184 4.87039L22.1283 19.955H24.9325V0.0675903Z"
                    fill="#0F3D99"
                  />
                </svg>
              </button>
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
              }}
              className=" relative z-30  px-2 py-4"
            >
              <p className=" text-2xl lg:max-w-[70%] text-white font-semibold">
                {data?.Card[2].Title}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" space-y-4">
        <p>{data.description1}</p>
        <p>{data.description2}</p>
        <p>{data.description3}</p>
        <p>{data.description4}</p>
      </div>
    </section>
  );
};

export default Section2;
