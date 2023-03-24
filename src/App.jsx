import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";
import { DashboardTemplate } from "./components/templates/DashboardTemplate";
// import "./styles/reset.css";
// import "./styles/global.css";
import "./styles/index.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const valueType = [
    {
      slug: "entrada",
      label: "Entrada",
    },
    {
      slug: "despesa",
      label: "Despesa",
    },
  ];

  const updateListTransactions = (formData) => {
    const newCardWithId = { ...formData, id: uuidv4() };
    setListTransactions([...listTransactions, newCardWithId]);
  };

  const removeCardFromListTransactions = (cardId) => {
    const newCardList = listTransactions.filter((card) => card.id !== cardId);
    setListTransactions(newCardList);
  };

  return (
    <div className="app_container">
      <DashboardTemplate>
        <div className="formAndTotal_container">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            valueType={valueType}
            updateListTransactions={updateListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="list_container">
          <List
            listTransactions={listTransactions}
            removeCardFromListTransactions={removeCardFromListTransactions}
          />
        </div>
      </DashboardTemplate>
    </div>
  );
}

export default App;
