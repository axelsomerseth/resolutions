import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#EEEEEE",
  };
  return (
    <footer className="navbar fixed-bottom" style={footerStyle}>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <span className="text-muted" style={{ fontSize: "13px" }}>
              Made with &#x1FAF6;.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
