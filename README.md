1-Remover arquivos não utilizados e remover suas referências:

    public/favicon.ico
    public/logo192.png
    public/logo512.png
    public/manifest.json
    src/App.css
    src/App.test.tsx
    src/index.css
    src/logo.svg
    src/serviceWorker.ts

2-Instalar biblioteca para rotas, react-router-dom
    yarn add react-router-dom

3-Criar diretorio routes (responsavel pelas rotas da aplicação)
    mkdir src/routes
    nano src/routes/index.tsx
    
4-Criar diretorio pages (responsavel pelas paginas/telas da aplicação)

5-Instalar biblioteca styled-components
    yarn add styled-components
(serve para definir estilos localizados ou globais, isola o css em componentes)
foi configurado o estilo global, ver arquivo em style/global

6-Criar os componentes(paginas) e o seus CSS
Instalar 
    yarn add polished (para ajudar a manipular o css)
    yarn add react-icons (para ter biblioteca de icone)
7-Consumindo API
Instalar AXIOS
    yarn add axios
