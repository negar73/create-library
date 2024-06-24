import {useParams} from "react-router-dom"
import { getbook } from "./Data"

const Book = () =>{
    let params= useParams()
    console.log(params)
    let book=getbook(params.bookId)
    console.log(book)
    if(book){
    return(
        <div>
            <div className="card text-center mt-3 mb-0" style={{width:"18rem",alignItems: "center", marginLeft:"40%"}}>

                <div className="card-body ">
                <img className="card-img-top" style={{width:"50%"}} src={book.image} alt="" />
                    <h5 className="card-title ">{book.name}</h5>
                    <p className="card-text"> {book.author}</p>
                    <p className="card-text">{book.price}</p>
                    <button className="btn btn-primary">remove book  </button>
                </div>

            </div>
            </div>
    )
}else{
    return(
        <>
        <p>چنین کتابی یافت نشد</p>
        </>
    )
}
}
export default Book