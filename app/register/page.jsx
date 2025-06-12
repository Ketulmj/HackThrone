"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/app/hooks/use-toast"
import register from "@/app/actions/register"

export default function RegisterPage() {
  const [price, setPrice] = useState(149)
  const [referralCode, setReferralCode] = useState("")
  const isValid = (code) => code === "HACK2025" // check from backend

  useEffect(() => {
  const handler = setTimeout(() => {
    if (isValid(referralCode)) {
      setPrice(99);
    } else {
      setPrice(149);
    }
  }, 1000);
  return () => clearTimeout(handler);
  }, [referralCode]);


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   formData.price = price
  //   console.log(formData)
  //   // Handle form submission logic here
  //   fetch("/api/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       firstName: formData.firstName,
  //       lastName: formData.lastName,
  //       email: formData.email,
  //       organization: formData.organization,
  //       referralCode: referralCode,
  //       price: price,
  //     }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json()
  //       } else {
  //         throw new Error("Network response was not ok")
  //       }
  //     })
  //     .then((data) => {
  //       console.log("Success:", data)
  //       // Handle success
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error)
  //       // Handle error
  //     })
  //   toast({
  //     title: "Registration submitted!",
  //     description: "Further instructions will be shared thorugh email.",
  //   })
  // }

  return (
    <div className="container py-12 px-4 md:px-6 circuit-overlay">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center shiny-text">Register for HackThrone 2025</h1>
        <p className="text-green-400 mb-8 text-center max-w-2xl mx-auto">
          Complete the form below to secure your spot in our two-round hackathon and compete for amazing prizes.
        </p>

        <Card className="bg-black/80 border-green-500/30 cyber-glow">

          <CardContent>
            <form action={register} className="space-y-6">
              <div className="space-y-4">
                <CardTitle className="text-lg text-green-400">Personal Information</CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-gray-300">
                      First Name*
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      name="firstName"
                      // value={formData.firstName}
                      // onChange={(e) => setformData({ ...formData, firstName: e.target.value })}
                      required
                      className="bg-cyber-dark border-green-900/50 focus:border-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-gray-300">
                      Last Name*
                    </Label>
                    <Input
                      id="last-name"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="bg-cyber-dark border-green-900/50 focus:border-green-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    className="bg-cyber-dark border-green-900/50 focus:border-green-500"
                  />
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (123) 456-7890"
                    required
                    className="bg-cyber-dark border-green-900/50 focus:border-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-gray-300">
                    Organization/University
                  </Label>
                  <Input
                    id="organization"
                    placeholder="University of Technology"
                    className="bg-cyber-dark border-green-900/50 focus:border-green-500"
                  />
                </div> */}
              </div>

              <div className="space-y-4">
                <CardTitle className="text-lg text-green-400">Payment Information</CardTitle>
                <div className="space-y-2">
                  <Label htmlFor="referral" className="text-gray-300">
                    Referral Code
                  </Label>
                  <Input
                    id="referral"
                    name="referralCode"
                    placeholder="Enter referral code for discount"
                    className="bg-cyber-dark border-green-900/50 focus:border-green-500"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)
                    }
                  />
                  <p className="text-sm text-green-400">
                    {isValid(referralCode)
                      ? "Student discount applied!"
                      : "Enter a valid referral code to get the student discount."}
                  </p>
                </div>

                <div className="bg-cyber-dark p-4 rounded-lg border border-green-900/50">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Registration Fees</span>
                    <span className="font-bold text-green-400">${price}</span>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required className="border-green-500/50 data-[state=checked]:bg-green-500" />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the{" "}
                    <a href="#" className="text-green-400 hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-400 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div> */}
              </div>

              <Button type="submit" className="w-full cyber-button">
                Pay Fees
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
