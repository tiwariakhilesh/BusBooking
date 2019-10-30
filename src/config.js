const config = {
  baseUrl: 'http://64.202.184.116:8080/BiharConsumer/api/v0/',
  //baseUrl: 'http://localhost:8080/BiharConsumer/api/v0/',
  login: 'auth/serviceLoginAuth',
  createProfile:'auth/createUser',
  profileByUserId: 'auth/',
  updateProfile:'auth/update/',
  resetPassword: 'auth/resetpassword',
  logOut: 'auth/logout',
  allCityList: 'cities/',
  scheduleBusList: 'bus/route',
  scheduleTrip: 'bus/trip',
  bookTikcet:'ticket/bookTickets',
  ticketBookingList:'ticket/',
  ticketCancelList:'ticket/cancel/',
  cancelTicket:'ticket/cancelTickets/'
}

export default config;
