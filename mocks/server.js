const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('mocks/db.json')
const middlewares = jsonServer.defaults()

var db = router.db

server.use(middlewares)

server.get('/getinsights', (_, res) => {
  setTimeout(() => {
    res.status(200).json(db.get('insights'))
  }, 3000);
})

server.get('/getinsightdetails/:insightId', (req, res) => {
  setTimeout(() => {
    res.status(200).json(db.get('insightsDetails').find({ id: req.params.insightId }).value())
  }, 3000);
})

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
