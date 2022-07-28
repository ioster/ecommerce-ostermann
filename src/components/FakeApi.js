const productos = [
    {id:'01',
     name:'Producto 1',
    description:"Este es un productio ficticio...No compre",  price:100, stock:100, },
        
  ]

  export const data = new Promise((resolve, reject) => {
    
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('salio mal :( no hay sushi')
      }

    },3000)

  })