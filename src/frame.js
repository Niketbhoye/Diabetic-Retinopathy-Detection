import React from "react";
import ReactDOM from "react-dom/client";
import { memo } from "react";
import resets from "./_resets.module.css";
import classes from "./Frame.module.css";
import { useNavigate } from "react-router-dom";

export const Frame = memo(function Frame(props = {}) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signup"); // Navigate to Signup page
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.conversionOutput1}>
        <div className={classes.container4}>
          <div className={classes.headerMenu1}>
            <div className={classes.frame}>
              <div className={classes.homePage}>Home Page</div>
            </div>
            <div className={classes.frame2}>
              <div className={classes.aboutUs}>About Us</div>
            </div>
            <div className={classes.frame3}>
              <div className={classes.servicesMenu}>Services Menu</div>
            </div>
          </div>
          <button className={classes.button8} onClick={handleLogin}>
            <div className={classes.join}>Login</div>
          </button>
        </div>
        <div className={classes.screenshot_20241012_154432Remo}></div>
        <div className={classes.protectYourVisionScreenForDiab}>
          <div className={classes.textBlock}>
            Protect Your Vision:
            <br />
            Screen for Diabetic
            <br /> Retinopathy
          </div>
        </div>
        <div className={classes.image17}></div>
        <div className={classes.container3}>
          <button className={classes.button6}>
            <div className={classes.learnMore}>Learn More</div>
          </button>
          <button className={classes.button7}>
            <div className={classes.signUp}>Sign Up</div>
          </button>
        </div>
        <div className={classes.earlyDetectionOfDiabeticRetino}>
          Early detection of diabetic retinopathy can save your sight. Take{" "}
          <br />
          control of your eye health today and ensure a brighter future.
        </div>
      </div>
      <div className={classes.conversionOutput2}>
        <div className={classes.understandingTheDiabeticRetino}>
          <div className={classes.textBlock4}>
            Understanding the Diabetic Retinopathy
          </div>
          <div className={classes.textBlock5}>
            Screening Process: A Step-by-Step Guide
          </div>
        </div>
        <div className={classes.container6}>
          <div className={classes.image25}></div>
        </div>
        <div className={classes.yourJourneyToEarlyDetectionBoo}>
          <div className={classes.textBlock6}>
            Your Journey to Early Detection:
          </div>
          <div className={classes.textBlock7}>
            Booking and Screening Explained
          </div>
        </div>
        <div className={classes.startByBookingAnAppointmentThr}>
          <div className={classes.textBlock8}>
            Start by booking an appointment through our easy
          </div>
          <div className={classes.textBlock9}>online scheduling system.</div>
        </div>
        <div className={classes.learnMore2}>Learn More.</div>
        <div className={classes.container7}>
          <div className={classes.image23}></div>
        </div>
        <div className={classes.whatToExpectDuringYourScreenin}>
          <div className={classes.textBlock10}>What to Expect During Your</div>
          <div className={classes.textBlock11}>
            Screening Appointment: A Quick
          </div>
          <div className={classes.textBlock12}>Overview</div>
        </div>
        <div className={classes.duringTheScreeningOurSpecialis}>
          <div className={classes.textBlock13}>
            During the screening, our specialists will conduct a
          </div>
          <div className={classes.textBlock14}>
            thorough examination of your eyes.
          </div>
        </div>
        <div className={classes.learnMore3}>Learn More.</div>
        <div className={classes.container8}>
          <div className={classes.image24}></div>
        </div>
        <div className={classes.receivingYourResultsUnderstand}>
          <div className={classes.textBlock15}>Receiving Your Results:</div>
          <div className={classes.textBlock16}>
            Understanding Your Screening
          </div>
          <div className={classes.textBlock17}>Outcomes and Next Steps</div>
        </div>
        <div className={classes.afterTheScreeningYouLlReceiveY}>
          <div className={classes.textBlock18}>
            After the screening, you&#39;ll receive your results promptly.
          </div>
          <div className={classes.textBlock19}>along with recommendations.</div>
        </div>
        <div className={classes.learnMore4}>Learn More.</div>
      </div>

      <div className={classes.conversionOutput3}>
        <div className={classes.container5}>
          <div className={classes._2024RelumoAlRightsReserved}>
            2024 Dibetic Retinopathy Detection | rights reserved.
          </div>
          <div className={classes.address}>Address.</div>
          <div className={classes._12SampleStSydneyNsW2000}>
            Pune, Maharashtra, India
          </div>
          <div className={classes.contact}>Contact.</div>
          <div className={classes._18001234567ntoRelumelo}>
            1800 123 4567 | nto@dibeticretinopathy.com
          </div>

          <div className={classes.facebook}></div>
          <div className={classes.twitter}></div>
          <div className={classes.youtube}></div>
          <div className={classes.linkedin}></div>
          <div className={classes.instagram}></div>
          <div className={classes.conkinsSottilings}>Cookies Settings</div>
          <div className={classes.termsOfSonice}>Terms of Service |</div>
          <div className={classes.pmacyPolicy}>privacy Policy |</div>
        </div>
      </div>
      <div className={classes.conversionOutput4}>
        <div className={classes.empoweringEarlyDetectionAndMan}>
          <div className={classes.textBlock20}>
            Empowering Early Detection and
            <br /> Management of Diabetic Retinopathy <br /> for Better Vision
          </div>
        </div>
        <div className={classes.discoverTheCuttingEdgeFeatures}>
          <div className={classes.textBlock22}>
            Discover the cutting-edge features
            <br /> of our diabetic retinopathy <br /> screening service.
          </div>
        </div>
        <div className={classes.ourMissionIsToRevolutionizeThe}>
          <div className={classes.textBlock24}>
            Our mission is to revolutionize the way diabetic retinopathy is
            detected and managed, ensuring <br />
            that individuals receive timely and effective care. We value
            innovation, accessibility, and <br />
            compassion, striving to improve the quality of life for those
            affected by this condition.
          </div>
        </div>
        <div className={classes.container10}>
          <div className={classes.image32}></div>
        </div>
        <div className={classes.experienceRapidAndAccuratediab}>
          <div className={classes.textBlock27}>
            Experience rapid and accurate diabetic retinopathy screenings with
            our advane.
          </div>
        </div>
        <div className={classes.ourStateOfTheArtTechnologyEnsu}>
          Our state-of-the art technology ensures precisely detection and timely
          results.
        </div>
        <div className={classes.learnMore5}>Learn More.</div>
        <div className={classes.container11}>
          <div className={classes.image31}></div>
        </div>
        <div className={classes.meetOurTeamOfExpertsdedicatedT}>
          <div className={classes.textBlock29}>
            Meet our team of experts dedicated to your eye health.
          </div>
        </div>
        <div className={classes.ourExperiencedProfessionalsAre}>
          <div className={classes.textBlock31}>
            Our experienced professionals are committed to providing exceptional
            care and support.
          </div>
        </div>
        <div className={classes.learnMore6}>Learn More.</div>
        <div className={classes.container9}>
          <div className={classes.image28}></div>
        </div>
        <div className={classes.getYourResultsQuicklyWithOuref}>
          <div className={classes.textBlock33}>
            Get your results quickly with our efficient screening process.
          </div>
        </div>
        <div className={classes.wePrioritizeFastTurnaroundTime}>
          We prioritize fast turnaround times without <br /> compromising on
          quality.
        </div>
        <div className={classes.compromisingOnQuality}></div>
        <div className={classes.learnMore7}>Learn More.</div>
      </div>
    </div>
  );
});
export default Frame;
