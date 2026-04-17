'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Page() {
  // In form: [Open Date, Close Date]
  const MENTORSHIP_DATES = [new Date("Aug 28, 2025 00:00:00").getTime(), new Date("Sep 11, 2025 23:59:59").getTime()];
  const DA_TEAM_DATES = [new Date("Aug 22, 2025 12:00:00").getTime(), new Date("Sep 5, 2025 23:59:59").getTime()];
  const ALUMNI_REUNION_DATES = [new Date("Mar 9, 2026 12:00:00").getTime(), new Date("Mar 29, 2026 23:59:59").getTime()];
  const EBOARD_DATES = [new Date("Feb 6, 2026 00:00:00").getTime(), new Date("Mar 29, 2026 23:59:59").getTime()];
  const TECH_MIXER_DATES = [new Date("Jan 1, 2026 00:00:00").getTime(), new Date("Jan 1, 2026 23:59:59").getTime()]
  const ITC_DATES = [new Date("Jan 1, 2026 00:00:00").getTime(), new Date("Jan 1, 2026 23:59:59").getTime()]

  // Form Open/Closed States
  const [mentorship, setMentorship] = useState("")
  const [daTeam, setDATeam] = useState("");
  const [alumniReunion, setAlumniReunion] = useState(["", ""]);
  const [eboard, setEboard] = useState("");
  const [techMixer, setTechMixer] = useState("")
  const [itc, setITC] = useState("")
  
  // Helper function for removing item from an array, source: https://www.geeksforgeeks.org/javascript/how-to-remove-a-specific-item-from-an-array-in-javascript/
  function removeArrayItem(array: Array<Function>, func: Function) {
    const index = array.indexOf(func);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  // Checks for whether each form is open.
  // WIP General case for all checks.
  /*function dateCheck(dates: [number, number], now: number, url: string, setLink: Dispatch<SetStateAction<string>>) {
    if (dates[1] - now < 0) {
      setLink("");
      //removeArrayItem(checks, mentorshipCheck)
    }
    // Else check if open date has passed.
    else if (dates[0] - now < 0) {
      setLink("https://tinyurl.com/4u8764mc");
    }
  }*/
  // Mentorship
  function mentorshipCheck(checks: Array<Function>, now: number) {
    if (MENTORSHIP_DATES[1] - now < 0) {
      setMentorship("");
      removeArrayItem(checks, mentorshipCheck)
    }
    // Else check if open date has passed.
    else if (MENTORSHIP_DATES[0] - now < 0) {
      setMentorship("https://forms.gle/dkqsvc49Vht2MtFB7");
    }
  }
  // DA Team
  function daTeamCheck(checks: Array<Function>, now: number) {
    if (DA_TEAM_DATES[1] - now < 0) {
      setDATeam("");
      removeArrayItem(checks, daTeamCheck)
    }
    // Else check if open date has passed.
    else if (DA_TEAM_DATES[0] - now < 0) {
      setDATeam("https://forms.gle/dkqsvc49Vht2MtFB7");
    }
  }
  // Alumni Reunion
  function alumniReunionCheck(checks: Array<Function>, now: number) {
    if (ALUMNI_REUNION_DATES[1] - now < 0) {
      setAlumniReunion(["", ""]);
      removeArrayItem(checks, alumniReunionCheck)
    }
    // Else check if open date has passed.
    else if (ALUMNI_REUNION_DATES[0] - now < 0) {
      // In form [student link, faculty link]
      setAlumniReunion(["https://forms.office.com/Pages/ResponsePage.aspx?id=HqZLFuw5XU-J_6ofAKUhtKdmXfJcyBhPrPHL7gvMnLFUNTNCU0hWWlJFVDA2TzBGNzdDSjNDSDc0Uy4u", "https://forms.office.com/Pages/ResponsePage.aspx?id=HqZLFuw5XU-J_6ofAKUhtKdmXfJcyBhPrPHL7gvMnLFUMkFIMjJXOUFUTEZDMzBJSjlVOVpYWTBJMS4u"]);
    }
  }
  // Tech Mixer
  function techMixerCheck(checks: Array<Function>, now: number) {
    if (TECH_MIXER_DATES[1] - now < 0) {
      setTechMixer("");
      removeArrayItem(checks, techMixerCheck)
    }
    // Else check if open date has passed.
    else if (TECH_MIXER_DATES[0] - now < 0) {
      setTechMixer("https://forms.gle/dkqsvc49Vht2MtFB7");
    }
  }
  // Eboard
  function eboardCheck(checks: Array<Function>, now: number) {
    if (EBOARD_DATES[1] - now < 0) {
      setEboard("");
      removeArrayItem(checks, eboardCheck)
    }
    // Else check if open date has passed.
    else if (EBOARD_DATES[0] - now < 0) {
      setEboard("https://forms.gle/dkqsvc49Vht2MtFB7");
    }
  }
  // ITC
  function itcCheck(checks: Array<Function>, now: number) {
    if (EBOARD_DATES[1] - now < 0) {
      setITC("");
      removeArrayItem(checks, itcCheck)
    }
    // Else check if open date has passed.
    else if (ITC_DATES[0] - now < 0) {
      setITC("https://forms.gle/dkqsvc49Vht2MtFB7");
    }
  }
  
  // ADD CHECKS HERE! Alumni Reunion not currently being checked due to removal
  // Set up list of checks to run that are not past their close date.
  let checks = [mentorshipCheck, daTeamCheck, eboardCheck, techMixerCheck, itcCheck]

  let timer = setInterval(() => {
    // Clear timer if all close dates are past.
    if (checks.length == 0) {
      clearInterval(timer)
    }
    // Check each form that could be open.
    checks.forEach((func) => {
      func(checks, Date.now());
    })
  }, 1000);


	return (
    <main>
      {/* TITLE CONTAINER */}
      <section className="hero is-medium background-fade banner-margin">
        <div className="hero-body">
          <h1 className="title is-size-1 has-text-black-bean">Get Involved</h1>
          <p className="subtitle has-text-black-bean pt-2">
            We look forward to having you!
          </p>
        </div>
      </section>

    {/* INVOLVEMENT BUTTON CONTAINER */}
    <section className="section is-small">
      <div className="columns is-centered">
        <div className="column gap-15 is-6 is-4-fullhd is-flex is-flex-direction-column">
          <h2 className="title has-text-centered">
            Students
          </h2>
          <a className="button is-link has-text-black-bean py-4" href="https://forms.gle/XGh5FFxgSdbVa8DL6">
            <strong className="is-size-4">Membership Form</strong>
          </a>	
          <a id="da-team-button" className={"button is-link has-text-black-bean py-4" + (daTeam ? "" : " disabled")} href={daTeam} tabIndex={daTeam ? 0 : -1}>
            <strong className="is-size-4">DA Team Form</strong>
          </a>
          <a id="mentorship-button" className={"button is-link has-text-black-bean py-4" + (mentorship ? "" : " disabled")} href={mentorship} tabIndex={mentorship ? 0 : -1}>
            <strong className="is-size-4">Mentorship Form</strong>
          </a>		
          <a className={"button is-link has-text-black-bean py-4" + (itc ? "" : " disabled")} href={itc} tabIndex={itc ? 0 : -1}>
            <strong className="is-size-4">Register for ITC</strong>
          </a>
          <a className={"button is-link has-text-black-bean py-4" + (eboard ? "" : " disabled")} href={eboard} tabIndex={eboard ? 0 : -1}>
            <strong className="is-size-4">Apply for E-Board</strong>
          </a>
          {/*<a className={"button is-link has-text-black-bean py-4" + (alumniReunion[0] ? "" : " disabled")} href={alumniReunion[0]} tabIndex={alumniReunion[0] ? 0 : -1}>
            <strong className="is-size-4">Alumni Reunion Form</strong>
          </a>*/}				
        </div>
        {/*<div className="column gap-15 is-4 is-flex is-flex-direction-column">
          <h2 className="title has-text-centered">
            Alumni
          </h2>
          <a className="button is-link has-text-black-bean py-4">
            <strong className="is-size-4">Involvement Form</strong>
          </a>
          <a className={"button is-link has-text-black-bean py-4" + (alumniReunion[1] ? "" : " disabled")}  href={alumniReunion[1]} tabIndex={alumniReunion[1] ? 0 : -1}>
            <strong className="is-size-4">Alumni Reunion Form</strong>
          </a>		
        </div>*/}
        <div className="column gap-15 is-6 is-4-fullhd is-flex is-flex-direction-column">
          <h2 className="title has-text-centered">
            Companies
          </h2>
          <a className="button is-link has-text-black-bean py-4" href="https://crowdfund.cpp.edu/project/48206">
            <strong className="is-size-4">Sponsor Us!</strong>
          </a>	
          <a className={"button is-link has-text-black-bean py-4" + (techMixer ? "" : " disabled")} href={techMixer} tabIndex={techMixer ? 0 : -1}>
            <strong className="is-size-4">Register for Tech Mixer</strong>
          </a>	
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
            <img className="standalone-img" src="/background.png" alt="" />
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
    </main>
	);
}
