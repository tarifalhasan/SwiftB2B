import { StrapiImage } from "@/components/StrapiImage";

interface ICard {
  id: number;
  title: string;
  description: string;
}
interface Props {
  id: number;
  __component: string;
  title: string;
  BackgroundImage: {
    id: number;
    url: string;
    alternativeText: null | string;
  };

  Card: ICard[];
}

const Section6 = ({ data }: { data: Props }) => {
  console.dir(data, { depth: null });
  return (
    <section className="  relative py-6 xl:py-16  ">
      <div className=" container  pt-11   relative z-20 px-2 mx-auto  space-y-7">
        <div className=" max-w-[1076px] mx-auto">
          <h2 className=" leading-[142.857%] font-light text-white  text-4xl xl:text-5xl text-center">
            {data.title}
          </h2>
        </div>
        <div className=" pt-20  xl:pt-[8rem] pb-14 grid grid-cols-4 gap-14">
          {data.Card.map((card) => (
            <div key={card.id} className=" space-y-6">
              <div>
                <h2 className=" text-[40px] leading-none text-white font-bold">
                  {card.id < 10 && 0}
                  {card.id}
                </h2>
                <h2 className=" text-[40px] leading-none text-white font-bold">
                  {card.title}
                </h2>
              </div>
              <div>
                <p className=" text-lg font-light text-white">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <StrapiImage
        alt="Background"
        className="absolute inset-0 z-10 object-cover w-full h-full"
        height={1080}
        src={data.BackgroundImage.url}
        width={1920}
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
      />
    </section>
  );
};

export default Section6;
