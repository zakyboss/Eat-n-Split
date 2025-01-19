import './index.css';
import Payments from './Payment';
import Friends from './Friends';
import { useState } from 'react';

function App() {
  const [firstName,setFirstName]= useState("");
  const [lastName,setLastName]= useState("");
  const [photo,setPhoto]=useState('');
  const [payments,setPayments]= useState([])
  const [displaySplitForm , setDisplaySplitForm]= useState(false)
 function handleToggleSplitForm(){
setDisplaySplitForm(!displaySplitForm)
 }
  const [displayAddForm , setDisplayAddForm]= useState(false)
 function handleToggleAddForm(){
  setDisplayAddForm(!displayAddForm )
 }
 const [friend , setFriend]= useState([ 
  { id:123,firstName:'Kevin', lastName:'Samuels', payments:[400,-300,200,-190,30],photo:'./guy1.jpeg'},
  {id:456,firstName:'Sasha', lastName:'Jones',payments:[423,-324,2430,-19000,1900], photo:'/guy2.jpeg'},
  {id:789,firstName:'Troy', lastName:'Jarvis',payments:[245,-300,10,-167,3000], photo:'/woman1.jpeg'}
  ]);

         // Data use in AddFriend Component 
 const addFriendData={
  firstName,
  setFirstName,
  lastName,
  setLastName,
  addFriend,
 }
 // Function to fetch a random photo
 async function getPhoto() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error("Failed to fetch the photo");
    }
    const data = await response.json();
    const photoURL = data.results[0].picture.large;
    return photoURL; // Return the photo URL after fetching
  } catch (error) {
    console.error("Error fetching the photo:", error);
    return null; // Return null if there's an error
  }
}


          // Function to Add a friend 
          async function addFriend(e) {
            e.preventDefault();
        
            if (firstName.length < 1 || lastName.length < 1) return;
        
            // Ensure the photo is fetched before adding the friend
            let fetchedPhoto = photo;
            if (!photo) {
              fetchedPhoto = await getPhoto();
            }
        
            if (!fetchedPhoto) {
              alert("Could not fetch photo! Please try again.");
              return;
            }
        
            const id = Math.floor(Math.random() * 100);
            const newFriend = {
              id,
              firstName,
              lastName,
              payments,
              photo: fetchedPhoto,
            };
        
            setFriend((cur) => [...cur, newFriend]);
          }
        
          // Data for passing to AddFriend component
         

  return (
    <div className="App">
      <Friends data={friend} onSelectFriend={handleToggleSplitForm} onClick={handleToggleAddForm}
       onAddFriend={addFriend} displayAddForm={displayAddForm} names={addFriendData} />
      <Payments display={displaySplitForm}/>
          </div>
  );
}

export default App;
