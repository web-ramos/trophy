
import { NextApiRequest, NextApiResponse } from "next";
import { logger } from "../../services/Logger";
import sendMail from "../../services/SendMail/sendmail";
import { mailSchema } from "../../types/schema";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body

  if (req.method === "POST") {
    const data = req.body

    try {
      const parseMail = await mailSchema.validate(data)
      await sendMail(parseMail)
      res.status(200).json({ message: "Form was delivered successfull" });
    } catch (error) {
      console.log(error)
      logger.error("Data validation error");
      res.status(400).json({ message: "Bad Request" });
    }

  } else {
    logger.error("Request error");
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // //set form variables (if inputted)
  // const firstName = "No name";
  // if (body.firstName) {
  //   const firstName = body.firstName;
  // }
  // if (body.lastName) {
  //   const lastName = body.lastName;
  // }
  // const workEmail = body.workEmail;
  // const workPhone = body.workPhone;
  // const eventDate = body.eventDate;
  // const budget = body.budget;
  // const awardsNeeded = body.awardsNeeded;
  // if (body.details) {
  //   const details = body.details;
  // }
}

export default handler