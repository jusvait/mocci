// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import PeopleLayout from 'src/layouts/PeopleLayout'
import TripsLayout from 'src/layouts/TripsLayout'
import MocciLayout from 'src/layouts/MocciLayout'

const Routes = () => (
  <Router>
    <Route path="/login" page={LoginPage} name="login" />
    <Route path="/signup" page={SignupPage} name="signup" />
    <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
    <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
    <Private unauthenticated='home'>
      <Set wrap={PeopleLayout}>
        <Route path="/admin/people/new" page={PersonNewPersonPage} name="newPerson" />
        <Route path="/admin/people/{id:Int}/edit" page={PersonEditPersonPage} name="editPerson" />
        <Route path="/admin/people/{id:Int}" page={PersonPersonPage} name="person" />
        <Route path="/admin/people" page={PersonPeoplePage} name="people" />
      </Set>
      <Set wrap={TripsLayout}>
        <Route path="/admin/trips/new" page={TripNewTripPage} name="newTrip" />
        <Route path="/admin/trips/{id:Int}/edit" page={TripEditTripPage} name="editTrip" />
        <Route path="/admin/trips/{id:Int}" page={TripTripPage} name="trip" />
        <Route path="/admin/trips" page={TripTripsPage} name="trips" />
      </Set>
    </Private>

    <Set wrap={MocciLayout}>
      <Route path="/mocci-case/{id:Int}" page={MocciCasePage} name="mocciCase" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Set>
  </Router>
)

export default Routes
