import { useState } from "react";

export function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  function reset() {
    setValues(initialValues);
  }

  function handleOnChange({ target }) {
    setValues({
      ...values,
      [target.name]: target.value
    });
  }

  return [values, handleOnChange, reset];
}