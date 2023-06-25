import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.data}>{type}</td>
              <td className={css.data}>{amount}</td>
              <td className={css.data}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
