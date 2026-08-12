// data/site.ts

export const siteUrl = "https://bluelotusspamalad.co.in";

export const siteData = {
  name: "Blue Lotus Spa Malad",
  shortName: "Blue Lotus Spa",

  tagline: "Premium Spa & Massage Experience in Malad West",

  description:
    "Blue Lotus Spa Malad is a premium spa in Malad West, Mumbai offering professional massage and wellness services in a relaxing and comfortable environment.",

  url: siteUrl,

  contact: {
    phone: "+91 9152363523",
    phoneRaw: "919152363523",

    whatsapp: "919152363523",

    email: "bluelotusspa.malad@gmail.com",
  },

  address: {
    full: "Unit 1, A Wing Solitaire II, CTS No. 269/A-3, Opposite Infinity Mall, Link Road, Malad West, Mumbai, Maharashtra 400064",

    shop: "Unit 1",
    building: "A Wing Solitaire II",
    landmark: "Opposite Infinity Mall",
    locality: "Link Road",
    area: "Malad West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400064",
    country: "India",
  },

  location: {
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Blue+Lotus+Spa+Malad+Solitaire+II+Infinity+Mall+Malad+West+Mumbai",

    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Blue+Lotus+Spa+Malad+Solitaire+II+Infinity+Mall+Malad+West+Mumbai",
  },

  timings: {
    monday: "10:00 AM - 11:00 PM",
    tuesday: "10:00 AM - 11:00 PM",
    wednesday: "10:00 AM - 11:00 PM",
    thursday: "10:00 AM - 11:00 PM",
    friday: "10:00 AM - 11:00 PM",
    saturday: "10:00 AM - 11:00 PM",
    sunday: "10:00 AM - 11:00 PM",

    display: "Open Daily: 10:00 AM - 11:00 PM",
  },

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  socialLinks: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  whatsapp: {
    defaultMessage:
      "Hi Blue Lotus Spa Malad, I would like to know more about your spa services and availability.",

    bookingMessage:
      "Hi Blue Lotus Spa Malad, I would like to book a spa appointment. Please share the available timings and services.",
  },

  hero: {
    eyebrow: "Welcome To",

    title: "Blue Lotus Spa Malad",

    subtitle:
      "Relax, refresh and rejuvenate with our premium spa and massage therapies in Malad West, Mumbai.",

    primaryButton: {
      label: "Book Appointment",
      href: "/contact",
    },

    secondaryButton: {
      label: "Explore Services",
      href: "/services",
    },

    // IMAGE NAME KEPT UNCHANGED
    image: "/images/hero-3.png",
  },

  about: {
    eyebrow: "About Blue Lotus Spa",

    title: "A Premium Wellness Experience in Malad West",

    description:
      "Blue Lotus Spa Malad offers a calm and relaxing environment where you can take a break from your busy routine. Our professional spa therapies are designed to help you relax, refresh and enjoy a comfortable wellness experience.",

    secondDescription:
      "Conveniently located opposite Infinity Mall in Malad West, Mumbai, Blue Lotus Spa combines a peaceful ambience, professional service and a wide selection of massage and wellness therapies.",

    // IMAGE NAME KEPT UNCHANGED
    image: "/images/hero-2.png",
  },

  highlights: [
    {
      title: "Professional Therapists",
      description:
        "Professional therapists focused on providing comfortable and relaxing spa treatments.",
    },
    {
      title: "Premium Ambience",
      description:
        "A calm, peaceful and comfortable environment designed for relaxation.",
    },
    {
      title: "Multiple Therapies",
      description:
        "Choose from a wide selection of massage and wellness therapies based on your relaxation needs.",
    },
    {
      title: "Prime Malad Location",
      description:
        "Conveniently located opposite Infinity Mall on Link Road in Malad West, Mumbai.",
    },
  ],

  serviceCategories: [
    "Full Body Massage",
    "Thai Massage",
    "Deep Tissue Massage",
    "Swedish Massage",
    "Aromatherapy Massage",
    "Ayurvedic Massage",
    "Oil Massage",
    "Foot Massage",
    "Head & Shoulder Massage",
    "Four Hand Massage",
    "Lomi Lomi Massage",
    "Jacuzzi Milk Bath",
    "Jacuzzi Honey Bath",
    "Couples Spa Experience",
  ],

  callToAction: {
    title: "Ready For A Relaxing Spa Experience?",

    description:
      "Book your appointment at Blue Lotus Spa Malad and enjoy a relaxing wellness experience in the heart of Malad West, Mumbai.",

    callLabel: "Call Now",

    whatsappLabel: "WhatsApp Us",

    bookingLabel: "Book Appointment",
  },

  footer: {
    description:
      "Blue Lotus Spa Malad is a premium spa in Malad West, Mumbai offering professional massage and wellness services in a peaceful and comfortable environment.",

    copyright: `© ${new Date().getFullYear()} Blue Lotus Spa Malad. All Rights Reserved.`,
  },
} as const;

// --------------------------------------------------
// HELPER EXPORTS
// --------------------------------------------------

export const phoneUrl = `tel:${siteData.contact.phoneRaw}`;

export const emailUrl = `mailto:${siteData.contact.email}`;

export const whatsappUrl = `https://wa.me/${
  siteData.contact.whatsapp
}?text=${encodeURIComponent(siteData.whatsapp.defaultMessage)}`;

export const whatsappBookingUrl = `https://wa.me/${
  siteData.contact.whatsapp
}?text=${encodeURIComponent(siteData.whatsapp.bookingMessage)}`;