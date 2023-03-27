import { useState } from "react";
// el valor de este hook personalizado es tener cualquier objeto sin saber que propiedades tenga y sirve para cualquier formulario
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () =>{
    setFormState(initialForm)
  }
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
