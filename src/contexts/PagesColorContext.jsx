import { createContext, useContext, useEffect, useState} from 'react'


const PageColorContext = createContext();

 const PagesColorProvider = ({children}) => {
  const [pageColors, setPageColors] = useState([]);

  useEffect(()=>{
    const color = [
      {page: 'home', color: 'bg-red-500', navColor: '#82BC34', headerColor: 'black', headerButton: '#ffffff'},
      {page: 'about', color: 'linear-gradient(to right, #f3eee8 50%, #cbd7fd 50%)', navColor: '#2A89DB', headerColor: 'black', headerButton: '#2870AE'},
      {page: 'community', color: '#F5F5F7', navColor: '#82BC34', headerColor: 'black', headerButton: '#2870AE'},
      {page: 'contact', color: 'linear-gradient(90deg, #43C6AC 0%, #F8FFAE 100%)', navColor: '#FFFFFF', headerColor: 'black', headerButton: '#2870AE'},
      {page: 'solution', pages: [
        {color: 'linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)', navColor: '#82BC34', headerColor: 'black', headerButton: '#2870AE'},
        {color: 'linear-gradient(90deg, #C9D6FF 0%, #E4F2F7 100%)', navColor: '#2A89DB', headerColor: 'black', headerButton: '#2870AE'},
        {color: 'linear-gradient(270deg, #C4BDF4 0%, #F0ECF8 100%)', navColor: '#2A89DB', headerColor: 'black', headerButton: '#2870AE'},
        {color: 'linear-gradient(90deg, #F2FCF4 0%, #76E1ED 100%)', navColor: '#2A89DB', headerColor: 'black', headerButton: '#2870AE'},
        {color: 'linear-gradient(270deg, #A2C4F3 0%, #E0EAFC 100%)', navColor: '#2A89DB', headerColor: 'black', headerButton: '#2870AE'},
        {color: 'linear-gradient(270deg, #6EEBC0 0%, #F2EED1 95.31%)', navColor: '#2A89DB', headerColor: 'black', headerButton: '#2870AE'},
        {color: 'linear-gradient(180deg, #FFFFFF 0%, #ECE9E6 95.83%)', navColor: '#82BC34', headerColor: 'black', headerButton: '#2870AE'}
      ]},
      
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