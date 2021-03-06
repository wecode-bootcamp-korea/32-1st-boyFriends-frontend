import React from 'react';
import '../FilterView/Filterview.scss';

function Filterview({ isViewChange }) {
  return (
    <div className="filterView">
      <div className="selectOption">
        <select className="selectView">
          <option>20개씩 보기</option>
          <option>40개씩 보기</option>
          <option>60개씩 보기</option>
          <option>80개씩 보기</option>
        </select>
      </div>
      <div className="changeView">
        <button className="fiveGrid" onClick={isViewChange} type="button">
          <i className="fa-solid fa-border-all" />
        </button>
        <button className="doubleGrid" onClick={isViewChange} type="button">
          <i className="fa-solid fa-table-columns" />
        </button>
      </div>
    </div>
  );
}

export default Filterview;
