import React,{useState , useEffect} from 'react';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.png'
import image8 from '../../assets/image8.png'
 
var textImage = 'image '
function clickHandler(){
  var total ;
  for(let i = 1 ; i < 8 ; i++){
    total = i + i 
    
  }
  return textImage + total
}

const Images = () => {

   
  return (
    <div className='' style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , marginTop:150}}>
      <img src={textImage} style={{width:500 , height:'auto'}} />

      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default Images ;