import React, { useState } from "react";
import Light from "./Light";

function SmartHome() {
    const[masterOn, setMasterOn] = useState(false)
    const[kitchenOn, setKitchenOn] = useState(false)
    const[bathOn, setBathOn] = useState(false)

    const toggleMaster = ()=>setMasterOn(!masterOn);    
    const toggleKitchen = ()=>setKitchenOn(!masterOn);    
    const toggleBath = ()=>setBathOn(!masterOn);    
    return(
        <>
            <Light room="침실" on={masterOn} toggle={toggleMaster}></Light>
            <Light room="주방" on={kitchenOn} toggle={toggleKitchen}></Light>
            <Light room="욕실" on={bathOn} toggle={toggleBath}></Light>
        </>
    )
}
export default SmartHome;