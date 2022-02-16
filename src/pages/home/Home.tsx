import React from "react"; 
import { useHistory } from "react-router-dom";




export const Home:React.FC =()=> {
  const history = useHistory()
  return <div className="home">home
    <button onClick={()=>{history.push('detail')}}>add</button>
  </div>
}