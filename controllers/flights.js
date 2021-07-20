import { Flight } from "../models/flight.js"

export  {
 newFlight as new,
 create,
 index
}

function index(req,res) {
 Flight.find({}, (err, flights) => {
  res.render('flights/index', {
   err: err, 
   flights: flights,
   title: 'All Flights'
  })
 })
}




function create(req, res) {
 const flight = new Flight(req.body)
 flight.save((err) => {
  if(err) return res.redirect('/flights/new')
  res.redirect('/flights/')
 })
}


function newFlight(req,res) {
 res.render('flights/new', {
  title:'Add Flight'
 })
}

       