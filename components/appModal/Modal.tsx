import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useSignal } from "@preact/signals";

interface Props {
  background?: LiveImage;
  text: string;
  highlight?: string;
  text2?: string;
  subTitle?: string;
  label?: string;
  href?: string;
}

function Modal(props: Props) {
  console.log(props);

  const showModal = useSignal(false);

  const test = () => {
    console.log("test");
    showModal.value = !showModal.value;
  };

  return (
    <div class="container flex">
      aaaaaaa
      <span class="cursor-pointer" onClick={test}>toggle</span>
    </div>
  );
}

export default Modal;
