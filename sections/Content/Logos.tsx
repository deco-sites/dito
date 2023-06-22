import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Image {
  image: ImageType;
  altText: string;
}

export interface Props {
  images?: Image[];
  backgroundColor?: string;
}

const IMAGES = [
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7",
  },
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
  },
];

function Logos(props: Props) {
  const {
    images,
    backgroundColor,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div class={`w-full px-6 pb-5 flex flex-col bg-[#${backgroundColor}]`}>
      <div class="w-full container flex text-center justify-between">
        {list.map((element) => (
          <div class="inline-block align-middle">
            <div class="flex w-full h-full items-center justify-center">
              <img
                class="object-none w-full h-full"
                src={element.image}
                alt={element.altText || ""}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logos;
