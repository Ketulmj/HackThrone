import { z } from 'zod';

export const zodSchema = z.object({
    firstname: z.string().min(2, "First name is required"),
    lastname: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    referralcode: z.string().optional()
});