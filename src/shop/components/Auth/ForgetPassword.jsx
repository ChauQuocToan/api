import React from "react";

export default function ForgetPassword(){
    return(
      <div className="well well-small">
  <h3> FORGOT YOUR PASSWORD</h3>	
  <hr className="soft" />
  Please enter the e-mail address used to register. We will e-mail you your new password.<br /><br /><br />
  <form className="form-inline">
    <label className="control-label" htmlFor="inputEmail">E-mail address</label>
    <input type="text" className="span4" placeholder="Email" />			  
    <button type="submit" className="shopBtn block">Send My Password</button>
  </form>
      </div>
    )
}