<p align="center">

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" width="200" />
          
</p>
<div align="center">
  
![Projeto](https://img.shields.io/badge/Projeto-Academic_Dashboard-blue)
![Framework](https://img.shields.io/badge/Framework-Jquery-orange)
![Objetivo](https://img.shields.io/badge/Objetivo-DesenvolvimentoWeb-darkgray)
![Status](https://img.shields.io/badge/Status-Concluido-green)
  
</div>

---

# 🎓 Dashboard Acadêmico

Sistema web para gerenciamento e acompanhamento do desempenho acadêmico de estudantes, desenvolvido com **HTML, CSS, JavaScript e jQuery**. A aplicação permite registrar disciplinas, calcular médias e Coeficiente de Rendimento (CR), visualizar indicadores em tempo real, gerar boletins e realizar exportação de dados.

---

## 🔬 Acesso online

👉 **[Clique aqui para acessar o AcademicDashboard.](https://matheusdiasz2007.github.io/Jquery-IFSP/)**

---
## 📋 Sobre o Projeto

O **Dashboard Acadêmico** foi criado com o objetivo de auxiliar estudantes no monitoramento do seu desempenho acadêmico, oferecendo uma interface intuitiva para gerenciamento de disciplinas, acompanhamento de notas e análise de indicadores educacionais.

A aplicação utiliza **LocalStorage** para persistência de dados e disponibiliza recursos visuais por meio de gráficos interativos para facilitar a interpretação dos resultados.

---

## ✨ Funcionalidades

### 👨‍🎓 Gestão de Aluno

- Cadastro de informações do aluno.
- Edição de dados cadastrais.
- Persistência automática dos dados.

### 📚 Gestão de Disciplinas

- Cadastro de disciplinas.
- Edição e exclusão de registros.
- Definição de:
  - Nota 1
  - Nota 2
  - Carga horária
  - Pesos personalizados

### 📊 Cálculos Acadêmicos

- Média simples.
- Média ponderada.
- Coeficiente de Rendimento (CR).
- Classificação automática da situação da disciplina:
  - ✅ Aprovado
  - ⚠️ Recuperação
  - ❌ Reprovado

### 📈 Dashboard Analítico

- Média geral.
- CR acumulado.
- Carga horária total.
- Quantidade de disciplinas:
  - Aprovadas
  - Em recuperação
  - Reprovadas

### 📉 Visualização de Dados

- Gráfico de pizza.
- Gráfico de barras.
- Atualização dinâmica dos indicadores.

### 📄 Relatórios e Exportação

- Geração de boletim acadêmico.
- Exportação em PDF utilizando **jsPDF**.
- Exportação de dados em JSON.
- Importação de backups JSON.

### 🎨 Personalização

- Tema claro e escuro.
- Persistência da preferência do usuário via LocalStorage.
- Animações e transições para melhor experiência de uso.

---

## 🏗️ Arquitetura do Projeto

O sistema segue uma arquitetura modular organizada em camadas:

| Camada | Responsabilidade |
|---------|------------------|
| **View** | Interface do usuário (HTML, CSS e jQuery) |
| **Controller** | Manipulação de eventos e fluxo da aplicação |
| **Business** | Regras de negócio e cálculos acadêmicos |
| **Data** | Persistência utilizando LocalStorage |

📄 Para mais detalhes, consulte o documento:

```text
docs/Arquitetura.md
```

---

## 📁 Estrutura de Diretórios

```text
Dashboard-Academico/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── dark-theme.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── app.js
│   ├── aluno.js
│   ├── disciplinas.js
│   ├── calculos.js
│   ├── dashboard.js
│   ├── graficos.js
│   ├── boletim.js
│   ├── exportacao.js
│   ├── importacao.js
│   ├── storage.js
│   ├── tema.js
│   └── animacoes.js
│
├── data/
│   └── exemplo.json
│
└── docs/
    └── Arquotetira.md
```

---

## 💻 Como Executar o Projeto

### Abrir diretamente após clonar o repósitorio

Abra o arquivo:

```text
Dashboard-Academico/index.html
```

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery
- Chart.js
- jsPDF
- LocalStorage

---

## 📸 Principais Recursos

✔ Cadastro de aluno e disciplinas

✔ Cálculo automático de médias e CR

✔ Dashboard com indicadores acadêmicos

✔ Gráficos interativos com Chart.js

✔ Exportação de boletim em PDF

✔ Backup e restauração via JSON

✔ Tema claro/escuro com persistência

---

## 🔄 Fluxo da Aplicação

```text
Aluno
  ↓
Cadastro de Disciplinas
  ↓
Cálculo de Médias e CR
  ↓
Atualização do Dashboard
  ↓
Geração de Gráficos
  ↓
Boletim e Exportação
```

---

## 🤝 Contribuição

Contribuições são bem-vindas.

1. Faça um Fork do projeto.
2. Crie uma branch para sua feature:

```bash
git checkout -b feature/minha-feature
```

3. Faça seus commits:

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

4. Envie para o repositório remoto:

```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request.

---

## 📜 Licença

- MIT License

---

## 👨‍💻 Autor

### Matheus Dias Pereira

🎓 Engineer Software

🔗 GitHub: https://github.com/matheusdiasz2007

🔗 Linkedin https://www.linkedin.com/in/matheus-dias-pereira-th2007/

⭐ Projeto desenvolvido para fins acadêmicos e prática de desenvolvimento web.

---
