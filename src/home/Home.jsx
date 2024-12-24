import Featured from '../Components/featured/Featured';
import Navbar from '../Components/navbar/Navbar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">

      <Navbar/>
      <Featured/>
    </div>
  )
}

export default Home