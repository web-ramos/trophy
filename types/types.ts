import { InferType } from "yup";
import { mailSchema } from "./schema";

export type Mail = InferType<typeof mailSchema> | undefined

type ErrorValidate = {
    path: string | 'unknown',
    message: string
}

export type ParseMail = {
    value?: Mail
    error?: string
    errors?: ErrorValidate[]
}