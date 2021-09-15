//createContext is an object
import {createContext, useState} from 'react';
import firebase from '../firebase';

const FavoritesContext = createContext({
  //popokhaganner voronk mez bedken iren default arjeknerov
  //manageing this variables from another components
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});



//our context component that will wrap around all components that we want
export function FavoritesContextProvider(props){
  //polor ayt arjekneri(favorites, totalFavorites) popokhutyunnere aysdegh bidi gadarvi,
  //vor hasaneli linin polor componentnerin

  //usesate()-i michotsov menk sdanumenk userFavorites-nere ou pokhantsum context-in, aba FavoritesContextProvider-in vore value-i michotsov pokhantsume mnatsadz polor componentnerin
  const [userFavorites, setUserFavorites] = useState([]);


  //Methods that we need and manage them from another components
  function addfavoritesHandler(favoriteMeetup){
    debugger
    console.log(favoriteMeetup);
    setUserFavorites((prevUserFavorites) => {
      //nakhort favorite meetup-in vra avelatsnume nore
      return prevUserFavorites.concat(favoriteMeetup);
    });
    firebase.database().ref('favorites').push(favoriteMeetup);
  }

  function removeFavoriteHandler(meetupId){
    debugger
    setUserFavorites((prevUserFavorites) => {
     return prevUserFavorites.filter(prevMeetupsId => 
        prevMeetupsId.id !== meetupId);
    });
    firebase.database().ref(`/favorites/${meetupId}`).remove();
  }



  function itemIsFavoriteHandler(meetupId){
    debugger
    return userFavorites.some(meetup => 
      meetup.id === meetupId)
  }
  const context = {
    //all our items that we need and manage from other components
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addfavoritesHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}
export default FavoritesContext;



//vor mer haydararadz popokhagannere hasaneli lini polor componentnerin
