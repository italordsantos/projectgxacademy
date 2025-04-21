// src/pages/quiz.tsx

import React, { useEffect, useState } from 'react';
import { questoesBanco, Questao } from '../data/questoes';

type Resultado = {
  notaTotal: string;
  notaMaxima: string;
  percentual: string;
};

const QuizPage: React.FC = () => {
  const nivel = 'proficiency';
  const quantidade = 5; // pode ajustar
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [respostas, setRespostas] = useState<{ [key: string]: number }>({});
  const [corrigido, setCorrigido] = useState(false);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [totalPeso, setTotalPeso] = useState(0);

  useEffect(() => {
    const filtradas = questoesBanco.filter(q => q.nivel === nivel);
    //const embaralhadas = filtradas.sort(() => 0.5 - Math.random());
    //const selecionadas = embaralhadas.slice(0, quantidade);
    setQuestoes(filtradas);

    const somaPesos = filtradas.reduce((acc, q) => acc + q.peso, 0);
    setTotalPeso(somaPesos);
  }, [nivel, quantidade]);

  const corrigir = () => {
    let notaTotal = 0;
    let notaMaxima = 0;

    questoes.forEach((q) => {
      const peso = q.peso ?? 1;
      const acertou = respostas[q.id] === q.correta;
      if (acertou) notaTotal += peso;
      notaMaxima += peso;
    });

    const percentual = ((notaTotal / notaMaxima) * 100).toFixed(2);
    setResultado({
      notaTotal: notaTotal.toFixed(2),
      notaMaxima: notaMaxima.toFixed(2),
      percentual,
    });
    setCorrigido(true);
  };

  const selecionar = (id: string, index: number) => {
    setRespostas((prev) => ({ ...prev, [id]: index }));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Prova: Nível {nivel}</h2>
      {questoes.map((q, idx) => (
        <div key={q.id} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <b>
              {q.id}.
              <i> ({((q.peso / totalPeso) * 100).toFixed(1)}%)</i>
            </b>{' '}
            {q.pergunta}
          </div>

          {q.alternativas.map((alt, i) => {
            const isCorreta = (i+1) === q.correta;
            const isSelecionada = respostas[q.id] === i;

            let cor = '';
            if (corrigido) {
              if (isCorreta) cor = 'green';
              else if (isSelecionada) cor = 'red';
            }

            return (
              <div key={i} style={{ marginBottom: '0.5rem', color: cor }}>
                <label>
                  <input
                    type="radio"
                    name={q.id}
                    value={i}
                    disabled={corrigido}
                    checked={isSelecionada}
                    onChange={() => selecionar(q.id, i)}
                  />{' '}
                  {alt}
                </label>
              </div>
            );
          })}

          {corrigido && (
            <div style={{ marginTop: '0.5rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
              <strong>Explicação:</strong> {q.explicacao}
            </div>
          )}
        </div>
      ))}

      {!corrigido && (
        <button onClick={corrigir} style={{ padding: '0.5rem 1rem', fontWeight: 'bold' }}>
          Corrigir
        </button>
      )}

      {corrigido && resultado && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Resultado</h3>
          <p>
            Pontuação: <strong>{resultado.notaTotal}</strong> de <strong>{resultado.notaMaxima}</strong><br />
            Percentual: <strong>{resultado.percentual}%</strong>
          </p>
        </div>
      )}

    </div>
  );
};

export default QuizPage;
