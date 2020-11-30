import React, { useState, useEffect } from 'react'
import axios from 'axios'

function APISingle() {
    
    const [name, setName] = useState();
    const [id, setID] = useState(1);

    useEffect(() => {

        console.log("I am in USe Effect")
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
                console.log(res.data);
                setName(res.data);


                // const newArr = res.data.slice(0, 10);
                // setName(newArr);


                // console.log("this is new object"+name)
        });

    }, [id])

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

    if (name) {

        myName = (
            <div>
            
                    <div>
                        <h5>{name.id} : {name.title}</h5>
                        <p>{name.body}</p>
                    </div>
            </div>
        );

    } else {

        myName = <p>Loading Data, Please Wait ...</p>;

    }

    let buttons_arr = [];

    
    for (let n=1; n<=10; n++) {
        buttons_arr.push (<button onClick={() => setID(n)}> {n} </button>);
    }


    return (

        <div>
            {
                buttons_arr.map (itm => itm)
            }
            {myName}
        </div>
    )
}

export default APISingle;