import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Liquids = () => {
    const { liquid } = useGlobalContext();

    const allLiquids = liquid.map(({ id, title, category, image }) => {
        return (
            <div className='container px-5 py-4 mx-auto' key={id}>
                <div className='-m-4 p-2'>
                    <Link to={`/liquid/${id}`}>
                        <div className='h-full transition shadow-neutral-200 hover:shadow-neutral-400 shadow-2xl hover:shadow-xl rounded-lg overflow-hidden'>
                            <img
                                className='lg:h-48 md:h-36 w-full object-cover object-center'
                                src={image}
                                alt={title}
                            />
                            <div className='p-6'>
                                <h3 className='text-xs font-medium mb-1'>
                                    {category}
                                </h3>
                                <h2 className='text-lg font-medium mb-3'>
                                    {title}
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    });
    return allLiquids;
};

export default Liquids;
