import React,{useState , useEffect } from 'react';
// import image1 from '../../assets/image1.png'
// import image2 from '../../assets/image2.png'
// import image3 from '../../assets/image3.png'
// import image4 from '../../assets/image4.png'
// import image5 from '../../assets/image5.png'
// import image6 from '../../assets/image6.png'
// import image7 from '../../assets/image7.png'
// import image8 from '../../assets/image8.png'
import axios from 'axios' ;
var client = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com/posts'
})
// var myArray = [
//   'Image1',
//   'Image2',
//   'Image3',
//   'Image4',
//   'Image5',
//   'Image6',
//   'Image7',
//   'Image8',
// ];





const Images = () => {
 const [counts , setCounts] = useState ([])
 useEffect(() => {
  client.get().then((response) => {
    setCounts(response.data)
  })
})


  return (
    <div className='' style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , marginTop:150}}>
      {
        counts.map((count) => {
          return(
            <>
            <p >{count.memes}</p>
            </>
          )
        })
      }
    </div>
  )
}

export default Images ;



