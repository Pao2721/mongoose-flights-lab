import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

export {
  router
}

//GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)

//GET localhost:3000/
router.get('/', flightsCtrl.index)


//Get localhost:3000/flights
router.post('/', flightsCtrl.create)