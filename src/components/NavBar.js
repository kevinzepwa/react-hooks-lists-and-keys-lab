import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksElement = links.map((link) => {
    return <a href={link}>{link.toUpperCase()}</a>
  })

  return (
    <nav>
      {linksElement}
    </nav>
    );
}

export default NavBar;
