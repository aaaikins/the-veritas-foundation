"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X, User, Mail, Phone, GraduationCap, FileText, Send } from "lucide-react"

export default function ApplicationForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    gpa: "",
    graduationYear: "",
    essay: "",
    references: "",
    roleOfInterest: "",
    relevantExperience: "",
    motivation: "",
    availability: ""
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit the data as JSON to match the backend API
    const submit = async () => {
      try {
        // Construct the payload to match the backend ApplicationCreate model
        const payload = {
          applicant_name: `${formData.firstName} ${formData.lastName}`.trim(),
          applicant_email: formData.email,
          applicant_phone: formData.phone || null,
          program_id: 6, // Use the default scholarship program ID
          application_data: {
            university: formData.university,
            major: formData.major,
            gpa: formData.gpa,
            graduationYear: formData.graduationYear,
            roleOfInterest: formData.roleOfInterest,
            relevantExperience: formData.relevantExperience,
            motivation: formData.motivation,
            availability: formData.availability,
            // essay: formData.essay,
            // references: formData.references,
          }
        }

        console.log('Submitting application:', payload)

        const res = await fetch("/api/applications", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload)
        })

        if (!res.ok) {
          const errorText = await res.text()
          console.error('Server response:', errorText)
          throw new Error(`Server error: ${res.status} - ${errorText}`)
        }

        const responseData = await res.json()
        console.log('Success response:', responseData)

        alert("Thank you for your application! We'll be in touch soon.")
        setIsOpen(false)
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          university: "",
          major: "",
          gpa: "",
          graduationYear: "",
          essay: "",
          references: "",
          roleOfInterest: "",
          relevantExperience: "",
          motivation: "",
          availability: ""
        })
        setResumeFile(null)
      } catch (err) {
        console.error('Submission error:', err)
        alert("Failed to submit application. Please try again later.")
      }
    }

    submit()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setResumeFile(file)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-[#facc15] hover:bg-[#facc15]/90 text-[#002366] border-2 border-[#facc15] hover:border-[#facc15]/80 transition-all duration-300 font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 group"
          >
            <GraduationCap className="mr-3 h-5 w-5 group-hover:animate-pulse" />
            Apply Now
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#002366] flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-[#facc15]" />
            Scholarship Application
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366] flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366] flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Academic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="university" className="text-sm font-medium">High School/University</Label>
                <Input
                  id="university"
                  value={formData.university}
                  onChange={(e) => handleInputChange("university", e.target.value)}
                  // required
                  placeholder="e.g., Harvard University"
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="major" className="text-sm font-medium">Major/Field of Study</Label>
                <Input
                  id="major"
                  value={formData.major}
                  onChange={(e) => handleInputChange("major", e.target.value)}
                  // required
                  placeholder="e.g., Computer Science"
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gpa" className="text-sm font-medium">GPA (optional)</Label>
                <Input
                  id="gpa"
                  value={formData.gpa}
                  onChange={(e) => handleInputChange("gpa", e.target.value)}
                  placeholder="e.g., 3.8"
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear" className="text-sm font-medium">Graduation Year</Label>
                <Select onValueChange={(value) => handleInputChange("graduationYear", value)}>
                  <SelectTrigger className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                    <SelectItem value="2028">2028</SelectItem>
                    <SelectItem value="2029">2029</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Essay */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366] flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Personal Statement
            </h3>
            <div className="space-y-2">
              <Label htmlFor="essay" className="text-sm font-medium">
                Why do you deserve this scholarship? (500-1000 words) *
              </Label>
              <Textarea
                id="essay"
                value={formData.essay}
                onChange={(e) => handleInputChange("essay", e.target.value)}
                required
                rows={6}
                placeholder="Tell us about your academic achievements, career goals, community involvement, and how this scholarship will help you achieve your dreams..."
                className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] resize-none"
              />
            </div>
          </div> */}

          {/* Role / Application Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366]">Application Details</h3>

            <div className="space-y-2">
              <Label htmlFor="roleOfInterest" className="text-sm font-medium">Role of Interest</Label>
              <Select value={formData.roleOfInterest} onValueChange={(value) => handleInputChange("roleOfInterest", value)}>
                <SelectTrigger className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Scholar">Scholar</SelectItem>
                  <SelectItem value="Mentor">Mentor</SelectItem>
                  <SelectItem value="Volunteer">Volunteer</SelectItem>
                  <SelectItem value="Board Member">Board Member</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="relevantExperience" className="text-sm font-medium">Relevant Experience</Label>
              <Textarea
                id="relevantExperience"
                value={formData.relevantExperience}
                onChange={(e) => handleInputChange("relevantExperience", e.target.value)}
                rows={4}
                placeholder="Tell us about your relevant experience..."
                className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation" className="text-sm font-medium">Why do you want to join?</Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => handleInputChange("motivation", e.target.value)}
                rows={4}
                placeholder="What motivates you to join The Veritas Foundation?"
                className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability" className="text-sm font-medium">Availability</Label>
              <Textarea
                id="availability"
                value={formData.availability}
                onChange={(e) => handleInputChange("availability", e.target.value)}
                rows={2}
                placeholder="When are you available to contribute?"
                className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume" className="text-sm font-medium">Upload Resume/CV (optional)</Label>
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="mt-1"
              />
            </div>
          </div>

          {/* References */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366] flex items-center gap-2">
              <User className="h-5 w-5" />
              References
            </h3>
            <div className="space-y-2">
              <Label htmlFor="references" className="text-sm font-medium">
                Please provide contact information for 2-3 references (professors, advisors, or mentors)
              </Label>
              <Textarea
                id="references"
                value={formData.references}
                onChange={(e) => handleInputChange("references", e.target.value)}
                rows={4}
                placeholder="Name, Title, Institution, Email, Phone..."
                className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] resize-none"
              />
            </div>
          </div> */}

          {/* Submit Button */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="px-6"
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 px-8"
            >
              <Send className="mr-2 h-4 w-4" />
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
