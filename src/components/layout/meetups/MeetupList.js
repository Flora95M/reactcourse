import { useState } from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  {console.log(props)}
  return(
    <ul className= {classes.list}>
     {props.meetups.map(meetup => 
      <MeetupItem key={meetup.id}
       id = {meetup.id}
       image = {meetup.image}
       title = {meetup.title}
       address = {meetup.address}
       description = {meetup.description}
       onDeleteMeetup = {() => {deleteMeetupHandler(meetup.id)}}
       />
     )}
  </ul>
  )


  async function deleteMeetupHandler(id) {
    await fetch(`https://react-course-routes-default-rtdb.firebaseio.com/meetups/${id}`, {
      method: 'DELETE',
      header: {
        'Accept' : 'application/json',
        'contentType' : 'application/json'
      }
    });
  }
}

export default MeetupList;