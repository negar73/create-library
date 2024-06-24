const Books =[
    {
        name:"history",
        price: "price:36.9",
        author:" author:Jenny Tyler",
        id:"01",
        image:"https://m.media-amazon.com/images/I/51NAVbHmeSL._SY445_SX342_.jpg"

    },
    {
        name:"sport",
        price: "price:15.98",
        author:" author:Luca Langue&Parole",
        id:"02",
        image:"https://m.media-amazon.com/images/I/91a1LM4X6BL._SY466_.jpg"

    }
    ,
    {
        name:"poetry",
        price: "price:19.71",
        author:" author:Nerissa Marie",
        id:"03",
        image:"https://m.media-amazon.com/images/I/71J2t8ZUA7L._SY466_.jpg"

    },
    {
        name:" math",
        price: "price:21.20",
        author:"author:dk",
        id:"04",
        image:"https://m.media-amazon.com/images/I/51aJuZjN8kL._SX342_SY445_.jpg"

    }
]

export const getbooks=()=>{
    return Books;
}
export const getbook=(id)=>{
    return Books.find(book=>book.id === id);
}