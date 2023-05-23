import { PulseLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='flex content-center items-center h-[100vh]'>
            <PulseLoader
            color="#1B83C2"
            size={17}
            speedMultiplier={1}
            className="m-auto"
            />
        </div>
    )
}

export default Spinner