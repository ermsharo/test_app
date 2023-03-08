import { useState } from "react";
import ExampleComp from "./ExampleComp";
import { initData } from "./data";

import { itemData } from "./type";
export interface FormInputs {
  search: string;
  filter: string;
}

function App() {
  const [items, setItems] = useState<itemData[]>(initData);

  const onFilter = (searchParam: string) => {
    const filteredData = initData.filter((item) =>
      item.title.toUpperCase().includes(searchParam.toUpperCase())
    );
    setItems(filteredData);
  };
  return <ExampleComp items={items} onFilter={onFilter} />;
}

export default App;
