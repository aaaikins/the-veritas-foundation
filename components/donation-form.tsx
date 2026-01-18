"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { HeartHandshake, CreditCard, DollarSign, Mail, User, Phone, MessageSquare, Loader2 } from "lucide-react"

export default function DonationForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [donationType, setDonationType] = useState("one-time")
  const [customAmount, setCustomAmount] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    amount: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    message: "",
    anonymous: false
  })

  const presetAmounts = ["25", "50", "100", "250", "500", "1000"]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleDonateClick = async () => {
    setIsLoading(true);
    setIsOpen(true);
    // Add a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 600));
    setIsLoading(false);
  };

  const handleAmountSelect = (amount: string) => {
    setFormData(prev => ({
      ...prev,
      amount: amount
    }))
    setCustomAmount("")
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setFormData(prev => ({
      ...prev,
      amount: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Validate required fields
      if (!formData.amount) {
        throw new Error("Please select a donation amount")
      }

      if (!formData.anonymous && (!formData.firstName || !formData.lastName || !formData.email)) {
        throw new Error("Please fill in all required fields")
      }

      // Create Stripe Checkout Session
      const payload = {
        amount: parseFloat(formData.amount),
        currency: "usd",
        donorName: formData.anonymous ? undefined : `${formData.firstName} ${formData.lastName}`.trim(),
        donorEmail: formData.anonymous ? undefined : formData.email,
        purpose: formData.message || undefined,
        isAnonymous: formData.anonymous,
        donationType: donationType // one-time, monthly, yearly
      }

      console.log('Creating Stripe checkout session:', payload)

      const res = await fetch("/api/donations/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.error('Server response:', errorData)
        throw new Error(errorData.error || `Server error: ${res.status}`)
      }

      const responseData = await res.json()
      console.log('Checkout session created:', responseData)

      // Redirect to Stripe Checkout
      if (responseData.url) {
        // Redirect to Stripe Checkout for payment
        window.location.href = responseData.url
      } else {
        throw new Error("No checkout URL received from Stripe")
      }
    } catch (err) {
      console.error('Submission error:', err)
      const errorMessage = err instanceof Error ? err.message : "Failed to process donation. Please try again later."
      alert(errorMessage)
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 hover:scale-105 transition-all duration-500 ease-out shadow-xl hover:shadow-2xl font-semibold text-lg px-8 py-4 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={handleDonateClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Opening...
            </>
          ) : (
            <>
              <HeartHandshake className="mr-3 h-5 w-5 group-hover:animate-pulse" />
              Donate Now
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#002366] flex items-center gap-2">
            <HeartHandshake className="h-6 w-6 text-[#facc15]" />
            Make a Donation
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Donation Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366] flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Donation Type
            </h3>
            <RadioGroup
              value={donationType}
              onValueChange={setDonationType}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time">One-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yearly" id="yearly" />
                <Label htmlFor="yearly">Yearly</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Donation Amount */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366]">Select Amount</h3>
            <div className="grid grid-cols-3 gap-3">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={formData.amount === amount ? "default" : "outline"}
                  className={`h-12 ${formData.amount === amount ? 'bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90' : 'border-slate-300 hover:border-[#facc15]'}`}
                  onClick={() => handleAmountSelect(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="customAmount" className="text-sm font-medium">Or enter custom amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="customAmount"
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="pl-10 border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366] flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name {formData.anonymous ? "(Optional)" : "*"}
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required={!formData.anonymous}
                  disabled={formData.anonymous}
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] disabled:bg-slate-50 disabled:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name {formData.anonymous ? "(Optional)" : "*"}
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required={!formData.anonymous}
                  disabled={formData.anonymous}
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] disabled:bg-slate-50 disabled:text-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email {formData.anonymous ? "(Optional)" : "*"}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required={!formData.anonymous}
                  disabled={formData.anonymous}
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] disabled:bg-slate-50 disabled:text-slate-400"
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

          {/* Payment Information */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366] flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Information
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber" className="text-sm font-medium">Card Number *</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                  required
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate" className="text-sm font-medium">Expiry Date *</Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                    required
                    className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv" className="text-sm font-medium">CVV *</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange("cvv", e.target.value)}
                    required
                    className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                  />
                </div>
              </div>
            </div> */}

            {/* Billing Address */}
            {/* <div className="space-y-4">
              <h4 className="text-md font-semibold text-[#002366]">Billing Address</h4>
              <div className="space-y-2">
                <Label htmlFor="billingAddress" className="text-sm font-medium">Street Address *</Label>
                <Input
                  id="billingAddress"
                  value={formData.billingAddress}
                  onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                  required
                  className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    required
                    className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sm font-medium">State *</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    required
                    className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-sm font-medium">ZIP Code *</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    required
                    className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15]"
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* Optional Message */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002366] flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Message (Optional)
            </h3>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Share why you're supporting our mission
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={3}
                placeholder="Your message of support..."
                className="border-slate-300 focus:border-[#facc15] focus:ring-[#facc15] resize-none"
              />
            </div>

            {/* Anonymous Donation Option */}
            <div className="flex items-center space-x-2 pt-2">
              <input
                type="checkbox"
                id="anonymous"
                checked={formData.anonymous}
                onChange={(e) => handleInputChange("anonymous", e.target.checked)}
                className="rounded border-slate-300 text-[#002366] focus:ring-[#facc15]"
              />
              <Label htmlFor="anonymous" className="text-sm font-medium text-slate-600">
                Make this donation anonymous
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="px-6"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90 px-8 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isLoading || !formData.amount || (!formData.anonymous && (!formData.firstName || !formData.lastName || !formData.email))}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <HeartHandshake className="mr-2 h-4 w-4" />
                  {donationType === 'monthly' ? 'Start Monthly Donation' : donationType === 'yearly' ? 'Start Yearly Donation' : 'Donate'} ${formData.amount || '0'}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
