import React from "react";
import CustomButton from "../custom-button/Custom-button";
import "react-toastify/dist/ReactToastify.css";
import { ContainerSignUp, H2, Bolder, Span, P, Img, Img1, Content } from "./style";
import FormInput from "../form-input/form-input";

function SingUp() {
  
  return (
    <>
    <H2><Span>Crear <Bolder>cuenta</Bolder></Span></H2>
    <ContainerSignUp>
      <Content>
      <Img src={'https://res.cloudinary.com/marcos020499/image/upload/v1626880896/recortes-29_1_iboazc.png'}/>
      <H2><Span>Soy <Bolder>coleccionista</Bolder></Span></H2>
      <P>Crea una cuenta para comprar y conocer las obras de diferentes artistas.</P>
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
      </Content>
      <Content>
      <Img1 src={'https://res.cloudinary.com/marcos020499/image/upload/v1626880896/recortes-30_1_agg3h5.png'}/>
        <H2><Span>Soy <Bolder>artista</Bolder></Span></H2>
        <P>Crea una cuenta para mostrar tus trabajos y darte a conocer como artista</P>
        <CustomButton>Aplicar Ahora</CustomButton>
      </Content>
    </ContainerSignUp>
    </>
  );
}

export default SingUp;
