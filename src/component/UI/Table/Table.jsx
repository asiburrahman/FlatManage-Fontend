import React from 'react';
import styles from './Table.module.css';

const Table = ({ children, className = '', striped = false }) => {
  return (
    <div className={`${styles.tableContainer} ${className}`}>
      <table className={`${styles.table} ${striped ? styles.striped : ''}`}>
        {children}
      </table>
    </div>
  );
};

const Head = ({ children }) => <thead className={styles.thead}>{children}</thead>;
const Body = ({ children }) => <tbody className={styles.tbody}>{children}</tbody>;
const Row = ({ children, className = '' }) => (
  <tr className={`${styles.tr} ${className}`}>{children}</tr>
);
const HeaderCell = ({ children, className = '' }) => (
  <th className={`${styles.th} ${className}`}>{children}</th>
);
const Cell = ({ children, className = '' }) => (
  <td className={`${styles.td} ${className}`}>{children}</td>
);

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;

export default Table;
