import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x: 0 , y:0})
  useEffect(() => {
    const onMouseMove = ({x,y}) =>{
        // const coords = { x, y};
        setCoords({x,y})
        console.log(coords);
    }
    //Si solo se crea esto est eespacio de memoria sigue vigente y va  seguir consumiendo m[as y mas ], por lo que toca crear un espacio de memoria constante que es el de arriba para tener la referencia cuando se deje de usar esta funcionalidad
    window.addEventListener('mousemove',onMouseMove);
    return () => {
        window.removeEventListener('mousemove',onMouseMove)
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
