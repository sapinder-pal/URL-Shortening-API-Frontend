import React from 'react';
import './Footer.scss';
import {ReferenceData, RenderReferenceSection} from './References.jsx';

import { ReactComponent as BrandLogo } from '../../images/logo.svg';
import { ReactComponent as IconFB } from '../../images/icon-facebook.svg';
import { ReactComponent as IconTwitter } from '../../images/icon-twitter.svg';
import { ReactComponent as IconPinterest } from '../../images/icon-pinterest.svg';
import { ReactComponent as IconInstagram } from '../../images/icon-instagram.svg';

export default function Footer() {
	return (
		<footer className="footer">
			<BrandLogo className="brand" alt="logo-brand" />
			
			<section className="references">
				{ReferenceData.map(RenderReferenceSection)}
			</section>
		
			<div className="social-links">

				<a className="navlink" href="./">
					<IconFB alt="icon-fb" />
				</a>
				<a className="navlink" href="./">
					<IconTwitter alt="icon-twitter" />
				</a>
				<a className="navlink" href="./">
					<IconPinterest alt="icon-pinterest" />
				</a>
				<a className="navlink" href="./">
					<IconInstagram alt="icon-instagram" />
				</a>
				
			</div>

		</footer>
	)
}