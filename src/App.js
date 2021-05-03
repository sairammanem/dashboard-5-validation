import Dashboard from "./dashboard/dashboard";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Userlist from "./userlist";
import Usercreate from "./usercreate";
import Useredit from "./useredit";
import {
  BrowserRouter as Router,
  Route,
  Switch
}from "react-router-dom";

function App() {

  return (
    <Router>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div className="container-fluid">
          
              <Switch>
            <Route path="/dashboard" component={Dashboard} exact={true}/>
            <Route path="/userlist" component={Userlist} exact={true}/>
            <Route path="/usercreate" component={Usercreate} exact={true}/>
            <Route path="/useredit/:id" component={Useredit} exact={true}/>
            <Dashboard></Dashboard>
            </Switch>
            
            
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
