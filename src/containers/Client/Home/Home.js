import React from "react";

import Typography from "@material-ui/core/Typography";

import * as classes from './Home.module.css';

const Home = (props) => (
    <div className={classes.Box}>
        <Typography variant="h2" className={classes.Line}><b>Welcome</b></Typography>
        <Typography variant="h4" className={classes.Line}><b>About Us</b></Typography>
        <br/>
        <Typography><b>THIS SITE IS EXCLUSIVELY FOR VOLUNTEERS WHO HAVE ALREADY BEEN TRAINED OR VERIFIED. PLEASE DO NOT REGISTER UNLESS DIRECTED TO DO SO.</b></Typography>
        <br/>
        <Typography>This volunteer website allows you to directly schedule yourself for the days that you want, as well as allow you to see what positions are full and which ones are still open. Hopefully, this will make scheduling a much more convenient experience for all of you.</Typography>
        <br/>
        <Typography>After signing up for a particular date, you are responsible for that time and must find a replacement yourself if something changes. If this does occur, please email us and let us know who will be filling in for you, and we will remove your name. We will not remove you from a scheduled date without a designated replacement.</Typography>
        <br/>
        <Typography>To schedule yourself, simply click on the calendar icon, a calendar will open, and all you have to do is select the day you want. Once you do this, a list of all the positions will come up. You will be able to see who is working on that day, what slots are open and what slots have been filled. Please only select the position that you are eligible for.</Typography>
        <br/>
        <Typography>We hope that you enjoy using this website, and that it works as well as we planned for it to. We know there is always room for improvement, so please do not hesitate to contact us.</Typography>
        <br/>
        <Typography className={classes.Line}>Thank you,<br/>
            JayDoc Exec</Typography>
        <br/>
        <Typography>JayDoc Free Clinic is a student-run free clinic, operated by University of Kansas medical students under the supervision of an attending licensed physician. There are absolutely no charges for services provided and no one will be turned away. Patients are seen during General Clinic nights Mondays and Wednesdays 5-9pm on a first-come, first-served basis. Sign up and become one of our volunteers today! This site was designed to facilitate communication and scheduling of our clinic's volunteers. Additionally, we offer specialty clinics on Tuesdays from 5-9 p.m. for patients who receive referrals from our general clinic. These specialty clinics include diabetes care (twice per month), prenatal and women's health care (twice per month), ophthalmology (once per month), and physical therapy (twice per month). Again, these sessions are limited to patients referred by our general clinic and given a specific appointment slot.</Typography>
        <br/>
        <Typography variant="h4" className={classes.Line}><b>Our Mission</b></Typography>
        <br/>
        <Typography>Our main goal is to address the language, cultural, and financial barriers to health care access in Wyandotte County by providing primary care services and preventive education at no charge, integrated with on-site language interpretation and adolescent youth outreach. The clinic is open to everyone, but we hope to serve especially the indigent, uninsured, Hispanic, adolescent youth, and people without access to basic health care.</Typography>
        <br/>
        {/*<Typography variant="h4" className={classes.Line}><b>Medical Services</b></Typography>*/}
        {/*<br/>*/}
        {/*<Typography>We provide immediate medical care for any illness among all ages including the following:</Typography>*/}
        {/*    <ul>*/}
        {/*        <li>Well-baby, child and adolescent examinations</li>*/}
        {/*        <li>Adult and elderly preventive care</li>*/}
        {/*        <li>Physical examinations for work, school, and sports</li>*/}
        {/*        <li>Screenings such as blood pressure, cholesterol, diabetes, Pap smears, sexually transmitted diseases, and pregnancy.</li>*/}
        {/*    </ul>*/}
        {/*    <Typography>The JayDoc Free Clinic will provide service to the well, walking or wounded. Unfortunately, we will not be able to deliver babies or any perform any other overly complicated procedures. We ask that if you have an emergency, go immediately to a local emergency room, or call 911.</Typography>*/}
        {/*<br/>*/}
        {/*<Typography variant="h4" className={classes.Line}><b>Educational Services</b></Typography>*/}
        {/*<br/>*/}
        {/*<Typography>In addition to basic medical care, we also provide services including the following:</Typography>*/}
        {/*    <ul>*/}
        {/*        <li>Individual and family counseling</li>*/}
        {/*        <li>Disease specific and dietary education</li>*/}
        {/*        <li>Applications and aid for social services and support programs</li>*/}
        {/*        <li>Assessments and referrals</li>*/}
        {/*        <li>Outreach services and programs for schools and adolescents</li>*/}
        {/*        <li>Health care for women</li>*/}
        {/*        <li>Children's and teen health care</li>*/}
        {/*        <li>Behavioral health care</li>*/}
        {/*        <li>Eye exams and referrals</li>*/}
        {/*        <li>Lab testing in the building</li>*/}
        {/*        <li>Referrals for hospital care if required</li>*/}
        {/*    </ul>*/}
        {/*<br/>*/}
    </div>
);

export default Home;

