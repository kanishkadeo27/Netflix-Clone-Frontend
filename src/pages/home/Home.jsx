import Featured from '../../Components/featured/Featured';
import Navbar from '../../Components/navbar/Navbar';
import List from '../../Components/list/List';
import './home.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({type}) => {
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState("");

  useEffect(() => {
    const getRandomList = async ()=>{
      try {
        const res = await axios.get(`lists${type ? "?type="+type:""}${genre ? "genre="+genre:""}`,{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmQ2YmUwMzEwODk2MDBlOTllZThhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNTQ1MTY5MCwiZXhwIjoxNzM1ODgzNjkwfQ.yIwW6hNyP4Z_b5u9yqOw2UguV7PyF-3lN_lxmtVJCEM"
          }
        });
        console.log(res?.data)
        setLists(res?.data);
      } catch (error) {
        console.log(error)
      }
    }
    getRandomList();
  },[type,genre]);
  
  return (
    <div className="home">

      <Navbar/>
      <Featured type={type}/>
      {lists && lists.map((list)=>(

      <List list={list}/>
      ))}
      
    </div>
  )
}

export default Home