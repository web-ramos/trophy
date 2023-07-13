import Image from "next/image";
import styles from "../styles/form.module.scss";
import React, { useState } from "react";
import Link from "next/link";

const Form = () => {
  //Form Component -- should it be a class w/o hooks instead?

  const [awards, setAwards] = useState("default");
  //awards change takes a react change event, sets to event's target value
  const awardsChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setAwards(event.target.value);

  return (
    <div>
      <div className={styles.outsideContainer}>
        <div className={styles.form}>
          <div className={styles.formText}>
            <p>
              Give us a couple details on who we should reach and our team will
              get started on a better custom awards process.
            </p>
          </div>
          <div className={styles.formContainer}>
            <form className={styles.formBody} action="/form" method="post">
              <div className={styles.formLeftHalf}>
                <label className={styles.formLabel} htmlFor="firstName">
                  First Name
                </label>
                <input
                  className={styles.formInput}
                  type="text"
                  id="firstName"
                  name="firstName"
                />
              </div>

              <div className={styles.formHalf}>
                <label className={styles.formLabel} htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className={styles.formInput}
                  type="text"
                  id="lastName"
                  name="lastName"
                />
              </div>

              <div className={styles.formLeftHalf}>
                <label className={styles.formLabel} htmlFor="workEmail">
                  Work Email Address *
                </label>
                <input
                  className={styles.formInput}
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  required
                />
              </div>

              <div className={styles.formHalf}>
                <label className={styles.formLabel} htmlFor="workPhone">
                  Work Phone *
                </label>
                <input
                  className={styles.formInput}
                  type="tel"
                  id="workPhone"
                  name="workPhone"
                  required
                />
              </div>

              <div className={styles.formLeftHalf}>
                <label className={styles.formLabel} htmlFor="eventDate">
                  When is your event? *
                </label>
                <input
                  className={styles.formInput}
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                />
              </div>

              <div className={styles.formHalf}>
                <label className={styles.formLabel} htmlFor="budget">
                  What is your budget? *
                </label>
                <input
                  className={styles.formInput}
                  type="number"
                  id="budget"
                  name="budget"
                  placeholder="Enter a whole number."
                  required
                />
              </div>

              <div className={styles.formWhole}>
                <label className={styles.formLabel} htmlFor="awardsNeeded">
                  How many awards are needed? *
                </label>
                <select
                  className={styles.formSelect}
                  id="awardsNeeded"
                  name="awardsNeeded"
                  required
                  value={awards}
                  onChange={awardsChange}
                >
                  <option value="default" disabled>
                    Select a range from the below.
                  </option>
                  <option value="5 or less">1-5</option>
                  <option value="6 to 10">6-10</option>
                  <option value="11 to 25">11-25</option>
                  <option value="26 to 49">26-49</option>
                  <option value="50 or more">50+</option>
                </select>
              </div>

              <div className={styles.formWhole}>
                <label className={styles.formLabel} htmlFor="details">
                  Please provide any additional details.
                </label>
                <input
                  className={styles.formInput}
                  type="text"
                  id="details"
                  name="details"
                />
              </div>

              <div>
                <button className={styles.formButton} type="submit">
                  <Image
                    src="/submit.png"
                    width={"186"}
                    height={"139"}
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Link href={"mailto: test@gmail.com"}>
      <p className={styles.formFooterText}>
        If you&apos;d prefer to contact our team of trophy experts via email,
        reach us here.
      </p>
      </Link>
    </div>
  );
};
export default Form;
