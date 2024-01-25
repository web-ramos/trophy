import { date, number, object, string } from "yup";

export const mailSchema = object({
  firstName: string().required().trim().max(40),
  lastName: string().required().trim().max(40),
  workEmail: string().required().trim().max(50),
  workPhone: string().required().trim().max(40),
  eventDate: date().min(new Date()).required(),
  budget: number().required().min(1).max(1000000),
  awardsNeeded: string().required().trim().max(20),
  details: string().trim().max(500)
})