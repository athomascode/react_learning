// ReactDOM.render(
//   <h1>Hello, everyone!</h1>,
//   document.getElementById("root")
//  )
//ReactDOM.render(<p>Halooo Paul San !</p>, document.querySelector("#root")) 


// function Help() {
//   return (
//     <div className="help-class">Help</div>
//   )
// }

// ReactDOM.render(
//   <div>
//     <Help />
//   </div>,
//   document.getElementById("root")
// )

// import React from "react"
// import ReactDOM from "react-dom"

// const navbar = (
//   <nav className="navbar-classname">
//     <h1>Tupperware</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )
// ReactDOM.render(navbar,document.getElementById("root"))

// const sample = (
//   <div>
//      <h1>Tupperware</h1>
//      <ul>
//        <li>Pricing</li>
//        <li>About</li>
//        <li>Contact</li>
//      </ul>
//   </div>
// )

// document.getElementById("root").append(JSON.stringify(sample));

// const page = (
//   <div>
//     <img src="./React-icon.png" width="40"></img>
//     <h1>Fun Facts about React</h1>
//     <ol>
//       <li>Was released first in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ol>
//   </div>
// )

// ReactDOM.render(
//   page,
//   document.getElementById("root")
// )

// function TemporaryName() {
//   return (
//     <div>
//     <img src="./React-icon.png" width="40"></img>
//     <h1>Fun Facts about React</h1>
//     <ol>
//       <li>Was released first in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ol>
//   </div>
//   )
// }

// ReactDOM.render(
//   <TemporaryName />,
//   document.getElementById("root")
// )

import HeaderPage  from "./HeaderPage"

function FooterPage() {
  return(
    <footer>
      <small>@ 2023 Thomas development. All rights reserved.</small>
    </footer>
  )
}

function MainPage() {
  return(
    <div>
        <h1>I love React because</h1>
        <ul>
          <li>Its powerful</li>
          <li>Its maintained</li>
        </ul>
    </div>
  )
}

const CustomPage = () => {
  return (
    <div> 
      <HeaderPage />     
      <MainPage />
      <FooterPage />
    </div>
  )
}

ReactDOM.render(
  <CustomPage />, 
  document.getElementById("root")
)
