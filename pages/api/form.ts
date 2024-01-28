
import { NextApiRequest, NextApiResponse } from "next"
import { logger } from "../../services/Logger"
import sendMail from "../../services/SendMail/sendmail"
import { validateMailDataAsync } from "../../services/ValidateMailData"


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === "POST" && req.body) {
    const body = req.body

    const parseMail = await validateMailDataAsync(body)

    if ( parseMail.value ) {
      try {
        await sendMail(parseMail.value)
      } catch (error) {
        logger.error({ message: 'Error sending mail' })
      }
      logger.info(parseMail)
      res.status(200).json({ message: 'Form was delivered successfull' })
    }

    if (parseMail.error) {
      logger.error({ message: parseMail.error })
      res.status(500).end('Service error')
    }

    if (parseMail.errors) {
      const errorString = parseMail.errors.map(err => `${err.path}: ${err.message}`).join(', ')
      logger.error({ message: errorString })
      res.status(400).end('Data validation error')
    }


  } else {
    logger.error('Request error')
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler