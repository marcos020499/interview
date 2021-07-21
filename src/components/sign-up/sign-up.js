import React, { useState } from "react";
import CustomButton from "../custom-button/Custom-button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContainerSignUp, H2 } from "./style";
import FormInput from "../form-input/form-input";
toast.configure();

function SingUp() {
  
  return (
    <>
    <H2>Crear cuenta</H2>
    <ContainerSignUp>
      <div>
      <h2 className="title">Soy coleccionista</h2>
      <p>Crea una cuenta para comprar y conocer las obras de diferentes artistas.</p>
      <form>
        <FormInput
          type="text"
          label="Nombre completo"
          name="Nombre"
          required
        />
        <FormInput
          type="text"
          label="Tu correo"
          name="correo"
          required
        />
        <FormInput
          type="password"
          label="Contraseña"
          name="Contraseña"
          required
        />
        <FormInput
          type="password"
          label="Repetir contraseña"
          name="Repetir contraseña"
          required
        />
        <p>Al registrarme acepto las políticas de privacidad y los Términos y Condiciones</p>
        <CustomButton>Crear cuenta</CustomButton>
      </form>
      </div>
      <div>
        <h2>Soy artista</h2>
        <p>Crea una cuenta para mostrar tus trabajos y darte a conocer como artista</p>
        <CustomButton>Aplicar Ahora</CustomButton>
      </div>
    </ContainerSignUp>
    </>
  );
}

export default SingUp;
