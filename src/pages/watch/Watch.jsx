import './watch.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Watch = () => {
    const trailer = "https://www.w3schools.com/html/mov_bbb.mp4";

    return (
        <div className='watch'>
            <div className='back'>
                <ArrowBackIcon />
                Home
            </div>
            <video className='video' autoPlay progess controls src={trailer}/>
        </div>
    )
}

export default Watch