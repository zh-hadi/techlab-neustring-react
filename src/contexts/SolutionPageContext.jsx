import { createContext, useContext, useState } from "react"

const SolutionPageContext = createContext();

const SolutionPageProvider = ({children}) => {
    const [solutionIndex, setSolutionIndex] = useState(0);

  return (
    <SolutionPageContext.Provider value={{solutionIndex, setSolutionIndex}}>
        {children}
    </SolutionPageContext.Provider>
  )
}

const useSolutionPageIndex = () => useContext(SolutionPageContext)


export { SolutionPageProvider, useSolutionPageIndex}
// export default SolutionPageContext