import './listitem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useState } from 'react';
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.w3schools.com/html/mov_bbb.mp4";
  return (
    <div className='listitem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <img src='https://images.unsplash.com/photo-1681890442554-9256eaaa3e67?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0cml4fGVufDB8fDB8fHww' alt='imagelist' />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop muted/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className='icon'/>
              <AddIcon className='icon'/>
              <ThumbUpOffAltIcon className='icon'/>
              <ThumbDownOffAltIcon className='icon'/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 15 mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum illo velit assumenda, nihil mollitia.
            </div>
            <div className="genre">Action</div>
          </div></>
      )}

    </div>
  )
}

export default ListItem