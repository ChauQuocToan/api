import React from "react";

export default function Login(){
    return(
        <div className="span4">
  <div className="well">
    <h5>ALREADY REGISTERED ?</h5>
    <form>
      <div className="control-group">
        <label className="control-label" htmlFor="inputEmail">Email</label>
        <div className="controls">
          <input className="span3" type="text" placeholder="Email" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label" htmlFor="inputPassword">Password</label>
        <div className="controls">
          <input type="password" className="span3" placeholder="Password" />
        </div>
      </div>
      <div className="control-group">
        <div className="controls">
          <button type="submit" className="defaultBtn">Sign in</button> <a href="#st">Forget password?</a>
        </div>
      </div>
    </form>
  </div>
</div>

    )
}