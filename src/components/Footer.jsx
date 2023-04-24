import React from "react";
function Footer(){
    var date = new Date().getFullYear();

    return(<footer><p className="footer">Copyright {date}</p></footer>)

}

export default Footer;