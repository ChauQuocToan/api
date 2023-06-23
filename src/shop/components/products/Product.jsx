import React from 'react'
import { Link } from 'react-router-dom';
import AppUrl from '../../../api/AppUrl';

export default function Product(prop){
  var product=prop.product;
    return(
        <li className="span3" style={{height:360,margin:3}}>
        <div className="thumbnail" style={{height:360}}>
          <Link to={`/products/${product.slug}`} className="overlay" > </Link>
          <a className="zoomTool" href="product_details.html" title="add to cart" style={{display: 'none'}}><span className="icon-search" /> QUICK VIEW</a>
          <Link to={`/products/${product.slug}`}><img src={`${AppUrl.ImgUrl}${product.image}`} alt='h1' /></Link>
          <div className="caption cntr">
            <p>{product.product_name}</p>
            <p><strong> ${product.price}</strong></p>
            <h4><a className="shopBtn" href="#st" title="add to cart"> Add to cart </a></h4>
            <br className="clr" />
          </div>
        </div>
      </li>
    )
}