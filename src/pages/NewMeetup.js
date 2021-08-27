import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';
import firebase from '../firebase';

//useHistory() hook is most important hooks, its redirect users to another pages,
//its stores all entries that user has visited
function NewMeetupPage() {
   const history = useHistory();

   //creating backend request function and pass it to NewMeetupForm
   function addMeetupHandler(meetupData) {
      firebase.database().ref('meetups').push().set({
         title: meetupData.title,
         address: meetupData.address,
         image: meetupData.image,
         description: meetupData.description,
         isFavorite: false
      });

      history.replace('/');
   //   fetch(
   //      'https://react-course-routes-default-rtdb.firebaseio.com/meetups.json',
   //   {
   //      method: 'POST',
   //      body: JSON.stringify(meetupData),
   //      headers: {
   //         'Content-Type': 'application/json'
   //      }
   //   }
   //   ).then(() => {
   //    //after posting datas to databese lets go to another page(AllMeetupPages)
   //      //replace(): repaleses the current page with '/' path page 
   //      history.replace('/');
   //   })
   }
   return (
    <section>
    <h1>New Meetup Page</h1>
    <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    </section>
   )
  

}

export default NewMeetupPage;