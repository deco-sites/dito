import Form from "$store/islands/Form.tsx";

export interface Props {
  title: string;
  description: string;
  label: string;
}

function DemoForm(props: Props) {
  const {
    title,
    description,
    label,
  } = props;
  return (
    <div class="bg-[#eceef1]">
      <div class="container flex justify-around py-10 px-6 flex-col lg:flex-row">
        <div class="lg:w-1/2 lg:max-w-[395px] lg:pl-2 mb-10 lg:mb-0">
          <h1 class="text-3xl md:text-[48px] md:leading-[3.6rem] font-bold mb-3">
            {title}
          </h1>
          <span class="block w-[34px] h-[5px] bg-main mb-10"></span>
          <p class="text-xl">{description}</p>
        </div>

        <div class="lg:w-1/2">
          <Form label={label} />
        </div>
      </div>
    </div>
  );
}

export default DemoForm;
