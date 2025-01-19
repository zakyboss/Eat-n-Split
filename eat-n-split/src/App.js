import './index.css';
import Payments from './Payment';
import Friends from './Friends';

 const data= [
{ id:123,firstName:'Kevin', lastName:'Samuels', payments:[400,-300,200,-190,30],photo:'./guy1.jpeg'},
{id:456,firstName:'Sasha', lastName:'Jones',payments:[423,-324,2430,-19000,1900], photo:'/guy2.jpeg'},
{id:789,firstName:'Troy', lastName:'Jarvis',payments:[245,-300,10,-167,3000], photo:'/woman1.jpeg'}
]
function App() {
  console.log(Friends)
  return (
    <div className="App">
      <Friends data={data}/>
      <Payments/>
          </div>
  );
}

export default App;
