# Sistema de Agendamento de Transferências Financeiras (FED)

Aplicação Front-End desenvolvida para o cadastro, cálculo automatizado de taxas e listagem de extratos de transferências financeiras entre contas de origem e destino, utilizando arquitetura RESTful e banco de dados em memória.

---

## 🛠️ Ferramentas e Versões Utilizadas

O ambiente de desenvolvimento e execução foi configurado e validado com as seguintes ferramentas e versões:

* **Node.js:** Versão 24.21.0
* **Package Manager (NPM):** Versão 12.2.0
* **Angular CLI:** Versão 22.2.2
* **VSCode:** Versão 1.141.0 (Recomendado para o desenvolvimento do Frontend)

---

## 🏛️ Decisões Arquiteturais e Técnicas

* **Interface Reativa (Front-End):** O front-end foi construído em Angular com formulários reativos e consumo assíncrono via `HttpClient`, proporcionando feedback imediato de sucesso ou erro ao usuário.

---

## 📁 Estrutura do Repositório

```text
transferencias-app-fed/
├── frontend/
│   ├── package.json
│   └── src/app/
│       ├── components/
│       │   ├── agendamento/
│       │   └── extrato/
│       ├── models/
│       └── services/
└── README.md
