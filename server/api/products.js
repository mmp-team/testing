const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
<<<<<<< HEAD
  res.send('products')
})

router.get('/:id', async (req, res, next) => {
  res.send('productId')

router.get('/reviews', async (req, res, next) => {
  try {
    res.send('reviews')
  } catch (err) {
    next(err)
  }
=======
  res.send('productss')
>>>>>>> 925b78d7e2f5a57714eb61f17c88c090bc9f4d9a
})
