import React,{useEffect , useState} from 'react';
import axios from 'axios';



class Quot extends React.Component {
   


	state = { advice: '' };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios.get('https://api.adviceslip.com/advice')
		.then((response) => {
			const { advice } = response.data.slip;

			this.setState({ advice });
		})

		.catch ((error) => {
			console.log(error);
		})

     


	}

	render() {
		const { advice } = this.state;

		return (
			<div className="Quot">
				<div className="card">
					<div className='contentText'>
						<h1 className="heading">
						{this.state.advice}
						</h1>
					</div>

					<button className="button" onClick=
					{this.fetchAdvice}>
						<span>Give Me Advice</span>
					</button>
				</div>
			</div>
		);
	}
}

export default Quot;
