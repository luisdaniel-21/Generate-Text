"use client";
import { Presentacion } from "./components/Presentacion"
import { Header } from "./components/Header";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import BounceLoader from "react-spinners/BounceLoader";

export default function Home() {
  const [isPrompt, setPrompt] = useState("");
  const [isResult, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isPrompt }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <>
    <Header />
    <section className=" bg-zinc-950 dark:bg-slate-100">
      <Presentacion />
    </section>
    <section className=" bg-zinc-950 dark:bg-slate-100 h-screen">
      <div className="flex flex-col items-center pt-5 py-5">
        <form
          className="flex gap-3 w-full md:px-56 lg:px-80 px-5"
          onSubmit={onSubmit}
        >
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className=" bg-zinc-800 rounded-lg text-slate-300 pl-3 pr-3 w-full block focus:outline-none dark:bg-slate-300 dark:text-zinc-800"
            placeholder="Ingresa una petición..."
          />
          <button
            disabled={!isPrompt || loading}
            className="py-3 px-5 block text-center text-lg font-semibold bg-slate-200 dark:bg-zinc-800 border-2 text-zinc-900 dark:text-slate-100 border-slate-200 rounded-xl disabled:opacity-50"
          >
            Generar
          </button>
        </form>
        {loading ? (
          <>
            <div className="mt-5 flex flex-col items-center">
              <BounceLoader color="#36d7b7" />
              <h1 className="text-base text-slate-400 dark:text-zinc-600 font-semibold text-pretty text-center pt-5">
                Por favor espere, se esta cargando la respuesta.
              </h1>
            </div>
          </>
        ) : (
          <div
            className={
              isResult
                ? "mx-5 px-5 py-3 mt-5 md:mx-56 lg:mx-80 bg-white/5 dark:bg-zinc-950 rounded-3xl"
                : "invisible"
            }
          >
            {isResult && (
              <>
                <h1 className=" text-amber-400 font-semibold text-base mb-2">
                  Listo, aquí tienes una respuesta:
                </h1>
                <h1 className="text-white text-lg text-pretty">
                <TypeAnimation
                  splitter={(str) => str.split(/(?= )/)}
                  sequence={[isResult]}
                  speed={{ type: "keyStrokeDelayInMs", value: 250 }}
                  omitDeletionAnimation={true}
                  style={{
                    display: "block",
                  }}
                />
                </h1>
              </>
            )}
          </div>
        )}
      </div>
    </section>
    </>
  );
}
