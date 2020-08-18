import React,{createContext, useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const PortfolioContext = createContext();

const PortfolioContextProvider = (props) => {
    const[items, setItems] = useState([]);  

    useEffect(() => {
        axios.get('http://localhost:1337/featureds').then(res =>{
            setItems(res.data);
        })
    })
    return ( 
        <PortfolioContext.Provider value={{items}}>
            {props.children}
        </PortfolioContext.Provider>
     );
}
 
export default PortfolioContextProvider;