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
    <div class={"container flex items-center px-6"}>
      <div class={"flex-auto flex-col w-2/5"}>
        <h1 class={"text-title font-bold text-main"}>
          {action?.titleHighlight}
        </h1>
        <h1 class={"text-title font-bold"}>
          {action?.title}
          <span class={"text-6xl text-main"}>.</span>
        </h1>
        <h2 class={"text-xl leading-8 max-w-lg my-5"}>{action?.subTitle}</h2>
        <a
          class={"btn btn-secondary hover:text-white text-lg px-14"}
          href={action?.href}
        >
          {action?.label}
        </a>ß
      </div>

      <div class={"flex-auto w-3/5"}>
        <img
          class="object-cover w-full h-full"
          src={imgDesktop}
        />
      </div>
    </div>
  );
}

export default BannerHome;
