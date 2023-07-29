import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../components';
import { ErrorPage } from '../pages';
const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
const SingleLiquidPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [liquid, setLiquid] = useState(null);
    const [error, setError] = useState(null);
    const gradientClasses =
        'bg-gradient-to-bl from-cyan-400 to-teal-400 text-transparent bg-clip-text';
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios(`${URL}${id}`);
            const { drinks } = await response.data;
            setLoading(false);
            if (drinks) {
                const {
                    idDrink: id,
                    strDrink: title,
                    strCategory: category,
                    strAlcoholic: alcoholic,
                    strGlass: glass,
                    strInstructions: instructions,
                    strDrinkThumb: image,
                } = drinks[0];
                const newLiquids = {
                    id,
                    title,
                    category,
                    alcoholic,
                    glass,
                    instructions,
                    image,
                };
                setLiquid(newLiquids);
            } else {
                setLiquid(null);
            }
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, [id]);
    if (loading) return <Loading />;
    if (error) {
        setLoading(!loading);
        return (
            <h3 className='w-screen h-[70vh] flex justify-center items-center text-4xl font-extrabold text-red-500'>
                {error}
            </h3>
        );
    }
    if (!liquid) return <ErrorPage />;
    const { title, category, alcoholic, glass, instructions, image } = liquid;
    console.log(title);
    return (
        <section className='select-none h-full w-full'>
            <div className='p-4 md:p-14 flex flex-col md:flex-row justify-center md:gap-12'>
                <img
                    className='w-full object-cover object-center rounded md:w-[39vw] md:h-[75vh]'
                    src={image}
                    alt={title}
                />
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-wrap justify-between mt-4'>
                        <span className='inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest'>
                            {alcoholic}
                        </span>
                        <span className='inline-block py-1 px-2 rounded bg-indigo-50 text-fuchsia-400 text-xs font-medium tracking-widest'>
                            {glass}
                        </span>
                    </div>
                    <span className='inline-block py-1 px-2 rounded text-fuchsia-400 text-xs font-medium tracking-widest mr-4'>
                        Category&nbsp; | &nbsp;
                        <span className='text-indigo-400'>{category}</span>
                    </span>
                    <h2
                        className={`font-extrabold text-3xl md:text-5xl mb-4 ${gradientClasses}`}
                    >
                        {title}
                    </h2>
                    <p className='text-lg font-bold mb-4'>{instructions}</p>
                </div>
            </div>
        </section>
    );
};

export default SingleLiquidPage;
