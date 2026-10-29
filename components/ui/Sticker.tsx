type Props = {
  children: React.ReactNode;
  cor?: "verde" | "rosa" | "creme" | "lilas";
  rotacao?: number;
  className?: string;
};

const cores = { verde: "bg-verde", rosa: "bg-rosa", creme: "bg-creme", lilas: "bg-lilas" };

/** Etiqueta inclinada, como um adesivo colado na página. */
export function Sticker({ children, cor = "verde", rotacao = -4, className = "" }: Props) {
  return (
    <span
      aria-hidden="true"
      style={{ transform: `rotate(${rotacao}deg)` }}
      className={`inline-block select-none border-[3px] border-black px-3 py-1 font-mono text-sm font-bold shadow-brutal-sm ${cores[cor]} ${className}`}
    >
      {children}
    </span>
  );
}
