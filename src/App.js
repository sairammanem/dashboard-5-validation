import Dashboard from "./dashboard/dashboard";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Userlist from "./userlist";
import Usercreate from "./usercreate";
import Useredit from "./useredit";
import {UserProvider} from "./usercontext";
import Productlist from "./productlist";
import Productcreate from "./productcreate";
import Productedit from "./productedit";

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
      <UserProvider>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div className="container-fluid">
          
            <Switch>
            <Route path="/dashboard" component={Dashboard} exact={true}/>
            <Route path="/userlist" component={Userlist} exact={true}/>
            <Route path="/usercreate" component={Usercreate} exact={true}/>
            <Route path="/useredit/:id" component={Useredit} exact={true}/>
            <Route path="/productlist" component={Productlist} exact={true}/>
            <Route path="/productcreate" component={Productcreate} exact={true}/>
            <Route path="/productedit" component={Productedit} exact={true}/>
            <Dashboard></Dashboard>
            </Switch>
            
            
          </div>
        </div>
      </div>
      </UserProvider>
    </div>
    </Router>
  );
}

export default App;
