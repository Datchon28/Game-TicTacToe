import { createContext, useEffect, useState } from "react";
import ReducerDataPlayer from "./function-store";

const StoreContext = createContext();

function Store({ children }) {
  const [data, setData] = useState(ReducerDataPlayer().getData());
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
}

export default Store;
