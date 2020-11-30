import React,{useEffect,useState} from 'react'
import axios from 'axios'

function MyApi() {

    const [data, setData] = useState()

    useEffect(()=>{
        console.log("this is use effect")
        axios.get('https://api.covid19api.com')
        .then(res=>{
            //console.log(res)
            setData(res.data)
            //console.log(data)

        });
    },[]);

    return (
        <div>
            {
                Object.keys(data).map( (item, ind) => 
                    <div>
                        <h4>{item}</h4>
                        <div>Name : {data[item].Name}</div>
                        <div>Description : {data[item].Description}</div>
                        <div>Path : {data[item].Path}</div>
                    </div>
                )
            }        
        </div>
    )
    }

export default MyApi
