import React from "react";
import { Link } from "react-router-dom";

// Link는 a tag와 비슷한데, 페이지에서 라우팅을 가능하게 해준다는 것이 차이점
export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/videos">Videos</Link>
    </nav>
  );
}
