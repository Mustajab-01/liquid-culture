import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
const AppContext = createContext();
const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [liquid, setLiquid] = useState([]);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios(`${URL}${searchTerm}`);
            const data = await response.data;
            const { drinks } = data;
            setLoading(false);
            if (drinks) {
                const newDrinks = drinks.map(
                    ({
                        idDrink,
                        strDrink,
                        strCategory,
                        strAlcoholic,
                        strGlass,
                        strInstructions,
                        strDrinkThumb,
                    }) => {
                        return {
                            id: idDrink,
                            title: strDrink,
                            category: strCategory,
                            alcoholic: strAlcoholic,
                            glass: strGlass,
                            instructions: strInstructions,
                            image: strDrinkThumb,
                        };
                    }
                );
                setLiquid(newDrinks);
            } else {
                setLiquid([]);
            }
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, [searchTerm]);
    const value = {
        loading,
        searchTerm,
        setSearchTerm,
        liquid,
        error,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider };
