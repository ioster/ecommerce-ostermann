import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { data } from "./FakeApi"

const ItemListContainer = ({greeting}) => {
  const [listaProductos, setListaProductos]= useState([])
  const[mensaje, setMensaje] = useState(false)
  const [loading, setLoading] = useState(true)
  // const {greeting}= props
  // console.log(props)
  // console.log('me renderice soy el itemlist')

 

  
  

  console.log('me monte')

  useEffect(()=>{
    console.log('soy el useEffect')
    data
    .then((res)=> setListaProductos(res))
    .catch(()=> setMensaje('hubo un error, intente mas tarde'))
    .finally(()=> setLoading(false))
  }, [])


  return (
    <div>
      <h2>{greeting}</h2>
      {mensaje && <p>{mensaje}</p>}
      
      {/* desafio promesa */}
       { loading ? <p>Cargando...</p>  : <ItemList listaProductos={listaProductos}/>}

        {/* itemCount como el desafio del contador */}
      {/* <ItemCount initial={1} stock={15} onAdd={onAdd} /> */}
    </div>
  )
}

export default ItemListContainer