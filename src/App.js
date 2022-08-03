import React from "react";
import Card from "./components/Card/Card";
import List from "./components/UniqueList/List";
import Data from "./data.json";

const users = [
    {
        fullName : "Mominul islam",
        age : 25,
        phones : [
            {home : "01737741423"},
            {office : "01785481821"},
        ]
    },

    {
        fullName : "Golam Rabbi",
        age : 26,
        phones : [
            {home : "01404105285"},
            {office : "01620787367"},
        ]
    }
]

function App(){

    return <div>
        <h1 className="headingStyle">Todo App</h1>
        {Data.map( (item,index) => <Card key={index} titleText={item.title} descText={item.desc}/>)}
        <List />

        <h1>Nested List</h1>


        {
            users.map((user,index)=>
                <article key={index}>
                    <h3>Fullname: {user.fullName}</h3>
                    <p>Age: {user.age}</p>
                    {
                        user.phones.map((phone,index) => 
                        <div key = {index}>
                            <p>Home : {phone.home}</p>
                            <p>office : {phone.office}</p>
                        </div>
                        
                        )
                    }
                </article>)
        }
        
    </div>
}
export default App;

// export default function App(){
//     return (
//         <div>
//             <h1>Mominul islam</h1>
//         </div>
//     );
// }