import React from 'react' ;
import './App.css'
import Quot from './Pages/RandomQuot/Quot'
import Images from './Pages/RandomImages/Images'
// import RA from './Pages/random2/random2'
const App = () => {
	return (
		<div className='app'>
			<div className='randomQuot'>
				<Quot />
			</div>
			{/* <RA /> */}
			<div className='images'>
				<Images />
			</div>
		</div>
	)
}

export default App ;