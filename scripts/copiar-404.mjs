// O Next gera um 404.html padrão na exportação; substituímos pelo nosso,
// que o GitHub Pages mostra para qualquer endereço inexistente.
import { copyFileSync } from "node:fs";

copyFileSync("estatico/404.html", "out/404.html");
