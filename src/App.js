
import {Link,Outlet} from "react-router-dom"
const App =()=>{
  return(
    <div className="App">
   <h1>  My library</h1>
   <div className="navbar navbar-expand-lg bg-body-tertiary">
   
        <div className="container-fluid d-flex flex-row mb-3 justify-content-center ">
          
          <Link to="/about" className="nav-link active p-2">About us</Link>
          <Link to="/books" className="nav-link active p-2">List of books</Link>
         
   
         
        </div>
     
   </div>
   <Outlet />

    </div>
  
  )
}
export default App
