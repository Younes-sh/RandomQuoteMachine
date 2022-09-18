import React from 'react';
import axios from 'axios';

// const req = axios.create({
//     baseURL : 'https://api.adviceslip.com/advice'
// })


class Quot extends React.Component {
    // const [posts , setPosts] = useState ([])
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
					<h1 className="heading">
					{this.state.advice}

                    

					</h1>
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
