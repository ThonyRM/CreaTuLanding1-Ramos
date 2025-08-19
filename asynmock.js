const misProductos=[
    {id:1, nombre:"Arroz", precio:125,img:"../img/arroz.jpg",categoria:"alimentos" , stock:5},
    {id:2, nombre:"Fideos", precio:100,img:"../img/fideos.jpg",categoria:"alimentos" , stock:15},
    {id:3, nombre:"Pan", precio:80,img:"../img/pan.jpg",categoria:"alimentos" , stock:10},
    {id:4, nombre:"Galletitas", precio:90,img:"../img/galletas.jpg",  categoria:"alimentos", stock:20},
    {id:5, nombre:"Aceite", precio:350,img:"../img/aceite.jpg",categoria:"alimentos" , stock:25},
    {id:6, nombre:"Yerba", precio:450,img:"../img/yerba.jpg",categoria:"alimentos" , stock:15},
    {id:7, nombre:"Jabon", precio:600,img:"../img/jabon.jpg",categoria:"limpieza" , stock:15},
    {id:8, nombre:"Suavizante", precio:300,img:"../img/suavizante.jpg",categoria:"limpieza" , stock:10},
    {id:9, nombre:"Lavandina", precio200:150,img:"../img/lavandina.jpg",categoria:"limpieza" , stock:30},
    {id:10, nombre:"Detergente liquido", precio:400,img:"../img/detergente.jpg",categoria:"limpieza" , stock:48},

]
export const getProductos =() =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },100)
    })
}
export const getProductoById =(id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const producto= misProductos.find(prod => prod.id === parseInt(id)) 
            resolve(producto)
        },100)
    })  
}
export const getProductosByCategoria =(categoriaId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const categoria= misProductos.filter(prod => prod.categoria === categoriaId)
            resolve(categoria)
        },100)
    })  
}