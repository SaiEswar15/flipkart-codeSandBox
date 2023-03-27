// import Navbar from "./Components/Navbar/Navbar.js";
// import ProductPage from "./Components/Pages/ProductPage";
// import CartPage from "./Components/Pages/CartPage";
// import DetailedProducts from "./Components/Pages/DetailedProducts";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {useEffect,useState} from "react";

// import './App.css';

// function App() {

//   let [apiData,setApiData] = useState([])
  
//   useEffect(()=>{
//     fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
//     .then((res)=>{
//       return res.json()
//     })
//     .then((data)=>{
//       setApiData(data)
//     })
//   },[])

//   return (
//     <div>
      
      
//       <BrowserRouter>
//         <Navbar></Navbar>
        
//         <Routes>
//           <Route path = "/" exact element={<ProductPage data = {apiData}></ProductPage>}></Route>
//           <Route path = "/cart" exact element={<CartPage/>}></Route>
//           <Route path = "/detailedProducts" exact element={<DetailedProducts/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
