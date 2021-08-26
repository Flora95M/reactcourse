import MeetupList from '../components/layout/meetups/MeetupList';
import {useState, useEffect} from 'react';

function AllMeetupsPage() {
  //isLoading is for wait to finish fetch function its work and then return
  //AllMeetupsPage() function
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);



//before returning anything we should get the datas from database
//useEffect() is a hook that run when the current component run for the first time
//if we write fetch() function outside the useEffect(), it will execute forever non stop
//the empty array of second argument of the useEffect() is telling us when and how timemust run useEffect()functions
//[] means run one time
//[something] runs after something happen(changes its value)

  useEffect(() => {
   getMeetups();
  }, []);


      function getMeetups() {
            //amen ankam zabros aneluc backendic setIsLoading@ true g verakrenk vor minchev 
    //amen dvyalnere sdana inke loading lini
    setIsLoading(true);
    fetch(
      'https://react-course-routes-default-rtdb.firebaseio.com/meetups.json'
    
    ).then(response => {
     return response.json();
    }).then((data) => {
       //after recieving all datas stop Loading and continiou 
    
       //here we dont get arrey but nseted object inside properties in firebase
      //  setLoadedMeetups(data);

       //we must transfer the data to array
       const meetups = [];

       for(const key in data) {
         const meetup = {
           id: key,
           ...data[key] //add all key,value pairs from nested object to meetup object
         };
         meetups.push(meetup);
         console.log(meetups);
       }

       setIsLoading(false);
       setLoadedMeetups(meetups);
    });
      }
      

  if(isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }


  return  <section>
    <h1>All Meetups</h1>

    {/* <ul>
    {Dummy_Data.map((meetup) => {
      return <li key ={meetup.id}>{meetup.title}</li>;
    })}
    </ul>     */
    <MeetupList meetups = {loadedMeetups}/>
    }
  </section>
 
}

export default AllMeetupsPage;