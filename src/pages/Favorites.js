import {useContext, useEffect, useState} from 'react';
import FavoriteContext from '../store/favorites-context';
import MeetupList from '../components/layout/meetups/MeetupList';
import firebase from '../firebase';


function FavoritesPage() {
  const favoriteCtx = useContext(FavoriteContext);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  let content;
useEffect(() => {
  console.log("hi")
  getFavorites();
},[]);

async function getFavorites() {
  setIsLoading(true);
  const favItems = firebase.database().ref('favorites');
  await favItems.on('value', (snapshot) => {
    let favorites = snapshot.val();

    const favMeetups = [];
    for(let key in favorites){
      const meetup = {
        id: key,
        ...favorites[key]
      };
      favMeetups.push(meetup);
    };
    setIsLoading(false);
    setLoadedMeetups(favMeetups);
  
  });
}


  if(isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  if(favoriteCtx.totalFavorites === 0) {
    content = <p>There are no favorites!!! Add Some???</p>
  } else {
    content = <MeetupList meetups = {loadedMeetups} />
  }
  return <section>
  <h3>My Favorites</h3>
   {content}
</section>
  
}

//function getFavorites(){
  //     setIsLoading(true);
  //     console.log(favoriteCtx.favorites)
  //     favoriteCtx.favorites.map(favMeetup => {
  //       if(favMeetup.isFavorite === true) {
  //         fetch('https://react-course-routes-default-rtdb.firebaseio.com/meetups.json').then(response => {
  //           return response.json();
  //         }).then(data => {
  //           const favMeetups = [];
      
  //           for(const key in data) {
  //             const meetup = {
  //               id: key,
  //               ...data[key] //add all key,value pairs from nested object to meetup object
  //             };
  //             favMeetups.push(meetup);
  //           }
  //           setIsLoading(false);
  //           setLoadedMeetups(favMeetups);
  //           console.log(favMeetups);
  //         })
  //       }
  //     })
  //   }

export default FavoritesPage;