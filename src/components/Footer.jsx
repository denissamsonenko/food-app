import React from "react";

function Footer() {

    return (
        <footer className="page-footer blue-grey darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">Links</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;