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

  const tFooterCaption = props.tFooterCaption ? (
    <tfoot>
      <tr className='has-text-left is-size-7'>
        <td colSpan={theadRowItems.length}>{props.tFooterCaption}</td>
      </tr>
    </tfoot>
  ) : null;

  return (
    <table className='table is-striped is-hoverable is-fullwidth has-text-centered'>
      <thead>
        <tr>{theadRowItems}</tr>
      </thead>
      <tbody>{tbodyRows}</tbody>
      {tFooterCaption}
    </table>
  );
};

export default Table;
