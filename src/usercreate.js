import {useContext, useState} from "react";
import UserContext from "./usercontext";
export default function Usercreate(){
    let userData = useContext(UserContext)

    let [firstName,setfirstName] = useState("");
    let [lastName,setlastName] = useState("");
    let [email,setemail] = useState("");
    let [password,setpassword] = useState("");

    let userSubmit = (e) => {
        e.preventDefault()
        console.log({
            firstName,
            lastName,
            email,
            password
        })

        userData.setuserlist([...userData.userlist,{
            firstName,
            lastName,
            email,
            password
        }])
    }
    return <>
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <h1>User Form</h1>
              </div>
              </div>
          
      <form onSubmit={userSubmit}>
          
          <div className="row">
          <div className="col-lg-6">
              <label>First Name</label>
            <input className="form-control" value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
          </div>
          <div className="col-lg-6">
          <label>Last Name</label>
            <input className="form-control" value={lastName} onChange={(e) => setlastName(e.target.value)}/>
          </div>
          </div>

          <div className="row">
              <div className="col-lg-6">
                  <label>E-mail</label>
                  <input className="form-control" value={email} onChange={(e) => setemail(e.target.value)}/>
              </div>
              <div className="col-lg-6">
                  <label>Password</label>
                  <input className="form-control" value={password} onChange={(e) => setpassword(e.target.value)}/>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-6">
                  <input className="btn btn-primary"  type="submit" value="submit"/>
              </div>
          </div>
      </form>
      </div>

    </>
}