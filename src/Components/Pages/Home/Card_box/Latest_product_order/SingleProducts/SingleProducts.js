import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleProducts = () => {
    const singleItems = useLoaderData();
    const {title,description,price,stock,category,images} = singleItems
    console.log(singleItems)
    const navigate = useNavigate()
    return (
        <div>
            <div class="card mb-3">
            <img src={images[0]} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Titele: {title}</h5>
                <p class="card-text">Price: {price}</p>
                <p class="card-text">{description}</p>
                <p class="card-text">Stock: {stock}</p>
                <p class="card-text">Category: {category}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-outline-primary" onClick={() => navigate(-1)} > Go Back </button>            </div>
            </div>
        </div>
    );
};

export default SingleProducts;