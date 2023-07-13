import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  //set form variables (if inputted)
  const firstName = "No name";
  if (body.firstName) {
    const firstName = body.firstName;
  }
  if (body.lastName) {
    const lastName = body.lastName;
  }
  const workEmail = body.workEmail;
  const workPhone = body.workPhone;
  const eventDate = body.eventDate;
  const budget = body.budget;
  const awardsNeeded = body.awardsNeeded;
  if (body.details) {
    const details = body.details;
  }
  
  

}
