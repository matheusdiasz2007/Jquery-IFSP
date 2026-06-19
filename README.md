<p align="center">

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" width="200" />
          
</p>

# Dashboard Acadêmico (jQuery)

Projeto de um sistema de gerenciamento do desempenho acadêmico para estudantes, construído com HTML, CSS e jQuery. O projeto fornece cadastro de aluno e disciplinas, cálculo de médias e CR, geração de boletim, gráficos e exportação de dados.

**Visão geral:**
- Objetivo: apoiar estudantes no acompanhamento de desempenho acadêmico (médias, CR, situação por disciplina).
- Arquitetura: camada View (HTML/CSS/jQuery), Controller (JS módulos), Business (cálculos, gráficos), Data (LocalStorage). Veja o PRD completo em [Dashboard-Academico/docs/PRD.md](Dashboard-Academico/docs/PRD.md).

**Funcionalidades principais:**
- Cadastro e edição de aluno.
- CRUD de disciplinas (nota1, nota2, carga horária, pesos).
- Cálculo de média simples, média ponderada e CR.
- Dashboard com indicadores (média geral, CR, carga horária, quantidade aprovadas/recuperação/reprovadas).
- Gráficos (Chart.js): pizza e barras.
- Geração de boletim e exportação em PDF (jsPDF).
- Importação/exportação JSON para backup.
- Tema claro/escuro com persistência em LocalStorage.

**Estrutura do projeto:**
- Frontend: [Dashboard-Academico/index.html](Dashboard-Academico/index.html)
- CSS: `css/` (style, dark-theme, responsive, animations)
- JS: `js/` (app.js, aluno.js, disciplinas.js, calculos.js, dashboard.js, graficos.js, boletim.js, exportacao.js, importacao.js, storage.js, tema.js, animacoes.js)
- Dados de exemplo: `Dashboard-Academico/data/exemplo.json`

Para detalhes da arquitetura e componentes, consulte o PRD em [Dashboard-Academico/docs/PRD.md](Dashboard-Academico/docs/PRD.md).

**Como executar localmente**
1. Abrir o arquivo [Dashboard-Academico/index.html](Dashboard-Academico/index.html) no navegador.
2. (Opcional) Servir via servidor local para evitar restrições de CORS/arquivos: 

```powershell
# Python (recomendado)
python -m http.server 8000

# Node.js (http-server)
npx http-server -c-1
```

Abra `http://localhost:8000/Dashboard-Academico/` no navegador.

**Tecnologias**
- jQuery
- Chart.js
- jsPDF
- HTML5 / CSS3
- LocalStorage (persistência)

**Contribuição**
- Sinta-se à vontade para abrir issues e pull requests. Para mudanças rápidas, crie uma branch com seu nome/feature e envie a PR para revisão.

**Licença**
- Verifique a licença do repositório ou adicione uma conforme necessário.

---

_Conteúdo original preservado acima — logotipo jQuery mantido._
