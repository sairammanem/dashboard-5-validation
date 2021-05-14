import {useContext} from "react";
import UserContext from "../usercontext";

export default function Card(props){
    let data = useContext(UserContext);
    console.log(data)
    return <>
    <div className="col-xl-3 col-md-6 mb-4">
                            <div className={props.data1.border}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                {props.data1.workName}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data1.workdoneWages}</div>
                                        </div>
                                        <div className="col-auto">
                                        <i class={props.data1.image}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
}