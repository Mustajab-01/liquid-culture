import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div
            className={`md:h-[78vh] sm:h-[60vh] flex items-center justify-center gradientText`}
        >
            <div className='text-center'>
                <h2 className='text-5xl font-bold gradientText mb-4'>404</h2>
                <p className='text-xl mb-4 gradientText'>Page not found</p>
                <Link
                    to='/'
                    className={`bg-teal-400 text-white transition p-3 hover:btn1 rounded-md shadow-md`}
                >
                    Go back to home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
