import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const [movieItem, setMovieItem] = useState(null);

  useEffect(() => {
    setMovieItem(location?.state?.movie);
  }, [location]);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video className="video" autoPlay controls src={movieItem?.video} />
    </div>
  );
};

export default Watch;
