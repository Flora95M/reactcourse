import  classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import {useContext} from 'react';
import FavoritesContext from '../../../store/favorites-context';

function MeetupItem(props) {
 
  //gabetsink mer componente Context-in hed
const favoritesCtx = useContext(FavoritesContext);

const itemIsfavorite = favoritesCtx.itemIsFavorite(props.id);


function toggleFavoriteStatesHandler(){
  if(itemIsfavorite) {
     favoritesCtx.removeFavorite(props.id);
  } else {
    favoritesCtx.addFavorite({
      id: props.id,
      title: props.title,
      address: props.address,
      image: props.image,
      description: props.description,
      isFavorite: true
    });
  }
}

function deleteMeetupHandler(meetupId){
 props.onDeleteMeetup(meetupId);
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
       <button onClick = {toggleFavoriteStatesHandler}> {itemIsfavorite ? 'Remove from favorites': 'To Favorites'}</button>
       </div>
       <div className = {classes.actions}>
       <button onClick = {() => {deleteMeetupHandler(props.id)}}>Delete</button>
       </div>
      </Card>
    </li>
    )
}

export default MeetupItem;