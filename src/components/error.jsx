import React from "react";

export default function Error() {
  return (
    <>
      <div className="notfounddiv"></div>
<h1 className="notfoundh1">404</h1>

<svg>
  <defs>
    <filter id="glow">
      <fegaussianblur class="blur" result="coloredBlur" stddeviation="4"></fegaussianblur>
      <femerge>
        <femergenode in="coloredBlur"></femergenode>
        <femergenode in="SourceGraphic"></femergenode>
      </femerge>
    </filter>
  </defs>
</svg>

<h2 className="notfoundh2">Page Not Found</h2>
    </>
  )
}