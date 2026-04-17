'use client'
import Link from "next/link";
import { useState } from "react";

export default function Page() {
	const [modalActive, setModalActive] = useState("");

	function handleOpen(): void {
		setModalActive("is-active");
	}
	function handleClose(): void {
		setModalActive("");		
	}

	return (
		<main>
			{/* TITLE CONTAINER */}
			<section className="hero is-medium background-fade banner-margin">
				<div className="hero-body">
					<h1 className="title is-size-1 has-text-black-bean">Resources</h1>
					<p className="subtitle has-text-black-bean pt-2">
						More coming soon!
					</p>
				</div>
			</section>

			{/* VODS Section */}
			<section className="section is-small">
				{/* Section Title */}
				<h2 className="title has-text-centered">MISSA VODS</h2>
				{/* Carousel Display */}
				<div className="has-text-centered">
					<i className="fa-solid fa-wrench fa-2xl my-5"></i>
					<p className="subtitle has-text-centered">Under Construction</p>
				</div>
			</section>

			{/* "Miscellaneous" Section */}
			<section className="section is-small">
				{/* Title Column Section */}
				<div className="columns is-centered is-mobile">
					<div className="column is-full">
						<h2 className="title has-text-centered">MISSA-laneous</h2>
					</div>
				</div>
				{/* About Description Columns */}
				<div className="columns is-6-desktop is-10-tablet is-centered is-tablet is-multiline">
					{/* Column 1 */}
					<div className="column is-3-desktop is-5-tablet">
						{/* Card 1 */}
						<div className="card mx-auto">
							{/* Card 1 Image */}
							<div className="card-image">
								<figure className="image is-4by3">
									<img src="/resources/resources-photo-1.png" alt="" />
								</figure>
							</div>
							{/* Card 1 Content */}
							<div className="card-content">
								{/* Card 1 Title */}
								<div className="media">
									<div className="media-content">
										<h3 className="title is-4">Career Readiness</h3>
									</div>
								</div>
								{/* Card 1 Description */}
								<div className="content">
									Become career-ready with the help of our parent organization, ISACA!
									<br />
									<br />
									<Link href="https://isacala.org/" target="_blank" referrerPolicy="no-referrer">Learn More <span className="sr-only">about Career Readiness opens a new tab</span></Link>
								</div>
							</div>
						</div>
					</div>
					{/* Column 2 */}
					<div className="column is-3-desktop is-5-tablet">
						{/* Card 2 */}
						<div className="card mx-auto">
							{/* Card 2 Image */}
							<div className="card-image">
								<figure className="image is-4by3">
									<img src="/resources/resources-photo-2.png" alt="" />
								</figure>
							</div>
							{/* Card 2 Content */}
							<div className="card-content">
								{/* Card 2 Title */}
								<div className="media">
									<div className="media-content">
										<h3 className="title is-4">Degree Programs</h3>
									</div>
								</div>
								{/* Card 2 Description */}
								<div className="content">
									Not sure what career path is best for you? Explore some of CPP's many bachelor's and graduate degree programs!
									<br />
									<br />
									<Link href="https://www.cpp.edu/cba/" target="_blank" referrerPolicy="no-referrer">Learn More <span className="sr-only">about Degree Programs opens a new tab</span></Link>
								</div>
							</div>
						</div>
					</div>
					{/* Column 3 */}
					<div className="column is-3-desktop is-5-tablet">
						{/* Card 3 */}
						<div className="card mx-auto">
							{/* Card 3 Image */}
							<div className="card-image">
								<figure className="image is-4by3">
									<img src="/resources/resources-photo-3.png" alt="" />
								</figure>
							</div>
							{/* Card 3 Content */}
							<div className="card-content">
								{/* Card 3 Title */}
								<div className="media">
									<div className="media-content">
										<h3 className="title is-4">Handshake</h3>
									</div>
								</div>
								{/* Card 3 Description */}
								<div className="content">
									Jumpstart your career by applying for job positions that are only available to university students!
									<br />
									<br />
									<Link href="https://app.joinhandshake.com/login" target="_blank" referrerPolicy="no-referrer">Learn More <span className="sr-only">about Handshake opens a new tab</span></Link>
								</div>
							</div>
						</div>
					</div>
					{/* Column 4 */}
					<div className="column is-3-desktop is-5-tablet">
						{/* Card 4 */}
						<div className="card mx-auto">
							{/* Card 4 Image */}
							<div className="card-image">
								<figure className="image is-4by3">
									<img src="/resources/resources-photo-4.png" alt="" />
								</figure>
							</div>
							{/* Card 4 Content */}
							<div className="card-content">
								{/* Card 4 Title */}
								<div className="media">
									<div className="media-content">
										<h3 className="title is-4">Other Clubs</h3>
									</div>
								</div>
								{/* Card 4 Description */}
								<div className="content">
									Get involved in some of the other CS and CIS clubs that CPP has to offer!
									<br />
									<br />
									<button className="js-modal-trigger has-text-link is-underlined" data-target="other-clubs-modal" onClick={handleOpen}>Learn More <span className="sr-only">Other Clubs</span></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* MODAL */}
			<div id="other-clubs-modal" className={"modal " + modalActive}>
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Other CS and CIS Clubs</p>
						<button className="delete" aria-label="close" onClick={handleClose}></button>
					</header>
					<section className="modal-card-body">
						<div className="content">
							<ul>
								<li>
									<Link href="https://www.cppfast.org/" target="_blank" referrerPolicy="no-referrer">FAST - Forensics and Security Technology <span className="sr-only">opens a new tab</span></Link>
								</li>
								<li>
									<Link href="https://www.cppshecodes.com/" target="_blank" referrerPolicy="no-referrer">sheCodes <span className="sr-only">opens a new tab</span></Link>
								</li>
								<li>
									<Link href="https://www.calpolyswift.org/" target="_blank" referrerPolicy="no-referrer">SWIFT - Students With an Interest in the Future of Technology <span className="sr-only">opens a new tab</span></Link>
								</li>
							</ul>
						</div>
					</section>
					<footer className="modal-card-foot">
						<div className="buttons">
							<button className="button is-primary" onClick={handleClose}>Close</button>
						</div>
					</footer>
				</div>
			</div>
		</main>
	);
}
