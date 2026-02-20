import Link from 'next/link'
export default function NavbarHeader() {
    return (
        <div className="container">
            {/* Navbar */}
            <nav
                className="navbar is-fixed-top"
                role="navigation"
                aria-label="main navigation"
            >
				{/* MISSA Logo */}
				<div className="navbar-brand">
					{/* Special thanks to Jasmine for fixing this for me before I had a complete mental breakdown - Ana */}
					<Link className="navbar-item" href="/">
						<span className="is-flex is-align-items-center">
							<img className="missa-logo mr-1" src="MISSA-branding/MISSA-logo-wordless.png" alt="MISSA Logo" />
							<p className="is-size-4-desktop is-size-2-mobile is-montserrat has-text-primary">MISSA</p>
						</span>
					</Link>
					
					{/* Navbar Burger */}
					<a
						id="navbar-header-burger"
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbar-header"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				{/* Navbar Links */}
				<div id="navbar-header" className="navbar-menu">
					<div className="navbar-start">
						{/* Home Button */}
						<Link className="navbar-item" href="/">Home</Link>
						
						{/* About Us Button */}
						<Link className="navbar-item" href="/meet-the-team">Meet the Team</Link>
						
						{/* DA Team Button */}
						<Link className="navbar-item" href="/DA-team">Data Analytics Team</Link>
						
						{/* Events Dropdown */}
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link" tabIndex={0}>Events</a>

							<div className="navbar-dropdown">
								<Link className="navbar-item" href="/tech-mixer">Tech Mixer</Link>
								<Link className="navbar-item" href="/ITC">ITC</Link>
								<Link className="navbar-item" href="/alumni-reunion">Alumni Reunion</Link>
							</div>
						</div>

						{/* Calendar Button*/}
						<Link className="navbar-item" href="/resources/calendar">Calendar</Link>

						{/* Resources Button */}
						{/* Give links to career center, CPP resources, MISSA recordings, contact information */}
						<Link className="navbar-item" href="/resources">Resources</Link>

						{/* Frequently Asked Questions Button */}
						<Link className="navbar-item" href="/resources/FAQ">FAQ</Link>
					</div>
					{/* Sign Up/ Get Involved Button */}
					{/* Membership Page */}
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<Link className="button is-info has-text-black-bean" href="/get-involved">
									<strong>Get Involved</strong>
								</Link>
							</div>
						</div>
					</div>
				</div>
            </nav>
        </div>
    );
}