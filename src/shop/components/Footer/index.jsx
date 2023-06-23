import React from 'react'
import FooterMenu from './FooterMenu'

export default function Footer(){
    return(
        <footer className="footer">
  <div className="row-fluid">
     <FooterMenu></FooterMenu>
     <FooterMenu></FooterMenu>
     <FooterMenu></FooterMenu>
     <FooterMenu></FooterMenu>
     <FooterMenu></FooterMenu>
     <FooterMenu></FooterMenu>
    <div className="span11">
      <h5>The standard chunk of Lorem</h5>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et 
      Malorum" by Cicero are also reproduced in their exact original form, 
      accompanied by English versions from the 1914 translation by H. Rackham.
    </div>
  </div>
</footer>

    )
}