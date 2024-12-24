import Featured from '../Components/featured/Featured';
import Navbar from '../Components/navbar/Navbar';
import List from '../Components/list/List';
import './home.scss';

const Home = () => {
  return (
    <div className="home">

      <Navbar/>
      <Featured/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home