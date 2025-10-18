"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A luxurious hotel lobby featuring elegant architecture, rich decor, and comfortable seating under a stained glass ceiling."},
  {"id":"about-image","url":"https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Bright indoor swimming pool with luxury seating and large windows."},
  {"id":"feature-1-image","url":"https://images.pexels.com/photos/33674440/pexels-photo-33674440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A well-presented hotel breakfast tray with fresh orange juice, fruits, and pastries, ideal for travel imagery."},
  {"id":"feature-2-image","url":"https://images.pexels.com/photos/34328685/pexels-photo-34328685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"hotel spa - Photo by Kaushal Amrutiya"},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Joyful businesswoman with curly hair smiling at camera while using laptop indoors."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/4458357/pexels-photo-4458357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman working on a laptop by the poolside, enjoying a sunny day while on vacation."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/2927502/pexels-photo-2927502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful group of adults enjoying a sunny day on a boat with playful shadows."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/31365584/pexels-photo-31365584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman relaxing in a swimsuit and sunglasses in a swimming pool in São Paulo, Brazil."},
  {"id":"logo-1","url":"https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Modern hotel building exterior in Stuttgart, Germany, during daytime. Urban architecture and design."},
  {"id":"logo-2","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Marriott logo - Photo by Tom Fisk"},
  {"id":"logo-3","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hyatt logo - Photo by Tom Fisk"},
  {"id":"logo-4","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Intercontinental logo - Photo by Tom Fisk"},
  {"id":"logo-5","url":"https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Four varied autumn leaves arranged on weathered wooden planks showcasing seasonal change."},
  {"id":"logo-6","url":"https://images.pexels.com/photos/12720659/pexels-photo-12720659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Stunning overwater villa showcasing modern architecture and luxury on a tropical island."},
  {"id":"logo-7","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sheraton logo - Photo by Tom Fisk"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className={"mx-auto px-4 md:px-6 "}>
          <NavbarLayoutFloatingInline
            navItems={[{ name: "Home", id: "hero" }, { name: "About", id: "about" }, { name: "Rooms", id: "features" }, { name: "Contact", id: "contact" }]}
            brandName="HotelName"
            buttonText="Book Now"
            buttonVariant="hover-magnetic"
          />
        </div>
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24 ">
        <div className={"mx-auto px-4 md:px-6 "}>
          <HeroBillboard
            title="Welcome to Our Luxury Hotel"
            description="Experience unparalleled luxury in the heart of the city."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "hero-image")?.alt ?? "A luxurious hotel lobby featuring elegant architecture"}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24 ">
        <div className={"mx-auto px-4 md:px-6 "}>
          <TextSplitAbout
            title="About Us"
            description={["Our hotel offers the finest suites and amenities.", "Experience relaxation and sophistication."]}
          />
        </div>
      </div>

      <div id="features" data-section="features" className="scroll-mt-24 ">
        <div className={"mx-auto px-4 md:px-6 "}>
          <FeatureCardThree
            title="Our Features"
            description="Indulge in exclusive services and luxurious accommodations."
            features={[
              {
                id: "01",
                title: "Room Service",
                description: "Delicious meals delivered to your room.",
                imageSrc: assetMap.find(a => a.id === "feature-1-image")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "feature-1-image")?.alt ?? "Room service feature image"
              },
              {
                id: "02",
                title: "Spa & Wellness",
                description: "Relax and rejuvenate at our spa.",
                imageSrc: assetMap.find(a => a.id === "feature-2-image")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "feature-2-image")?.alt ?? "Spa and wellness feature image"
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonials" data-section="testimonials" className="scroll-mt-24 ">
        <div className={"mx-auto px-4 md:px-6 "}>
          <TestimonialCardTwo
            title="Customer Reviews"
            description="Hear from our satisfied guests."
            testimonials={[
              {
                id: "1",
                name: "Sarah Johnson",
                role: "CEO, TechCorp",
                testimonial: "An extraordinary stay!",
                imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "testimonial-1")?.alt ?? "Businesswoman with curly hair"
              },
              {
                id: "2",
                name: "Michael Chen",
                role: "Traveler",
                testimonial: "Amazing service and beautiful rooms.",
                imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "testimonial-2")?.alt ?? "Woman working by poolside"
              },
              {
                id: "3",
                name: "Emily Rodriguez",
                role: "Director, DesignCo",
                testimonial: "Exceeded all expectations.",
                imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "testimonial-3")?.alt ?? "Group of adults on a boat"
              },
              {
                id: "4",
                name: "David Kim",
                role: "Solo Adventurer",
                testimonial: "A truly luxurious experience.",
                imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url ?? "/public/images/placeholder.webp",
                imageAlt: assetMap.find(a => a.id === "testimonial-4")?.alt ?? "Woman relaxing in pool"
              }
            ]}
          />
        </div>
      </div>

      <div id="socialProof" data-section="socialProof" className="scroll-mt-24 ">
        <div className={"mx-auto px-4 md:px-6 "}>
          <SocialProofTwo
            title="Trusted By"
            description="Join our esteemed guests."
            logos={[
              assetMap.find(a => a.id === "logo-1")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-2")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-3")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-4")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-5")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-6")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-7")?.url ?? "/public/images/placeholder.webp"
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24 ">
        <div className={"mx-auto px-4 md:px-6 "}>
          <ContactSplit
            tag="Newsletter"
            title="Stay updated with our latest news"
            description="Subscribe to our newsletter for updates and exclusive offers."
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "about-image")?.alt ?? "Indoor swimming pool"}
            buttonText="Subscribe"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 ">
        <div className={"mx-auto px-4 md:px-6 "}>
          <FooterBase
            columns={[
              {
                title: "Hotel",
                items: [
                  { label: "About Us", href: "#about" },
                  { label: "Rooms", href: "#features" }
                ]
              },
              {
                title: "Support",
                items: [
                  { label: "Contact", href: "#contact" },
                  { label: "FAQ", href: "#faq" }
                ]
              }
            ]}
            copyrightText="© 2025 Hotel Name"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
