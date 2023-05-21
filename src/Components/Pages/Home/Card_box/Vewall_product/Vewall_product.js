import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Show_product from './Show_product/Show_product';


// import ProductItems from './productItems/productItems';


const Vewall_product = () => {
    const allproduct = useLoaderData();
    const {products} = allproduct;
    // console.log(products)
    return (
        <div className='row row-cols-1 row-cols-md-2 g-4'>
            {
                products.map(items => <Show_product items={items} key={items.id}/>)
            }
        </div>
    );
};

export default Vewall_product;