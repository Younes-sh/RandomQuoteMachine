import {React, useState } from 'react'
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import Image4 from '../assets/image4.png';
import Image5 from '../assets/image5.png';
import Image6 from '../assets/image6.png';
import Image7 from '../assets/image7.png';
import Image8 from '../assets/image8.png';

const images  = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8
]



const Image = () => {
  let [count , setCount] = useState ([])
  let t = setCount ;
  let  myIndex = 1 ;
  function nextElement () {
    
    if( myIndex <  images.length  ){
      t = images[myIndex]
      myIndex++
    }
    else{
      myIndex = 0 ;
    }
  };
  



  return (
    <>
      <img src={count} style={{width:500}} alt=''/>
      <button style={{cursor:'pointer'}} onClick={nextElement}>click</button>
    </>
  )
}
export default Image ;