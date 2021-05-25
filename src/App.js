import React from 'react';
import './App.css';
import AppHeader from './AppHeader';
import Home from './home/Home';


function App() {

  const [isScrolled, updateScroll] = React.useState(false);


  const checkScroll = (e) => {
      let nav = document.querySelector('.App > header');
      console.log(nav);
      const headerHeight = nav.offsetHeight;
      const target = e.target;
      const scrollTop = target.scrollTop;
      const isScrolled = scrollTop > headerHeight;
      console.log("checking scroll", {headerHeight, scrollTop, isScrolled});
      updateScroll(isScrolled);
  }

  // const firstname = "Zakeer Hussain";
  const [firstname, setFirstname] = React.useState("Zakeer Hussain");
  const [lastname, setLastname] = React.useState("Syed");
  const [email, setEmail] = React.useState("something@gmail.com")

  const onFirstnameChange = event => {
    const value = event.target.value;
    console.log({
      event: event,
      target: event.target,
      value: event.target.value
    })
    setFirstname(value);
  } 


  return (
    <div className={`App`} onScroll={checkScroll}>
      <AppHeader isScrolledApplied={isScrolled} />
      
      <Home />
      
      <div className="contact-us">
        <div className="container">
          <div className="contact-us-title">
            <h2>Contact Us</h2>
          </div>
          <div className="title-seperator"></div>
          <form action="">
            <div className="username">
              <input type="text" placeholder="Your first name..." value={firstname} onChange={(e) => onFirstnameChange(e)}/>
              <input type="text" placeholder="Your last name..." value={lastname} onChange={e => setLastname(e.target.value)} />
            </div>
            <div className="email-phone">
              <input type="email" placeholder="Your e-mail..." value={email} onChange={e => setEmail(e.target.value)}/>
              <input type="number" placeholder="Your phone..." />
            </div>
            <div className="message">
              <textarea name="message" id="" cols="30" rows="12" placeholder="Message."></textarea>
            </div>
            <div className="submit-btn">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
