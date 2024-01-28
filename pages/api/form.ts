'use server'

import { logger } from "../../services/Logger"
import sendMail from "../../services/SendMail/sendmail"
import { validateMailDataAsync } from "../../services/ValidateMailData"
import { Mail } from "../../types/types"


export const getResponse = async (body: Mail) => {

  const parseMail = await validateMailDataAsync(body)

  if ( parseMail.value ) {
    try {
      await sendMail(parseMail.value)
    } catch (error) {
      logger.error({ message: 'Error sending mail' })
    }
    logger.info(parseMail)
    return 'Form was delivered successfull'
  }

  if (parseMail.error) {
    logger.error({ message: parseMail.error })
    return 'Service error'
  }

  if (parseMail.errors) {
    const errorString = parseMail.errors.map(err => `${err.path}: ${err.message}`).join(', ')
    logger.error({ message: errorString })
    return 'Data validation error'
  }
}
