// src/data/questoes.tsx

import React from 'react';

export type Questao = {
    id: string;
    nivel: string;
    categoria: string;
    pergunta: React.ReactNode;
    alternativas: React.ReactNode[];
    correta: number;
    peso: number;
    explicacao: React.ReactNode;
};

export const questoesBanco: Questao[] = [
    {
        id: '1',
        nivel: 'proficiency',
        categoria: 'unique',
        pergunta: (
            <>
                Analise o desenho da transação Funcionário à seguir. Foi solicitado uma listagem de todos os produtos que o funcionário utilizou ao longo do uso do sistema, para isto, um mesmo produto não deve-se repetir.
                <br />
                <img src="/gxacademy/img/questoes/5301f1ee-1485-4b09-82cc-361851639813.png" alt="Exemplo do evento Load" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
                <img src="/gxacademy/img/questoes/22d08b82-05b0-4efe-adab-82cbf82aa592.png" alt="Exemplo do evento Load" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
                <br />
                Dado o desenho apresentado, é correto afirmar que está sendo cumprido o que se pede?
                <br />
                <i>O que não foi apresentado é porque não é relevante e não altera na resolução.</i>
            </>
        ),
        alternativas: [
            <><b>A.</b> Verdadeiro</>,
            <><b>B.</b> Falso</>,
        ],
        correta: 1,
        peso: 2,
        explicacao: (
            <>
            À partir da transação funcionário não é possível acessar o atributo ProdNum. É preciso estar posicionado no nível Funcionario.Produto para tal.
            </>
        ),
    },
    {
        id: '2',
        nivel: 'proficiency',
        categoria: 'unique',
        pergunta: (
            <>
                Foi modelado uma transação Produto e a sua Categoria. A tabela Produto armazena informações sobre os produtos, sendo que a coluna CatCod é uma chave estrangeira que faz referência à tabela Categoria, onde CatCod é o código da categoria e CatNom é o nome da categoria.
                <br />
                Precisamos fazer uma listagem de todas as categorias que possuem ao menos um produto vinculado à ela. Caso apareceça mais de uma vez a categoria, deve mostrar somente uma vez. Dado esta solicitação, analise as alternativas abaixo:
                <br />
                <img src="/gxacademy/img/questoes/5301f5ee-1485-4b09-82cc-361691639813.png" alt="Imagem" style={{ maxWidth: '50%', marginTop: '1rem', marginBottom: '1rem' }} />
                <img src="/gxacademy/img/questoes/6ac3f2de-9346-432c-8e1b-ab6b742990a2.png" alt="Imagem" style={{ maxWidth: '50%', marginTop: '1rem', marginBottom: '1rem' }} />
            </>
        ),
        alternativas: [
            <><b>A.</b>
                <pre><code>{String.raw`for each Produto
    where not CatCod.IsNull()
    where not CatNom.IsNull()

    msg(CatNom,status)
endfor`}</code></pre>
            </>,
            <><b>B.</b>
                <pre><code>{String.raw`for each Produto
    unique CatCod
    
    msg(CatNom,status)
endfor`}</code></pre>
            </>,
            <>
                <b>C.</b> Nenhuma das anteriores, pois só colocar um "isNull()" não garante que sejam obtidas todos os registros únicos mesmo que filtre todas as categorias que estejam associados a um produto (já que estamos sob a tabela Produto). Também é uma inverdade à partir de Produto acessar CatNom enquanto se faz um unique, pois deve-se utilizar apenas os registros da cláusula para tal. Uma das maneiras de se resolver é acessando Categoria e fazendo o unique lá, e só então dentro deste for each de Categoria fazemos um segundo for each por Produto pegando o primeiro registro, assim conseguimos garantir que somente são listados as categorias únicas que tenham associados em si um produto.
                <pre><code>{String.raw`for each Categoria
    unique CatNom
    
    for each Produto
        print CatNom
        exit
    endfor
endfor`}</code></pre>
            </>,
            <><b>D.</b> Nenhuma das anteriores</>,
        ],
        correta: 2,
        peso: 1,
        explicacao: (
            <>
            Na (A) resolvemos parte da solicitação, em mostrar somente as que tem um produto vinculado, porém não valida caso já tenha aparecido anteriormente na listagem. Na (B) está sabiamente utilizando o unique pela chave FK, e por este motivo que é possível mostrar a mensagem usando um atributo que não está na definição do unique. Na (C) a parte que a torna errada é "Também é uma inverdade à partir de Produto acessar CatNom enquanto se faz um unique, pois deve-se utilizar apenas os registros da cláusula para tal" pois como vimos, é sim possível acessar os atributos estendidos ao fazer unique pela chave fk.
            </>
        ),
    },
    {
        id: '3',
        nivel: 'proficiency',
        categoria: 'unique',
        pergunta: (
            <>
                Foi solicitada a uma consultoria a modelagem de um sisteminha simples para controle de produtos separados por filiais. Este é um esboço inicial que ainda não foi passado para o time de qualidade. A ideia é que a tabela Produto armazene informações sobre os produtos disponíveis no sistema, associando-os a uma categoria e à filial responsável pela venda. A tabela Categoria, por sua vez, será responsável por registrar as diferentes categorias de produtos, facilitando a organização e a classificação dos itens. A tabela Filial armazenará informações sobre as filiais da empresa, vinculando cada uma a uma categoria de produtos que comercializa e à empresa proprietária. Por fim, a tabela Empresa registrará as informações sobre as empresas que possuem as filiais, permitindo a vinculação entre cada filial e sua respectiva empresa.
                <br />
                <img src="/gxacademy/img/questoes/48ff1a29-37f8-49c6-b0c4-81b1b6769006.png" alt="Imagem" style={{ maxWidth: '50%', marginTop: '1rem', marginBottom: '1rem' }} />
                <img src="/gxacademy/img/questoes/2d0c72b8-ce6e-4647-8ad8-88178f6763a7.png" alt="Imagem" style={{ maxWidth: '50%', marginTop: '1rem', marginBottom: '1rem' }} />
                <img src="/gxacademy/img/questoes/9863eea0-f4b1-4dca-b1e6-6085948708db.png" alt="Imagem" style={{ maxWidth: '50%', marginTop: '1rem', marginBottom: '1rem' }} />
                <img src="/gxacademy/img/questoes/1ee816b3-825f-4b12-811d-587cf39aacbb.png" alt="Imagem" style={{ maxWidth: '50%', marginTop: '1rem', marginBottom: '1rem' }} />
                <br />
                Com base nas tabelas e relacionamentos apresentados, quais dos índices a seguir seriam necessários para garantir a integridade dos dados e a performance do sistema?
            </>
        ),
        alternativas: [
            <>
                <b>A.</b> A modelagem inicial está correta e cumpre o que se pede e serão criados os seguintes index:
                <pre><code>{String.raw`- Criar índice para a PK EmpCod em Empresa.  
- Criar índice para a PK CatCod em Categoria.  
- Criar índice para a PK FilCod e FK EmpCod em Filial.  
- Criar índice para a PK ProCod, FK FilCod e FK CatCod em Produto.`}</code></pre>
            </>,
            <>
                <b>B.</b> A modelagem inicial está correta e cumpre o que se pede e serão criados os seguintes index:
                <pre><code>{String.raw`- Criar índice para a PK EmpCod em Empresa.
- Criar índice para a PK CatCod em Categoria.
- Criar índice para a PK FilCod, FK EmpCod, FK CatCod e FK ProCod em Filial.
- Criar índice para a PK ProCod e FK FilCod em Produto.`}</code></pre>
            </>,
            <>
                <b>C.</b> A modelagem inicial está incorreta, pois não é possível selecionar uma categoria para produto. Da maneira como está, serão criados os seguintes index:
                <pre><code>{String.raw`- Criar índice para a PK EmpCod em Empresa.
- Criar índice para a PK CatCod em Categoria.
- Criar índice para a PK FilCod, FK EmpCod e FK CatCod em Filial.
- Criar índice para a PK ProCod e FK FilCod em Produto.`}</code></pre>
            </>,
            <><b>D.</b> Nenhuma das anteriores</>,
        ],
        correta: 3,
        peso: 3,
        explicacao: (
            <>
            Para iniciarmos a análise é preciso partir do básico: identificar os relacionamentos e não se deixar levar pelo enunciado, pela expectativa que ele impõe, pois fazendo isto logo de cara identicamos que em Produto temos a definição do produto com código e nome, os demais campos são exatamete os que contém na tabela filial, ou seja, temos a Pk ProdCod e a Fk FilCod, os demais campos de filial são inferidos. Sabendo disto, conseguimos eliminar de cara a (A), já que nos sugere que será criado todos os índices. Também eliminamos a (B) pois não será criado ProCod em Filial. A (C) é a correta pois o enunciado pede para salvar uma categoria para Produto, mas não é possível como está pois ele está obtendo à partir de Filial como uma chave inferida.
            </>
        ),
    },
    {
        id: '4',
        nivel: 'proficiency',
        categoria: 'unique',
        pergunta: (
            <>
                Quais objetos Genexus podem ser expostos como WebService Rest à partir do Objeto API?
            </>
        ),
        alternativas: [
            <>
                <b>A.</b> Business Component e Data Provider
            </>,
            <>
                <b>B.</b> Data Provider e Procedure
            </>,
            <>
                <b>C.</b> Procedure e Business Component
            </>,
            <>
                <b>D.</b> Procedure, Data Provider e Business Component
            </>,
        ],
        correta: 2,
        peso: 2,
        explicacao: (
            <>
                O Business Component não pode ser declado explícitamente como fazemos para um Data Provider e Procedure no retorno das rotas.
            </>
        ),
    },
    {
        id: '5',
        nivel: 'proficiency',
        categoria: 'unique',
        pergunta: (
            <>
                Podemos acessar o modo que o Business Component (BC) está em determinado momento conferindo a propriedade Mode. Ela é do tipo de domínio TrnMode, cujas opções são Insert(INS), Update(UPD), Display(DSP) e Delete (DLT). Pois bem, aqui temos criado uma transação Pessoa. Criamos um data provider que retorna uma pessoa à partir do seu código. Após fazer o load completo de todas as informações desta pessoa à partir do Data Provider, determine o modo em que se encontra o BC ao imprimí-lo no msg.
                <br />
                <i>Vamos considerar que exista a pessoa com o código 1 buscado.</i>
                <br />
                <img src="/gxacademy/img/questoes/b9ec6743-41c5-41ea-a5d2-0d30f47f226b.jpg" alt="Imagem" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
            </>
        ),
        alternativas: [
            <>
                <b>A.</b> Insert
            </>,
            <>
                <b>B.</b> Update
            </>,
            <>
                <b>C.</b> Este código não irá compilar, pois um Data Provider não consegue retornar um BC. A maneira correta de carregar esta pessoa seria à partir do método Pessoa.Load(1), o qual fará com que o BC fique em modo Update.
            </>,
            <>
                <b>D.</b> Nenhuma das opções anteriores
            </>,
        ],
        correta: 1,
        peso: 2,
        explicacao: (
            <>
                Quando um Data Provider retorna um BC, ele fica em modo Insert
            </>
        ),
    },
    {
        id: '6',
        nivel: 'proficiency',
        categoria: 'unique',
        pergunta: (
            <>
                Uma variável do tipo Business Component (&BC) entra em modo Update em quais das seguintes situações?
            </>
        ),
        alternativas: [
            <>
                <b>A.</b> Apenas quando é executado &BC.Load() ou &BC.Update(), pois ambos recuperam ou manipulam dados já existentes.
            </>,
            <>
                <b>B.</b> Após um &BC.Insert() bem-sucedido, já que ele transforma o BC de modo Insert para Update. Além, é claro, do próprio &BC.Load().
            </>,
            <>
                <b>C.</b> Ao utilizar qualquer um dos métodos: &BC.Load(), &BC.Update(), &BC.Save() ou &BC.InsertOrUpdate().
            </>,
            <>
                <b>D.</b> Apenas quando o método &BC.Load() é utilizado, pois é o único que acessa dados já gravados. Ao fazer um `&BC = new()`, popular e concluir com sucesso um &BC.Insert(), ele continuará como insert para que seja possível inserir novos registros na base de dados.
            </>,
        ],
        correta: 3,
        peso: 2,
        explicacao: (
            <>

            </>
        ),
    },
    {
        id: '7',
        nivel: 'proficiency',
        categoria: 'subordinação lógica',
        pergunta: (
            <>
                Nos foi solicitado por uma escola um cadastro simples das disciplinas e os professores que a ministram. Também deseja-se registrar todas as turmas desta escola assim como as disciplinas que esta turma tem. Após a distribuição de aulas, aonde é decidido qual professor vai dar aula para qual turma, é elegido um professor representante da turma. Lembre-se que este representante precisa ser um dos professores que dão aula para a turma, isto é, tem relação com alguma das disciplina que a turma possui.
                <br />
                O desenho de transações abaixo resolve o que se pede?
                <br />
                <img src="/gxacademy/img/questoes/0047b3ed-64ae-4a38-bc4a-e595ec793f0a.jpg" alt="Imagem" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
            </>
        ),
        alternativas: [
            <>
                <b>A.</b> Sim, tudo certo
            </>,
            <>
                <b>B.</b> Não, é preciso repensar o modelo de transações
            </>,
        ],
        correta: 2,
        peso: 3,
        explicacao: (
            <>
                <a href="https://training.genexus.com/pt/aprendizagem/cursos/genexus/v17/proficiency/~26377/subordinacao-logica" target='_blank'>GxTraining - Subordinação Lógica</a>
            </>
        ),
    },
    {
        id: '8',
        nivel: 'proficiency',
        categoria: 'subordinação lógica',
        pergunta: (
            <>
                Nos foi solicitado por uma escola um cadastro simples das disciplinas e os professores que a ministram. Também deseja-se registrar todas as turmas desta escola assim como as disciplinas que esta turma tem. Após a distribuição de aulas, aonde é decidido qual professor vai dar aula para qual turma, é elegido um professor representante da turma. Lembre-se que este representante precisa ser um dos professores que dão aula para a turma, isto é, tem relação com alguma das disciplina que a turma possui.
                <br />
                O desenho de transações abaixo resolve o que se pede?
                <br />
                <img src="/gxacademy/img/questoes/0047b3ed-64ae-4a38-bc4a-e595ec793f0a.jpg" alt="Imagem" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
            </>
        ),
        alternativas: [
            <>
                <b>A.</b> Sim, tudo certo
            </>,
            <>
                <b>B.</b> Não, aqui é apresentado o caso de subordinação lógica. O fato de ter uma chave estrangeira em um nível superior não causa um filtro automático, genexus não consegue identificar a relação pois não há um índice ou relação explícita com o nível de baixo. Uma forma de contornar esta situação seria adicionando um atribuito em Professor.Disciplina e o adicionando também em Turma.Discipllina
                <br />
                <img src="/gxacademy/img/questoes/0047b3ed-64af-4a38-bc4a-e595ec793f0a.jpg" alt="Imagem" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
            </>,
            <>
                <b>C.</b> Não, aqui é apresentado o caso de subordinação lógica. O fato de ter uma chave estrangeira em um nível superior não causa um filtro automático, genexus não consegue identificar a relação pois não há um índice ou relação explícita com o nível de baixo. Uma forma de contornar esta situação seria adicionando um subtipo de professor em Turma, pois assim genexus compreenderá a relação por se tratar de uma chave estrangeira que está referenciando o supertipo.
                <br />
                <img src="/gxacademy/img/questoes/0047b3ed-54af-4a38-bc4a-e595ec793f0a.jpg" alt="Imagem" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
            </>,
            <>
                <b>D.</b> Nenhuma das anteriores
            </>,
        ],
        correta: 3,
        peso: 3,
        explicacao: (
            <>
                <a href="https://training.genexus.com/pt/aprendizagem/cursos/genexus/v17/proficiency/~26377/subordinacao-logica" target='_blank'>GxTraining - Subordinação Lógica</a>
            </>
        ),
    },
    {
        id: '9',
        nivel: 'proficiency',
        categoria: 'determinação tabela base',
        pergunta: (
            <>
                Conhecendo a estrutura do comando for each, identifique onde genexus utiliza para determinar a tabela base.
                <br />
                <img src="/gxacademy/img/questoes/97f8182a-574f-4294-be84-10eddb07b5c0.jpg" alt="Imagem" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
            </>
        ),
        alternativas: [
            <>
                <b>A.</b> Quando definido o BaseTrn, genexus tomará como base esta tabela, independete dos atributos declarados no corpo do for each. Quando não, utilizará o Order, Order None, Unique, Where e main code.
            </>,
            <>
                <b>B.</b> BaseTrn, Order, Order None, Unique, Where e main code.
            </>,
            <>
                <b>C.</b> Quando definido o BaseTrn, genexus tomará como base esta tabela, independete dos atributos declarados no corpo do for each. Quando não, utilizará o Order, Order None, Unique e Using DataSelector. A cláusula where só não determina tabela base a parte do when condition e a definição DataSelector com os parâmetros, pois este faz uma navegação à parte, mas o atributo a ser consultado é levado em consideração. Além, é claro, o main code.
            </>,
            <>
                <b>D.</b> Quando definido o BaseTrn, genexus tomará como base esta tabela, independete dos atributos declarados no corpo do for each. Quando não, utilizará o Order, Order None e Unique. A cláusula where só não determina tabela base a parte do when condition e a definição DataSelector 
                com os parâmetros, pois este faz uma navegação à parte, mas o atributo a ser consultado é levado em consideração. Além, é claro, o main code.
            </>,
        ],
        correta: 3,
        peso: 3,
        explicacao: (
            <>
                <a href="https://training.genexus.com/pt/aprendizagem/cursos/genexus/v17/proficiency/~26377/subordinacao-logica" target='_blank'>GxTraining - Subordinação Lógica</a>
            </>
        ),
    }
];
