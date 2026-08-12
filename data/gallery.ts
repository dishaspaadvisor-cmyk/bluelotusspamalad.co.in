// data/gallery.ts

export const galleryImages = [
  {
    id: 1,
    image: "/gallery/gallery-1.JPG",
    alt: "Blue Lotus Spa Malad premium spa interior",
    title: "Premium Spa Ambience",
    category: "Interior",
    featured: true,
  },
  {
    id: 2,
    image: "/gallery/gallery-2.JPG",
    alt: "Massage treatment room at Blue Lotus Spa Malad",
    title: "Relaxing Treatment Room",
    category: "Treatment Room",
    featured: false,
  },
  {
    id: 3,
    image: "/gallery/gallery-3.JPG",
    alt: "Peaceful wellness space at Blue Lotus Spa Malad in Malad West",
    title: "Peaceful Wellness Space",
    category: "Wellness",
    featured: false,
  },
  {
    id: 4,
    image: "/gallery/gallery-4.JPG",
    alt: "Comfortable massage room at Blue Lotus Spa Malad",
    title: "Comfortable Massage Room",
    category: "Massage Room",
    featured: false,
  },
  {
    id: 5,
    image: "/gallery/gallery-5.JPG",
    alt: "Relaxing spa ambience at Blue Lotus Spa Malad",
    title: "Relaxing Spa Experience",
    category: "Ambience",
    featured: false,
  },
  {
    id: 6,
    image: "/gallery/gallery-6.JPG",
    alt: "Blue Lotus Spa Malad premium wellness interior",
    title: "Blue Lotus Spa Malad",
    category: "Spa",
    featured: true,
  },
  {
    id: 7,
    image: "/gallery/gallery-7.JPG",
    alt: "Spa therapy room at Blue Lotus Spa Malad in Malad West",
    title: "Spa Therapy Room",
    category: "Treatment Room",
    featured: false,
  },
  {
    id: 8,
    image: "/gallery/gallery-8.JPG",
    alt: "Calm spa interior in Malad West Mumbai",
    title: "Calm Interior",
    category: "Interior",
    featured: true,
  },
  {
    id: 9,
    image: "/gallery/gallery-9.JPG",
    alt: "Blue Lotus Spa Malad wellness environment",
    title: "Wellness Environment",
    category: "Wellness",
    featured: false,
  },
  {
    id: 10,
    image: "/gallery/gallery-10.JPG",
    alt: "Premium massage setup at Blue Lotus Spa Malad",
    title: "Premium Massage Setup",
    category: "Massage Room",
    featured: false,
  },
  {
    id: 11,
    image: "/gallery/gallery-11.JPG",
    alt: "Comfortable spa ambience at Blue Lotus Spa Malad",
    title: "Comfortable Ambience",
    category: "Ambience",
    featured: false,
  },
  {
    id: 12,
    image: "/gallery/gallery-12.JPG",
    alt: "Blue Lotus Spa Malad interior and wellness space",
    title: "Blue Lotus Wellness",
    category: "Spa",
    featured: true,
  },
];

export type GalleryImage = (typeof galleryImages)[number];

export const featuredGalleryImages = galleryImages.filter(
  (item) => item.featured
);