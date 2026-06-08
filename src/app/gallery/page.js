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
        // Preveshanolsavam 2026
        { src: "/images/projects/Preveshanolsavam/preveshanolsavam-1.jpg", alt: "Preveshanolsavam 2026 - Distribution Drive" },
        { src: "/images/projects/Preveshanolsavam/preveshanolsavam-2.jpg", alt: "Preveshanolsavam 2026 - Educational Kits" },
        { src: "/images/projects/Preveshanolsavam/preveshanolsavam-3.jpg", alt: "Preveshanolsavam 2026 - Welcoming Students" },
        { src: "/images/projects/Preveshanolsavam/preveshanolsavam-4.jpg", alt: "Preveshanolsavam 2026 - Community Support" },
        { src: "/images/projects/Preveshanolsavam/preveshanolsavam-5.jpg", alt: "Preveshanolsavam 2026 - Learning Materials" },
        { src: "/images/projects/Preveshanolsavam/preveshanolsavam-6.jpg", alt: "Preveshanolsavam 2026 - Happy Faces" },
        { src: "/images/projects/Preveshanolsavam/preveshanolsavam-7.jpg", alt: "Preveshanolsavam 2026 - School Event" },
        { src: "/images/projects/Preveshanolsavam/preveshanolsavam-8.jpg", alt: "Preveshanolsavam 2026 - Support Program" },

        // Aksharam Project 2026
        { src: "/images/projects/Aksharam-2026/aksharam-1.jpg", alt: "Aksharam Project 2026 - Hope and Learning" },
        { src: "/images/projects/Aksharam-2026/aksharam-2.jpg", alt: "Aksharam Project 2026 - Distribution Event" },
        { src: "/images/projects/Aksharam-2026/aksharam-3.jpg", alt: "Aksharam Project 2026 - Happy Kids" },
        { src: "/images/projects/Aksharam-2026/aksharam-4.jpg", alt: "Aksharam Project 2026 - Community Support" },
        { src: "/images/projects/Aksharam-2026/aksharam-5.jpg", alt: "Aksharam Project 2026 - School Kits" },
        { src: "/images/projects/Aksharam-2026/aksharam-6.jpg", alt: "Aksharam Project 2026 - Smiles" },
        { src: "/images/projects/Aksharam-2026/aksharam-7.jpg", alt: "Aksharam Project 2026 - Educational Support" },
        { src: "/images/projects/Aksharam-2026/aksharam-8.jpg", alt: "Aksharam Project 2026 - School Bags" },
        { src: "/images/projects/Aksharam-2026/aksharam-9.jpg", alt: "Aksharam Project 2026 - Tribal Child Support" },
        { src: "/images/projects/Aksharam-2026/aksharam-10.jpg", alt: "Aksharam Project 2026 - Inauguration Ceremony" },
        { src: "/images/projects/Aksharam-2026/aksharam-11.jpg", alt: "Aksharam Project 2026 - Dignity and Care" },
        { src: "/images/projects/Aksharam-2026/aksharam-12.jpg", alt: "Aksharam Project 2026 - Distribution Drive" },
        { src: "/images/projects/Aksharam-2026/aksharam-13.jpg", alt: "Aksharam Project 2026 - Empowering Kids" },
        { src: "/images/projects/Aksharam-2026/aksharam-14.jpg", alt: "Aksharam Project 2026 - Event Highlights" },
        { src: "/images/projects/Aksharam-2026/aksharam-15.jpg", alt: "Aksharam Project 2026 - Brighter Future" },

        // Veyil Pookkal
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-1.jpg", alt: "Veyil Pookkal - Tribal Summer Camp" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-2.jpg", alt: "Veyil Pookkal - Art and Culture" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-3.jpg", alt: "Veyil Pookkal - Summer Activities" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-4.jpg", alt: "Veyil Pookkal - Creative Learning" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-5.jpg", alt: "Veyil Pookkal - Fun & Games" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-6.jpg", alt: "Veyil Pookkal - Traditional Performance" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-7.jpg", alt: "Veyil Pookkal - Group Photo" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-8.jpg", alt: "Veyil Pookkal - Camp Activities" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-9.jpg", alt: "Veyil Pookkal - Tribal Kids Care" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-10.jpg", alt: "Veyil Pookkal - Summer Camp Fun" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-11.jpg", alt: "Veyil Pookkal - Empowering Youth" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-12.jpg", alt: "Veyil Pookkal - Inspiring Minds" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-13.jpg", alt: "Veyil Pookkal - Sharing Smiles" },
        { src: "/images/projects/Veyil-pookal/veyil-pookkal-14.jpg", alt: "Veyil Pookkal - Educational Activities" },

        // From Hunger to Hope
        { src: "/images/projects/Midday-meal-hope/hunger-2.jpg", alt: "From Hunger to Hope - Nutritious Food" },
        { src: "/images/projects/Midday-meal-hope/hunger-3.jpg", alt: "From Hunger to Hope - Feeding Children" },
        { src: "/images/projects/Midday-meal-hope/hunger-4.jpg", alt: "From Hunger to Hope - Community Village" },
        { src: "/images/projects/Midday-meal-hope/hunger-5.jpg", alt: "From Hunger to Hope - Serving Meals" },
        { src: "/images/projects/Midday-meal-hope/hunger-6.jpg", alt: "From Hunger to Hope - Hope Village Care" },
        { src: "/images/projects/Midday-meal-hope/hunger-7.jpg", alt: "From Hunger to Hope - Group Lunch" },
        { src: "/images/projects/Midday-meal-hope/hunger-8.jpg", alt: "From Hunger to Hope - Healthy Diet" },
        { src: "/images/projects/Midday-meal-hope/hunger-9.jpg", alt: "From Hunger to Hope - Daily Meals" },

        // BBF Learning Centre, Bhopal
        { src: "/images/projects/Bhopal-learning-centre/bhopal-1.jpg", alt: "BBF Learning Centre Bhopal - Class Session" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-2.jpg", alt: "BBF Learning Centre Bhopal - Children Learning" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-3.jpg", alt: "BBF Learning Centre Bhopal - Educational Activity" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-4.jpg", alt: "BBF Learning Centre Bhopal - Study Group" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-5.jpg", alt: "BBF Learning Centre Bhopal - Classroom Fun" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-6.jpg", alt: "BBF Learning Centre Bhopal - Support Drive" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-7.jpg", alt: "BBF Learning Centre Bhopal - Child Education" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-8.jpg", alt: "BBF Learning Centre Bhopal - Brighter Futures" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-9.jpg", alt: "BBF Learning Centre Bhopal - Learning Fun" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-10.jpg", alt: "BBF Learning Centre Bhopal - Student Smiles" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-11.jpg", alt: "BBF Learning Centre Bhopal - Interactive Classes" },
        { src: "/images/projects/Bhopal-learning-centre/bhopal-12.jpg", alt: "BBF Learning Centre Bhopal - Hope and Opportunity" },

        { src: "/images/s1.jpg", alt: "Field work" },
        { src: "/images/s4.jpg", alt: "Outreach program" },
        

        // New Gallery Additions
        { src: "/images/gallery/44ef62c1-3744-4e02-bbf4-ea0474e4621b.jpg", alt: "Community impact" },
        { src: "/images/gallery/46fe493a-0fca-4fbe-bc41-d0e3c61b64ef.JPG", alt: "Field activities" },
        { src: "/images/gallery/51c8442f-b5f9-435b-a6a7-2f3551ee3339.jpg", alt: "Education support" },
        { src: "/images/gallery/8bc6b7a5-6ba3-4880-8cfd-28f7ae20f43c.JPG", alt: "Healthcare camp" },
        { src: "/images/gallery/IMG_1506.JPEG", alt: "Providing aid" },
        { src: "/images/gallery/IMG_1524.JPEG", alt: "Community gathering" },
        { src: "/images/gallery/IMG_1536.JPEG", alt: "Children learning" },
        { src: "/images/gallery/IMG_1540.JPEG", alt: "School distribution" },
        { src: "/images/gallery/IMG_1623.JPEG", alt: "Smiles of hope" },
        { src: "/images/gallery/IMG_20250218_120905248.JPEG", alt: "Volunteer team" },
        { src: "/images/gallery/IMG_20250218_121053477.JPEG", alt: "Field visit" },
        { src: "/images/gallery/IMG_20250218_121203584.JPEG", alt: "Making a difference" },
        { src: "/images/gallery/IMG_20250218_121633090.JPEG", alt: "Community support" },
        { src: "/images/gallery/IMG_20250218_121639252.JPEG", alt: "Helping hands" },
        { src: "/images/gallery/IMG_2964.JPG", alt: "Joyful moments" },
        { src: "/images/gallery/IMG_2966.JPG", alt: "Empowering youth" },
        { src: "/images/gallery/IMG_3309.PNG", alt: "Foundation event" },
        { src: "/images/gallery/IMG_3311.PNG", alt: "Social initiative" },
        { src: "/images/gallery/IMG_3312.PNG", alt: "Building futures" },
        { src: "/images/gallery/sog2.jpeg", alt: "Rural outreach" },
        { src: "/images/gallery/sog4.jpeg", alt: "Education first" },
        { src: "/images/gallery/sog3.jpeg", alt: "Bright futures" },
        { src: "/images/gallery/IMG_3599.PNG", alt: "Community care" },
        { src: "/images/gallery/IMG_3724.JPEG", alt: "Distribution drive" },
        { src: "/images/gallery/IMG_3725.JPG", alt: "Happy faces" },
        { src: "/images/gallery/IMG_3910.jpeg", alt: "Field work" },
        { src: "/images/gallery/IMG_3914.jpeg", alt: "Together we can" },
        { src: "/images/gallery/IMG_3917.jpeg", alt: "Support system" },
        { src: "/images/gallery/IMG_3920.jpeg", alt: "Caring for all" },
        { src: "/images/gallery/IMG_3927.jpeg", alt: "Impact story" },
        { src: "/images/gallery/IMG_3959.jpeg", alt: "Ground level work" },
        { src: "/images/gallery/IMG_3972.jpeg", alt: "Volunteer spirit" },
        { src: "/images/gallery/IMG_6057.JPG", alt: "Event highlights" },
        { src: "/images/gallery/IMG_6059.jpg", alt: "Sharing joy" },
        { src: "/images/gallery/IMG_6063.JPG", alt: "Community bonding" },
        { src: "/images/gallery/IMG_7885.JPG", alt: "Special moments" },
        { src: "/images/gallery/IMG_7955.JPG", alt: "Team in action" },
        { src: "/images/gallery/IMG_7965.JPG", alt: "Dedicated service" },
        { src: "/images/gallery/IMG_7966.JPG", alt: "Hope and care" },
        { src: "/images/gallery/IMG_7971.JPG", alt: "Changing lives" },
        { src: "/images/gallery/IMG_7974.JPG", alt: "Better tomorrow" },
        { src: "/images/gallery/IMG_7981.JPG", alt: "Smiles all around" },
        { src: "/images/gallery/IMG_7984.JPG", alt: "Education for all" },
        { src: "/images/gallery/IMG_8021.JPG", alt: "Brighter days" },
        { src: "/images/gallery/IMG_9424.jpg", alt: "Local engagement" },
        { src: "/images/gallery/IMG_9427.jpg", alt: "Supportive community" },
        { src: "/images/gallery/IMG_9430.jpg", alt: "Meaningful work" },
        { src: "/images/gallery/IMG_9492.JPG", alt: "Gratitude" },
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
