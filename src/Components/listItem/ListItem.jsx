import './listitem.scss';
import PlayArrowIcon  from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
const ListItem = () => {
  return (
    <div className='listitem'>
      <img src='https://images.unsplash.com/photo-1681890442554-9256eaaa3e67?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0cml4fGVufDB8fDB8fHww' alt='imagelist'/>

      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon/>
          <AddIcon/>
          <ThumbUpOffAltIcon/>
          <ThumbDownOffAltIcon/>
        </div>
      </div>
    </div>
  )
}

export default ListItem