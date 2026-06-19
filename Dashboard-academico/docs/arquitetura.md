# Arquitetura

O projeto segue a estrutura em camadas descrita no PRD:

- View: `index.html` e arquivos CSS.
- Controller: `aluno.js`, `disciplinas.js`, `dashboard.js`, `tema.js`, `boletim.js`.
- Business: `calculos.js`, `graficos.js`, `exportacao.js`, `importacao.js`.
- Data: `storage.js` com persistência em LocalStorage.

Não há backend. Todas as operações rodam no navegador.
