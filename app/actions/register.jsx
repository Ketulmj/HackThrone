'use server'

import sendMail from "@/lib/sendMail.js";
// export const refCode = async () => "STUD2025"

export async function register(formData) {
    // Validate form fields
    const data = {
        firstname: formData.get('firstName'),
        lastname: formData.get('lastName'),
        email: formData.get('email'),
        referralcode: formData.get('referralCode'),
    }
    console.log(data)
    await sendMail(data.firstname, data.email, `Thank you ${data.firstname} for registering with us. We will get back to you soon.`);

    // If any form fields are invalid, return early
    //   if (!validatedFields.success) {
    //     return {
    //       errors: validatedFields.error.flatten().fieldErrors,
    //     }
    //   }

    // Call the provider or db to create a user...
}

export default register;