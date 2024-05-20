import { StrapiImage } from "@/components/StrapiImage";

interface ImageData {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface ImageCard {
  id: number;
  title: string;
  image: {
    data: ImageData[];
  };
}

interface Section8Tag {
  id: number;
  name: string;
}

interface Props {
  id: number;
  __component: string;
  title: string;
  ImageCard: ImageCard[];
  Section8Tags: Section8Tag[];
}

const Section8 = ({ data }: { data: Props }) => {
  // console.dir(data, { depth: null });
  return (
    <section
      className=" py-16 border-b border-white"
      style={{
        backgroundImage:
          "linear-gradient(0deg, #01050D 56.27%, #0F3D99 188.94%)",
      }}
    >
      <div className=" container flex flex-col lg:flex-row lg:items-start">
        <div className=" lg:basis-1/2">
          <div className=" ">
            <h2 className=" text-white font-bold text-4xl lg:text-[56px]">
              {data.title}
            </h2>
          </div>
          <ul className="  py-10 flex items-center gap-5 flex-wrap">
            {data.Section8Tags.map((tag) => (
              <li
                key={tag.id}
                className=" p-3 lg:py-6 hover:bg-primary transition-all duration-700 rounded-[8px] border  border-white text-white text-xs lg:text-lg font-bold"
              >
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
        <div className=" lg:basis-1/2 flex flex-col gap-y-9">
          {data.ImageCard.map((image) => (
            <div
              className="h-[258px]  p-3 flex flex-col justify-end  gap-4 rounded-[6px] relative overflow-hidden w-full bg-cover"
              key={image.id}
            >
              <StrapiImage
                src={image.image.data[0].url}
                alt={image.title}
                width={536.988}
                height={258}
                className=" z-10 w-full h-full rounded-[6px]  absolute inset-0"
              />
              <div className=" z-20">
                <h3 className=" max-w-[80%] text-2xl xl:max-w-[60%] lg:text-3xl text-white font-bold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8;
