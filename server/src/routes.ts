import express from 'express'
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

// Padrão de nomes usado na comunidade: index, show, create, update, delete

const routes = express.Router()
const pointsController = new PointsController
const itemsController = new ItemsController

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points/', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes

// Vc poderia usar para organizar mais as pastas um Service Pattern
// ou um Repository Pattern ou chamado de Data Mapper