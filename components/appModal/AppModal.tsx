import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Modal from "$store/islands/HeaderModal.tsx";

export interface Props {
  background?: LiveImage;
  title: {
    text: string;
    highlight: string;
    text2: string;
  };
  subTitle?: string;
  label?: string;
  href?: string;
}

function AppModal(props: Props) {
  const { background, title, subTitle, label, href } = props;
  console.log(props);

  return (
    <>
      <Modal
        background={background}
        text={title.text}
        highlight={title.highlight}
        text2={title.text2}
        subTitle={subTitle}
        label={label}
        href={href}
      />
    </>
  );
}

export default AppModal;
