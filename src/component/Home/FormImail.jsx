import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FormImail = () => {
  const [state, handleSubmit] = useForm("xoqbjjyl");

  if (state.succeeded) return <p>Gracias por unirte!</p>;

  return (
    <div className="">
     
      <form onSubmit={handleSubmit} className="">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          className=""
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className=""
        >
          <ArrowForwardIcon />
        </button>
      </form>
    </div>
  );
};

export default FormImail;