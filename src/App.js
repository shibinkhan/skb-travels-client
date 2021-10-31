import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignIn from './Pages/Shared/Header/SignIn/SignIn';
import Resister from './Pages/Shared/Header/Resister/Resister';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Shared/Header/SignIn/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/Home/Services/ServiceDetails/ServiceDetails';
import MyOrdrs from './Pages/MyOrdrs/MyOrdrs';
import ManageAllOrders from './Pages/AdminPanel/ManageAllOrders/ManageAllOrders';
import AddANewService from './Pages/AdminPanel/AddANewService/AddANewService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/myplans">
              <MyOrdrs></MyOrdrs>
            </PrivateRoute>

            <PrivateRoute path="/plans/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            
            <PrivateRoute path="/addanewservice">
              <AddANewService></AddANewService>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/signin">
              <SignIn></SignIn>
            </Route>

            <Route path="/resister">
              <Resister></Resister>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
