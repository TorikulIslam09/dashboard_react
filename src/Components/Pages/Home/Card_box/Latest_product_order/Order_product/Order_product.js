import React from 'react';
import './Order_product.scss';

const Order_product = ({orders}) => {
    const {title, images, brand, description} = orders;
    return (
        <div className='parents'>
        
                <div className="order">
                    <div className="img">
                        <img src={images[0]} alt="" />
                    </div>
                    <div className="content">
                        <span>{title}</span>
                    </div>
                    <div className="description">
                        <span>{brand}</span>
                    </div>
                    <div className="btn">
                        <button type="button" class="btn btn-light"> Order </button>
                    </div>
                </div>

        </div>
    );
};

export default Order_product;