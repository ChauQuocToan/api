import React, { useState, useEffect } from 'react'
import Loading from '../../../shop/components/features/Loading';
import productApi from '../../../api/productApi';
import AppUrl from '../../../api/AppUrl';
import { Link, useParams } from 'react-router-dom';
import Paginate from '../Paginate';
export default function ProductTrash() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({});
  const { page } = useParams();
  const [loadData, setLoadData] = useState(1)
  //////
  const handleRemove = (event) => {
    event.target.classList.remove('fa-window-close')
    event.target.classList.add('fa-spinner')
    const removeProduct = async (id) => {
      try {
        await productApi.remove(id)
        setSuccess('Xoa thanh cong id=' + id)
        setLoadData(loadData + 1)
      } catch {
        setWarning('Xoa khong thanh cong id=' + id + '')
      } finally {
        event.target.classList.remove('fa-spinner')
        event.target.classList.add('fa-window-close')
      }
    }

    removeProduct(event.target.getAttribute('name'))
  }

  var allBtnRemovo = document.querySelectorAll('.btn-remove');
  allBtnRemovo.forEach(btnRe => {
    btnRe.addEventListener('click', handleRemove)
  })

  /// restore
  const handleRestore = (event) => {
    event.target.classList.remove('fa-trash-restore')
    event.target.classList.add('fa-spinner')
    const restoreProduct = async (id) => {
      try {
        await productApi.restore(id)
        setSuccess('Khoi phuc thanh cong id=' + id)
        setLoadData(loadData + 1)
      } catch {
        setWarning('Khoi phuc khong thanh cong id=' + id + '')
      } finally {
        event.target.classList.remove('fa-spinner')
        event.target.classList.add('fa-trash-restore')
      }
    }

    restoreProduct(event.target.getAttribute('name'))
  }

  var allBtnRestore = document.querySelectorAll('.btn-restore');
  allBtnRestore.forEach(btnRes => {
    btnRes.addEventListener('click', handleRestore)
  })

  ///
  const [msgSuccess, setSuccess] = useState('')
  const [msgWarning, setWarning] = useState('')
  ///
  useEffect(() => {
    const fetchProducts = async () => {
      var params = {
        page: page
      }
      var response = await productApi.trash(params);
      setLoading(false)

      setProducts(response.data);
      setMeta(response);
      console.log(response)


    };
    fetchProducts();
  }, [page, loadData])
  /////


  var myView = loading === true ? <tr><td><Loading></Loading></td></tr> : (

    products.map((product) => {

      return (
        <tr className="odd" key={product.id}>
          <td >{product.id}</td>
          <td>{product.product_name}</td>
          <td><img src={`${AppUrl.ImgUrl}${product.image}`} alt='' /></td>
          <td>{product.slug}</td>
          <td>{product.cat_id}</td>
          <td>{product.brand_id}</td>
          <td>{product.status}</td>
          <td>{product.price}</td>
          <td>
            <div>

              <Link className="btn btn-sm btn-info">
                <i className="btn-remove fas fa-window-close" name={product.id} /></Link>
              <Link className=" btn btn-sm btn-success " >
                <i className="btn-restore fas fa-trash-restore" name={product.id} /></Link>
            </div>

          </td>

        </tr>
      )


    })

  )

  var myView1 = loading === true ? <tr><td><Loading></Loading></td></tr> : (

    <Paginate meta={meta} basePath='/admin/product/trash/' />
  )
  return (

    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Product List</h3>
            <div className="col-md-12 text-right">
              <a className="btn btn-sm btn-success" href="/admin/product/add">
                <i className="fas fa-plus" /> Thêm
              </a>
              <a className="btn btn-sm btn-danger" href="index.php?option=brand&cat=trash">
                <i className="fas fa-trash" /> Thùng rác
              </a>
            </div>
          </div>
          <div className="card-header" id='resset'>
            <p className='bg-success'>{msgSuccess}</p>
            <p className='bg-danger'>{msgWarning}</p>
          </div>
          {/* /.card-header */}

          <div className="card-body">
            <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <div className="row">
                <div className="col-12">
                  <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                    <thead>
                      <tr>
                        <th className="sorting sorting_asc" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Id</th>
                        <th style={{ width: 250 }} className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">Product Name</th>
                        <th style={{ width: 150 }}>Image</th>
                        <th style={{ width: 250 }} className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">Slug</th>
                        <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">Category Id</th>
                        <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">Brand Id</th>
                        <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">Status</th>
                        <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">Price</th>
                        <th style={{ width: 123 }} className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myView}
                    </tbody>
                    {/* <tfoot>
                    <tr><th rowSpan={1} colSpan={1}>Rendering engine</th><th rowSpan={1} colSpan={1}>Browser</th><th rowSpan={1} colSpan={1}>Platform(s)</th><th rowSpan={1} colSpan={1}>Engine version</th><th rowSpan={1} colSpan={1}>CSS grade</th></tr>
                  </tfoot> */}
                  </table>
                </div>
              </div>
              {myView1}
            </div>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
        {/* /.card */}
      </div>

    </div>


  )

}