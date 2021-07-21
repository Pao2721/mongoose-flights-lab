import { Flight } from "../models/flight.js"

export  {
 newFlight as new,
 create,
 index,
 show,
 ticket,
 newDestination
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

// function createTicket(req, res) {
//  Flight.findById(req.params.id)
//  .then(flight => {
//      flight.tickets.push(req.body)
//      flight.save()
//      .then(result => res.redirect(`/flights/${flight._id}`))
//      .catch(err => console.log(err))
//  })
// }

function show(req, res) {
 Flight.findById(req.params.id, (err, flight) => {
  res.render('flights/show', {
   title: 'Flight Details',
   flight: flight
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

       