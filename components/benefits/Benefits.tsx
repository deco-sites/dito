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
      <div class="container flex justify-between py-20 px-6">
        {benefits?.map((item) => (
          <div class="flex">
            <div class="flex-none mr-5 ">
              <img class="w-20" src={item?.icon}>
              </img>
            </div>
            <div class="max-w-[240px]">
              <h3 class="text-5xl font-bold text-[#828a9f]">
                {item?.title}
              </h3>
              <p class="text-lg text-[#828a9f]">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;