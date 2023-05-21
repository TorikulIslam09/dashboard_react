import React from 'react';

const Product = ({data}) => {
    
    const {title, images, brand,description} = data;
    
    return (
        <div className=''>
            <div class="card mb-3 p-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={images[0]}  class="img-fluid rounded-start h-100" alt=""/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text"><small class="text-muted">{brand}</small></p>
                        <p class="card-text"><small class="text-muted">{description}</small></p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;