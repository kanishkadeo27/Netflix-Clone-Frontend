import Featured from "../../Components/featured/Featured";
import Navbar from "../../Components/navbar/Navbar";
import List from "../../Components/list/List";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists &&
        lists.map((list, index) => (
          <List key={list?.id || index} list={list} />
        ))}
    </div>
  );
};

export default Home;
