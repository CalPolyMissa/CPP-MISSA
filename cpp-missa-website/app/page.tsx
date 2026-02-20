

export default function Home() {
  return (
    <div>
      {/* TITLE CONTAINER */}
      <section className="hero is-medium background-fade banner-margin">
        <div className="hero-body">
          <h1 className="title is-size-1 has-text-black-bean">
            <div className="columns is-gapless is-multiline mb-0">
              <div className="column is-narrow"><span className="pr-3-5">Management</span></div>
              <div className="column is-narrow">Information</div>
            </div>
            <div className="columns is-gapless is-multiline">
              <div className="column is-narrow pr-5"><span className="pr-3-5">Systems</span></div>
              <div className="column is-narrow pr-5"><span className="pr-3-5">Student</span></div>
              <div className="column is-narrow">Association</div>
            </div>
          </h1>
          <p className="subtitle has-text-black-bean pt-2">
            Business • Technology • Network
          </p>
        </div>
      </section>
      {/* ABOUT MISSA SECTION */}
      <section className="section is-small">
        {/* HEADING */}
        <h2 className="title is-size-2 has-text-centered pb-5">About MISSA</h2>
        {/* Columns Container for Picture and Description */}
        <div className="columns is-centered is-vcentered">
          {/* IMAGE CONTAINER */}
          <div className="column is-5">
            <img src="2024_ITC_Presenter.png" alt="ITC Presentation" />
          </div>

          {/* MISSA Description Container */}
          <div className="column is-5-desktop is-7-tablet is-vcentered">
            {/* MISSA Motto */}
            <div className="motto-box mb-6">
              <p className="title is-size-3">BUSINESS</p>
              <p className="title is-size-3">TECHNOLOGY</p>
              <p className="title is-size-3">NETWORK</p>
            </div>

            {/* MISSA Description */}
            <p className="subtitle is-justified">
              MISSA aims to provide students with valuable insights into
              different pathways of CIS and CS related majors. We provide a
              bridge between academia and industry, which helps our members gain
              real-world perspectives. MISSA draws seasoned industry
              professionals from its distinguished alumni to engage with and
              guide our next generation.
            </p>
          </div>
        </div>
      </section>

      <section className="section is-small">
        {/* About Description Columns */}
        <div className="columns is-centered is-multiline">
          {/* Column 1 */}
          <div className="column is-3-desktop is-5-tablet">
            {/* Card 1 */}
            <div className="card mx-auto">
              {/* Card 1 Image */}
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="home-page/home-photo-1.jpg" alt="" />
                </figure>
              </div>
              {/* Card 1 Content */}
              <div className="card-content">
                {/* Card 1 Title */}
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Who We Are</p>
                  </div>
                </div>
                {/* Card 1 Description */}
                <div className="content">
                  MISSA is a student-run organization at Cal Poly Pomona created
                  to bring together students and IT professionals.
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
                  <img src="home-page/home-photo-2.jpg" alt="" />
                </figure>
              </div>
              {/* Card 2 Content */}
              <div className="card-content">
                {/* Card 2 Title */}
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Our Mission</p>
                  </div>
                </div>
                {/* Card 2 Description */}
                <div className="content">
                  MISSA's mission is to educate our members by leveraging IT
                  professionals' knowledge and real-world experience.
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
                  <img src="home-page/home-photo-3.png" alt="" />
                </figure>
              </div>
              {/* Card 3 Content */}
              <div className="card-content">
                {/* Card 3 Title */}
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Our Goal</p>
                  </div>
                </div>
                {/* Card 3 Description */}
                <div className="content">
                  MISSA's goal is to provide opportunities for members to
                  explore the plethora of rewarding career paths in the IT
                  industry.
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
                  <img src="/home-page/home-photo-4.jpg" alt="" />
                </figure>
              </div>
              {/* Card 4 Content */}
              <div className="card-content">
                {/* Card 4 Title */}
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Membership</p>
                  </div>
                </div>
                {/* Card 4 Description */}
                <div className="content">
                  MISSA encourages all students to join. Students may upgrade to
                  VIP status and a more immersive experience for a nominal
                  annual fee.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features MISSA Section */}
      <section className="section is-medium">
        {/* Section Title */}
        <h3 className="title has-text-centered">
          Looking to Learn About Technology?
        </h3>
        {/* Columns Container for Picture and Description */}
        <div className="columns is-flex-direction-row-reverse is-centered is-vcentered">
          {/* MISSA Description Container */}
          {/* Image */}
          <div className="column is-4-fullhd is-5-desktop is-5-tablet is-offset-1-desktop is-flex">
            <img className="standalone-img" src="background.png" alt="" />
          </div>
          <div className="column is-4-fullhd is-5-desktop is-7-tablet">
            {/* General Meetings Title */}
            <p className="title is-4 mb-2">General Meeting Information</p>
            {/* MISSA Description */}
            <p className="subtitle is-justified">
              Come join our weekly meetings in-person or on Zoom where we
              discuss a variety of topics on business, technology and
              networking. In-person meetings will be in the College of Business
              Administration — Building 163 Room 2015 on Thursdays during U-Hour (12 - 1 pm). 
              Food and beverages will be provided.
            </p>
            <a
              className="button is-info has-text-black-bean"
              href="https://www.cpp.edu/maps?id=1130#!m/276432?share"
              target="_blank"
              aria-description="opens in a new tab"
            >
              Map to CBA
            </a>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <section className="section is-small mb-6">
        {/* Section Title */}
        <h2 className="title has-text-centered mb-5">
          Have we caught your interest?
        </h2>
        {/* Columns Container for Get Involved Card */}
        <div className="columns is-centered is-vcentered">
          {/* Get Involved Card Container */}
          <div className="column is-4">
            {/* Get Involved Card */}
            <div className="card mx-auto">
              {/* Get Involved Content */}
              <div className="card-content">
                <div className="content has-text-centered">
                  <h3 className="title is-size-4">Click below to join us!</h3>
                  <a className="button is-info has-text-black-bean is-size-5" href="get-involved.html">
                    Get Involved
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
