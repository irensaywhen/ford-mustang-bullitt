import React from 'react';

const Table = props => {
  const theadRowItems = props.theadRow.map((thData, index) => (
    <th key={index}>{thData}</th>
  ));

  const tbodyRows = props.tbodyRows.map((row, index) => (
    <tr key={index}>
      {row.map((tdData, index) => (
        <td key={index}>{tdData}</td>
      ))}
    </tr>
  ));

  const tHeaderCaption = props.tHeaderCaption ? (
    <caption className='has-text-left pb-3'>{props.tHeaderCaption}</caption>
  ) : null;

  const tFooterCaption = props.tFooterCaption ? (
    <caption
      className='is-size-7 has-text-left'
      style={{ captionSide: 'bottom' }}
    >
      {props.tFooterCaption}
    </caption>
  ) : null;

  const tableClasses = [
    'table is-striped is-hoverable is-fullwidth',
    props.hasTextLeft ? 'has-text-left' : 'has-text-centered',
  ];

  return (
    <table className={tableClasses.join(' ')}>
      {tHeaderCaption}
      <thead>
        <tr>{theadRowItems}</tr>
      </thead>
      <tbody>{tbodyRows}</tbody>
      {tFooterCaption}
    </table>
  );
};

export default Table;
