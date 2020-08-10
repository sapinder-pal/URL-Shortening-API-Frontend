import React from 'react';
import './GetLinks.scss';

export default function GetLinks(props) {
	
	let linksData = JSON.parse(props.localState);

	if(linksData)
		return (
			<section className="get-links">
				{linksData.reverse().map(renderList)}
			</section>
		)
	else
		return null;

	function renderList(props, index) {
		return (
			<div className={`item${index + 1}`} key={index}>
				<p className="original-link">
					{props.originalLink}
				</p>
				<p className="shortened-link">
					{props.shortenedLink}
				</p>
				<button type="button" className="cta-box" onClick={e=> copyToClipboard(e)}>
					Copy
				</button>
			</div>
		)
	}

	function copyToClipboard(e) {
		let targetLink = e.target.parentNode.children[1];

		const tempElement = document.createElement('textarea');
		tempElement.value = targetLink.innerText;

		document.body.appendChild(tempElement);

		tempElement.select();
		document.execCommand('copy');
		
		document.body.removeChild(tempElement);
	}
}

