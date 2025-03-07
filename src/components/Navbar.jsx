import React from 'react'

const Navbar = () => {
  return (
//     <nav className="navbar">
//     <a className="navbar-brand" href="#">
//         <div>
//           <p className="mt-3"style={{fontFamily:"monospace",fontWeight:"bold",alignItems:"center",padding:"4px",color:"#00B5FF"}}>TATSAV </p>
//             <img src="/images/tatsavlogo.png" alt="Logo" className="logo" />
//             </div>
//         </a>
//     <ul className="nav-links">
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Services</a></li>
//       <li><a href="#">Contact</a></li>
//     </ul>
//   </nav>
<nav className="navbar">
<a className="navbar-brand" href="#">
        <div className="d-flex">
          <p className="mt-3"style={{fontFamily:"monospace",fontWeight:"bold",alignItems:"center",padding:"4px",color:"#00B5FF",textDecoration:"none"}}>TATSAV </p>
            <img src="/images/tatsavlogo.png" alt="Logo" className="logo" />
            </div>
        </a>
<ul className="nav-links">
  <li><a href="#">Home</a></li>
  <li><a href="#">Counseling Services</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Contact</a></li>
  <li><a href="#">Privacy & Policy</a></li>
</ul>
</nav>

  )
}

export default Navbar