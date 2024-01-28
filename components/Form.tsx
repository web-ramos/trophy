'use client'

import Image from "next/image"
import styles from "../styles/form.module.scss"
import React, { useState } from "react"
import Link from "next/link"
import { useForm, SubmitHandler } from "react-hook-form"
import { getResponse } from "../pages/api/form"
import { Mail } from "../types/types"

type Range = {
  label: string
  value: string
}

const ranges: Range[] = [
  {
    label: "5 or less",
    value: "5 or less",
  },
  {
    label: "11 to 25",
    value: "11 to 25",
  },
  {
    label: "26 to 49",
    value: "26 to 49",
  },
  {
    label: "50 or more",
    value: "50 or more",
  },
]

type FormData = {
  firstName: string
  lastName: string
  workEmail: string
  workPhone: string
  eventDate: string
  budget: number
  awardsNeeded: Range
  details: string
}

const Form = () => {
  const [serverResponse, setServerResponse] = useState<string | null | undefined>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Mail>({
    mode: "onChange",
  })

  // const onSubmit: SubmitHandler<FormData> = async data => {
  //   const response = await getResponse(data)
  //   setServerResponse(response);
  // }

  const action: any = handleSubmit(async (data) => {
    const response = await getResponse(data)
    setServerResponse(response);
  })

  return (
    <>
      <section className={styles.form}>
        <div className={styles.form__container}>
          <form
            className={styles.form__body}
            action={action}
          >
            <legend className={styles.form__legend}>
              Give us a couple details on who we should reach and our team will
              get started on a better custom awards process.
            </legend>

            <div className={styles.form__fields}>
              <div className={styles.form__field}>
                <label className={styles.form__label} htmlFor="firstName">
                  First Name *
                </label>
                <input
                  className={styles.form__input}
                  type="text"
                  id="firstName"
                  {...register("firstName", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Only letters are allowed",
                    },
                    maxLength: {
                      value: 40,
                      message: "Maximum length 40 characters",
                    },
                  })}
                />
                {errors.firstName && (
                  <p className={styles.form__error}>
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className={styles.form__field}>
                <label className={styles.form__label} htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  className={styles.form__input}
                  type="text"
                  id="lastName"
                  {...register("lastName", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Only letters are allowed",
                    },
                    maxLength: {
                      value: 40,
                      message: "Maximum length 40 characters",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className={styles.form__error}>
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.form__fields}>
              <div className={styles.form__field}>
                <label className={styles.form__label} htmlFor="workEmail">
                  Work Email Address *
                </label>
                <input
                  className={styles.form__input}
                  id="workEmail"
                  {...register("workEmail", {
                    required: "This field is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Invalid e-mail",
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum length 50 characters",
                    },
                  })}
                />
                {errors.workEmail && (
                  <p className={styles.form__error}>
                    {errors.workEmail.message}
                  </p>
                )}
              </div>

              <div className={styles.form__field}>
                <label className={styles.form__label} htmlFor="workPhone">
                  Work Phone *
                </label>
                <input
                  className={styles.form__input}
                  id="workPhone"
                  {...register("workPhone", {
                    required: "This field is required",
                    pattern: {
                      value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                      message: "Invalid phone number",
                    },
                    maxLength: {
                      value: 40,
                      message: "Maximum length 40 characters",
                    },
                  })}
                />
                {errors.workPhone && (
                  <p className={styles.form__error}>
                    {errors.workPhone.message}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.form__fields}>
              <div className={styles.form__field}>
                <label className={styles.form__label} htmlFor="eventDate">
                  When is your event? *
                </label>
                <input
                  className={styles.form__input}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  id="eventDate"
                  {...register("eventDate", {
                    required: "This field is required",
                  })}
                />
                {errors.eventDate && (
                  <p className={styles.form__error}>
                    {errors.eventDate.message}
                  </p>
                )}
              </div>

              <div className={styles.form__field}>
                <label className={styles.form__label} htmlFor="budget">
                  What is your budget? *
                </label>
                <input
                  className={styles.form__input}
                  id="budget"
                  placeholder="Enter a whole number."
                  {...register("budget", {
                    required: "This field is required",
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: "Only positive integers are allowed",
                    },
                  })}
                />
                {errors.budget && (
                  <p className={styles.form__error}>{errors.budget.message}</p>
                )}
              </div>
            </div>

            <div className={styles.form__full}>
              <label className={styles.form__label} htmlFor="awardsNeeded">
                How many awards are needed? *
              </label>
              <select
                className={styles.form__select}
                id="awardsNeeded"
                placeholder="Select a range from the below."
                defaultValue={""}
                {...register("awardsNeeded", {
                  required: "This field is required",
                })}
              >
                <option value="" disabled>
                  Select a range from the below.
                </option>
                {ranges.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  )
                })}
              </select>
              {errors.awardsNeeded && (
                <p className={styles.form__error}>
                  {errors.awardsNeeded.message}
                </p>
              )}
            </div>

            <div className={styles.form__full}>
              <label className={styles.form__label} htmlFor="details">
                Please provide any additional details.
              </label>
              <textarea
                className={styles.form__input}
                id="details"
                {...register("details", {
                  maxLength: {
                    value: 500,
                    message: "Maximum length 500 characters",
                  },
                })}
              ></textarea>
              {errors.details && (
                <p className={styles.form__error}>{errors.details.message}</p>
              )}
            </div>

            <div className={styles.form__action}>
              <button
                className={styles.form__button}
                type="submit"
              >
                <Image
                  src="/submit.png"
                  width={"186"}
                  height={"139"}
                  alt="Submit Button"
                />
              </button>
            </div>
          </form>
        </div>
        <div className={styles.form__responce}>{serverResponse}</div>
      </section>
      <Link
        href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`}
        className={styles.form__footerText}
      >
        If you&aposd prefer to contact our team of trophy experts via email,
        reach us here.
      </Link>
    </>
  )
}
export default Form
