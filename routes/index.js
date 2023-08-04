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

router.post('/add', async(req,res)=>{
    console.log('entro ha agregar');
      const {idDish, name, calories, isVegetarian, value, comments} = req.body

      const isVegetarianBool = isVegetarian === 'S' ? true : false;
    // Agregar el nuevo registro al objeto 'data'
      data = {
      idDish: idDish,
      name: name,
      calories: calories,
      isVegetarian: isVegetarianBool,
      value: value,
      comments: comments
    };

    console.log(data);
    const addplatos = await addFishes(data)

    
    res.redirect('/')
    
})












module.exports = router
