import './App.css';
import SideBar from './components/chatlistbar/Sidebar.component';
import ChatBody from './components/chatbody/Chatbody.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/login/Login.component';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? <Login/> : (
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
