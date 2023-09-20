// import RingLoader from "react-spinners/ClipLoader";
import { RingLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div  className="container mx-auto font-bold flex justify-center items-center text-center my-20">
             <RingLoader
                color={`#6c2ad5`}
                loading={`loading`}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /> 
            
        </div>
    );
};

export default Spinner;