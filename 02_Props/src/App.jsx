import React from "react";
import Card from "./Components/Card.jsx";


const App = () => {
  return (
    <div className="Parent">
      <Card user="Suraj Gupta" img="https://t3.ftcdn.net/jpg/21/98/47/54/360_F_2198475461_cOtOmtFpxX4BUxwi44KnNM8LwVmuBbD9.jpg" />
      <Card user="Rajababu" img="https://static.vecteezy.com/system/resources/thumbnails/074/213/447/small/brightly-smiling-elementary-asian-boy-student-wearing-blue-school-uniform-vest-white-shirt-and-red-tie-standing-in-sunny-classroom-setting-free-photo.jpeg" />
      <Card user="Subash Ram" img="https://media.istockphoto.com/id/950609730/photo/smiling-african-school-boy.jpg?s=612x612&w=0&k=20&c=CffvlpWoT3sG15m6qaAvSsF4wbJoUzISBEsG3NsONz4=" />
     
      <Card user="Abhishek Acid" img="https://static.vecteezy.com/system/resources/thumbnails/074/212/851/small/confident-teenage-boy-wearing-a-navy-blue-school-uniform-and-backpack-smiles-brightly-inside-a-brightly-lit-educational-hallway-free-photo.jpeg"/>
     <Card user="Subash Black" img="https://static.vecteezy.com/system/resources/thumbnails/056/828/767/small/a-young-african-boy-in-a-school-uniform-free-photo.jpeg" />
    </div>
  );
};

export default App;