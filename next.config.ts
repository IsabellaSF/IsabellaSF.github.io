import type { NextConfig } from "next";

// Exportação estática: o build gera a pasta `out/`, publicada no GitHub Pages.
// Sem basePath porque o repositório IsabellaSF.github.io é servido na raiz.
const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default config;
