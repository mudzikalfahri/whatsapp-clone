import './App.css';
import SideBar from './components/chatlistbar/Sidebar.component';
import ChatBody from './components/chatbody/Chatbody.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login.component';
import { useStateValue } from './stateprovider';

function App() {
  const [{user}] = useStateValue();
  return (
    <div className="App">
      {!user ? <Router><Login/></Router> : (
        <Router> 
          <SideBar />
          <Switch>
            <Route path='/groups/:groupId'>
              <ChatBody />
            </Route>
          </Switch>
        </Router>
      )} 
    </div>  
  );
}

export default App;
