import React, { useState } from 'react'
import ItemCount from './ItemCount'


const Item = ({producto}) => {
  const[mensaje, setMensaje] = useState(false)
  const { img, name, description, price, stock, hashtags}=producto

  const onAdd = (cantidad) => {
    setMensaje(`Agregaste ${cantidad} items en el carrito`)
  }

  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>    
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">stock: {stock}</p>
        {hashtags?.map((frase, index)=> <p className="card-text" key={index}>{frase}</p>)}        
    </div>
      {mensaje && <p>{mensaje}</p>}
      <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
  </div>

  )
}

export default Item