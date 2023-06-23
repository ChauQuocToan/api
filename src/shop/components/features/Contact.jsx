import React, { useState } from 'react'
import contactApi from '../../../api/contactApi';
import { validateEmail } from '../../../header/validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }
  const validateForm = (name, email, message) => {
    var err = '';
    if (name.length === 0) err += 'Tên không đc để trống <br/>';
    if (!validateEmail(email)) err += 'Email k hợp lệ <br/>';
    if (message.length === 0) err += 'Bạn hãy nhập lời nhắn <br/>';
    return err;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //validate form
    if (validateForm(name, email, message) === "") {
      var data = {
        name: name,
        email: email,
        message: message
      }
      const addContact = async (data) => {
        try {
          document.getElementById('submit').innerHTML = 'Sending...'
          await contactApi.add(data);
          document.getElementById('submit').innerHTML = 'Send Contact'

          toast.success('thanh cong');
          document.getElementById('contactFrom').reset();
          setName('');
          setEmail('');
          setMessage('');
          setErrMsg('')
        }
        catch {
          toast.error('bi loi')
        }
      }
      addContact(data);
    }

    //nếu hợp lệ, gọi api
    else
      setErrMsg(validateForm(name, email, message))
    return false;
  }


  return (
    <div className="well well-small">
      <h1>Visit us</h1>
      <hr className="soften" />
      <div className="row-fluid">
        <div className="span6 relative">
          <div className="absoluteBlk" style={{ width: '90%' }}>
            <div className="well wellsmall ">
              <h4>Contact Details</h4>
              <h5>
                2601 Mission St.<br />
                San Francisco, CA 94110<br /><br />
                info@mysite.com<br />
                Tel 123-456-6780<br />
                Fax 123-456-5679<br />
                web:wwwmysitedomain.com
              </h5>
            </div>
          </div>
        </div>
        <div className="span4">
          <h4>Email Us</h4>
          <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: errMsg }}>
          </div>
          <form className="form-horizontal" id='contactFrom' onSubmit={handleSubmit}>
            <fieldset>
              <div className="control-group" >
                <input type="text" placeholder="name" className="input-xlarge" onChange={handleNameChange} />
              </div>
              <div className="control-group">
                <input type="text" placeholder="email" className="input-xlarge" onChange={handleEmailChange} />
              </div>
              <div className="control-group">
                <textarea rows={3} id="textarea" className="input-xlarge" defaultValue={""} onChange={handleMessageChange} />
              </div>
              <button className="shopBtn" type="submit" id='submit'>Send Contact</button>
            </fieldset>
          </form>
        </div>
      </div>
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

  )
}