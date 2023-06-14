import { Route, Redirect, Switch } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import MyProfile from './components/MyProfile'
import UsersProfile from './components/UsersProfile'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/my-profile" component={MyProfile} />
      <ProtectedRoute exact path="/users/:id" component={UsersProfile} />
      <ProtectedRoute component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
