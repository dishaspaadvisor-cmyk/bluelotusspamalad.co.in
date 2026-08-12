// lib/validators.ts

export function containsUrl(value: string) {
  const pattern =
    /(https?:\/\/|www\.|[a-z0-9-]+\.(com|in|net|org|co|io))/i;

  return pattern.test(value);
}

export function isValidIndianPhone(phone: string) {
  return /^\d{10}$/.test(phone);
}