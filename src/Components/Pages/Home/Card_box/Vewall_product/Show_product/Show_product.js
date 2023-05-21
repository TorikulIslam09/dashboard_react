import React from 'react';
import { Link } from 'react-router-dom';

const Show_product = ({items}) => {
    const {title, images, brand,description, id} = items;
    console.log(title)
    return (
    
            <div class="col">
                <div class="card p-3">
                <img src={images[0]} class="card-img-top h-25 img-fluid" alt="..."/>
                <div class="card-body">
                    <small class="text-muted">{brand}</small>
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                   <Link to={`/details/${id}`}> <button class="btn btn-primary w-100" type="button">Vew Deatils</button> </Link>
                </div>
                </div>

            </div>
        
    );
};

export default Show_product;