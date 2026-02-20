import Link from 'next/link'
export default function ContactFooter() {
    return (
		<section className="footer has-background-primary">
			<div className="fixed-grid has-1-cols">
				<div className="grid has-text-centered">
					<div className="cell">
						<nav className="level" aria-label="Footer Top">
							{/* Left side */}
							<div className="level-left">
								<div className="level-item is-flex is-flex-direction-column gap-6 footer-left">
									<p className="subtitle is-5">
										<strong><span className="has-text-black-bean is-uppercase">Connect with us</span></strong>
									</p>
									<Link href="/meet-the-team" className="level is-mobile my-auto has-text-black-bean">
										<div className="level-item">
											<i className="fa-solid fa-people-group fa-lg"></i>
										</div>
										<div className="level-item">
											<p>Meet the Team</p>
										</div>
									</Link>
								</div>
							</div>

							{/* Right side */}
							<div className="level-right level is-mobile">
								<div className="level-item is-flex gap-6 footer-right">
									<p className="subtitle is-5">
										<strong><span className="has-text-black-bean is-uppercase">Follow our socials</span></strong>
									</p>
									<div className="level is-mobile">
										<Link href="https://discord.com/invite/Y3fCxj8ASy" target="_blank">
											<i className="fa-brands fa-discord icon has-text-black-bean" aria-label="Discord opens a new tab"></i>
										</Link>
										<Link href="https://www.instagram.com/cppmissa/" target="_blank">
											<i className="fa-brands fa-instagram icon has-text-black-bean" aria-label="Instagram opens a new tab"></i>
										</Link>
										<Link href="https://www.linkedin.com/groups/1934041/" target="_blank">
											<i className="fa-brands fa-square-linkedin icon has-text-black-bean" aria-label="LinkedIn opens a new tab"></i>
										</Link>
										<Link href="https://linktr.ee/cppmissa" target="_blank">
											<i className="fa-brands fa-linktree icon has-text-black-bean" aria-label="Linktree opens a new tab"></i>
										</Link>
									</div>
								</div>
							</div>
						</nav>
					</div>
					<div className="cell is-row-start-8-desktop is-row-start-5-tablet is-row-start-5-mobile">
						<nav className="is-flex footer-bottom" aria-label="Footer Bottom">
							{/* Left side */}
							<Link href="mailto:missaeboard@calpolymissa.org" className="level is-mobile my-auto has-text-black-bean">
								<div className="level-item">
									<i className="fa-solid fa-envelope fa-xl"></i>
								</div>
								<div className="level-item">
									<p>missaeboard@calpolymissa.org</p>
								</div>
							</Link>
							{/* Right side */}
							<p className="has-text-centered has-text-black-bean">
								2025 Management Information System Student Association
							</p>
						</nav>
					</div>
				</div>
			</div>
		</section>
    );
}