import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./usercontext";

export default function Userlist() {
  let users = useContext(UserContext);
  let [userList,setuserList] = useState([]);
  
  useEffect(async () => {
    let user = await fetch("https://606ff2b285c3f0001746f12a.mockapi.io/tabel");
    let userdata = await  user.json();
    console.log(userdata);
    setuserList([...userdata]);
  },[])

  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a href="https://datatables.net">official DataTables documentation</a>
        </p>

        <Link to="/usercreate">Create User</Link>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            
            {
              userList.length> 0 ? <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {
                  userList.map((obj) => {
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
