import  {useRef} from 'react'; //gartumenk inputi mechi krvadznere user-i goghmits

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

//pokhantsumenk props NewMeetup page-ic sdanalou backendi requeste(vore hamarvume ira parent comp)
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
       title: enteredTitle,
       image: enteredImage,
       address: enteredAddress,
       description: enteredDescription,
       isFavorite: false
    }

   
    //onAddMeetup(): mer backend-i requesti methodne vore call enk arel NewMeetup component-ic
    props.onAddMeetup(meetupData);

  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className = {classes.control}>
          <label htmlFor ='title' >Meetup Title</label>
          <input type = 'text' required id='id' ref = {titleInputRef} />
        </div>
        <div className = {classes.control}>
          <label htmlFor ='image' >Meetup image</label>
          <input type = 'url' required id='image' ref ={imageInputRef} />
        </div>
        <div className = {classes.control}>
          <label htmlFor ='address' >Address</label>
          <input type = 'text' required id='address' ref = {addressInputRef}/>
        </div>
        <div className = {classes.control}>
          <label htmlFor ='description' >Description</label>
          <textarea id = 'description' required rows='5' ref = {descriptionInputRef}></textarea>
        </div>
        <div className = {classes.actions}>
          <button>Add New Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm;