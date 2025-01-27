import { createContext, useContext, useState } from "react";


const scrollContext = createContext();



const ScrollContext = ({children}) => {
    const [refData, setRefData] = useState([]);
  return (
    <scrollContext value={{refData, setRefData}}>
        {children}
    </scrollContext>
  )
}


const useScrollContext = () => useContext(scrollContext);

export { useScrollContext, ScrollContext}
