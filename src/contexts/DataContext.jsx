import { createContext, useContext, useState, useEffect } from "react";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState("hadiuzzaman");

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("http://localhost:8000/api/data");
        const data = await response.json();
        setApiData(data); // Update the context with the fetched data
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <dataContext.Provider value={{ apiData, setApiData }}>
      {children}
    </dataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(dataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export { DataContextProvider, useDataContext };