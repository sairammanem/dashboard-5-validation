import { useEffect } from "react"
export default function Productedit(props){
    useEffect(async () => {
        let user = await fetch(`https://606ff2b285c3f0001746f12a.mockapi.io/tabel/${props.match.params.id}`)
        let userdata = await user.json()
        console.log(userdata);
    },[])
    return <>
      <h1>User Edit{props.match.params.id}</h1>
    </>
}