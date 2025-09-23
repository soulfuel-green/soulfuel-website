"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog" // Import AlertDialog components

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    monthly_requirement: "",
    current_fuel: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false) // New state for dialog

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)
    setIsSuccess(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your business inquiry! We'll get back to you within 24 hours with a customized quote.",
        )
        setIsSuccess(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          industry: "",
          monthly_requirement: "",
          current_fuel: "",
          message: "",
        }) // Clear form on success
      } else {
        throw new Error(data.message || "Failed to send message.")
      }
    } catch (error: any) {
      console.error("Contact form submission error:", error)
      setSubmitMessage(
        `Failed to send your business inquiry: ${error.message || "An unexpected error occurred."} Please try again later or contact us directly at Info.soulfuelgreenenergy@gmail.com`,
      )
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
      setShowConfirmationDialog(true) // Show dialog after submission attempt
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Ready to switch to sustainable biomass fuel? Submit your business inquiry for a customized solution and
            competitive pricing.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Head Office */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Head Office</h4>
                <p className="text-gray-600 leading-relaxed">
                  Soulfuel Green Energy Pvt. Ltd.
                  <br />
                  336, Phase III, Udyog Vihar, Sector 19
                  <br />
                  Gurugram, Haryana - 122016, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Phone</h4>
                <p className="text-gray-600 leading-relaxed">
                  +91-9819818411
                  <br />
                  +91-9582160878
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Email</h4>
                <p className="text-gray-600 leading-relaxed">
                  sweta.soulfuel@gmail.com
                  <br />
                  Info.soulfuelgreenenergy@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Business Inquiry Form</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry Type *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md px-3 py-2"
                  >
                    <option value="">Select Industry</option>
                    <option value="Textile">Textile</option>
                    <option value="Food Processing">Food Processing</option>
                    <option value="Chemical">Chemical</option>
                    <option value="Pharmaceutical">Pharmaceutical</option>
                    <option value="Steel">Steel</option>
                    <option value="Cement">Cement</option>
                    <option value="Paper">Paper</option>
                    <option value="Power Generation">Power Generation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="monthly_requirement" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Fuel Requirement *
                  </label>
                  <select
                    id="monthly_requirement"
                    name="monthly_requirement"
                    value={formData.monthly_requirement}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md px-3 py-2"
                  >
                    <option value="">Select Requirement</option>
                    <option value="Less than 50 tons">Less than 50 tons</option>
                    <option value="50-100 tons">50-100 tons</option>
                    <option value="100-500 tons">100-500 tons</option>
                    <option value="500-1000 tons">500-1000 tons</option>
                    <option value="More than 1000 tons">More than 1000 tons</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="current_fuel" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Fuel Type
                  </label>
                  <select
                    id="current_fuel"
                    name="current_fuel"
                    value={formData.current_fuel}
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md px-3 py-2"
                  >
                    <option value="">Select Current Fuel</option>
                    <option value="Coal">Coal</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Natural Gas">Natural Gas</option>
                    <option value="LPG">LPG</option>
                    <option value="Firewood">Firewood</option>
                    <option value="Other Biomass">Other Biomass</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Requirements / Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="Please describe your specific requirements, delivery location, timeline, or any other details..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Business Inquiry..." : "Submit Business Inquiry"}
              </Button>
            </form>
          </div> */}
        </div>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmationDialog} onOpenChange={setShowConfirmationDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className={isSuccess ? "text-green-600" : "text-red-600"}>
              {isSuccess ? "Success!" : "Submission Failed"}
            </AlertDialogTitle>
            <AlertDialogDescription>{submitMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowConfirmationDialog(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}
