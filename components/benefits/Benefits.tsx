import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  benefits: Array<{
    icon: LiveImage;
    title: string;
    description: string;
  }>;
}

function Benefits(props: Props) {
  const {
    benefits,
  } = props;

  return (
    <div class="bg-[#eceef1]">
      <div class="container flex justify-between py-20 px-6 flex-col lg:flex-row gap-5 lg:gap-0">
        {benefits?.map((item) => (
          <div class="flex flex-col lg:flex-row items-center lg:items-start">
            <div class="flex-none mr-5 ">
              <img width="auto" height="auto" class="w-20" src={item?.icon}>
              </img>
            </div>
            <div class="lg:max-w-[240px]">
              <h3 class="text-3xl md:text-5xl font-bold text-[#828a9f]">
                {item?.title}
              </h3>
              <p class="text-xs md:text-lg text-[#828a9f] text-center md:text-left">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
