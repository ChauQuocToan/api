import React, { useEffect, useState } from 'react'
import SelectBox from '../formItems/SelectBox'
import SelectBrand from '../formItems/SelectBrand'
import SelectCategory from '../formItems/SelectCategory'
import { validateProduct } from '../../../header/validate'
import { ToastContainer, toast } from 'react-toastify'
import productApi from '../../../api/productApi'
import { toSlug } from '../../../header/function'

import { useParams } from 'react-router-dom'

export default function ProductEdit() {
  var { id } = useParams()
  const [product, setProduct] = useState({
    id: id,
    product_name: '',
    slug: '',
    cat_id: '',
    brand_id: '',
    summary: '',
    detail: '',
    image: '',
    price: '',
    sale_price: '',
    status: '',
    type: '',
  });

  const [errMsg, setErrorMsg] = useState('');
  useEffect(() => {
    const fetchProduct = async (id) => {
      const product = await productApi.get(id)
      setProduct(product);

    }
    fetchProduct(id)

  }, [])

  // Bắt sự kiện onChange
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductChangeBlur = (e) => {
    const productName = e.target.value;
    const slug = toSlug(productName);
    document.getElementById('slug').value = slug;
  };

  // Bắt sự kiện submit
  const handleSubmit = (e) => {
    console.log(product);
    e.preventDefault();
    const error = validateProduct(product);
    setErrorMsg(error);
    if (error === '') {
      const addProduct = async (product) => {
        try {
          document.getElementById('submit').innerHTML = 'UpdateTing...';
          await productApi.update(product);
          document.getElementById('submit').innerHTML = 'update product';

          toast.success('Thành công');
          document.getElementById('EditProduct').reset();
          setProduct({});
        } catch (error) {
          toast.error('Thất bại');
          document.getElementById('submit').innerHTML = 'update product';
        }
      };
      addProduct(product);
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <form id="EditProduct" action="" className="m-auto" style={{ minWidth: 600 }} onSubmit={handleSubmit}>
        <h3 className="my-4">Edit Product</h3>
        <div className="bg-danger" dangerouslySetInnerHTML={{ __html: errMsg }}></div>
        <hr className="my-4" />
        <div className="form-group mb-3 row">
          <label htmlFor="product-name2" className="col-md-5 col-form-label">
            Product Name
          </label>
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              id="product_name"
              name="product_name"
              onChange={handleChange}
              onBlur={handleProductChangeBlur}
              value={product.product_name}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="slug" className="col-md-5 col-form-label">
            Slug
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="slug" name="slug" onChange={handleChange} value={product.slug} />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="category4" className="col-md-5 col-form-label">
            Category
          </label>
          <div className="col-md-7">
            <SelectCategory defaultValue={product.cat_id} handleFunction={handleChange}></SelectCategory>
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="brand5" className="col-md-5 col-form-label">
            Brand
          </label>
          <div className="col-md-7">
            <SelectBrand defaultValue={product.brand_id} handleFunction={handleChange}></SelectBrand>
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="img" className="col-md-5 col-form-label">
            Hình ảnh
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="img1" name="image" onChange={handleChange} value={product.image} />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="summary6" className="col-md-5 col-form-label">
            Summary
          </label>
          <div className="col-md-7">
            <textarea
              className="form-control"
              id="summary6"
              name="summary"
              defaultValue={''}
              onChange={handleChange}
              value={product.summary}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="detail7" className="col-md-5 col-form-label">
            Detail
          </label>
          <div className="col-md-7">
            <textarea
              className="form-control"
              id="detail7"
              name="detail"
              defaultValue={''}
              onChange={handleChange}
              value={product.detail}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="price8" className="col-md-5 col-form-label">
            Price
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="price8" name="price" onChange={handleChange} value={product.price} />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="sale-price9" className="col-md-5 col-form-label">
            Sale price
          </label>
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              id="sale-price9"
              name="sale_price"
              onChange={handleChange}
              value={product.sale_price}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="type10" className="col-md-5 col-form-label">
            Type
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="type10" name="type" onChange={handleChange} value={product.type} />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="status11" className="col-md-5 col-form-label">
            Status
          </label>
          <div className="col-md-7">
            <SelectBox
              name="status"
              defaultValue={product.status}
              data={[
                { label: 'Ẩn', value: 0 },
                { label: 'Hiện', value: 1 },
              ]}
              handleFunction={handleChange}
            ></SelectBox>
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="create-product12" className="col-md-5 col-form-label" />
          <div className="col-md-7">
            <button className="btn btn-primary" type="submit" id="submit">
              update Product
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
