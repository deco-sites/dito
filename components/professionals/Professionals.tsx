import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  subTitle: string;
  professionals: Array<{
    icon: LiveImage;
    title: string;
    description: string;
  }>;
  href?: string;
  label: string;
}

function Professionals(props: Props) {
  const {
    title,
    subTitle,
    professionals,
    href,
    label,
  } = props;

  return (
    <div class="container flex flex-col items-center py-16 px-6">
      <h2 class="text-secondaryTitle font-bold text-center max-w-[800px] mb-1">
        {title}
        <span class="text-main">.</span>
      </h2>
      <p class="text-[22px]">{subTitle}</p>

      <div class="flex justify-between mb-7">
        {professionals?.map((item) => (
          <div class="flex flex-col">
            <div class="flex-none">
              <img class="w-[300px]" src={item?.icon}>
              </img>
            </div>
            <div class="max-w-[250px]">
              <div class="flex items-center min-h-[66px]">
                <h3 class=" text-[22px] font-bold leading-7">
                  {item?.title}
                  <span class="text-main">.</span>
                </h3>
              </div>
              <p class="leading-7">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        class={"btn btn-secondary hover:text-white text-lg px-14"}
        href={href}
      >
        {label}
      </a>
    </div>
  );
}

export default Professionals;
