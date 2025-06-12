'use server'

import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";
import { zodSchema } from "@/lib/zod/schema";
import sendMail from "@/lib/sendMail.js";

// create api for registration instead of using action
export async function ValidateReferralCode(referralCode) {
    if (referralCode === "HACK2025") {
        return true;
    }
    else {
        return false;
    }
}
export async function register(formData) {
    // Validate form fields
    const data = {
        firstname: formData.get('firstName'),
        lastname: formData.get('lastName'),
        email: formData.get('email'),
        referralcode: formData.get('referralCode')
    }
    // console.log(data)
    const validatedFields = zodSchema.safeParse(data);
    const isValidReferralCode = await ValidateReferralCode(data.referralcode);

    if (!validatedFields.success) {
        console.log("Validation failed")
        console.error(validatedFields.error.flatten().fieldErrors);
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { firstname, lastname, email } = validatedFields.data;
    const referralcode = isValidReferralCode ? data.referralcode: null;
    const price = isValidReferralCode ? 99 : 149;

    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, email)
    });
    if (existingUser) {
        console.log("User already exists")
        return {
            success: false,
            message: "User already exists with this email"
        };
    }

    ////// verify the payment here... //////

    // insert user in db
    try {
        const result = await db.insert(users).values({
            firstname,
            lastname,
            email,
            referralcode,
            price
        });
        if (result.rowCount === 0) {
            throw new Error("Failed to insert user into the database");
        }
        console.log("User inserted successfully!");
        return {
            success: true,
            message: "User registered successfully"
        };
        
    } catch (error) {
        console.error("Error inserting user : ", error)
        return {
            success: false,
            message: "Failed to register user"
        };
    }

    // send successful registration email
    // await sendMail(firstname, email, `Thank you ${firstname} for registering with us. We will get back to you soon.Please check your email for further instructions.`);
}

export default register;