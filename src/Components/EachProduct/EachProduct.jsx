
import { FaCartArrowDown } from "react-icons/fa";
import { useLoaderData} from "react-router-dom";



const EachProduct = () => {
    
    const data = useLoaderData();
    console.log(data);

    const {brand, thumbnail,description, title, price } = data;
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center gap-8 m-12 items-center">
             <div className="w-[100%] md:w-[50%]">
                <img className="h-[200px] md:h-[400px] w-full rounded shadow-lg" src={thumbnail} alt="" />
             </div>
             <div className="w-[100%] md:w-[50%]">
                <p>{brand}</p>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-xl text-gray-700 my-4 pb-4 border-b-2 border-gray-300">{description}</p>
                
                <h4 className="text-2xl font-medium">${price}</h4>
                <button className="btn text-black font-bold w-full p-4 my-4 bg-[#BEADFA] hover:bg-purple-400"><FaCartArrowDown/> Add to cart </button>


             </div>

           </div>
        </div>
    );
};

export default EachProduct;