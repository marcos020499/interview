import React, { useEffect } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/Custom-button";
import { ContainerSignIn, Linken, Span, Bolder } from "./style";
import "react-toastify/dist/ReactToastify.css";

const SingIn = () => {

  return (
    <ContainerSignIn>
      <form>
        <Span>Iniciar <Bolder>sesión</Bolder></Span>
        <FormInput
          label="Nombre"
          name="Nombre"
          type="text"
          required
        />
        <FormInput
          name="contraseña"
          type="contraseña"
          label="contraseña"
          required
        />
        <Linken>
          Olvidé mi contraseña
        </Linken>
        <div className="buttons">
          <CustomButton type="submit"> Entrar </CustomButton>
        </div>
      </form>
    </ContainerSignIn>
  );
};

export default SingIn;
