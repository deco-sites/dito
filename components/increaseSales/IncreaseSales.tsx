import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  increaseSales: Array<{
    icon: LiveImage;
    title: string;
    description: string;
  }>;
  label: string;
  href: string;
}

function IncreaseSales(props: Props) {
  const {
    title,
    increaseSales,
    label,
    href,
  } = props;

  return (
    <div class="container flex flex-col items-center justify-between pt-16 pb-10 lg:pb-5 px-6">
      <h2 class="text-3xl md:text-secondaryTitle font-bold text-center">
        {title}
        <span class="text-main">:</span>
      </h2>

      <div class="container flex justify-around mb-5 flex-col lg:flex-row">
        {increaseSales?.map((item) => (
          <div class="flex flex-col items-center lg:items-start lg:w-1/3 lg:max-w-[260px]">
            <img class="h-48" src={item?.icon}></img>
            <h3 class="text-[28px] w-60 md:w-80 lg:w-full font-bold mb-2">
              {item?.title}
              <span class="text-main">.</span>
            </h3>
            <p class="leading-7 w-60 md:w-80 lg:w-64">{item?.description}</p>
          </div>
        ))}
      </div>

      <a
        class={"btn btn-secondary hover:text-white text-xs md:text-lg md:w-96 z-30"}
        href={href}
      >
        {label}
      </a>
    </div>
  );
}

export default IncreaseSales;
