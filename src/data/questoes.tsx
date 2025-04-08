// src/data/questoes.tsx

import React from 'react';

export type Questao = {
    id: string;
    nivel: string;
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
        pergunta: (
            <>
                Analise o desenho da transação Funcionário à seguir. Foi solicitado uma listagem de todos os produtos que o funcionário utilizou ao longo do uso do sistema, para isto, um mesmo produto não deve-se repetir.
                <br />
                <img src="/gxacademy/img/questoes/5301f1ee-1485-4b09-82cc-361851639813.png" alt="Exemplo do evento Load" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
                <img src="/gxacademy/img/questoes/22d08b82-05b0-4efe-adab-82cbf82aa592.png" alt="Exemplo do evento Load" style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem' }} />
                <br />
                Dado o desenho aperesentado, é correto afirmar que está sendo cumprido o que se pede?
                <br />
                <i>O que não foi apresentado é porque não é relevante e não altera na resolução.</i>
            </>
        ),
        alternativas: [
            <>Verdadeiro</>,
            <>Falso</>,
        ],
        correta: 0,
        peso: 2,
        explicacao: (
            <>
                
            </>
        ),
    },
    {
        id: '2',
        nivel: 'proficiency',
        pergunta: (
            <>
                Foi modelado uma transação Produto e a sua Categoria. A tabela Produto armazena informações sobre os produtos, sendo que a coluna CatCod é uma chave estrangeira que faz referência à tabela Categoria, onde CatCod é o código da categoria e CatNom é o nome da categoria.
                <br />
                Precisamos fazer uma listagem de todas as categorias que possuem ao menos um produto vinculado à ela. Dado esta solicitação, analise as alternativas abaixo:
                <br />
                <img src="/gxacademy/img/questoes/5301f5ee-1485-4b09-82cc-361691639813.png" alt="Imagem" style={{ maxWidth: '50%', marginTop: '1rem', marginBottom: '1rem' }} />
                <img src="/gxacademy/img/questoes/6ac3f2de-9346-432c-8e1b-ab6b742990a2.png" alt="Imagem" style={{ maxWidth: '50%', marginTop: '1rem', marginBottom: '1rem' }} />
            </>
        ),
        alternativas: [
            <>
            <pre><code>{String.raw`for each Produto aa
    where not CatCod.IsNull()
    where not CatNom.IsNull()

    msg(CatNom,status)
endfor`}</code></pre>
            </>,
            <>
            <pre><code>{String.raw`for each Produto
    unique CatCod
    
    msg(CatNom,status)
endfor`}</code></pre>
            </>,
            <>
            Nenhuma das anteriores, pois só colocar um "isNull()" não garante que sejam obtidas todos os registros únicos mesmo que filtre todas as categorias que estejam associados a um produto (já que estamos sob a tabela Produto). Também é uma inverdade à partir de Produto acessar CatNom enquanto se faz um unique, pois deve-se utilizar apenas os registros da cláusula para tal. Uma das maneiras de se resolver é acessando Categoria e fazendo o unique lá, e só então dentro deste for each de Categoria fazemos um segundo for each por Produto pegando o primeiro registro, assim conseguimos garantir que somente são listados as categorias únicas que tenham associados em si um produto.
            <pre><code>{String.raw`for each Categoria
    unique CatNom
    
    for each Produto
        print CatNom
        exit
    endfor
endfor`}</code></pre>
            </>,
            <>Nenhuma das anteriores</>,
          ],          
        correta: 1,
        peso: 1,
        explicacao: (
            <>
                
            </>
        ),
    },
    {
        id: '3',
        nivel: 'proficiency',
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
            A modelagem inicial está correta e cumpre o que se pede e serão criados os seguintes index:
            <pre><code>{String.raw`- Criar índice para a PK EmpCod em Empresa.  
- Criar índice para a PK CatCod em Categoria.  
- Criar índice para a PK FilCod e FK EmpCod em Filial.  
- Criar índice para a PK ProCod, FK FilCod e FK CatCod em Produto.`}</code></pre>
            </>,
            <>
            A modelagem inicial está correta e cumpre o que se pede e serão criados os seguintes index:
            <pre><code>{String.raw`- Criar índice para a PK EmpCod em Empresa.
- Criar índice para a PK CatCod em Categoria.
- Criar índice para a PK FilCod, FK EmpCod, FK CatCod e FK ProCod em Filial.
- Criar índice para a PK ProCod e FK FilCod em Produto.`}</code></pre>
            </>,
            <>
            A modelagem inicial está incorreta, pois não é possível selecionar uma categoria para produto. Da maneira como está, serão criados os seguintes index:
            <pre><code>{String.raw`- Criar índice para a PK EmpCod em Empresa.
- Criar índice para a PK CatCod em Categoria.
- Criar índice para a PK FilCod, FK EmpCod e FK CatCod em Filial.
- Criar índice para a PK ProCod e FK FilCod em Produto.`}</code></pre>
            </>,
            <>Nenhuma das anteriores</>,
          ],          
        correta: 2,
        peso: 3,
        explicacao: (
            <>
                
            </>
        ),
    },
];
