// deno-lint-ignore-file no-explicit-any
import { useSignal } from "@preact/signals";

interface Props {
  label: string;
}

function Form(props: Props) {
  const loading = useSignal(false);
  const formData = useSignal({
    name: "",
    email: "",
    phone: "",
    company: "",
    storeNumber: "",
    consumerNumber: "",
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData.value);
  };

  const onInput = (event: any) => {
    const { name, value } = event.target;
    formData.value = {
      ...formData.value,
      [name]: value,
    };
  };

  return (
    <form class="flex flex-col text-sm font-medium" onSubmit={onSubmit}>
      <label class="mb-1" htmlFor="name">Seu nome *</label>
      <input
        class="h-[31px] max-w-[431px] px-2 mb-3 rounded-md shadow-form"
        type="text"
        id="name"
        name="name"
        value={formData.value.name}
        onChange={onInput}
        required
      />

      <label class="mb-1" htmlFor="email">Seu e-mail *</label>
      <input
        class="h-[31px] max-w-[431px] px-2 mb-3 rounded-md shadow-form"
        type="email"
        id="email"
        name="email"
        value={formData.value.email}
        onChange={onInput}
        required
      />

      <label class="mb-1" htmlFor="phone">Seu telefone *</label>
      <input
        class="h-[31px] max-w-[431px] px-2 mb-3 rounded-md shadow-form"
        type="tel"
        id="phone"
        name="phone"
        value={formData.value.phone}
        onChange={onInput}
        required
      />

      <label class="mb-1" htmlFor="company">Empresa *</label>
      <input
        class="h-[31px] max-w-[431px] px-2 mb-3 rounded-md shadow-form"
        type="text"
        id="company"
        name="company"
        value={formData.value.company}
        onChange={onInput}
        required
      />

      <label class="mb-1" htmlFor="storeNumber">
        Nº de lojas físicas *
      </label>
      <select
        class="h-[31px] max-w-[431px] px-2 mb-3 rounded-md shadow-form"
        id="storeNumber"
        name="storeNumber"
        value={formData.value.storeNumber}
        onChange={onInput}
        required
      >
        <option value="">Selecione</option>
        <option value="1 a 10">1 a 10</option>
        <option value="11 a 50">11 a 50</option>
        <option value="51 a 100">51 a 100</option>
        <option value="mais de 100">mais de 100</option>
      </select>

      <label class="mb-1" htmlFor="consumerNumber">
        Nº de consumidores da base *
      </label>
      <select
        class="h-[31px] max-w-[431px] px-2 mb-6 rounded-md shadow-form"
        id="consumerNumber"
        name="consumerNumber"
        value={formData.value.consumerNumber}
        onChange={onInput}
        required
      >
        <option value="">Selecione</option>
        <option value="1.000 a 5.000">1.000 a 5.000</option>
        <option value="5.001 a 50.000">5.001 a 50.000</option>
        <option value="50.001 a 200.000">50.001 a 200.000</option>
        <option value="200.001 a 500.000">200.001 a 500.000</option>
        <option value="mais de 500.000">mais de 500.000</option>
      </select>

      <button
        class="btn btn-secondary hover:text-white text-xs md:text-lg w-full max-w-[431px]"
        type="submit"
      >
        {props.label}
      </button>
    </form>
  );
}

export default Form;
