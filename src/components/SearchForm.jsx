import { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { searchTerm, setSearchTerm } = useGlobalContext();

    const [expanded, setExpanded] = useState(false);
    const inputRef = useRef(null);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const setInputStyle = ({ width, opacity }) => {
        const ICS = inputRef.current.style;
        ICS.width = width;
        ICS.opacity = opacity;
    };

    useEffect(() => {
        if (inputRef.current) {
            if (expanded) {
                setInputStyle({ width: '50vw', opacity: '1' });
                inputRef.current.focus();
            } else {
                setInputStyle({ width: '0', opacity: '0' });
            }
        }
    }, [expanded]);

    return (
        <div className='relative flex justify-start items-center m-4 select-none text-white'>
            <div
                className='bg-teal-400 z-50 w-fit p-3 rounded-full shadow-2xl cursor-pointer'
                onClick={toggleExpanded}
            >
                {!expanded ? (
                    <AiOutlineSearch className='text-3xl drop-shadow-md' />
                ) : (
                    <RxCross1 className='text-3xl drop-shadow-md' />
                )}
            </div>
            <div className='absolute left-8'>
                <input
                    ref={inputRef}
                    className={`gradientText pl-8 p-[0.7rem] rounded-r-full shadow-sm border border-teal-400 font-semibold transition-all duration-500 ease opacity-0 outline-none`}
                    type='text'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchForm;
