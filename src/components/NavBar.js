import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const rotate = links.map((link)=>{return <a href={`#${link}`} key={link}>{link}</a>})

  return (
    <nav>
      {rotate}
    </nav>
  )
}

export default NavBar;
