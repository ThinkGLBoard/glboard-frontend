# GLBoard Frontend

Este repositório contém o Frontend do GLBoard, uma ferramenta para análise de Game Learing Analytics

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **React** - Biblioteca JavaScript para construção de interfaces
- **Next** -  Framework baseado em *React* voltado para o desenvolvimento de aplicações web modernas, com foco em organização e escalabilidade
- **Tailwind CSS** - Framework CSS utilitário para estilização rápida e responsiva
- **Material-UI (MUI)** - Biblioteca de componentes React com design system do Material Design
- **Highcharts** - Biblioteca JavaScript para criação de gráficos interativos e visualizações de dados

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/glboard-frontend.git
cd glboard-frontend
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

## Executando o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:3000`

## Build para produção

Para gerar a build de produção:

```bash
npm run build
# ou
yarn build
```

## Estrutura do projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/          # Páginas da aplicação
├── enums/          # Arquivos de enumeração para atributos categóricos
├── utils/          # Funções utilitárias
├── interfaces/     # Interfaces oriundos dos DTOs da API
├── contexts/       # Contextos globais do projeto
├── hooks/          # Custom hooks
├── services/       # Serviços e chamadas de API
└── assets/         # Imagens, ícones e outros arquivos estáticos
```

## Estilização

O projeto utiliza uma combinação de Tailwind CSS e Material-UI para estilização:

- **Tailwind CSS**: Utilizado para utilitários rápidos, layout responsivo e customizações específicas
- **MUI**: Utilizado para componentes complexos como modais, tabelas, formulários e sistema de design consistente


## Visualização de dados

Os gráficos e visualizações são implementados com **Highcharts**, oferecendo:

- Gráficos interativos e responsivos
- Diversos tipos de visualização (linha, barra, pizza, etc.)
- Exportação de dados em múltiplos formatos
- Tooltips personalizados e animações suaves

## Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Autores

- **Davi Moreira** - [GitHub](https://github.com/daviagrm)
- **Waldecir Martins** - [GitHub](https://github.com/waldevv)

## Nota

Este é um trabalho de autoria do Laboratório ThinkTEd