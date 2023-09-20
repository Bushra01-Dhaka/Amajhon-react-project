import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const {products} = useLoaderData();
        console.log(products);

    return ( 
        <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;