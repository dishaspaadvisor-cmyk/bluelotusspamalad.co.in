"use client";

import { FormEvent, useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaPhone,
} from "react-icons/fa6";

type ContactFormProps = {
  title?: string;
  subtitle?: string;
  sourceLabel?: string;
  className?: string;
};

type FormErrors = {
  name?: string;
  phone?: string;
  address?: string;
  notes?: string;
  submit?: string;
};

const URL_PATTERN =
  /(https?:\/\/|www\.|[a-z0-9-]+\.(com|in|net|org|co|io|me|info|biz|xyz|online|site))/i;

const NAME_PATTERN = /^[a-zA-Z\s.'-]+$/;

export default function ContactForm({
  title = "Book Your Spa Appointment",
  subtitle = "Fill in your details and our team will contact you shortly.",
  sourceLabel = "Website Enquiry",
  className = "",
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // =========================================
  // BLOCK URLS
  // =========================================

  const containsUrl = (value: string) => URL_PATTERN.test(value);

  // =========================================
  // PHONE INPUT
  // =========================================

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const digitsOnly = event.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setPhone(digitsOnly);

    if (errors.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: undefined,
      }));
    }
  };

  // =========================================
  // PREVENT PASTE
  // =========================================

  const preventPaste = (
    event:
      | React.ClipboardEvent<HTMLInputElement>
      | React.ClipboardEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
  };

  // =========================================
  // VALIDATE
  // =========================================

  const validateForm = () => {
    const newErrors: FormErrors = {};

    const trimmedName = name.trim();
    const trimmedAddress = address.trim();
    const trimmedNotes = notes.trim();

    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    } else if (trimmedName.length > 50) {
      newErrors.name = "Name is too long.";
    } else if (!NAME_PATTERN.test(trimmedName)) {
      newErrors.name = "Please enter a valid name.";
    } else if (containsUrl(trimmedName)) {
      newErrors.name = "URLs are not allowed.";
    }

    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!trimmedAddress) {
      newErrors.address = "Please enter your location or address.";
    } else if (trimmedAddress.length < 3) {
      newErrors.address = "Please enter a valid location.";
    } else if (trimmedAddress.length > 150) {
      newErrors.address = "Address is too long.";
    } else if (containsUrl(trimmedAddress)) {
      newErrors.address = "URLs are not allowed.";
    }

    if (trimmedNotes.length > 500) {
      newErrors.notes = "Message cannot exceed 500 characters.";
    } else if (containsUrl(trimmedNotes)) {
      newErrors.notes = "URLs are not allowed.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================================
  // SUBMIT
  // =========================================

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSuccess(false);

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://apibackend.mastercall.in/api/v1/web-leads/submit/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            form_key: "frm_blue_lotus_spa_malad_312668",

            name: name.trim(),

            phone,

            address: address.trim(),

            notes: notes.trim()
              ? `${notes.trim()} | Source: ${sourceLabel}`
              : `Source: ${sourceLabel}`,

            submitted_from_url: window.location.href,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Unable to submit form.");
      }

      setName("");
      setPhone("");
      setAddress("");
      setNotes("");

      setErrors({});
      setIsSuccess(true);
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setErrors({
        submit:
          "Something went wrong while submitting your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldWrapperClass = "contact-form-field";
  const labelClass =
    "mb-2 block text-[11px] font-bold uppercase tracking-[1.2px] text-[var(--forest)]";

  return (
    <div className={`contact-form-card p-5 pt-7 sm:p-7 sm:pt-9 lg:p-9 lg:pt-10 ${className}`}>
      {/* =========================================
          HEADER
      ========================================== */}

      <div className="relative z-10 mx-auto mb-7 max-w-[560px] text-center">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[2.8px] lux-gold">
          Blue Lotus Spa Malad
        </p>

        <h2 className="font-serif text-[30px] font-semibold leading-[1.08] lux-espresso sm:text-[36px]">
          {title}
        </h2>

        <p className="mx-auto mt-3 max-w-[520px] text-[14px] leading-7 lux-muted">
          {subtitle}
        </p>
      </div>

      {/* =========================================
          SUCCESS
      ========================================== */}

        {isSuccess && (
          <div className="mb-6 flex items-start gap-3 rounded-[8px] lux-success p-4">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#269b52] text-white shadow-[0_8px_18px_rgba(38,155,82,0.16)]">
              <FaCheck className="text-[11px]" />
            </span>

            <div>
              <p className="text-[13px] font-bold lux-espresso">Enquiry submitted successfully.</p>

              <p className="mt-1 text-[12px] leading-5 lux-muted">Thank you. Our Blue Lotus Spa Malad team will contact you shortly.</p>
            </div>
          </div>
        )}

      {/* =========================================
          FORM
      ========================================== */}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative z-10 space-y-4"
      >
        {/* NAME */}

        <div className={fieldWrapperClass}>
          <label
            htmlFor="contact-name"
            className={labelClass}
          >
            Your Name{" "}
            <span className="text-[var(--gold-dark)]">*</span>
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            autoComplete="name"
            maxLength={50}
            placeholder="Enter your name"
            className={`form-input ${
              errors.name ? "!border-red-400" : ""
            }`}
            onChange={(event) => {
              const value = event.target.value;

              setName(value);

              if (errors.name) {
                setErrors((prev) => ({
                  ...prev,
                  name: undefined,
                }));
              }
            }}
          />

          {errors.name && (
            <p className="mt-1.5 text-[11px] font-medium text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* PHONE */}

        <div className={fieldWrapperClass}>
          <label
            htmlFor="contact-phone"
            className={labelClass}
          >
            Mobile Number{" "}
            <span className="text-[var(--gold-dark)]">*</span>
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center gap-2 border-r border-[var(--border)] pr-3 text-[13px] font-semibold text-[var(--muted-text)]">
              +91
            </span>

            <input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              value={phone}
              autoComplete="tel"
              maxLength={10}
              placeholder="10 digit number"
              className={`form-input !pl-[72px] ${
                errors.phone ? "!border-red-400" : ""
              }`}
              onChange={handlePhoneChange}
              onPaste={preventPaste}
            />
          </div>

          {errors.phone ? (
            <p className="mt-1.5 text-[11px] font-medium text-red-500">
              {errors.phone}
            </p>
          ) : (
            <p className="mt-1.5 text-[10px] text-[var(--muted-text)]">
              Enter exactly 10 digits.
            </p>
          )}
        </div>

        {/* ADDRESS */}

        <div className={fieldWrapperClass}>
          <label
            htmlFor="contact-address"
            className={labelClass}
          >
            Location / Address{" "}
            <span className="text-[var(--gold-dark)]">*</span>
          </label>

          <input
            id="contact-address"
            name="address"
            type="text"
            value={address}
            maxLength={150}
            placeholder="Example: Malad West, Mumbai"
            className={`form-input ${
              errors.address ? "!border-red-400" : ""
            }`}
            onPaste={preventPaste}
            onChange={(event) => {
              const value = event.target.value;

              setAddress(value);

              if (errors.address) {
                setErrors((prev) => ({
                  ...prev,
                  address: undefined,
                }));
              }
            }}
          />

          {errors.address && (
            <p className="mt-1.5 text-[11px] font-medium text-red-500">
              {errors.address}
            </p>
          )}
        </div>

        {/* NOTES */}

        <div className={fieldWrapperClass}>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="contact-notes"
              className={labelClass}
            >
              Message
            </label>

            <span className="text-[10px] text-[var(--muted-text)]">
              {notes.length}/500
            </span>
          </div>

          <textarea
            id="contact-notes"
            name="notes"
            value={notes}
            maxLength={500}
            placeholder="Tell us which massage or service you are interested in..."
            className={`form-input ${
              errors.notes ? "!border-red-400" : ""
            }`}
            onPaste={preventPaste}
            onChange={(event) => {
              const value = event.target.value;

              setNotes(value);

              if (errors.notes) {
                setErrors((prev) => ({
                  ...prev,
                  notes: undefined,
                }));
              }
            }}
          />

          {errors.notes && (
            <p className="mt-1.5 text-[11px] font-medium text-red-500">
              {errors.notes}
            </p>
          )}
        </div>

        {/* SUBMIT ERROR */}

        {errors.submit && (
          <div className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3">
            <p className="text-[12px] font-medium text-red-600">
              {errors.submit}
            </p>
          </div>
        )}

        {/* SUBMIT */}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Submitting...
              </>
            ) : (
              <>
                <FaPhone className="text-[12px]" />

                Request a Call Back

                <FaArrowRight className="text-[10px]" />
              </>
            )}
          </button>
        </div>

        <p className="text-center text-[10px] leading-5 lux-muted">
          By submitting this form, you agree to be
          contacted regarding your enquiry.
        </p>
      </form>
    </div>
  );
}
