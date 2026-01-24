import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

export const metadata = {
    title: "Gallery | Bread and Book Foundation",
    description: "Explore our journey through images - witness the impact we're making in communities across India.",
};

export default function Gallery() {
    // All images from public/images directory
    const galleryImages = [
        { src: "/images/slide-one.jpg", alt: "Community outreach program" },
        { src: "/images/slide-two.jpg", alt: "Educational support initiative" },
        { src: "/images/slide-three.jpg", alt: "Children receiving meals" },
        { src: "/images/slide-four.jpg", alt: "Learning and development" },
        { src: "/images/slide-five.jpg", alt: "Community engagement" },
        { src: "/images/hero-education.png", alt: "Education program" },
        { src: "/images/hero-community.png", alt: "Community development" },
        { src: "/images/hero.png", alt: "Foundation activities" },
        { src: "/images/program-education.png", alt: "Education initiative" },
        { src: "/images/program-health.png", alt: "Health program" },
        { src: "/images/program-relief.png", alt: "Relief efforts" },
        { src: "/images/program-solutions.png", alt: "Community solutions" },
        { src: "/images/s1.jpg", alt: "Field work" },
        { src: "/images/s2.jpg", alt: "Community service" },
        { src: "/images/s3.jpg", alt: "Volunteer activities" },
        { src: "/images/s4.jpg", alt: "Outreach program" },
        { src: "/images/mission.png", alt: "Our mission in action" },
        { src: "/images/team.png", alt: "Our dedicated team" },
        { src: "/images/waw-2.png", alt: "Working with communities" },
        { src: "/images/ps1-3.jpeg", alt: "Program snapshot" },
        { src: "/images/ps1-4.jpg", alt: "Community impact" },
        { src: "/images/ps2-1.jpeg", alt: "Educational support" },
        { src: "/images/ps2-2.jpeg", alt: "Child welfare" },
        { src: "/images/ps2-3.jpeg", alt: "Learning activities" },
        { src: "/images/ps2-4.jpeg", alt: "Community engagement" },
        { src: "/images/ps3-1.jpeg", alt: "Field activities" },
        { src: "/images/ps3-2.jpeg", alt: "Support programs" },
        { src: "/images/ps3-3.jpeg", alt: "Community work" },
        { src: "/images/ps3-4.jpeg", alt: "Outreach efforts" },
        { src: "/images/ps4-1.jpeg", alt: "Program implementation" },
        { src: "/images/ps4-2.jpeg", alt: "Community service" },
        { src: "/images/ps4-3.jpeg", alt: "Support initiatives" },
        { src: "/images/q2.png", alt: "Foundation activities" },
        { src: "/images/q5.JPG", alt: "Community programs" },
        { src: "/images/vs1.JPG", alt: "Volunteer service" },
        { src: "/images/sw3.jpeg", alt: "Social work" },
        { src: "/images/metrics-12.png", alt: "Impact metrics" },
    ];

    return (
        <div className="bg-background min-h-screen mt-[-80px]">
            {/* Hero Section */}
            <PageHero
                title="Gallery"
                subtitle="Witness the impact we're making in communities across India"
            />

            {/* Gallery Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6">
                    {/* Masonry Grid Gallery */}
                    <ScrollReveal>
                        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                            {galleryImages.map((image, index) => (
                                <ScrollReveal key={index} delay={index * 0.05}>
                                    <div className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white">
                                        <div className="relative aspect-auto w-full">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={800}
                                                height={600}
                                                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                <p className="text-white text-sm font-medium">
                                                    {image.alt}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
