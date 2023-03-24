import styles from "./style.module.css";
import { useState } from "react";

export const Form = ({
  listTransactions,
  setListTransactions,
  valueType,
  updateListTransactions,
}) => {
  const [formData, setFormData] = useState({
    dataValue: "",
    dataDescription: "",
    dataValueType: "",
  }); //Um único estado recebendo um objeto que pode receber uma coleção de dados.

  const submitForm = (event) => {
    event.preventDefault();

    setListTransactions([...listTransactions, formData]); //Atualizando o state
    // console.log(listTransactions);
    updateListTransactions(formData);

    setFormData({
      //Limpando as entradas do form
      dataValue: "",
      dataDescription: "",
      dataValueType: "",
    });
  };

  return (
    <form className={styles.form_container} onSubmit={submitForm}>
      <div className={styles.description_container}>
        <label htmlFor="description">Descrição</label>
        <input
          name="description"
          placeholder="Digite aqui sua descrição"
          type="text"
          value={formData.dataDescription}
          onChange={(event) =>
            setFormData({ ...formData, dataDescription: event.target.value })
          }
          required
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div className={styles.value_container}>
        <label htmlFor="dataValue">Valor (R$)</label>
        <input
          name="dataValue"
          placeholder="Valor"
          type="number"
          value={formData.dataValue}
          onChange={(event) =>
            setFormData({ ...formData, dataValue: Number(event.target.value) })
          }
          required
        />
      </div>
      <div className={styles.typeTransaction_container}>
        <label htmlFor="typeValue">Tipo de valor</label>
        <select
          name="typeValue"
          value={formData.dataValueType}
          onChange={(event) => {
            setFormData({ ...formData, dataValueType: event.target.value });
          }}
          required
        >
          <option value="">Tipo da transação</option>
          {valueType.map((type) => (
            <option key={type.slug} value={type.slug}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};
