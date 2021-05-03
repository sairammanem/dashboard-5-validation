import Dashboard from "./dashboard/dashboard";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function App() {

  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div className="container-fluid">
            <Dashboard></Dashboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
