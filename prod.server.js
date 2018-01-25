var express = require('express')
var config = require('./config/index')

var port = process.env.PORT || config.build.port
var app = express()

var router = express.Router()
router.get('/', function (req, res, next) {
  req.url = './index.html'
  next()
})

app.use(router)

var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
var apiRoutes = express.Router()
apiRoutes.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    seller: seller
  })
})
apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    goods: goods
  })
})
apiRoutes.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    ratings: ratings
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening')
})
