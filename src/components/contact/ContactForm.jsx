import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2, User, Phone, Mail, MapPin, Sprout, Hash, MessageSquare, ShieldCheck } from "lucide-react";
import { isValidEmail, isValidPhone } from "../../utils/helpers";

export default function ContactForm({ initialCrop = "", initialProduct = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: "",
    crop: initialCrop || "Paddy",
    acreage: "",
    message: initialProduct ? `Inquiring about ${initialProduct}` : ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please provide your full name.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!isValidPhone(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit mobile number.";
    }

    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Please enter your district/state.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        location: "",
        crop: "Paddy",
        acreage: "",
        message: ""
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
      {/* Decorative Brand Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#11102B] via-[#58B023] to-[#E89C12]"></div>

      <div className="mb-8 pb-6 border-b border-slate-100">
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] font-extrabold text-[#006E38] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-[#58B023]" />
          Agronomy Advisory Desk
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#11102B] mt-1">
          Request Field Advisory Consultation
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] font-light mt-2 leading-relaxed">
          Fill out your farm details below and an authorized Vijetha regional agronomist will reach out within 24 hours.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-8 bg-[#11102B] text-white rounded-xl border border-[#58B023]/40 text-center space-y-4 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-[#58B023]/20 border border-[#58B023] flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-9 h-9 text-[#58B023]" />
          </div>
          <h4 className="font-serif text-2xl text-[#E89C12]">
            Enquiry Received With Care
          </h4>
          <p className="text-xs sm:text-sm text-[#CBD5E1] font-light leading-relaxed max-w-md mx-auto">
            Thank you for reaching out to Vijetha Crop Care. Our senior regional agronomist has received your farm details and will call your mobile number shortly.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-4 px-6 py-2.5 bg-[#58B023] text-[#11102B] text-xs uppercase tracking-widest font-extrabold rounded-lg hover:bg-[#6CB42C] transition-colors cursor-pointer shadow-md"
          >
            Submit Another Query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-bold text-[#11102B] mb-2">
                <User className="w-3.5 h-3.5 text-[#58B023]" />
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Reddy"
                className={`w-full px-4 py-3 bg-[#F8FAFC] border rounded-lg text-xs sm:text-sm text-[#1E293B] focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#58B023]/30 focus:border-[#58B023] transition-all ${
                  errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-200"
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-bold text-[#11102B] mb-2">
                <Phone className="w-3.5 h-3.5 text-[#58B023]" />
                Mobile Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className={`w-full px-4 py-3 bg-[#F8FAFC] border rounded-lg text-xs sm:text-sm text-[#1E293B] focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#58B023]/30 focus:border-[#58B023] transition-all ${
                  errors.phoneNumber ? "border-red-500 bg-red-50/20" : "border-slate-200"
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Email & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-bold text-[#11102B] mb-2">
                <Mail className="w-3.5 h-3.5 text-[#58B023]" />
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. farmer@example.com"
                className={`w-full px-4 py-3 bg-[#F8FAFC] border rounded-lg text-xs sm:text-sm text-[#1E293B] focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#58B023]/30 focus:border-[#58B023] transition-all ${
                  errors.email ? "border-red-500 bg-red-50/20" : "border-slate-200"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-bold text-[#11102B] mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#58B023]" />
                District / State *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Guntur, Andhra Pradesh"
                className={`w-full px-4 py-3 bg-[#F8FAFC] border rounded-lg text-xs sm:text-sm text-[#1E293B] focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#58B023]/30 focus:border-[#58B023] transition-all ${
                  errors.location ? "border-red-500 bg-red-50/20" : "border-slate-200"
                }`}
              />
              {errors.location && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3" />
                  {errors.location}
                </p>
              )}
            </div>
          </div>

          {/* Crop & Land Acreage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-bold text-[#11102B] mb-2">
                <Sprout className="w-3.5 h-3.5 text-[#58B023]" />
                Primary Crop
              </label>
              <select
                name="crop"
                value={formData.crop}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-lg text-xs sm:text-sm text-[#1E293B] focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#58B023]/30 focus:border-[#58B023] transition-all cursor-pointer"
              >
                <option value="Paddy">Paddy (Rice)</option>
                <option value="Cotton">Cotton (Kapas)</option>
                <option value="Chilli">Chilli (Mirchi)</option>
                <option value="Tomato">Tomato</option>
                <option value="Vegetables">Vegetables & Gourds</option>
                <option value="Fruits">Fruit Orchards</option>
                <option value="Pulses">Pulses & Oilseeds</option>
                <option value="Other">Other Agricultural Crop</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-bold text-[#11102B] mb-2">
                <Hash className="w-3.5 h-3.5 text-[#58B023]" />
                Land Holding (Acres)
              </label>
              <input
                type="text"
                name="acreage"
                value={formData.acreage}
                onChange={handleChange}
                placeholder="e.g. 5 Acres"
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-lg text-xs sm:text-sm text-[#1E293B] focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#58B023]/30 focus:border-[#58B023] transition-all"
              />
            </div>
          </div>

          {/* Message / Specific Issue */}
          <div>
            <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-bold text-[#11102B] mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#58B023]" />
              Field Problem or Product Requirement
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your current crop stage, pest symptoms, or formulations required..."
              className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-lg text-xs sm:text-sm text-[#1E293B] focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#58B023]/30 focus:border-[#58B023] transition-all"
            ></textarea>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-[#58B023] text-[#11102B] text-xs uppercase tracking-[0.24em] font-extrabold hover:bg-[#6CB42C] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#58B023]/25 group cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#11102B]" />
                <span>Processing Advisory Request...</span>
              </>
            ) : (
              <>
                <span>Send Agronomy Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#11102B] group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          
          <p className="text-[11px] text-center text-slate-400 font-light pt-2">
            🔒 100% Confidential Field Advisory • Region-wise Senior Agronomist Support
          </p>
        </form>
      )}
    </div>
  );
}

