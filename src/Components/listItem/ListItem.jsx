import "./listitem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListItem = ({ index, item }) => {
  // console.log(item);
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  // const trailer = movie?.trailer;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/movies/find/` + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmQ2YmUwMzEwODk2MDBlOTllZThhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczODU4MDg0NSwiZXhwIjoxNzM5MDEyODQ1fQ.Lt5vyyBh0n2WZTLFDpqfjZxTDLEFYHfW1ZuWRclx5L4",
          },
        });
        setMovie(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to="/watch" state={{ movie }}>
      <div
        className="listitem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.img} alt="image" />
        {isHovered && (
          <>
            <video src={movie?.trailer} autoPlay={true} loop muted />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOffAltIcon className="icon" />
                <ThumbDownOffAltIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span className="duration">{movie?.duration}</span>
                <span className="limit">+{movie?.limit}</span>
                <span className="releaseYear">{movie?.year}</span>
              </div>
              <div className="desc">{movie?.desc}</div>
              <div className="genre">{movie?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
