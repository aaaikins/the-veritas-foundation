"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X, User, Mail, Phone, GraduationCap, FileText, Send, Loader2 } from "lucide-react"

export default function ApplicationForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    gpa: "",
    graduationYear: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Construct the payload to match the backend ApplicationCreate model
      const payload = {
        applicant_name: `${formData.firstName} ${formData.lastName}`.trim(),
        applicant_email: formData.email,
        applicant_phone: formData.phone || null,
        application_data: {
          university: formData.university,
          major: formData.major,
          gpa: formData.gpa,
          graduationYear: formData.graduationYear,
          roleOfInterest: formData.roleOfInterest,
          relevantExperience: formData.relevantExperience,
          motivation: formData.motivation,
          availability: formData.availability,
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
        roleOfInterest: "",
        relevantExperience: "",
        motivation: "",
        availability: ""
      })
      setResumeFile(null)
    } catch (err) {
      console.error('Submission error:', err)
      alert("Failed to submit application. Please try again later.")
    } finally {
      setIsLoading(false)
    }
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
            <div className="ml-2 w-2 h-2 bg-[#002366] rounded-full animate-pulse"></div>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-white border-0 shadow-2xl">
        <DialogHeader className="pb-6 border-b border-slate-100">
          <DialogTitle className="text-2xl font-bold text-[#002366] flex items-center gap-3">
            <div className="w-10 h-10 bg-[#facc15]/10 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-[#facc15]" />
            </div>
            General Application
          </DialogTitle>
          <p className="text-slate-600 text-sm mt-2">
            Join The Veritas Foundation community. Fill out the form below to apply for our programs.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
              <div className="w-8 h-8 bg-[#002366]/10 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 text-[#002366]" />
              </div>
              <h3 className="text-lg font-semibold text-[#002366]">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium flex items-center gap-1">
                  First Name 
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium flex items-center gap-1">
                  Last Name 
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email 
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] transition-all duration-200"
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
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          {/* Academic Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
              <div className="w-8 h-8 bg-[#facc15]/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-[#002366]" />
              </div>
              <h3 className="text-lg font-semibold text-[#002366]">Academic Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="university" className="text-sm font-medium">High School/University</Label>
                <Input
                  id="university"
                  value={formData.university}
                  onChange={(e) => handleInputChange("university", e.target.value)}
                  // required
                  placeholder="e.g., Harvard University"
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] transition-all duration-200"
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
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] transition-all duration-200"
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
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear" className="text-sm font-medium">Graduation Year</Label>
                <Select onValueChange={(value) => handleInputChange("graduationYear", value)}>
                  <SelectTrigger className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] transition-all duration-200">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2015">2015</SelectItem>
                    <SelectItem value="2016">2016</SelectItem>
                    <SelectItem value="2017">2017</SelectItem>
                    <SelectItem value="2018">2018</SelectItem>
                    <SelectItem value="2019">2019</SelectItem>
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
                    <SelectItem value="2030">2030</SelectItem>
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
            <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
              <div className="w-8 h-8 bg-[#002366]/10 rounded-lg flex items-center justify-center">
                <FileText className="h-4 w-4 text-[#002366]" />
              </div>
              <h3 className="text-lg font-semibold text-[#002366]">Application Details</h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="roleOfInterest" className="text-sm font-medium">Role of Interest</Label>
              <Select value={formData.roleOfInterest} onValueChange={(value) => handleInputChange("roleOfInterest", value)}>
                <SelectTrigger className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] transition-all duration-200">
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
                className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] resize-none transition-all duration-200"
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
                className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] resize-none transition-all duration-200"
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
                className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] resize-none transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume" className="text-sm font-medium">Upload Resume/CV (optional)</Label>
              <div className="relative">
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-[#facc15] hover:bg-[#facc15]/5 transition-all duration-300 group">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-[#facc15]/10 transition-colors duration-300">
                      <FileText className="w-6 h-6 text-slate-400 group-hover:text-[#002366] transition-colors duration-300" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-700">
                        {resumeFile ? resumeFile.name : "Click to upload or drag and drop"}
                      </p>
                      <p className="text-xs text-slate-500">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                    {resumeFile && (
                      <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        File selected
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-slate-200">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
              disabled={isLoading}
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={isLoading || !formData.firstName || !formData.lastName || !formData.email}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
