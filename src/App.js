// import PropTypes from "prop-types";
import UserCard from './UserCard/UserCard';
import user from './user.json';
import data from './data.json'
import './App.css';
import Statistic from './Statistics/Statistic';




function App() {
  return (
    <div className="App">
      <UserCard user={user}/>
      <Statistic title="Upload stats" stats={data}/>
    </div>
  );
}

export default App;
