import {useContext} from "react";
import UserContext from "../usercontext";

import Card from "./card"

export default function Dashboard(){
    let data11 = useContext(UserContext);
    console.log(data11)
    let data = [
        {
            workName : 'EARNINGS (MONTHLY)',
            workdoneWages : '$40,000',
            image : 'fas fa-calendar fa-2x text-gray-300',
            border : "card border-left-primary shadow h-100 py-2"
        },
        {
            workName : "EARNINGS (ANNUAL)",
            workdoneWages : "$215,000",
            image : 'fas fa-dollar-sign fa-2x text-gray-300',
            border : "card border-left-success shadow h-100 py-2"
        },
        {
            workName : "Tasks",
            workdoneWages :"50%",
            image : 'fas fa-clipboard-list fa-2x text-gray-300',
            border : "card border-left-info shadow h-100 py-2"
        },
        {
            workName : "PENDING REQUESTS",
            workdoneWages :"18",
            image : 'fas fa-comments fa-2x text-gray-300',
            border : "card border-left-warning shadow h-100 py-2"
        }
    ]
    return <>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#!" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className="row">
                        {
                         data.map((obj) => {
                           return  <Card data1 = {obj}></Card>
                         })
                        }
                        
                        
                    </div>
    </>
}