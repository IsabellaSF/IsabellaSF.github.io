type Props = {
  id: string;
  rotulo: string; // ex.: "In [3]:"
  children: React.ReactNode;
};

/** Título de seção: bloco rosa com rótulo de célula de notebook acima. */
export function TituloSecao({ id, rotulo, children }: Props) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-sm font-bold">{rotulo}</p>
      <h2
        id={id}
        className="inline-block border-[3px] border-black bg-rosa px-4 py-2 font-display text-3xl uppercase shadow-brutal sm:text-4xl"
      >
        {children}
      </h2>
    </div>
  );
}
