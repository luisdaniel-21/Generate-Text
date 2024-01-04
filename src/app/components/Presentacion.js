/* eslint-disable @next/next/no-img-element */

export const Presentacion = () => {
  return (
    <div className="flex flex-col items-center pt-3 gap-y-3">
      <h1 className="text-6xl font-bold text-balance text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        Generador de texto
      </h1>
      <h3 className="text-center text-base text-balance  font-semibold text-slate-300 dark:text-zinc-700 px-5">
        Genera{" "}
        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          respuestas rápidas
        </span>{" "}
        a una pregunta con IA. <span className="text-lg"><i class="fa-solid fa-comment-dots"></i></span>
      </h3>
    </div>
  );
};
