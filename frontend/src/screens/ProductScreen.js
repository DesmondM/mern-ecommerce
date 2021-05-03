import React from 'react';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props) {
    const product = data.products.find(x=>x._id === props.match.params.id);  // ...params.id is the value that user enters in <Route path="product/:id" compone... in apps.js
    if(!product){
        return <div> Product not found</div>;
    }
    return (
        <div>
            <div className = "row">
                <div className ="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
            <div className="col-1">
                <ul>
                    <li>
                        <Rating rating={product.rating}
                                numReviews={product.numReviews}>

                                </Rating>
                    </li>
                    <li>Price: R{product.price}</li>
                    <li>Description: <p>{product.description}</p></li>
                </ul>
            </div>
            <div className="col-1"></div>
        </div>
        </div>
    );
}
