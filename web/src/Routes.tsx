// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PeopleLayout from 'src/layouts/PeopleLayout'
import TripsLayout from 'src/layouts/TripsLayout'
import MocciLayout from 'src/layouts/MocciLayout'

const Routes = () => (
  <Router>
    <Set wrap={PeopleLayout}>
      <Route path="/people/new" page={PersonNewPersonPage} name="newPerson" />
      <Route path="/people/{id:Int}/edit" page={PersonEditPersonPage} name="editPerson" />
      <Route path="/people/{id:Int}" page={PersonPersonPage} name="person" />
      <Route path="/people" page={PersonPeoplePage} name="people" />
    </Set>
    <Set wrap={TripsLayout}>
      <Route path="/trips/new" page={TripNewTripPage} name="newTrip" />
      <Route path="/trips/{id:Int}/edit" page={TripEditTripPage} name="editTrip" />
      <Route path="/trips/{id:Int}" page={TripTripPage} name="trip" />
      <Route path="/trips" page={TripTripsPage} name="trips" />
    </Set>
    <Set wrap={MocciLayout}>
      <Route path="/mocci-case/{id:Int}" page={MocciCasePage} name="mocciCase" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Set>
  </Router>
)

export default Routes
