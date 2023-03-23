// import PropTypes from "prop-types";
import UserCard from './UserCard/UserCard';
import user from './user.json'


import './App.css';

function App() {
  return (
    <div className="App">
      <UserCard user={user}/>
    </div>
  );
}

export default App;
