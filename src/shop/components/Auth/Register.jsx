import React from "react";

export default function Register(){
    return(
        <div className="well">
  <form className="form-horizontal">
    <h3>Your Personal Details</h3>
    <div className="control-group">
      <label className="control-label">Title <sup>*</sup></label>
      <div className="controls">
        <select className="span1" name="days">
          <option value>-</option>
          <option value={1}>Mr.</option>
          <option value={2}>Mrs</option>
          <option value={3}>Miss</option>
        </select>
      </div>
    </div>
    <div className="control-group">
      <label className="control-label" htmlFor="inputFname">First name <sup>*</sup></label>
      <div className="controls">
        <input type="text" id="inputFname" placeholder="First Name" />
      </div>
    </div>
    <div className="control-group">
      <label className="control-label" htmlFor="inputLname">Last name <sup>*</sup></label>
      <div className="controls">
        <input type="text" id="inputLname" placeholder="Last Name" />
      </div>
    </div>
    <div className="control-group">
      <label className="control-label" htmlFor="inputEmail">Email <sup>*</sup></label>
      <div className="controls">
        <input type="text" placeholder="Email" />
      </div>
    </div>	  
    <div className="control-group">
      <label className="control-label">Password <sup>*</sup></label>
      <div className="controls">
        <input type="password" placeholder="Enter Password" />
      </div>
    </div>
    <div className="control-group">
      <label className="control-label">Confirm Password <sup>*</sup></label>
      <div className="controls">
        <input type="password" placeholder="Confirm Password" />
      </div>
    </div>
    <div className="control-group">
      <label className="control-label">Date of Birth <sup>*</sup></label>
      <div className="controls">
        <select className="span1" name="days">
          <option value>-</option>
          <option value={1}>1&nbsp;&nbsp;</option>
          <option value={2}>2&nbsp;&nbsp;</option>
          <option value={3}>3&nbsp;&nbsp;</option>
          <option value={4}>4&nbsp;&nbsp;</option>
          <option value={5}>5&nbsp;&nbsp;</option>
          <option value={6}>6&nbsp;&nbsp;</option>
          <option value={7}>7&nbsp;&nbsp;</option>
        </select>
        <select className="span1" name="days">
          <option value>-</option>
          <option value={1}>1&nbsp;&nbsp;</option>
          <option value={2}>2&nbsp;&nbsp;</option>
          <option value={3}>3&nbsp;&nbsp;</option>
          <option value={4}>4&nbsp;&nbsp;</option>
          <option value={5}>5&nbsp;&nbsp;</option>
          <option value={6}>6&nbsp;&nbsp;</option>
          <option value={7}>7&nbsp;&nbsp;</option>
        </select>
        <select className="span1" name="days">
          <option value>-</option>
          <option value={1}>1&nbsp;&nbsp;</option>
          <option value={2}>2&nbsp;&nbsp;</option>
          <option value={3}>3&nbsp;&nbsp;</option>
          <option value={4}>4&nbsp;&nbsp;</option>
          <option value={5}>5&nbsp;&nbsp;</option>
          <option value={6}>6&nbsp;&nbsp;</option>
          <option value={7}>7&nbsp;&nbsp;</option>
        </select>
      </div>
    </div>
    <div className="control-group">
      <div className="controls">
        <input type="submit" name="submitAccount" defaultValue="Register" className="exclusive shopBtn" />
      </div>
    </div>
  </form>
</div>

    )
}