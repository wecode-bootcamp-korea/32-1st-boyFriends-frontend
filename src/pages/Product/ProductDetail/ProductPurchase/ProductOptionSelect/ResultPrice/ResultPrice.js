import React from 'react';
import './ResultPrice.scss';

function ResultPrice({ resultCount, itemPrice }) {
  return (
    <div className="resultPrice">
      <strong className="sumText">총 상품 금액</strong>
      <div className="productSum">
        <em className="productCount">총 수량 ({resultCount})개</em>
        <span className="productPriceSum">{itemPrice.toLocaleString()} 원</span>
      </div>
    </div>
  );
}

export default ResultPrice;
