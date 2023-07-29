import { Liquids, Loading } from './';
import { useGlobalContext } from '../context';
const LiquidList = () => {
    const { error, loading, liquid } = useGlobalContext();
    if (error) {
        return (
            <h3 className='w-screen h-[70vh] flex justify-center items-center text-4xl font-extrabold text-red-500'>
                {error}
            </h3>
        );
    }

    if (loading) {
        return <Loading />;
    }

    if (!liquid || liquid.length === 0) {
        return (
            <h2 className='w-screen h-[70vh] flex justify-center items-center text-4xl font-extrabold text-teal-500'>
                Sorry, no items found.
            </h2>
        );
    }
    return (
        <section className='w-full grid lg:grid-cols-4 lg:grid-rows-4 md:grid-cols-3 md:grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 select-none'>
            <Liquids />
        </section>
    );
};

export default LiquidList;
