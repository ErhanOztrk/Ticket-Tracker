import React from "react";
import Cards from "./card";
import list from './Data'


const Employee =() =>{
    return (
    <section>
        {
            list.map((item)=><Cards key={item.id} item={item} />)
        }
    </section>
    )
};

export default list;