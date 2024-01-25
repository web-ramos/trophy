import { InferType } from "yup";
import { mailSchema } from "./schema";

export type Mail = InferType<typeof mailSchema>