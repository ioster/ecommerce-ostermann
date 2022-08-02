import ItemDetail from "./ItemDetail";
import React, {useEffect, useState} from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const munieco = {id: 1, image: "http://www.shunete.es/vintage/images/fichas/pegaso/2.jpg", ProductName: "Pegaso Seiya V1"};

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(munieco);
            },3000);
        });

        getData.then(res => setData(res));        
    },[])
    
    return (
        <ItemDetail data={data} />
    ); 
}

export default ItemDetailContainer;