import styles from "./style.module.css";
import { Card } from "./Card";

export const List = ({ listTransactions, removeCardFromListTransactions }) => {
  return (
    <>
      <h3 className={styles.title_list}>Resumo financeiro</h3>
      <div className={styles.container_list}>
        {listTransactions.length > 0 ? (
          <ul className={styles.container_cards}>
            <Card
              listTransactions={listTransactions}
              removeCardFromListTransactions={removeCardFromListTransactions}
            />
          </ul>
        ) : (
          <p>Você ainda não possui nenhum lançamento</p>
        )}
      </div>
    </>
  );
};
