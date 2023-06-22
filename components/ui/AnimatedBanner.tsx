import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  highlight: string;
  title: string;
  imgDesktop?: LiveImage;
  imgMobile?: LiveImage;
}

function AnimatedBanner({ highlight, title, imgDesktop, imgMobile }: Props) {
  return (
    <div class={"container flex items-center justify-around px-6 pb-5"}>
      <div class={"flex-auto flex-col w-1/2 max-w-[430px]"}>
        <h1 class={"text-secondaryTitle font-bold"}>
          <span class="text-main">{highlight}</span>
          {title}
          <span class={"text-main"}>.</span>
        </h1>
      </div>
      <img
        class="object-cover max-w-lg"
        src={imgDesktop}
      />
    </div>
  );
}

export default AnimatedBanner;
