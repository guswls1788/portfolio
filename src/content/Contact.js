import { Component } from 'react';
import{ init } from '@emailjs/browser';
init("user_apKLbbb1kG1pryD0QE5H9");

class Contact extends Component {
  render() {
    return(
      <div className='contact body_box'>
        <div className='body_wrap'>
          <div class="container">
            <form className="contact-form" method='post' data-email="guswls178836@gamil.com">
              <input type="name" /> 
              <input type="email" /> 
              <input type="message" /> 
              <input type="submit" value="전송"/> 
             
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;
