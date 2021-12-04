import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './styles.css';

const Table = (props) => {
  const { movements } = props;

  return (
    <div className="table">
      <div className="table-title-header">
        <h2 className="table-title">Movimientos</h2>
      </div>
      {movements !== undefined ? (
        movements.map((element) => (
          <div className="table-content">
            <h4 className="table-date">
              {new Date(element.date)
                .toLocaleDateString('es-AR')
                .replace(/([/])/g, '-')}
            </h4>
            <h4 className="table-description">{element.info}</h4>
            <h4 className="table-amount">
              {element.debit > 0 ? element.debit : element.credit}
            </h4>
          </div>
        ))
      ) : (
        <h4 className="table-description">No hay movimientos recientes...</h4>
      )}
    </div>
  );
};

Table.propTypes = {
  movements: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      debit: PropTypes.number.isRequired,
      credit: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Table;
