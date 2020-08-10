import React, {useState} from 'react';
import './MainContainer.scss';

import TopSection from './TopSection/TopSection.jsx';
import Form from './Form/Form.jsx';
import GetLinks from './GetLinks/GetLinks.jsx';
import StatsSection from './StatsSection/StatsSection.jsx';

export default function MainContainer() {

	const [localState, setLocalState] = useState(localStorage.getItem('Links'));
	
	return (
		<main className="main-container">

			<TopSection/>

			<Form setLocalState={setLocalState} />
			<GetLinks localState={localState}  />

			<StatsSection/>

			<section className="boost-section">
				<h2 className="section-title">Boost your links today</h2>
				<a className="cta-box" href="./">Get Started</a>
			</section>
			
		</main>
	)
}