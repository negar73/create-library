import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getbooks } from "../Components/Data";

const Books = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  const Books = getbooks();

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="search item "
          className="form-control me-2 text-center"
          value={searchParams.get("filter")}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {/* <button className="btn btn-outline-success" type="submit" style={{ marginLeft: "10px" }}>
          Search
        </button> */}
      </div>
      <div className="list-group" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {Books.filter((book) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = book.name;
          return name.startsWith(filter);
        }).map((book) => (
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}
            to={`${book.id}${location.search}`}
            key={book.id}
            className="list-group-item list-group-item-action"
          >
            {book.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Books;
// import { NavLink, Outlet,useSearchParams,useLocation } from "react-router-dom";
// import {getbooks} from "../Components/Data"
// const Books = () =>{
//     let[searchParams,setSearchParams]=useSearchParams()
//     let location=useLocation()
//     const Books =getbooks()
  
//     return (









//         <div>
//             <div>list of books</div>
//             <div style={{display:"flex",flexDirection:"column"}} >
            

//   <input type="text" placeholder="search"className="form-control me-2" value={searchParams.get("filter")}

               
//                 onChange={event=>{
//                     let filter=event.target.value;
//                     if(filter){
//                         setSearchParams({filter})
//                     }else{
//                         setSearchParams({})
//                     }
//                 }}/>
//                 <button className="btn btn-outline-success" type="submit">Search</button>
             
//                 {
                
                
//         Books.filter(book=>{
//                         let filter=searchParams.get("filter")
//                         if(!filter) return true
//                         let name=book.name
//                         return name.startsWith(filter)
//                     })
//                     .map(book =>(
//                         <NavLink style={({isActive})=>{
//                             return {
//                                 color:isActive ? "red" : ""
//                             }
//                         }} 
//                         to={`${book.id}${location.search}`} key={book.id}>{book.name}</NavLink>
                       
//                     ))
//                 }
            
//             </div>
//             <Outlet></Outlet>
//         </div>
//     )
// }
// export default Books