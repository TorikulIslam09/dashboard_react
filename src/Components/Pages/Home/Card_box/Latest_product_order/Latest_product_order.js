import React, { useEffect, useState } from 'react';
import './Latest_product_order.scss'
import Product from './Product/Product';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

const Latest_product_order = () => {
    const [dataload, setDataload] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setDataload(data.products))

    }, [])
    return (
        <div className='letest-product card border-0 py-3'>
            <h3>Latest Products</h3>
           {
             dataload.map(data => <Product data={data} key={data.id} />).slice(0, 4)
            }

            <div className="btn-div text-end">
                <Link to='/product'> <button type="button" class="btn btn-outline-secondary">View All <ArrowRightAltIcon/></button> </Link>        
            </div>
        </div>
    );
};

export default Latest_product_order;