import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMeetAndGreet, fetchMeetAndGreet } from '../../meetAndGreets';

const MeetAndGreetShow = () => {
  const {meetAndGreetId} = useParams();
  const dispatch = useDispatch();
  const meetAndGreet = useSelector(getMeetAndGreet(meetAndGreetId));

  useEffect(()=>{
    dispatch(fetchMeetAndGreet(meetAndGreetId));
  }, [meetAndGreetId])

  return(
    <>
      <h2>{meetAndGreet.startTime}</h2>
      <p>{meetAndGreet.date}</p>
      <Link to="/user/profile/meetAndGreets">All Meet & Greets</Link>
    </>
  )
}

export default MeetAndGreetShow;