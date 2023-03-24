import styles from "./style.module.css";

export const TotalMoney = ({ listTransactions }) => {
  if (listTransactions.length > 0) {
    const total = listTransactions
      .reduce((previousValue, currentValue) => {
        if (currentValue.dataValueType === "entrada") {
          return previousValue + currentValue.dataValue;
        } else if (currentValue.dataValueType === "despesa") {
          return previousValue - currentValue.dataValue;
        }
      }, 0)
      .toFixed(2);

    return (
      <>
        <div className={styles.total_container}>
          <div className={styles.totalValue_container}>
            <p>Valor total:</p>
            <small>R$ {total}</small>
          </div>
          <p>O valor se refere ao saldo</p>
        </div>
      </>
    );
  }
};
