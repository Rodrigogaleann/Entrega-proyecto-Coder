const Productos = []


const CrearProducto = () => {

           

            let continuar = true

            while (continuar == true) {


                const modelo = prompt ("Ingrese nombre del modelo")
                const codigo = prompt ("ingrese codigo de producto")
                const stock = prompt ("ingrese la cantidad de stock inicial")
              
                const producto = {
                modelo: modelo,
                codigo: codigo,
                stock: stock,
                }
        
                Productos.push(producto)

                
                } 

                let Confirmacion = confirm("Desea crear otro producto?")
    
                if (Confirmacion == false){
            
                continuar = false
            
                const Saludos = alert("Gracias")
    
            }

            }            

CrearProducto()

console.log(Productos)