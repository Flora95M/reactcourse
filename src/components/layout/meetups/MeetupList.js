import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import firebase from '../../../firebase';

function MeetupList(props) {

// firebase.database().ref("meetups").push().set({
//   address: 'aaa',
//   title: 'aaa',
//   image: 'aaa',
//   description: 'aaa'
// })
  async function deleteMeetup(id) {
    const filteredMeetups = props.meetups.filter(m => m.id !== id);
    props.filteredMeetups(filteredMeetups);
    firebase.database().ref(`/meetups/${id}`).remove()

  }


  return(
    <ul className= {classes.list}>
     {props.meetups.map(meetup => 
      <MeetupItem key={meetup.id}
       id = {meetup.id}
       image = {meetup.image}
       title = {meetup.title}
       address = {meetup.address}
       description = {meetup.description}
       onDeleteMeetup = {() => {deleteMeetup(meetup.id)}}
       />
     )}
  </ul>
  )
}

export default MeetupList;