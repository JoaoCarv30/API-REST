import * as yup from 'yup'

export const userValidation = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    password: yup.string().required().min(6),
    created_at: yup.date().default(() => new Date()),
    updated_at: yup.date().default(() => new Date())
});