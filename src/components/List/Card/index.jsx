import styles from "./style.module.css";
import trash from "../../../assets/img/trash.svg";

export const Card = ({ listTransactions, removeCardFromListTransactions }) => {
  return (
    <>
      {listTransactions.map((transaction) => (
        <li
          className={
            // Uso de operador ternario para fins de estilo
            transaction.dataValueType === "entrada"
              ? styles.cardTransaction
              : styles.cardTransaction_Expense
          }
          key={transaction.id}
        >
          <div className={styles.card_titleAndValue}>
            <h3>
              {transaction.dataDescription[0].toUpperCase() +
                transaction.dataDescription.substring(1)}
            </h3>
            <small>R$ {parseFloat(transaction.dataValue).toFixed(2)}</small>
          </div>
          <div className={styles.card_typeAndDelete}>
            <small>
              {transaction.dataValueType[0].toUpperCase() +
                transaction.dataValueType.substring(1)}
            </small>
            <button
              onClick={() => removeCardFromListTransactions(transaction.id)}
            >
              <img src={trash} alt="icon-trash"></img>
            </button>
          </div>
        </li>
      ))}
    </>
  );
};
