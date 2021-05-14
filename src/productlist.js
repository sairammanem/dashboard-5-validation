import { Link } from "react-router-dom";
import {useContext,useState, useEffect} from "react";
import UserContext from "./usercontext";

export default function Productlist() {
    let users = useContext(UserContext);
    let [productList,setproductList] = useState([])

    useEffect(async () => {
        let user = await fetch("https://606ff2b285c3f0001746f12a.mockapi.io/tabel");
        let userdata = await  user.json();
        console.log(userdata);
        setproductList([...userdata]);
      },[])


  return (
    <>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Tables</h1>
        <p class="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation.
          </a>
        </p>
       <Link to="/productcreate">create new user</Link>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
          {
              productList.length> 0 ? 
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>stock</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>stock</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>price</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                {
                  productList.map((obj) => {
                    return (
                      <tr>
                        <td>{obj.name}</td>
                        <td>{obj.lastName}</td>
                        <td>{obj.state}</td>
                        <td>{obj.password}</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <th>
                          <Link to={`/useredit/${obj.id}`}>UserEdit</Link>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>:<>
            <h1>Loading..</h1>
            </>
            }

          </div>
        </div>
      </div>
    </>
  );
}
