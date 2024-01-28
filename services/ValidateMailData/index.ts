import * as yup from 'yup'
import { mailSchema } from "../../types/schema"
import { Mail, ParseMail } from "../../types/types"
import { logger } from "../Logger"

export const validateMailDataAsync = async (data: Mail) : Promise<ParseMail> => {
    try {
        const validatedData = await mailSchema.validate(data, { abortEarly: false })
        return {value: validatedData}
    } catch (error: any) {
        if (error instanceof yup.ValidationError) {
            const errors = error.inner.map(err => ({
                path: err.path || 'unknown',
                message: err.message
            }))
            logger.error({ message: 'data validation error:', errors })
            console.log('Validation Errors:', errors)
            return {errors: errors}
        } else {
            logger.error({ message: 'An unexpected error occurred:', error })
            console.error('An unexpected error occurred:', error)
            return {error: error?.message ?? 'An unexpected error occurred'}
        }
    }
}