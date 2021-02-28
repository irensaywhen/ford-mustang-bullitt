import React from 'react';
import { mergeClasses } from '../../utilities';

const Table = props => {
  // Thead rows
  const theadRowItems = props.theadRow
    ? props.theadRow.map((thData, index) => <th key={index}>{thData}</th>)
    : null;

  // Tbody rows
  const tbodyRows = props.tbodyRows
    ? props.tbodyRows.map((row, index) => (
        <tr key={index}>
          {row.map((tdData, index) => (
            <td key={index}>{tdData}</td>
          ))}
        </tr>
      ))
    : null;

  // tHead caption
  const tHeaderCaption = props.tHeaderCaption ? (
    <caption className='has-text-left pb-3'>{props.tHeaderCaption}</caption>
  ) : null;

  // tFooter caption
  const tFooterCaption = props.tFooterCaption ? (
    <caption
      className='is-size-7 has-text-left'
      style={{ captionSide: 'bottom' }}
    >
      {props.tFooterCaption}
    </caption>
  ) : null;

  const classes = mergeClasses({
    defaultClasses: 'table is-striped is-hoverable is-fullwidth',
    extraClasses: props.className,
  });

  return (
    <table className={classes}>
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
