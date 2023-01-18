import { useEffect, useState } from "react";

function Imagen() {
    const [img, setImg] = useState();

    const [change, setChange] = useState(true);

    const handlerClick = () => {
        if (change) {
            setChange(false);
        } else {
            setChange(true);
        };
    };
    
    useEffect(() => {
        setInterval(() => {
            if (change) {
                fetch("https://picsum.photos/200", {
                    method: "GET"
                }).then((imagen) => {
                    setImg(imagen.url);
                });
            } 
        }, 4000);
    }, []);

    return (
        <div>{
            img ? <img onClick={handlerClick} src={img} alt="" /> : "Cargando..."
            }
        </div>
    );
}

export default Imagen;