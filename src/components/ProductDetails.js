import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, seelectedProduct } from '../redux/actions/productActions';
import apiCall from '../apis/apiCall';

function ProductDetails(props) {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const { _id, title, category, price, image, description } = product
    const { pid } = useParams()
    
    console.log(product);
    useEffect(() => {
       dispatch(fetchProduct(pid))
    }, [pid])
    return (
        <div className='ui grid container'>
            <div className='ui placeholder segment'>
                <div className='ui two column stackable center aligned grid'>
                    <div className='ui vertical divider'>AND</div>
                    <div className='middle aligned row'>
                        <div className='column 1p'>
                            <img className='ui fluid image' src={image} /></div>
                        <div className='column rp'>
                            <h1>{title}</h1>
                            <h2>
                                <a className='ui teal tag label'>${price}</a>
                            </h2>
                            <h3 className='ui brown block header'>{category}</h3>
                            <p>{description}</p>
                            <div className='ui vertical animated button' tabIndex='0'>
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content'>Add To Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;