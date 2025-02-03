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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmQ2YmUwMzEwODk2MDBlOTllZThhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczODU4MDg0NSwiZXhwIjoxNzM5MDEyODQ1fQ.Lt5vyyBh0n2WZTLFDpqfjZxTDLEFYHfW1ZuWRclx5L4",
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
      <Featured type={type} />
      {lists &&
        lists.map((list, index) => (
          <List key={list?.id || index} list={list} />
        ))}
    </div>
  );
};

export default Home;
