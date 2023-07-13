import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

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
  const { background, text, highlight, text2, subTitle, label, href } = props;

  const showModal = useSignal(false);

  //check if session storage exists
  useEffect(() => {
    //if session storage exists set showModal to false
    showModal.value = sessionStorage.getItem("bannerDismiss") ? false : true;
  }, []);

  const closeModal = () => {
    showModal.value = !showModal.value;
  };

  return (
    <div>
      <div
        class={`${
          showModal.value ? "flex" : "top-[-120px] !h-0 invisible"
        } bg-blue-700 relative top-0 visible align-middle items-center justify-center h-[120px] md:h-[100px] transition-all duration-300`}
      >
        <img class="absolute z-0 h-full w-full" src={background}></img>
        <div class="z-20 flex flex-col items-center md:flex-row md:w-full md:max-w-3xl md:justify-around container">
          <div>
            <p class="text-white font-bold text-sm md:text-2xl">
              {text} <span class="text-[#00ffb4] italic">{highlight}</span>{" "}
              {text2}
            </p>
            <p class="text-white text-sm font-medium self-start mb-3 md:mb-0 md:text-base">
              {subTitle}
            </p>
          </div>
          <a
            class="text-sm md:text-base font-bold  border border-solid border-[#00ffb4] bg-[#00ffb4] text-[#3a46fb] transition hover:border-[#3a46fb] hover:bg-[#3a46fb] hover:text-[#00ffb4] px-4 py-1 md:px-8 md:py-2 rounded-xl"
            href={href}
          >
            {label}
          </a>
        </div>
        <button
          class="rounded-full absolute font-bold right-3 text-[#525151] bg-[#fff9] transition hover:scale-125 hover:bg-[#fff] text-sm leading-[.2rem] font-fantasy z-20 w-5 h-5 "
          onClick={closeModal}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Modal;
