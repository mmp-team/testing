const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  res.send('products')
})

router.get('/:id', async (req, res, next) => {
  res.send('productId')

})
