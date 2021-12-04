import React, { useEffect, useState } from 'react';

// Components
import ButtonRow from './components/ButtonRow';
import Detail from './components/Detail';

// Stylesheet
import './styles.css';

const Movements = () => {
  const [detailData, setDetailData] = useState([]);
  const [errorThrown, setErrorThrown] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  async function fetchData() {
    await fetch(
      'https://run.mocky.io/v3/d3586928-f1a4-48d2-9a0e-1140bab1e562',
      {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setDetailData(data);
      })
      .catch((error) => {
        setErrorThrown(true);
        setErrorMessage(
          `Ocurrio un error al cargar los datos. Error: ${error}`,
        );
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="mi-cuenta">Mi Cuenta</h2>
      {detailData.result ? (
        <Detail
          detailNumber={formatter
            .format(detailData.result.balance.result.total)
            .toString()}
          cvu={`CVU: ${detailData.result.bankInfo.result.cvu}`}
        />
      ) : (
        <div>
          {errorThrown ? <h2>{errorMessage}</h2> : <div className="spinner" />}
        </div>
      )}
      <ButtonRow />
    </div>
  );
};

export default Movements;
