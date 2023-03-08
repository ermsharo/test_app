import React, { useEffect, useState } from "react";
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
    console.log("parameter", searchParam);

    const filterdData = initData.filter(item => item.title.toUpperCase().includes(searchParam.toUpperCase()));
    setItems(filterdData); 
  };
  return <ExampleComp items={items} onFilter={onFilter} />;
}

export default App;
