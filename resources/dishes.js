const url = 'https://api-dishes.vercel.app/';


async function obtenerPlatos() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new error('Fallo en la api');
    }
    // const data = await response.json()
    // console.log(data);

    return response.json();


  } catch (error) {
    console.log(error);
  }
}

// async function findById(id_product) {
//   try {
//     const response = await fetch(url+id_product);
//     if (!response.ok) {
//       throw new Error('Fallo en la api');
//     }
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }


async function addFishes(data){
  try {
    
    const response = await fetch(url, {method:'POST', headers: {'Content-type': 'application/json'}, body:JSON.stringify(data)});
    if(!response){
      throw new error('Fallo en la api');
    }

  } catch (error) {
    console.log(error);
    
  }
}







// Exporta el objeto Map
module.exports.obtenerPlatos = obtenerPlatos;
module.exports.addFishes = addFishes;
