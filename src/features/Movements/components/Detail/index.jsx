import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './styles.css';

const Detail = (props) => {
  const { detailNumber, cvu } = props;
  return (
    <div className="detail-container">
      <span className="detail-saldo">saldo disponible</span>
      <h4 className="detail-number">{detailNumber}</h4>
      <div className="detail-divider" />
      <p className="detail-cvu">{cvu}</p>
    </div>
  );
};

Detail.propTypes = {
  detailNumber: PropTypes.string.isRequired,
  cvu: PropTypes.string.isRequired,
};

export default Detail;
