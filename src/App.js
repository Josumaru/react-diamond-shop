import './App.css';
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className='container'>
        <footer className='footer-container'>
          <Footer footerTitle="Diamond Shop" footerContent1="Address" footerContent2="Partnership" footerContent3="FAQ" footerContent4="Advertisements" />
          <Footer footerTitle="Social Media" footerContent1="Facebook" footerContent2="Instagram" footerContent3="Twitter" footerContent4="Discord" />
          <Footer footerTitle="Contact" footerContent1="E-mail" footerContent2="WhatsApp" footerContent3="Phone Number" footerContent4="Fax"/>
        </footer>
        <p className='footer-copyright'>©2023 Diamond Shop, All right reserved </p>
      </div>
    </div>
  );
}

export default App;
