import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/Custom-button";
import { ContainerSignIn, Linken, Span, Bolder, H2 } from "./style";

const SingIn = () => {

  return (
    <ContainerSignIn>
      <form>
        <H2><Span>Iniciar <Bolder>sesión</Bolder></Span></H2>
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
