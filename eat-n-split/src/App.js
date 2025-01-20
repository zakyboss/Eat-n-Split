import './index.css';
import Payments from './Payment';
import Friends from './Friends';
import {  useState } from 'react';

function App() {
  const [firstName,setFirstName]= useState("");
  const [lastName,setLastName]= useState("");
  const [photo,setPhoto]=useState('');
  const [displaySplitForm , setDisplaySplitForm]= useState(false)
  const [bill, setBill]= useState("");
   const [myExpenses,setMyExpenses]= useState("")
   const [friendsExpenses,setFriendsExpenses]= useState("")
   const [payer,setPayer]= useState(null)
   let   [eatBuddy,setEatBuddy]= useState(null)
  const [payments,setPayments]= useState([])



  function handleToggleSplitForm(id) {
    const eater = friend.find((value) => value.id === id); // Find selected friend
    setEatBuddy(eater); // Set eatBuddy to the selected friend
    setDisplaySplitForm(true); // Show the PaymentForm
    console.log(eatBuddy)
  }
  const [displayAddForm , setDisplayAddForm]= useState(false)
 function handleToggleAddForm(){
  setDisplayAddForm(!displayAddForm );
  // console.log(friend)
 }
 const [friend , setFriend]= useState([ 
  { id:123,firstName:'Kevin', lastName:'Samuels', payments:[40,-30,20,-19,-30],photo:'./guy1.jpeg'},
  {id:456,firstName:'Sasha', lastName:'Jones',payments:[42,-32,20,-190,19], photo:'/woman1.jpeg'},
  {id:789,firstName:'Troy', lastName:'Jarvis',payments:[24,-30,10,-17,30], photo:'/guy2.jpeg'}
 
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
              setFirstName("")
              setLastName("")
            }
        
          // deleting Logic 
      function  handleDelete(id){
    setFriend(friends=> friends.filter(friend=>friend.id!==id))
        }  
         //  DATA USED IN PAYEMENT FORM 
  const paymentData={
    bill,
    setBill,
    myExpenses,
    setMyExpenses,
    friendsExpenses,
    setFriendsExpenses,
    payer,
    setPayer,
    handlePayment ,
    //  eatBuddy
  }
  function handlePayment(e) {
    e.preventDefault();
  
    // Validate the form inputs
    if (bill.length < 1 || myExpenses.length < 1 || friendsExpenses.length < 1) {
      alert("Please fill in all fields correctly!");
      return;
    }
  
    const totalBill = parseFloat(bill);
    const myShare = parseFloat(myExpenses);
    const theirShare = parseFloat(friendsExpenses);
  
    if (!eatBuddy) {
      alert("Please select a friend to split the bill with.");
      return;
    }
  
    // Update the selected friend's payments based on who paid
    const updatedFriends = friend.map((currentFriend) => {
      if (currentFriend.id === eatBuddy.id) {
        const updatedPayments =
          payer === "You"
            ? [...currentFriend.payments, -(totalBill - theirShare)] // You paid, they owe their share
            : [...currentFriend.payments, (totalBill - myShare)]; // They paid, you owe your share
  
        return { ...currentFriend, payments: updatedPayments };
      }
      return currentFriend;
    });
  
    setFriend(updatedFriends); // Update the state with the modified payments array
    setDisplaySplitForm(false); // Hide the payment form after submission
  
    // Reset form fields
    setBill("");
    setMyExpenses("");
    setFriendsExpenses("");
    setPayer(null);
  }
        
  return (
    <div className="App">
      <Friends data={friend} onSelectFriend={handleToggleSplitForm} onClick={handleToggleAddForm}
       onAddFriend={addFriend} displayAddForm={displayAddForm} names={addFriendData} onDelete={handleDelete} />
      <Payments display={displaySplitForm} paymentData={paymentData} />
          </div>
  );
}

export default App;
