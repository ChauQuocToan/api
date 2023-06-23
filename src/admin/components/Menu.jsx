import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (

        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="../../index3.html" className="brand-link">
                <img src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user (optional)
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="../../dist/img/hinh1.png" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#st" className="d-block">Alexander Pierce</a>
      </div>
    </div> */}
                {/* SidebarSearch Form */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-fw fa-search" />
                            </button>
                        </div>
                    </div><div className="sidebar-search-results"><div className="list-group"><a href="#st" className="list-group-item"><div className="search-title"><strong className="text-light" />N<strong className="text-light" />o<strong className="text-light" /> <strong className="text-light" />e<strong className="text-light" />l<strong className="text-light" />e<strong className="text-light" />m<strong className="text-light" />e<strong className="text-light" />n<strong className="text-light" />t<strong className="text-light" /> <strong className="text-light" />f<strong className="text-light" />o<strong className="text-light" />u<strong className="text-light" />n<strong className="text-light" />d<strong className="text-light" />!<strong className="text-light" /></div><div className="search-path" /></a></div></div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                        <li className="nav-item menu-open">
                            <a href="#st" className="nav-link active">
                                <i className="nav-icon fas fa-table" />
                                <p>
                                    Products
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to='/admin/product' className="nav-link">

                                        <i className="far fa-circle nav-icon" />
                                        <p>Products list</p>

                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/admin/product/trash' className="nav-link active">
                                        {/* <a href="../tables/data.html" className="nav-link active"> */}
                                        <i className="far fa-circle nav-icon" />
                                        <p>Products Trash</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div >
            {/* /.sidebar */}
        </aside >

    );
}

export default Menu;