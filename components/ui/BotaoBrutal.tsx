import type { ComponentPropsWithoutRef } from "react";

const cores = {
  rosa: "bg-rosa",
  verde: "bg-verde",
  creme: "bg-creme",
  branco: "bg-white",
  preto: "bg-black text-white",
} as const;

type Props = ComponentPropsWithoutRef<"a"> & { cor?: keyof typeof cores };

/** Link com cara de botão: sobe no hover e "afunda" ao clicar. */
export function BotaoBrutal({ cor = "rosa", className = "", ...props }: Props) {
  return (
    <a
      className={`inline-flex items-center gap-2 border-[3px] border-black px-5 py-3 font-mono text-sm font-bold uppercase tracking-wide shadow-brutal transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-1.5 active:translate-y-1.5 active:shadow-none ${cores[cor]} ${className}`}
      {...props}
    />
  );
}
