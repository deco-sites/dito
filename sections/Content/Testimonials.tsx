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
  };
  href?: string;
  label?: string;
}

export interface Props {
  title?: string;
  highlight?: string;
  title2?: string;
  testimonials?: Testimonial[];
}

const Testimonal = ({ image, text, user, href, label }: Testimonial) => (
  <div class="flex flex-col items-center max-w-xs">
    {image?.src && (
      <img src={image.src} alt={image?.alt} class="h-24 object-scale-down">
      </img>
    )}
    <h3 class="text-white leading-7 text-justify mb-10 min-h-[150px]">
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
      href={href}
    >
      {label}
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
          {testimonials?.map(({ image, text, user, href, label }) => (
            <Testimonal
              image={image}
              text={text}
              user={user}
              href={href}
              label={label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
