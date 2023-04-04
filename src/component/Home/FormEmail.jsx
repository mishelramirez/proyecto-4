import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from "./home.css"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xoqbjjyl");

  if (state.succeeded) return <p>Gracias por escribirnos!</p>;

  return (
    <div className="formemail">
      <form onSubmit={handleSubmit} className={style.containerForm}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          className="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="flecha"
        >
          <ArrowForwardIosIcon />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;