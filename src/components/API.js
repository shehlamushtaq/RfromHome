import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'
function API() {
   const [name, setName] = useState([])
    useEffect(() => {

        console.log("I am in USe Effect")
        
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
                console.log(res.data);
                setName(res.data);


                // const newArr = res.data.slice(0, 10);
                // setName(newArr);


                // console.log("this is new object"+name)
        });

    }, [])

    //console.log(name)
    // console.log("this is new object"+ name[0].id)
    
    // const myName = name.length > 0 ? (
    //     <div>
    //     {
    //         name.map((item, ind) => (
    //             <div key={ind}>
    //                 <h5>{item.title}</h5>
    //                 <p>{item.body}</p>
    //             </div>
    //     ))
    //     }
    //     </div>
    // ) : (<p>Loading</p>)

    let myName;

    if (name.length > 0) {

        myName = (
            <div>
            {
                name.map((item, ind) => (
                    <Post key={ind} item={item} />
                ))
            }
            </div>
        );

    } else {

        myName = <p>Loading Data, Please Wait ...</p>;

    }


    return (

        <div>
            {myName}
        </div>
    )
}

export default API;