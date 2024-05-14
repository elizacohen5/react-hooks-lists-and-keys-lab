import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkItems = links.map((link) => {
      let href = `#${link}`;
      return <a href={href} key={link}>{link}</a>
    })

  return (
    <div>
      <ol>
        {linkItems}
      </ol>
    </div>
  )

  }


export default NavBar;
