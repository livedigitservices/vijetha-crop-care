/**
 * Safely format phone number for display
 */
export function formatPhoneNumber(phone) {
  if (!phone) return "";
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

/**
 * Validates Indian or international phone number
 */
export function isValidPhone(phone) {
  if (!phone) return false;
  // Clean non-digits
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length >= 10 && cleaned.length <= 13;
}

/**
 * Validates standard email address
 */
export function isValidEmail(email) {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Scroll smoothly to element ID
 */
export function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Handle image fallback gracefully
 */
export function getFallbackImage(category) {
  return "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80";
}
