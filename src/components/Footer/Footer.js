import "./Footer.css"
const Footer = (props) => {
    return (
        <div className="footer">
            <h4 className="footer-title">{ props.footerTitle }</h4>
            <ul>
                <li className="list">
                    <a href="google.com">{ props.footerContent1 }</a>
                </li>
                <li className="list" >
                    <a href="google.com">{ props.footerContent2 }</a>
                </li>
                <li className="list" >
                    <a href="google.com">{ props.footerContent3 }</a>
                </li>
                <li className="list" >
                    <a href="google.com">{ props.footerContent4 }</a>
                </li>
                <p className="footer-newsletter"> {props.newsLetter}</p>
                <div className="subscribe-newsletter">
                    { props.subscribeEmail }
                    { props.subscribeButton }
                </div>
            </ul>
            <p className="footer-copyright">{ props.copyright }</p>
        </div>
    );
}
export default Footer;
  