import { useEffect, useState } from "react";

import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  // username, email , password
  const { formState, onInputChange,onResetForm, username,email,password } = useForm({
    username: "jandres1420",
    email: "japm1420@go.com",
    password: "",
  });
  // esta es la forma facil
  // const { username, email, password } = formState;


  return (
    <>
      <h1>Formulario con custom hook </h1>
      <h3></h3>
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="andres@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm}className="btn btn-success mt-2">Reset</button>
    </>
  );
};
