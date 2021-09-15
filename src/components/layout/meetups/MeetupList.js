import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import firebase from '../../../firebase';
import {useContext} from 'react';
import FavoritesContext from '../../../store/favorites-context';



function MeetupList(props) {
const favoritesCtx = useContext(FavoritesContext);


// firebase.database().ref("meetups").push().set({
//   address: 'aaa',
//   title: 'aaa',
//   image: 'aaa',
//   description: 'aaa'
// })
  async function deleteMeetup(id) {
    debugger
    const filteredMeetups = props.meetups.filter(m => m.id !== id);
    props.filteredMeetups(filteredMeetups);
    firebase.database().ref(`/meetups/${id}`).remove();
    // firebase.database().ref(`/favorites/${id}`).remove()

  }
  async function deleteFavoriteMeetup(id) {
    debugger
    // const filteredFavoriteMeetups = props.meetups.filter(m => m.id !== id);
    // props.filteredMeetups(filteredFavoriteMeetups);
    favoritesCtx.removeFavorite(id);
    // firebase.database().ref(`/favorites/${id}`).remove()
  }


  return(
    <ul className= {classes.list}>
    

    
     {
      props.meetups.map((meetup, index) => 
      <MeetupItem 
       key={index}
       id = {meetup.id}
       image = {meetup.image}
       title = {meetup.title}
       address = {meetup.address}
       description = {meetup.description}
       onDeleteMeetup = {() => {deleteMeetup(meetup.id)}}
       onDeleteFavMeetup = {() => {deleteFavoriteMeetup(meetup.id)}}
       />
     )}
  </ul>
  )
}

export default MeetupList;