import React from 'react';
import Card from './card';

const Home = () =>{
    let Cards = [
        {
          src:'/assets/images/shoe.jpeg',
          title:'Sneaker',
          desc:'This is awesome and comfort sneakers',
        },
        {
          src:'/assets/images/pic.jpeg',
          title:'Belly',
          desc:'This is awesome and comfort Belly',
        },
        {
          src:'/assets/images/images.jpeg',
          title:'Chalesa',
          desc:'This is awesome and comfort Chelsa',
        },
        {
          src:'/assets/images/pic.jpg',
          title:'Flat',
          desc:'This is awesome and comfort sneakers',
        }
      ]
    
    return  <div className="row" >
    {Cards.map((item)=>
  <div className="col-md-3">
      <Card Show={item} />
  </div>
    )}
</div>
}
export default Home ;