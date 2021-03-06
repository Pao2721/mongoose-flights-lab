import { Flight } from "../models/flight.js"
import { destination } from '../models/destination.js'

export  {
 newFlight as new,
 create,
 index,
 show,
 ticket,
 newDestination,
}

function newDestination(req, res) {
 Flight.findById(req.params.id)
 .then(flight => {
   flight.destinations.push(req.body.destinationId)
   flight.save()
   .then(result => res.redirect(`/flights/${flight._id}`))
 })
}

function ticket(req, res) {
 flight.findById(req.params.id, (err, flight) => {
  flight.ticket.push(req.body)
  flight.save((err) => {
   res.redirect(`/flights/${flight._id}
   `)
  })
 })
}


function show(req, res) {
  Flight.findById(req.params.id)
  .populate('destinations')
  .exec((err, flight) => {
   destination.find({_id: {$nin: flight.destination}}, (err, destination) => {
    res.render('flights/show', {
     title: 'Flight Details',
     flight: flight,
     destination: destination
    })
  })
 })
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

       