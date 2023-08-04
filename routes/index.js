//enrutamiento
//elemtos necesarios para hacer enrutamiento
const express = require('express')
const router = express.Router()


const { obtenerPlatos, addFishes } = require('../resources/dishes')

// const filePath = path.join(__dirname, '..', 'resources', 'inventory.json');


router.get('/', async (req, res) => {
  const platos = await obtenerPlatos()
  res.render ('CartaPlatos', {'title': 'Carta platos', 'data':platos.data})
})



router.get('/add', (req, res) => {
  
  res.render('addPlatos', {'title': 'Agregar Platos'})
})

router.post('/add', async (req, res) => {
    console.log('entro ha agregar');
    const { idDish, name, calories, isVegetarian, value, comments } = req.body;
  
    // Corregir la asignación del valor booleano para isVegetarian
    const isVegetarianBool = isVegetarian === 'S' ? true : false;
  
    // Agregar el nuevo registro al objeto 'data'
    const data = {
      idDish: idDish,
      name: name,
      calories: calories,
      isVegetarian: isVegetarianBool,
      value: value,
      comments: comments
    };
  
    console.log(data);
  
    try {
      // Llamar a la función addFishes y manejar la respuesta
      const addplatos = await addFishes(data);
  
      // Si la función addFishes no lanza errores, redirigir al usuario a la página de inicio
      res.redirect('/');
    } catch (error) {
      // En caso de error, mostrar un mensaje de error o realizar alguna otra acción apropiada
      console.log(error);
      res.status(500).send('Error al agregar el plato');
    }
  });
  

// router.get('/:id', async(req, res) => {
  
//   console.log('entri');
//     const id = req.params.id;
//     console.log(id);
//     const inventario = await findById(id)
//     console.log(inventario);
//     res.render('updateInventory', {'data':inventario.data, 'title': 'Actualizar registros'})

// });










module.exports = router
