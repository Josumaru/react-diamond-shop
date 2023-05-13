import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <NavigationBar />
    
      <div className='footer-content'>
        <div className='container'>
          <footer className='footer-container'>
            <Footer footerTitle="Diamond Shop" footerContent1="Address" footerContent2="Partnership" footerContent3="FAQ" footerContent4="Advertisements" />
            <Footer footerTitle="Social Media" footerContent1="Facebook" footerContent2="Instagram" footerContent3="Twitter" footerContent4="Discord" />
            <Footer footerTitle="Contact" footerContent1="E-mail" footerContent2="WhatsApp" footerContent3="Phone Number" footerContent4="Fax" />
            <Footer footerTitle="Newsletter"
              newsLetter={<div style={{ color: "var(--text-color)" }}>Keep update</div>}
              subscribeEmail={<input type='email' className='subscribe-email' placeholder='Email'></input>}
              subscribeButton={ <button className='subscribe-button'>Subscribe</button>}
            />
          </footer>
          <p className='footer-copyright'>©2023 Diamond Shop, All right reserved </p>
        </div>
      </div>
    </div>
  );
}

export default App;
