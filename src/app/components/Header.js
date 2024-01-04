import { useState, useEffect } from "react";
export const Header = () => {
  const [theme, setTheme] = useState(true);
  const [claseIcono, setClaseIcono] = useState("fa-moon");
  const [header, setHeader] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //Funcion para cabiar el modo Dark
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Función para cambiar la clase del icono
  const changeIcono = () => {
    // Lógica para determinar la nueva clase del icono
    const nuevaClase = claseIcono === "fa-moon" ? "fa-sun" : "fa-moon";

    // Actualizar el estado con la nueva clase
    setClaseIcono(nuevaClase);
  };

  const changeModes = () => {
    changeTheme();
    changeIcono();
  };

  //Efecto del Scroll
  const ScrollHeader = () => {
    if (window.scrollY >= 30) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollHeader);

    return () => {
      window.addEventListener("scroll", ScrollHeader);
    };
  }, []);

  return (
    <>
      <header
        className={
          header
            ? "fixed w-full bg-zinc-950 dark:bg-white/80 bg-opacity-80 backdrop-blur-md"
            : "bg-zinc-950 dark:bg-slate-100 dark:text-zinc-950"
        }
      >
        <div className="flex justify-between text-3xl px-5 py-3 md:px-56 lg:px-80 ">
          <button className="text-slate-300 dark:text-zinc-700 text-3xl" onClick={changeModes}>
            <i class={`fa-solid ${claseIcono}`}></i>
          </button>
        </div>
      </header>
    </>
  );
};
