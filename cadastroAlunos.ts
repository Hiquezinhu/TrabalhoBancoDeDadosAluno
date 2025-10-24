
//Alexandre Comparone           RA: 2500621
//Arthur lima bezerra           RA: 2500315
//Henrique Rossi                RA: 2511641
//Henrique Bernardo Stela       RA: 2502079
//Matheus Bolsanello Marangon   RA: 2509468


import { Pool } from 'pg';
import readlineSync from 'readline-sync';


const dbConfig = {
  user: 'aluno',
  host: 'localhost',
  database: 'db_profedu',
  password: '102030',
  port: 5432,
};

const pool = new Pool(dbConfig);


interface Aluno {
  nome: string;
  serie: number;
  idade: number;
  mediam: number; // Matemática
  mediag: number; // Geografia
  mediah: number; // História
}

// Função auxiliar para calcular média de 8 provas
function calcularMedia(materia: string): number {
  let soma = 0;
  for (let i = 1; i <= 8; i++) {
    const nota = readlineSync.questionFloat(`Nota ${i} de ${materia}: `);
    soma += nota;
  }
  const media = soma / 8;
  return parseFloat(media.toFixed(1)); 
}

async function cadastrarAluno(): Promise<void> {
  console.log('\n=== Cadastro de Aluno ===');

  const nome = readlineSync.question('Nome: ');
  const serie = readlineSync.questionInt('Série (número): ');
  const idade = readlineSync.questionInt('Idade: ');

  console.log('\n--- Notas de Matemática ---');
  const mediam = calcularMedia('Matemática');

  console.log('\n--- Notas de Geografia ---');
  const mediag = calcularMedia('Geografia');

  console.log('\n--- Notas de História ---');
  const mediah = calcularMedia('História');

  
  if (!nome || !serie || !idade) {
    console.error('\n Erro: Todos os campos são obrigatórios!');
    await pool.end();
    return;
  }

  const aluno: Aluno = {
    nome,
    serie,
    idade,
    mediam,
    mediag,
    mediah,
  };

  try {
    console.log('\nConectando ao banco de dados...');
    const client = await pool.connect();
    console.log('Conexão bem-sucedida!');

    const insertQuery = `
      INSERT INTO public.alunos (nome, serie, idade, mediam, mediag, mediah)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

    const values = [
      aluno.nome,
      aluno.serie,
      aluno.idade,
      aluno.mediam,
      aluno.mediag,
      aluno.mediah,
    ];

    await client.query(insertQuery, values);
    client.release();

    console.log('\n-----------------------------------------');
    console.log('Aluno cadastrado com sucesso!');
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Série: ${aluno.serie}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Média Matemática: ${aluno.mediam}`);
    console.log(`Média Geografia: ${aluno.mediag}`);
    console.log(`Média História: ${aluno.mediah}`);
    console.log('-----------------------------------------');

  } catch (error) {
    console.error('\n Erro ao interagir com o banco de dados:', error);
  } finally {
    await pool.end();
    console.log(' Conexão com o banco encerrada.');
  }
}

cadastrarAluno();
