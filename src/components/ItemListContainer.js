import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { data } from "./FakeApi"

const ItemListContainer = ({greeting}) => {
  const [listaProductos, setListaProductos]= useState([])
  const[mensaje, setMensaje] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{    
    data
    .then((res)=> setListaProductos(res))
    .catch(()=> setMensaje('error'))
    .finally(()=> setLoading(false))
  }, [])


  return (
    <div>
      <h2>{greeting}</h2>
      {mensaje && <p>{mensaje}</p>}      
      
       { loading ? <p>Cargando...</p>  : <ItemList listaProductos={listaProductos}/>}

    </div>
  )
}

export default ItemListContainer