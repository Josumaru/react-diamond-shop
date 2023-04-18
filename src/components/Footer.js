function Footer(props) {
    return (
        <div className="Footer">
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
            </ul>
            <p className="footer-copyright">{ props.copyright }</p>
        </div>
    );
}
export default Footer;
  