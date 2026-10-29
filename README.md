# isabellasf.github.io

Portfólio de **Isabella Freitas**, estudante de Matemática e Ciência de Dados.
Estética neobrutalista, gráficos animados no fundo e versões em português e inglês.

🔗 **https://isabellasf.github.io**

## Stack

- [Next.js](https://nextjs.org) (App Router) com exportação estática (`output: "export"`)
- [Tailwind CSS](https://tailwindcss.com) v4: paleta e sombras definidas em `app/globals.css`
- [Framer Motion](https://motion.dev): animações ao rolar a página
- Canvas 2D: fundo com regressão, histograma, série temporal e k-means (`components/FundoDados.tsx`)
- GitHub Actions + GitHub Pages: deploy automático a cada push na `main`

## Rodando localmente

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000/pt/
npm run build    # gera o site estático em out/
npm start        # serve a pasta out/ em http://localhost:4173
```

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Textos em português / inglês | `content/pt.ts`, `content/en.ts` |
| Projetos | `content/projetos.ts` |
| E-mail, links e currículo em PDF | `content/perfil.ts` |
| Cores, sombras e fontes | `app/globals.css`, `app/[lang]/layout.tsx` |

Os dois arquivos de idioma seguem o tipo `Conteudo` (`content/tipos.ts`), então o TypeScript avisa
se faltar algum texto em um deles.

## Estrutura

```
app/[lang]/        páginas /pt/ e /en/ (geradas no build)
components/ui/     peças do visual: CardBrutal, BotaoBrutal, Tag, Sticker, TituloSecao
components/secoes/ seções da página (Hero, Kpis, Sobre, Habilidades, ...)
content/           todo o conteúdo do site
public/            arquivos servidos como estão (redirecionamento da raiz, favicon)
estatico/404.html  página de erro, copiada para out/ depois do build
```

## Publicação

O site é publicado pelo workflow `.github/workflows/deploy.yml`. Para funcionar:

1. O repositório precisa se chamar `IsabellaSF.github.io`.
2. Em **Settings → Pages → Source**, escolha **GitHub Actions**.
