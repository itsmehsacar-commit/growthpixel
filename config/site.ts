export const siteConfig = {
  name: "LinusServices",
  tagline: "Professional Cleaning Services You Can Rely On",
  description:
    "Residential and commercial cleaning solutions across Australia, tailored to your schedule and standards.",
  url: "https://linusservices.com.au",
  phone: "1300 123 456",
  email: "info@linusservices.com.au",
  address: {
    street: "123 Collins Street",
    city: "Melbourne",
    state: "VIC",
    postcode: "3000",
    country: "Australia",
  },
  serviceAreas: [
    "Melbourne",
    "Sydney",
    "Brisbane",
    "Perth",
    "Adelaide",
    "Canberra",
    "Gold Coast",
    "Hobart",
  ],
  social: {
    facebook: "https://facebook.com/linusservices",
    instagram: "https://instagram.com/linusservices",
    linkedin: "https://linkedin.com/company/linusservices",
    twitter: "https://twitter.com/linusservices",
  },
  hero: {
    headline: "Professional Cleaning Services You Can Rely On",
    subheadline:
      "Residential and commercial cleaning solutions across Australia, tailored to your schedule and standards.",
    cta: "Request a Free Quote",
    ctaLink: "/quote",
  },
  services: [
    {
      slug: "residential-cleaning",
      title: "Residential Cleaning",
      shortDescription:
        "Keep your home spotless with our regular residential cleaning services.",
      description:
        "Our residential cleaning service ensures your home is always fresh, tidy, and welcoming. Whether you need a weekly clean or a one-off session, our trained professionals deliver consistent, high-quality results every time.",
      benefits: [
        "Customised cleaning plans",
        "Eco-friendly products available",
        "Trained and insured cleaners",
        "Flexible scheduling",
      ],
      inclusions: [
        "Dusting and wiping all surfaces",
        "Vacuuming and mopping floors",
        "Kitchen and bathroom sanitisation",
        "Bed making and tidying",
        "Rubbish removal",
      ],
      icon: "Home",
    },
    {
      slug: "commercial-cleaning",
      title: "Commercial / Office Cleaning",
      shortDescription:
        "Professional cleaning solutions for offices and commercial spaces.",
      description:
        "Maintain a clean, healthy, and productive workplace with our commercial cleaning services. We work around your business hours to minimise disruption while delivering spotless results.",
      benefits: [
        "After-hours cleaning available",
        "Tailored commercial plans",
        "OH&S compliant",
        "Regular quality inspections",
      ],
      inclusions: [
        "Desk and workstation cleaning",
        "Kitchen and breakroom sanitation",
        "Bathroom deep clean",
        "Floor vacuuming and mopping",
        "Waste and recycling management",
      ],
      icon: "Building2",
    },
    {
      slug: "end-of-lease-cleaning",
      title: "End of Lease Cleaning",
      shortDescription:
        "Get your bond back with our thorough end of lease cleaning.",
      description:
        "Moving out? Our end of lease cleaning service is designed to meet real estate standards and help you get your full bond back. We follow a comprehensive checklist to ensure every corner is covered.",
      benefits: [
        "Bond-back guarantee",
        "Real estate approved checklist",
        "Same-day service available",
        "Re-clean if required",
      ],
      inclusions: [
        "Full kitchen deep clean including oven",
        "Bathroom scrub and descaling",
        "Window sills and tracks",
        "Skirting boards and light switches",
        "Carpet steam cleaning (add-on)",
      ],
      icon: "Key",
    },
    {
      slug: "deep-cleaning",
      title: "Deep Cleaning",
      shortDescription:
        "Intensive deep cleaning for homes and businesses.",
      description:
        "Our deep cleaning service goes beyond regular cleaning to tackle built-up grime, hidden dust, and hard-to-reach areas. Perfect for seasonal refreshes or preparing your space for a special occasion.",
      benefits: [
        "Thorough top-to-bottom clean",
        "Ideal for spring cleaning",
        "Removes built-up grime",
        "Healthier living environment",
      ],
      inclusions: [
        "Behind and under furniture cleaning",
        "Inside cupboards and wardrobes",
        "Detailed kitchen appliance cleaning",
        "Wall spot cleaning",
        "Light fixture and fan cleaning",
      ],
      icon: "Sparkles",
    },
    {
      slug: "carpet-cleaning",
      title: "Carpet Cleaning",
      shortDescription:
        "Professional carpet steam cleaning and stain removal.",
      description:
        "Revitalise your carpets with our professional steam cleaning service. We remove deep-set stains, allergens, and odours to restore your carpets to their best condition.",
      benefits: [
        "Hot water extraction method",
        "Removes allergens and dust mites",
        "Fast drying times",
        "Safe for all carpet types",
      ],
      inclusions: [
        "Pre-treatment of stains",
        "Hot water extraction cleaning",
        "Deodorising treatment",
        "Furniture moving (light items)",
        "Post-clean inspection",
      ],
      icon: "Layers",
    },
    {
      slug: "window-cleaning",
      title: "Window Cleaning",
      shortDescription:
        "Crystal-clear window cleaning for homes and offices.",
      description:
        "Let the light in with our professional window cleaning service. We clean interior and exterior windows, frames, and sills to leave your glass streak-free and sparkling.",
      benefits: [
        "Streak-free finish",
        "Interior and exterior cleaning",
        "Safe methods for high windows",
        "Improves natural light",
      ],
      inclusions: [
        "Interior and exterior glass cleaning",
        "Window frame and sill wiping",
        "Fly screen cleaning",
        "Track cleaning",
        "Mirror cleaning",
      ],
      icon: "Sun",
    },
    {
      slug: "move-in-move-out-cleaning",
      title: "Move-In / Move-Out Cleaning",
      shortDescription:
        "Start fresh in your new home with our move-in cleaning service.",
      description:
        "Whether you are moving into a new home or preparing to leave, our move-in/move-out cleaning service ensures the property is thoroughly cleaned and ready for its next chapter.",
      benefits: [
        "Comprehensive cleaning checklist",
        "Flexible scheduling around your move",
        "Suitable for rentals and owned properties",
        "Add-on services available",
      ],
      inclusions: [
        "Full property clean",
        "Kitchen and bathroom sanitisation",
        "Cupboard and wardrobe interior cleaning",
        "Floor cleaning throughout",
        "Garage sweep (if applicable)",
      ],
      icon: "Truck",
    },
    {
      slug: "scheduled-cleaning",
      title: "Scheduled Cleaning",
      shortDescription:
        "Regular cleaning on a schedule that suits you.",
      description:
        "Keep your space consistently clean with our scheduled cleaning service. Choose weekly, fortnightly, or monthly visits and enjoy the peace of mind that comes with a reliably clean environment.",
      benefits: [
        "Consistent cleaning quality",
        "Same cleaner each visit",
        "Priority booking",
        "Discounted rates for regular clients",
      ],
      inclusions: [
        "All standard cleaning tasks",
        "Customised task list per visit",
        "Supply of cleaning products",
        "Regular quality checks",
        "Easy rescheduling",
      ],
      icon: "Calendar",
    },
  ],
  pricing: [
    {
      name: "Basic Home Clean",
      price: 120,
      description: "Essential cleaning for small homes and apartments.",
      features: [
        "General tidying",
        "Vacuuming and mopping",
        "Bathroom clean",
        "Kitchen wipe-down",
        "Up to 2 bedrooms",
      ],
    },
    {
      name: "Standard Home Clean",
      price: 180,
      description: "Comprehensive cleaning for medium-sized homes.",
      features: [
        "All Basic Clean inclusions",
        "Detailed kitchen clean",
        "All bathrooms sanitised",
        "Dusting throughout",
        "Up to 4 bedrooms",
      ],
      popular: true,
    },
    {
      name: "Deep Clean",
      price: 280,
      description: "Intensive cleaning for a thorough refresh.",
      features: [
        "All Standard Clean inclusions",
        "Inside cupboards and wardrobes",
        "Behind furniture cleaning",
        "Appliance detailed clean",
        "Wall spot cleaning",
      ],
    },
    {
      name: "Office Cleaning",
      price: 200,
      description: "Professional cleaning for commercial spaces.",
      features: [
        "Workstation and desk cleaning",
        "Kitchen and breakroom sanitation",
        "Bathroom deep clean",
        "Floor care",
        "Customised to your office",
      ],
    },
    {
      name: "End of Lease Clean",
      price: 350,
      description: "Thorough clean to help you get your bond back.",
      features: [
        "Full property clean",
        "Oven and rangehood detail",
        "Bathroom descaling",
        "Window sills and tracks",
        "Bond-back guarantee",
      ],
    },
  ],
  testimonials: [
    {
      name: "Sarah M.",
      location: "Melbourne, VIC",
      text: "LinusServices did an incredible job with our end of lease clean. We got our full bond back without any issues. Highly recommend!",
      rating: 5,
    },
    {
      name: "James K.",
      location: "Sydney, NSW",
      text: "We use LinusServices for our office cleaning every week. The team is always professional, thorough, and reliable. Our workspace has never looked better.",
      rating: 5,
    },
    {
      name: "Emily R.",
      location: "Brisbane, QLD",
      text: "Fantastic deep clean service. They went above and beyond, cleaning areas I did not even think to ask about. Will definitely book again.",
      rating: 5,
    },
    {
      name: "David L.",
      location: "Perth, WA",
      text: "Reliable, affordable, and always on time. LinusServices has been our go-to for regular home cleaning for over a year now.",
      rating: 5,
    },
  ],
  faq: [
    {
      question: "What areas do you service?",
      answer:
        "We currently service major metropolitan areas across Australia including Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra, Gold Coast, and Hobart. Contact us to check availability in your area.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No, our cleaners bring all necessary cleaning products and equipment. If you have specific products you would like us to use, we are happy to accommodate your preferences.",
    },
    {
      question: "Are your cleaners insured?",
      answer:
        "Yes, all our cleaners are fully insured and have undergone thorough background checks. Your home and belongings are in safe hands.",
    },
    {
      question: "How do I book a cleaning service?",
      answer:
        "You can request a free quote through our website, call us directly, or send us an email. We will get back to you within 24 hours with a customised quote.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require at least 24 hours notice for cancellations or rescheduling. Cancellations made with less than 24 hours notice may incur a cancellation fee.",
    },
    {
      question: "Do you offer a bond-back guarantee?",
      answer:
        "Yes, our end of lease cleaning service comes with a bond-back guarantee. If the property does not pass inspection, we will return to re-clean at no additional cost.",
    },
    {
      question: "Can I schedule regular cleaning visits?",
      answer:
        "Absolutely! We offer weekly, fortnightly, and monthly scheduled cleaning plans. Regular clients receive priority booking and discounted rates.",
    },
    {
      question: "What happens if something is damaged during cleaning?",
      answer:
        "While damage is extremely rare, we are fully insured to cover any accidental damage. Please report any concerns within 24 hours and we will resolve the matter promptly.",
    },
  ],
} as const;
