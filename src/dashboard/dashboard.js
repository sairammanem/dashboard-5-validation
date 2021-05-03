import Card from "./card"

export default function Dashboard(){
    let data = [
        {
            workName : 'EARNINGS (MONTHLY)',
            workdoneWages : '$40,000',
            image : 'fas fa-calendar fa-2x text-gray-300'
        },
        {
            workName : "EARNINGS (ANNUAL)",
            workdoneWages : "$215,000",
            image : 'fas fa-dollar-sign fa-2x text-gray-300'
        },
        {
            workName : "Tasks",
            workdoneWages :"50%",
            image : 'fas fa-clipboard-list fa-2x text-gray-300'
        },
        {
            workName : "PENDING REQUESTS",
            workdoneWages :"18",
            image : 'fas fa-comments fa-2x text-gray-300'
        }
    ]
    return <>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
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