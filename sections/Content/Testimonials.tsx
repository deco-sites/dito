import Image from "deco-sites/std/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Testimonial {
  image?: {
    src?: ImageType;
    alt?: string;
  };
  text?: string;
  user?: {
    name?: string;
    position?: string;
    href?: string;
  };
}

export interface Props {
  title?: string;
  highlight?: string;
  title2?: string;
  testimonials?: Testimonial[];
}

const Testimonal = ({ image, text, user }: Testimonial) => (
  <div class="flex flex-col items-center max-w-xs">
    {image?.src && (
      <img src={image.src} alt={image?.alt} class="h-24 object-scale-down">
      </img>
    )}
    <h3 class="text-white leading-7 text-justify mb-auto pb-20">
      {text}
    </h3>
    <div class="flex flex-col self-start mb-7 mt-auto">
      {user?.name &&
        (
          <p class="font-bold text-white">
            {user?.name}
          </p>
        )}
      {user?.position &&
        (
          <p class="text-white">
            {user?.position}
          </p>
        )}
    </div>
    <a
      class={"btn btn-secondary hover:text-white text-lg px-11 mt-auto"}
      href={user?.href}
    >
      VER CASE
    </a>
  </div>
);

export default function Testimonials(
  props: Props,
) {
  const { title, highlight, title2, testimonials } = {
    ...props,
  };

  return (
    <div class="bg-[#19223c]">
      <div class="w-full container px-4 py-16 flex flex-col items-center">
        <h2 class="text-secondaryTitle text-center text-white font-bold max-w-[980px] mb-4">
          {title} <span class="text-main">{highlight}</span> {title2}
          <span class="text-main">.</span>
        </h2>

        <div class="flex w-full justify-between">
          {testimonials?.map(({ image, text, user }) => (
            <Testimonal image={image} text={text} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
