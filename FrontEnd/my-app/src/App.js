import React from 'react' ;
import Quot from './Pages/RandomQuot/Quot'
// import Images from './Pages/RandomImages/Images'
const App = () => {
	return (
		<div className='app'>
			<h1>Younes</h1>
			<div className='randomQuot'>
				<Quot />
			</div>
			<div>
				{/* <Images /> */}
			</div>
		</div>
	)
}

export default App ;