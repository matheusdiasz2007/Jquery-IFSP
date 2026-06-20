## 1. Visão Geral do Produto

### Nome do Projeto
Dashboard Acadêmico com jQuery

### Objetivo
Desenvolver uma aplicação web para gerenciamento do desempenho acadêmico de estudantes, permitindo o cadastro de disciplinas, cálculo de médias, geração de boletim universitário, visualização de indicadores acadêmicos e exportação de dados.

---

# 2. Arquitetura de Software

## Arquitetura em Camadas

```text
┌─────────────────────────────────┐
│          CAMADA VIEW            │
│ HTML + CSS + jQuery             │
│ Interface do Usuário            │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│       CAMADA CONTROLLER         │
│ aluno.js                        │
│ disciplinas.js                  │
│ dashboard.js                    │
│ tema.js                         │
│ boletim.js                      │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│       CAMADA BUSINESS           │
│ calculos.js                     │
│ graficos.js                     │
│ exportacao.js                   │
│ importacao.js                   │
└───────────────┬─────────────────┘
                │
                ▼
┌─────────────────────────────────┐
│          CAMADA DATA            │
│ LocalStorage                    │
│ JSON                            │
│ storage.js                      │
└─────────────────────────────────┘
```

---

# 3. Estrutura do Projeto

```text
dashboard-academico/
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
│   ├── dashboard.js
│   ├── calculos.js
│   ├── graficos.js
│   ├── storage.js
│   ├── tema.js
│   ├── boletim.js
│   ├── exportacao.js
│   ├── importacao.js
│   └── animacoes.js
│
├── assets/
│   ├── img/
│   ├── icons/
│   └── logo/
│
├── data/
│   └── exemplo.json
│
├── docs/
│   ├── PRD.md
│   └── arquitetura.pdf
│
└── README.md
```

---

# 4. Componentes do Sistema

## 4.1 Cadastro do Aluno

### Responsabilidade

Gerenciar os dados do estudante.

### Arquivo

```text
aluno.js
```

### Funcionalidades

- Cadastrar aluno
- Editar aluno
- Salvar dados
- Carregar dados salvos

### Campos

```javascript
{
    nome: "",
    curso: ""
}
```

---

## 4.2 Gestão de Disciplinas

### Responsabilidade

Gerenciar disciplinas cadastradas pelo aluno.

### Arquivo

```text
disciplinas.js
```

### Funcionalidades

- Adicionar disciplina
- Editar disciplina
- Excluir disciplina
- Buscar disciplina
- Ordenar por média
- Ordenar por nome

### Estrutura

```javascript
{
    id: 1,
    nome: "",
    nota1: 0,
    nota2: 0,
    cargaHoraria: 0,
    mediaSimples: 0,
    mediaPonderada: 0,
    situacao: ""
}
```

---

## 4.3 Cálculos Acadêmicos

### Responsabilidade

Executar todos os cálculos acadêmicos.

### Arquivo

```text
calculos.js
```

### Funções

#### Média Simples

```javascript
(nota1 + nota2) / 2
```

#### Média Ponderada

```javascript
((nota1 * peso1) + (nota2 * peso2))
/
(peso1 + peso2)
```

#### CR

```javascript
Σ(media × cargaHoraria)
/
Σ(cargaHoraria)
```

#### Situação Acadêmica

```text
>= 7.0  → Aprovado

>= 5.0  → Recuperação

< 5.0   → Reprovado
```

---

## 4.4 Dashboard

### Responsabilidade

Exibir indicadores acadêmicos.

### Arquivo

```text
dashboard.js
```

### Indicadores

- Total de disciplinas
- Média geral
- CR
- Carga horária total
- Quantidade de aprovadas
- Quantidade de recuperação
- Quantidade de reprovadas

---

## 4.5 Gráficos

### Responsabilidade

Representação visual dos dados.

### Arquivo

```text
graficos.js
```

### Biblioteca

```html
Chart.js
```

### Gráfico de Pizza

Representa:

- Aprovadas
- Recuperação
- Reprovadas

### Gráfico de Barras

Representa:

- Média por disciplina

---

## 4.6 Boletim Universitário

### Responsabilidade

Gerar visualização do desempenho acadêmico.

### Arquivo

```text
boletim.js
```

### Estrutura

```text
Disciplina
Nota 1
Nota 2
Média
Carga Horária
Situação
```

---

## 4.7 Tema Dark / Light

### Responsabilidade

Alternar aparência do sistema.

### Arquivo

```text
tema.js
```

### Recursos

- Tema claro
- Tema escuro
- Persistência no LocalStorage

---

## 4.8 Persistência de Dados

### Responsabilidade

Armazenar informações localmente.

### Arquivo

```text
storage.js
```

### Estrutura

```javascript
{
    aluno:{},
    disciplinas:[],
    tema:"light"
}
```

---

## 4.9 Exportação PDF

### Responsabilidade

Gerar relatório acadêmico.

### Arquivo

```text
exportacao.js
```

### Biblioteca

```html
jsPDF
```

### Saídas

```text
boletim.pdf

dashboard.pdf
```

---

## 4.10 Importação e Exportação JSON

### Responsabilidade

Backup e restauração dos dados.

### Arquivo

```text
importacao.js
```

### Estrutura

```json
{
    "aluno": {},
    "disciplinas": []
}
```

---

## 4.11 Animações

### Responsabilidade

Melhorar experiência do usuário.

### Arquivo

```text
animacoes.js
```

### Recursos

```javascript
fadeIn()

fadeOut()

slideToggle()

animate()
```

---

## 4.12 Responsividade

### Responsabilidade

Adaptar o sistema para diferentes dispositivos.

### Arquivo

```text
responsive.css
```

### Breakpoints

```css
1024px

768px

480px
```

---

# 5. Modelo de Dados

## Aluno

```javascript
{
    nome: "Matheus Dias Pereira",
    curso: "Engenharia de Software"
}
```

## Disciplina

```javascript
{
    id: 1,
    nome: "Programação Web",
    nota1: 8.5,
    nota2: 9.0,
    cargaHoraria: 80,
    mediaSimples: 8.75,
    mediaPonderada: 8.75,
    situacao: "Aprovado"
}
```

---

# 6. Fluxo da Aplicação

```text
INÍCIO
 │
 ▼
Cadastro do Aluno
 │
 ▼
Cadastro de Disciplinas
 │
 ▼
Salvar no LocalStorage
 │
 ▼
Calcular:
    • Média Simples
    • Média Ponderada
    • CR
    • Situação
 │
 ▼
Atualizar Dashboard
 │
 ▼
Atualizar Gráficos
 │
 ▼
Gerar Boletim
 │
 ▼
Exportar PDF
 │
 ▼
Exportar JSON
 │
 ▼
FIM
```