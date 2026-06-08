// ── Clinic configuration (single source of truth — reusable per client) ──

// IMPORTANT: WhatsApp number in international format WITHOUT '+' or spaces.
// Example for India: 91 followed by the 10-digit number.
export const CLINIC = {
  name: 'Dr Raveena's ',
  tagline: 'Move better. Live pain-free.',
  phone: '+91 8879131393',
  phoneRaw: '918879131393', // tel: + wa.me
  whatsappNumber: '918879131393',
  email: 'DrRaveena@gmail.com',
  address: 'phase-2,new manak hospital,plot no 2 sec-8,ravij gandhi bridge w nerul, navimumbai, Maharashtra 400706',
  hours: 'Mon–Sat · 8:00 AM – 8:00 PM',
}

// Build a real, working WhatsApp deep link.
export const waLink = (message = 'Hello! I want to book a physiotherapy appointment.') =>
  `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`

export const telLink = () => `tel:+${CLINIC.phoneRaw}`
