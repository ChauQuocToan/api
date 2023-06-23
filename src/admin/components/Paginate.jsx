import React from 'react'
import { Link } from 'react-router-dom'


export default function Paginate(props) {
    var meta = props.meta;
    var basePath = props.basePath;
    var links = meta.links;
    var newLinks = links.map((link) => {
        return ({
            url: link.url == null ? basePath + '1' : basePath + link.url.substr(link.url.indexOf('=') + 1),
            label: link.label
        })
    })

    var myView = newLinks.map((link) => {
        return (
            <li className="paginate_button page-item ">
                <Link to={link.url} aria-controls="example2" data-dt-idx={2} tabIndex={0} className="page-link">{link.label}</Link>
            </li>
        )
    })
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing {meta.from} to {meta.to} of {meta.total} entries</div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                        <ul className="pagination">
                            {myView}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}