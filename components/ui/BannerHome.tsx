import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @description desktop otimized image */
  imgDesktop?: LiveImage;
  /** @description mobile otimized image */
  imgMobile?: LiveImage;
  action?: {
    /** @description Image text title */
    titleHighlight: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
    /** @description Button label */
    label: string;
    /** @description when user clicks on the image, go to this link */
    href: string;
  };
}

function BannerHome({ imgDesktop, imgMobile, action }: Props) {
  return (
    <div class={"container flex items-center px-6 flex-col lg:flex-row"}>
      <div class={"flex lg:flex-auto flex-col lg:w-2/5"}>
        <h1 class={"text-4xl md:text-title font-bold text-main"}>
          {action?.titleHighlight}
        </h1>
        <h1 class={"text-4xl md:text-title font-bold"}>
          {action?.title}
          <span class={"text-6xl text-main"}>.</span>
        </h1>
        <h2 class={"text-sm md:text-xl leading-8 max-w-lg my-5"}>
          {action?.subTitle}
        </h2>
        <a
          class={"btn btn-secondary hover:text-white text-xs md:text-lg px-14 max-w-[390px] lg:max-w-none self-center lg:self-start"}
          href={action?.href}
        >
          {action?.label}
        </a>
      </div>

      <div class={"flex-auto w-full lg:w-3/5"}>
        <img
          class="object-cover w-full h-full"
          src={imgDesktop}
        />
      </div>
    </div>
  );
}

export default BannerHome;
