const cores = {
  verde: "bg-verde",
  rosa: "bg-rosa",
  creme: "bg-creme",
  lilas: "bg-lilas",
  branco: "bg-white",
} as const;

export type CorTag = keyof typeof cores;

export function Tag({ children, cor = "verde" }: { children: React.ReactNode; cor?: CorTag }) {
  return (
    <span
      className={`inline-block border-2 border-black px-2 py-0.5 font-mono text-xs font-bold shadow-brutal-sm ${cores[cor]}`}
    >
      {children}
    </span>
  );
}
