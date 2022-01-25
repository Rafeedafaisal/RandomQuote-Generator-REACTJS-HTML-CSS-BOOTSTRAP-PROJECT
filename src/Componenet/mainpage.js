import "./mainpage.css"
import axios from "axios"
import {useState} from "react"
import {useEffect} from "react"
export default function Random() {
    const[rand,setrand]=useState()
    useEffect(() => {
     
      click()
       
       
    }, [rand]);
    const click=()=>{
        axios.get("https://api.adviceslip.com/advice").then((response)=>{
           
            setrand(response.data.slip.advice)
        })
    }
    return(
        <>
        <div className="container-fluid">
        <div className="row" id="r1">

        </div>
            <div className="row" id="r2">
                <div className="col-sm-6">
                <h2>{rand}</h2>
                </div>
            </div>
    <div className="row offset-5">
    <button onClick={click} className="btn">Click me</button>
    </div>
   
        </div>
        </>
    )
}