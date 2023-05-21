import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Show_product from './Show_product/Show_product';


// import ProductItems from './productItems/productItems';


const Vewall_product = () => {
    const allproduct = useLoaderData();
    const {products} = allproduct;
    const navigate = useNavigate()
    // console.log(products)
    return (
        <div className="div">
        <div class="card-header mb-5">
            <button type="button" class="btn btn-outline-success" onClick={() => navigate(-1)}> Go Back</button>
        </div>

            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    products.map(items => <Show_product items={items} key={items.id}/>)
                }
            </div>
        </div>

    );
};

export default Vewall_product;