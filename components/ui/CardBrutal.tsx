import type { ComponentPropsWithoutRef, ElementType } from "react";

const cores = {
  branco: "bg-white",
  creme: "bg-creme",
  rosa: "bg-rosa",
  verde: "bg-verde",
  lilas: "bg-lilas",
  papel: "bg-papel",
} as const;

export type CorCard = keyof typeof cores;

type Props<T extends ElementType> = {
  as?: T;
  cor?: CorCard;
  interativo?: boolean;
} & ComponentPropsWithoutRef<T>;

/** Bloco com borda preta grossa e sombra dura: a peça básica do visual. */
export function CardBrutal<T extends ElementType = "div">({
  as,
  cor = "branco",
  interativo = false,
  className = "",
  ...props
}: Props<T>) {
  const Tag = as ?? "div";
  const hover = interativo
    ? "transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg"
    : "";
  return (
    <Tag
      className={`border-[3px] border-black shadow-brutal ${cores[cor]} ${hover} ${className}`}
      {...props}
    />
  );
}
