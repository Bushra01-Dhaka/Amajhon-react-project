import { FaArrowAltCircleRight,  FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
const Product = ({ product }) => {
    const { id, thumbnail, title, stock, price } = product;

    return (
        <div>


            <div className=" w-96  bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">

                <img className="h-[200px] w-full rounded-t-lg" src={thumbnail} alt="" />

                <div className="p-5 flex justify-between">

                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>

                    <h3>Stock {stock}</h3>
                </div>
                <div className="p-5 flex justify-between">
                    <h4 className='text-xl font-medium'>${price}</h4>
                    <div className='flex gap-2 text-xl'>
                        <span className='text-purple-400'><FaHeart /></span>
                       <Link to={`/products/${id}`}> <span><FaArrowAltCircleRight /></span></Link>
                    </div>

                </div>
            </div>


        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;