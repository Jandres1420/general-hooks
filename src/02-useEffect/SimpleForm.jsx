import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'jandres1420',
        email: 'japm1420@go.com'
    });

    const {username,email} = formState;

    const onInputChange = ({target}) => {
        // name va hacer referencia al name puesto en el property del html tag
        const {name,value} = target;
        setFormState({
            ...formState,
            //propiedad computada (en este caso queremos que esa propiedad que cambia sea la de name )
            [name]:value
        });
        // console.log({name,value});
    }

    //Recurdar siempre usar dependencia despues de la funcion, con [] solo se usa una vez
    useEffect(() =>{
        // console.log('UseEffect called!');
    }, []);

    useEffect(() =>{
        // console.log('FormState Changed!');
    }, [formState]);

    useEffect(() =>{
        // console.log('email Changed!');
    }, [email]);

    
    
  return (
    <>
      <h1>Formulario simple</h1>
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
      {username === "jandres1421" && <Message/>}
    </>
  );
};
