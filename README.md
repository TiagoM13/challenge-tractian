# Challenge TRACTIAN

### Screenshot / Layout

![Screenshot](./src/assets/screenshots/Challenge%20TRACTIAN%20-%20Google%20Chrome%2012_09_2024%2011_31_01.png)

### Vídeo de Demonstração

![Screenshot](./src/assets/gif/Challenge-TRACTIAN-Google-Chrome-2024-09-12-11-40-00.gif)

## Funcionalidades Desenvolvidas
- **Listagem Hierárquica de Locais, Sublocais, Ativos e Componentes:** Estruturei a visualização de forma a mostrar os locais e seus sublocais, permitindo que o usuário tenha uma visão clara dos ativos e seus respectivos componentes.

- **Sistema de Filtro:** Criei um sistema de filtro que permite pesquisar por nome de ativos, componentes e locais, mantendo sempre a hierarquia original, o que considero essencial para uma navegação clara.

- **Sidebar Dinâmica:** A barra lateral oferece uma visão hierárquica completa, onde ativos, subativos, locais e sublocais podem ser navegados de forma rápida e eficiente.

## Tecnologias Utilizadas
#### Frontend:
- **React:** Utilizei o React por sua capacidade de criar interfaces interativas e escaláveis.
- **Vite:** Optei por utilizar o Vite como ferramenta de build por sua rapidez e eficiência durante o desenvolvimento. Ele oferece uma experiência de desenvolvimento significativamente mais ágil comparado a outras ferramentas como o Webpack, especialmente em projetos React.
- **TypeScript:** A tipagem estática me ajudou a evitar diversos erros em tempo de desenvolvimento, além de deixar o código mais legível.
- **Styled Components:** Para estilização dos componentes, utilizei styled-components para manter o CSS organizado e encapsulado.
- **React Router DOM:** Implementei o gerenciamento de rotas com React Router para facilitar a navegação entre diferentes seções da aplicação.
- **Axios:** Utilizei o Axios para realizar as requisições HTTP, pois oferece uma API mais simples e intuitiva para trabalhar com promessas e facilita o tratamento de erros, quando comparado ao fetch.

#### Backend
A API utilizada foi disponibilizada pela empresa para acessar os dados de empresas, locais e ativos. Ela funciona apenas para requisições do tipo GET, com os seguintes endpoints:

1. **/companies:** Retorna todas as empresas cadastradas.
2. **/companies/:companieId/locations:** Retorna todos os locais associados a uma empresa específica.
3. **/companies/:companieId/assets:** Retorna todos os ativos de uma empresa específica.

**API Base URL:** https://fake-api.tractian.com

### Melhorias Propostas

#### 1. Implementação de Testes Automatizados:
- **Motivação:** Durante o desenvolvimento, a ausência de testes foi uma limitação. Acredito que adicionar testes automatizados (unitários e de integração) seria crucial para garantir a robustez do sistema, especialmente em futuras evoluções.
- **Próximo Passo:** Utilizar Jest e React Testing Library para cobrir as principais funcionalidades, garantindo que a busca, a listagem hierárquica e a renderização dos componentes estejam corretas.
#### 2. Gerenciamento de Estado com Zustand:
- **Motivação:** O estado atualmente está sendo gerenciado com hooks nativos do React. Embora funcione, ao lidar com dados de múltiplas empresas e suas hierarquias, uma solução como Zustand poderia proporcionar uma melhor organização e performance.
- **Próximo Passo:** Integrar o Zustand para gerenciar o estado global da aplicação, especialmente para otimizar o controle de filtros e a persistência de dados de empresas, locais e ativos.
#### 3. Otimização do Sistema de Filtro:
- **Motivação:** O sistema de filtro funciona corretamente, mas pode ser otimizado para aplicar filtros mais complexos (por exemplo, por status operacional, categoria de ativos e localização).
- **Próximo Passo:** Criar uma interface de filtro avançado onde o usuário possa selecionar múltiplos critérios, melhorando a usabilidade.
#### 4. Otimização de Performance:
- **Motivação:** Em grandes conjuntos de dados, a performance pode ser um problema. Ferramentas como React.memo e lazy loading poderiam ser aplicadas para melhorar a fluidez da interface.
- **Próximo Passo:** Implementar memoização em componentes pesados e otimizar o carregamento de dados com caching e lazy loading de componentes quando necessário.
#### 5. Design Responsivo e Acessibilidade:
- **Motivação:** Embora o design esteja adaptado para telas grandes, dispositivos móveis podem oferecer uma experiência limitada.
- **Próximo Passo:** Melhorar o design responsivo, garantindo que a aplicação seja totalmente acessível e utilizável em smartphones e tablets.
