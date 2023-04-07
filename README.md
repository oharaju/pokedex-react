
# Pokédex 🌳

A Pokédex é a máquina que registra e cataloga os Pokémon, ela disponibiliza informações sobre todos os Pokémon existentes. Projeto desenvolvido com React

Esse projeto foi utilizado a API da [PokéAPI](https://pokeapi.co/), que permite que o usuário possa inserir um número ou nome do Pokemon, e será exibido a imagem correspondente.

Neste projeto utilizei o Husky que é uma ferramenta que permite adicionar ganchos (hooks) no Git, para executar comandos antes de determinados eventos, como commits ou pushs, afim de garantir a qualidade do código. 

Também utilizei o teste de Snapshot que permite verificar se o comportamento do código não foi alterado indevidamente durante o desenvolvimento. Assim garantir que todas as alterações feitas no código não impactem negativamente em sua funcionalidade, mantendo assim a integridade do sistema.

Antes de confirmar o commit, é necessário atualizar o teste de snapshot executando o comando 'yarn test -u'. Se a alteração for consciente, posso deixar passar no teste e fazer o commit e push posteriormente, assim ajuda a evitar erros comuns e manter um código mais limpo e consistente.

## ⚙️ Instalação

Instale as dependências do Yarn utilizando o comando:

```
yarn install
```

Clone o repositório:

```
git clone git@github.com:oharaju/pokedex-react.git
```
    
Entre na pasta do projeto:

```
cd pokedex-react
```

Para iniciar o projeto use o comando:

```
yarn start
```
