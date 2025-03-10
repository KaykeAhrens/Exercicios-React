import React from "react";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        {props.text} - {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
