import  classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import {useContext} from 'react';
import FavoritesContext from '../../../store/favorites-context';
import firebase from '../../../firebase';

function MeetupItem(props) {
 
  //gabetsink mer componente Context-in hed
const favoritesCtx = useContext(FavoritesContext);

const itemIsfavorite = favoritesCtx.itemIsFavorite(props.id);


 function toggleFavoriteStatesHandler(meetupId){
debugger
 
  if(itemIsfavorite) {
     favoritesCtx.removeFavorite(meetupId);
     props.onDeleteFavMeetup(meetupId);
  } else {
    const fav = {
      id: meetupId,
      title: props.title,
      address: props.address,
      image: props.image,
      description: props.description,
      isFavorite: true
    };
    favoritesCtx.addFavorite(fav);

  //  firebase.database().ref('favorites').push(fav);
   console.log(fav)
  }
}

function deleteMeetupHandler(meetupId){
  favoritesCtx.removeFavorite(meetupId);
  props.onDeleteMeetup(meetupId);
}
function deletefavMeetupHandler(meetupId) {
  props.onDeleteFavMeetup(meetupId);
}

 
  return (
    <li className = {classes.item}>
      <Card>
      <div className = {classes.image}>
       <img src = {props.image} alt={props.title}/>
     </div>
     <div className={classes.content}>
       <h3>{props.title}</h3>
       <address>{props.address}</address>
       <p>{props.description}</p>
     </div>
     <div className = {classes.actions}>
       <button onClick = {() => {toggleFavoriteStatesHandler(props.id)}}> {itemIsfavorite ? 'Remove from favorites': 'To Favorites'}</button>
       </div>
       <div className = {classes.actions}>
       <button onClick = {() => {
         itemIsfavorite ? 
         deletefavMeetupHandler(props.id) : deleteMeetupHandler(props.id)}}>Delete</button>
       </div>
      </Card>
    </li>
    )
}

export default MeetupItem;