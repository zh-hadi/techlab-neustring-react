import { createContext, useContext, useEffect, useState} from 'react'


const PageColorContext = createContext();

 const PagesColorProvider = ({children}) => {
  const [pageColors, setPageColors] = useState([]);

  useEffect(()=>{
    const color = [
      {page: 'home', color: 'bg-red-500', navColor: 'black', headerColor: 'black', headerButton: 'black'},
      {page: 'about', color: 'linear-gradient(to right, #f3eee8 50%, #cbd7fd 50%)', navColor: 'red', headerColor: 'black', headerButton: 'black'},
      {page: 'community', color: '#F5F5F7', navColor: 'yellow', headerColor: 'black', headerButton: 'yellow'},
      {page: 'contact', color: 'linear-gradient(90deg, #43C6AC 0%, #F8FFAE 100%)', navColor: 'black', headerColor: 'black', headerButton: 'black'},
      {page: 'solution', color: 'linear-gradient(270deg, #C4BDF4 0%, #F0ECF8 100%)', navColor: 'black', headerColor: 'black', headerButton: 'black'},
    ];
    setPageColors(color);
  }, []);


  return (
    <PageColorContext.Provider value={pageColors}>
      {children}
    </PageColorContext.Provider>
  )
}

const usePageColors = () => useContext(PageColorContext);



export { PagesColorProvider, usePageColors }
// export default PagesColorProvider