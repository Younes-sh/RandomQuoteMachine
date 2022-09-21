import React from 'react' ;
import './App.css'
import Quot from './Pages/RandomQuot/Quot'
// import Images from './Pages/RandomImages/Images'
import Image from './component/Imagespool'
const App = () => {
	return (
		<div className='app'>
			<div className='randomQuot'>
				<Quot />
			</div>
			{/* <RA /> */}
			<div className='images'>
				{/* <Images /> */}
				<Image />
			</div>
		</div>
	)
}

export default App ;