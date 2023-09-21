import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const AllProducts = useLoaderData();
    const {products} = AllProducts;

    return (
        <div className="grid grid-cols-3 mt-10 container mx-auto">
            {
                products?.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;