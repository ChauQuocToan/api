import React, { useState,useEffect } from 'react'
import productApi from '../../../api/productApi';
import Loading from '../features/Loading';
import Product from './Product';


export default function Products(){
  //khi load du lieu xong => false
  const [loading,setLoading]=useState(true);
  //Bien products chua danh sach sp
  const[products, setProducts]=useState([]);
  useEffect(() => {
    const fetchProducts=async()=>{
      var response =await productApi.getAll();
      console.log(response)
      setLoading(false)
      setProducts(response.data)
    };  
    fetchProducts()
  }, [])

  var myView=loading === true?<Loading/>:
    (
      products.map((product)=>{
          return<Product product={product} key={product.id}/>
      })
    )



    return(
    <div className="well well-small">
  <h3>Our Products </h3>
  <div className="row-fluid">
    <ul className="thumbnails">
        {myView}
    </ul>
  </div>
</div>

    )
}