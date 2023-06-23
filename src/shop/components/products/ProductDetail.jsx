import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import AppUrl from '../../../api/AppUrl';
import productApi from '../../../api/productApi';
import Loading from '../features/Loading'

export default function ProductDetail(){
  var {slug}=useParams();
  const [Loading,setLoading]=useState(true);
  const [product,setProduct]=useState({});
  useEffect(()=>{
   const fetchProduct= async() => {
      var response=await productApi.getBySlug(slug);
      console.log(response)
      setProduct(response)
      setLoading(false)
    }
    fetchProduct()
  },[slug])
  var myView = Loading === true? <Loading/>:
  (
    
    <div className="well well-small">
    <div className="row-fluid">
      <div className="span5">
        <div id="myCarousel" className="carousel slide cntr">
          <div className="carousel-inner">
            <div className="item active">
              <a href="#st"> <img src={`${AppUrl.ImgUrl}${product.image}`} alt='h1'style={{width: '100%'}} /></a>
            </div>


          </div>
          <a className="left carousel-control" href="#stmyCarousel" data-slide="prev">‹</a>
          <a className="right carousel-control" href="#stmyCarousel" data-slide="next">›</a>
        </div>
      </div>
      <div className="span7">
        <h3>{product.product_name} [${product.price}]</h3>
        <hr className="soft" />
        <form className="form-horizontal qtyFrm">
          <div className="control-group">
            <label className="control-label"><span>${product.price}</span></label>
            <div className="controls">
              <input type="number" className="span6" placeholder="Qty." />
            </div>
          </div>
          <div className="control-group">
            <label className="control-label"><span>Color</span></label>
            <div className="controls">
              <select className="span11">
                <option>Red</option>
                <option>Purple</option>
                <option>Pink</option>
                <option>Red</option>
              </select>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label"><span>Materials</span></label>
            <div className="controls">
              <select className="span11">
                <option>Material 1</option>
                <option>Material 2</option>
                <option>Material 3</option>
                <option>Material 4</option>
              </select>
            </div>
          </div>

    <div dangerouslySetInnerHTML={{__html:product.summary}}/>
          <h4>100 items in stock</h4>
          <p>Nowadays the lingerie industry is one of the most successful business spheres.
            Nowadays the lingerie industry is one of ...
          </p><p>
            <button type="submit" className="shopBtn"><span className=" icon-shopping-cart" /> Add to cart</button>
          </p></form>
      </div>
    </div>
    <hr className="softn clr" />
    <div dangerouslySetInnerHTML={{__html:product.detail}}/>
  
    <ul id="productDetail" className="nav nav-tabs">
      <li className="active"><a href="#sthome" data-toggle="tab">Product Details</a></li>
      
    </ul>
    <div id="myTabContent" className="tab-content tabWrapper">
      <div className="tab-pane fade active in" id="home">
        <h4>Product Information</h4>
        <table className="table table-striped">
          <tbody>
            <tr className="techSpecRow"><td className="techSpecTD1">Color:</td><td className="techSpecTD2">Black</td></tr>
            <tr className="techSpecRow"><td className="techSpecTD1">Style:</td><td className="techSpecTD2">Apparel,Sports</td></tr>
            <tr className="techSpecRow"><td className="techSpecTD1">Season:</td><td className="techSpecTD2">spring/summer</td></tr>
            <tr className="techSpecRow"><td className="techSpecTD1">Usage:</td><td className="techSpecTD2">fitness</td></tr>
            <tr className="techSpecRow"><td className="techSpecTD1">Sport:</td><td className="techSpecTD2">122855031</td></tr>
            <tr className="techSpecRow"><td className="techSpecTD1">Brand:</td><td className="techSpecTD2">Shock Absorber</td></tr>
          </tbody>
        </table>
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
      </div>
  
    </div>
  </div>
  )
    return(
      <>
      {myView}
      </>
    )
}