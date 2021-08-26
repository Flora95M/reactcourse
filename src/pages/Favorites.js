import {useContext} from 'react';
import FavoriteContext from '../store/favorites-context';
import MeetupList from '../components/layout/meetups/MeetupList';

function FavoritesPage() {
  const favoriteCtx = useContext(FavoriteContext);
  let content;

  if(favoriteCtx.totalFavorites === 0) {
    content = <p>There are no favorites!!! Add Some???</p>
  } else {
    content = <MeetupList meetups = {favoriteCtx.favorites}/>
  }
  return <section>
  <h3>My Favorites</h3>
   {content}
</section>
  
}

export default FavoritesPage;