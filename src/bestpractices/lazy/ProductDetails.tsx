import React from 'react'
import { ProductType } from './model'

export default function ProductDetails(props: { product: ProductType }) {
    return (
        <div>
            <h1>{props.product.name}</h1>
            <img src={props.product.imageUrl} alt={props.product.name} style={{width:200}}/>
            <p>{props.product.description}</p>
            <p>Price: {props.product.price}</p>
            <p>Rating: {props.product.rating}</p>
            {/* other details */}
        </div>
    )
}
