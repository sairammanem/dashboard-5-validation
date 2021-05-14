import {useContext,useState} from "react";
import UserContext from "./usercontext";
export default function Productcreate() {
    let productData = useContext(UserContext)
    
    let[productname,setproductname] =useState("");
    let[productquantity,setproductquantity] =useState("");
    let[productinstock,setproductinstock] =useState("");
    let[productprice,setproductprice] =useState("");

    let userSubmit = async (e) => {
        e.preventDefault()
        

        productData.setuserlist([...productData.userlist,{
            productname,
            productquantity,
            productinstock,
            productprice
        }])
    
   
  await  fetch("https://606ff2b285c3f0001746f12a.mockapi.io/tabel",{
        method: "POST",
        body : JSON.stringify({
            productname,
            productquantity,
            productinstock,
            productprice
        }),
         headers : {
             "content-type" : "application/json"
         }
     })
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>User form</h1>
          </div>
        </div>
        <form onSubmit={userSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input className="form-control" value={productname}  onChange={(e) => setproductname(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label>Product quantity</label>
              <input className="form-control" value={productquantity} onChange={(e) => setproductquantity(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Product in stock</label>
              <input className="form-control" value={productinstock} onChange={(e) => setproductinstock(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label>Product price</label>
              <input className="form-control" value={productprice} onChange={(e) => setproductprice(e.target.value)}/>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-6">
              <input type="submit" className="btn btn-primary" value="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
