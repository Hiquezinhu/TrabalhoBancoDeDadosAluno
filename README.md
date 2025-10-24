# Projeto: AtividadeBanco — Conexão TypeScript com PostgreSQL

Olá, professor!

Este projeto foi desenvolvido com o objetivo de armazenar e gerenciar as notas dos alunos de forma simples e eficiente. A aplicação utiliza Node.js com TypeScript e se conecta a um banco de dados PostgreSQL, permitindo o cadastro, consulta e manipulação das informações diretamente pelo terminal.

## Link de apoio para criar o container PostgreSQL

Caso precise criar um container PostgreSQL (Docker), utilize a postagem indicada pelo professor:

https://www.eduardopopovici.com/2025/09/como-montar-um-conteiner-com-postgre.html

## Descrição do Projeto

Este projeto é um exemplo didático para mostrar como uma aplicação em TypeScript (Node.js) se conecta a um banco de dados PostgreSQL e insere dados. A ideia é simples e voltada para prática em sala de aula:

Conectar ao banco PostgreSQL (rodando em container Docker).

Ler entradas do usuário pelo terminal (por exemplo: nome, série, idade e médias).

Inserir essas informações em uma tabela alunos.

Encerrar a conexão de forma segura.



## Aviso de Segurança (IMPORTANTE)

Se o projeto contém credenciais (usuário/senha/host) diretamente no código (hardcoding), isso é perigoso e não deve ser feito em projetos reais. Em ambiente de aula isso pode ser aceito para simplificação, mas em produção use variáveis de ambiente (arquivo .env) e bibliotecas como dotenv.

Exemplo inseguro (não deixar assim em repositório público):

const dbConfig = {
  user: 'aluno',
  host: 'localhost',
  database: 'db_profedu',
  password: '102030', // <--- PERIGO: credencial hardcoded
  port: 5432,
};

## Estrutura esperada do projeto

(Na raiz do zip atividadeBanco.zip você deve encontrar algo parecido com):

/atividadeBanco
|
|-- /dist/
|   |-- ExercicioBancoDeDados.js   <-- código JavaScript compilado (output do tsc)
|
|-- /node_modules/                 <-- dependências (após npm install)
|
|-- ExercicioBancoDeDados.ts      <-- código-fonte TypeScript (exemplo)
|
|-- package.json                  <-- lista de dependências e scripts
|
|-- tsconfig.json                 <-- configuração do TypeScript
|
|-- README.md                     <-- este arquivo

Se a sua estrutura for diferente, adapte os comandos abaixo de acordo com os nomes dos arquivos presentes.

## Pré-requisitos

Node.js (versão compatível com o projeto)

npm (gerenciador de pacotes do Node)

Docker (para rodar o PostgreSQL em container)

pgAdmin (opcional, para visualizar os dados)

Git (opcional)

Como executar (passo a passo)

Abra um terminal na pasta do projeto (atividadeBanco) e siga os passos:

### 1️⃣ Clonar o repositório

git clone <url-do-repositorio>

### 2️⃣ Instalar dependências

# Instalar as bibliotecas de produção
npm install pg readline-sync

# Instalar o TypeScript e os tipos como dependências de desenvolvimento
npm install -D typescript @types/pg @types/readline-sync

### 3️⃣ Compilar TypeScript (gera a pasta dist com o .js correspondente)

npx tsc

### 4️⃣ Executar o script compilado (exemplo de nome — adapte se necessário)

node dist/ExercicioBancoDeDados.js

### 5️⃣ Verificar o banco de dados

Siga as perguntas no terminal e, ao finalizar, verifique no pgAdmin ou via psql se os registros apareceram na tabela alunos.

## Script SQL do banco de dados

Abaixo está o script solicitado para criar a tabela alunos no schema public. Em seguida o mesmo script com comentários linha a linha explicativos.

### Script SQL

CREATE TABLE public.alunos (
    nome VARCHAR(50),
    serie INTEGER,
    idade INTEGER,
    mediam NUMERIC(3,1),
    mediag NUMERIC(3,1),
    mediah NUMERIC(3,1)
);

### Script SQL comentado (linha a linha)

-- Cria uma tabela chamada 'alunos' no schema 'public'.
CREATE TABLE public.alunos (

    -- Campo 'nome' armazena o nome do aluno como texto (até 50 caracteres).
    nome VARCHAR(50),

    -- Campo 'serie' armazena a série/ano do aluno como número inteiro.
    serie INTEGER,

    -- Campo 'idade' armazena a idade do aluno como número inteiro.
    idade INTEGER,

    -- Campo 'mediam' armazena a média de matemática com uma casa decimal
    -- (exemplo: 8.5). NUMERIC(3,1) permite valores de até 3 dígitos no total
    -- com 1 casa decimal (por exemplo: 10.0 ou 9.5).
    mediam NUMERIC(3,1),

    -- Campo 'mediag' armazena a média de geografia com uma casa decimal.
    mediag NUMERIC(3,1),

    -- Campo 'mediah' armazena a média de história com uma casa decimal.
    mediah NUMERIC(3,1)

);



## Conclusão


O Sistema de Armazenamento de Notas foi desenvolvido com o intuito de facilitar o gerenciamento de notas escolares, proporcionando uma solução prática e interativa para cadastro e consulta via terminal.Esse projeto serviu como uma excelente oportunidade para aplicar conceitos de banco de dados, TypeScript e integração com Node.js, reforçando a importância da organização e automação de dados acadêmicos.

