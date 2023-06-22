import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  background: LiveImage;
  demonstration: Array<{
    icon: LiveImage;
    title: string;
    description: string;
  }>;
  label: string;
  href: string;
}

function RequestDemo(props: Props) {
  const {
    background,
    demonstration,
    label,
    href,
  } = props;

  return (
    <div class="container flex justify-between flex-col items-center pb-16 px-6 relative">
      <img
        class="absolute overflow-hidden h-full md:max-w-[390px] bottom-16 z-0 object-cover lg:object-contain opacity-50 lg:opacity-1"
        src={background}
      >
      </img>
      <div class="flex flex-col w-full z-10">
        {demonstration?.map((item) => (
          <div class="flex w-full justify-between flex-col lg:flex-row items-center lg:items-start lg:even:flex-row-reverse">
            <div class="max-w-[400px] flex flex-col self-center">
              <h2 class="text-[26px] font-bold mb-2">
                {item.title}
                <span class="text-main">.</span>
              </h2>
              <p class="leading-7">{item.description}</p>
            </div>

            <img class="w-96" src={item?.icon}></img>
          </div>
        ))}
      </div>

      <a
        class={"btn btn-secondary hover:text-white text-xs md:text-lg md:w-96 z-10"}
        href={href}
      >
        {label}
      </a>
    </div>
  );
}

export default RequestDemo;
