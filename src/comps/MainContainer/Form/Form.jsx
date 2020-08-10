import React from 'react';
import './Form.scss';

export default function Form(props) {
	/* props.setLocalState used at the end of handleFetch */

	return (
		<form className="form" onSubmit={e=> handleSubmit(e)}>
			<div className="form-inner-wrapper">

				<div className="input-wrapper">
					<input name="input-link" className="input-link" placeholder="Enter a link here..." />
					<small className="error-message">Please add a link!</small>
				</div>
				
				<button className="submit cta-box" type="submit">Shorten It!</button>

			</div>
		</form>
	)

	/* SUBMISSION BEHAVIOR */
	function handleSubmit(e) {
		e.preventDefault();

		let inputLink = document.querySelector('.form .input-link');

		if (inputLink.value != '') {
			inputLink.parentNode.classList.remove('error');

			handleFetch(inputLink.value);
		}

		else {
			inputLink.parentNode.classList.add('error');
		}
	}


	function handleFetch(link) {
		fetch('https://rel.ink/api/links/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 'url': link })
		})

		.then(res => {
			if (!res.ok) {
				alert('Request Not Successful. Check the console for more information!');
				return Promise.reject(res);
			}
			return res.json();
		})

		.then((data) => {

			let shortenedLink = 'https://rel.ink/' + data.hashid;

			let newLinkObject = {
				originalLink: link,
				shortenedLink: shortenedLink
			}

			let currentLocalData = JSON.parse(localStorage.getItem('Links'));
			let newLocalData;

			// if currentLocalData is null
			if (!currentLocalData) {
				currentLocalData = [];
			}

			if (currentLocalData.length < 3) {
				currentLocalData.push(newLinkObject);
				localStorage.setItem('Links', JSON.stringify(currentLocalData));
			}
			else {
				newLocalData = [currentLocalData[1], currentLocalData[2], newLinkObject];
				localStorage.setItem('Links', JSON.stringify(newLocalData));
			}

			props.setLocalState(localStorage.getItem('Links'));
		})

		.catch(error => {
			if (typeof error.json === "function") {
				error.json()
					.then(jsonError => {
						console.log("Json error from API");
						console.log(jsonError);
					})
					
					.catch(genericError => {
						console.log("Generic error from API");
						console.log(error.statusText);
					});
			}
			else {
				console.log("Fetch error");
				console.log(error);
			}
		});
	}
}