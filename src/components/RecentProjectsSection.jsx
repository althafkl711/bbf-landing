"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

// ─── Colour tokens ─────────────────────────────────────────────────────────────
const GREEN  = "#1E3D2F";
const CREAM  = "#FEF0D4";
const PURPLE = "#7B6DC0";
const CYAN = "#3B85B1"

// ─── Projects data ─────────────────────────────────────────────────────────────
const projects = [
    {
        id: "preveshanolsavam",
        icon: "/images/our-program/aksharam.svg",
        title: "Preveshanolsavam 2026",
        subtitle: "A New Beginning of Hope and Learning",
        paragraphs: [
            "The inauguration of Preveshanolsavam 2026 at GVHSS Palode marked the beginning of a new academic journey filled with hope, dreams, and opportunities for young learners. Organised in collaboration with Bread and Book Foundation (BBF), the programme brought together educators, community leaders, parents, and children to celebrate the transformative power of education. The event created an inspiring atmosphere where every child was welcomed into the world of learning with encouragement, care, and a renewed sense of confidence.",
            "As part of the initiative, BBF distributed complete educational kits to 56 children entering First Standard, ensuring that they begin their school life equipped with all the essentials they need. Each kit included a school bag, notebooks, stationery, lunch box, water bottle, umbrella, and other learning materials, easing the burden on families and empowering children to step into the classroom with pride and excitement. More than a distribution programme, Preveshanolsavam 2026 was a celebration of equal opportunities—reinforcing the belief that every child deserves the tools, support, and encouragement to learn, grow, and build a brighter future.",
        ],
        images: [
            { src: "/images/projects/Preveshanolsavam/preveshanolsavam-1.jpg", span: "large" },
            { src: "/images/projects/Preveshanolsavam/preveshanolsavam-2.jpg", span: "small" },
            { src: "/images/projects/Preveshanolsavam/preveshanolsavam-11.jpg", span: "small" },
        ],
        collage: "/images/projects/Preveshanolsavam/preveshanolsavam-10.jpg",
        bg: GREEN,
        textColor: "#FFFFFF",
        descColor: "rgba(255,255,255,0.80)",
        accentBar: "#FE8F00",
        flip: false,
    },
    {
        id: "aksharam",
        icon: "/images/our-program/aksharam.svg",
        title: "Aksharam Project 2026",
        subtitle: "Where Every School Bag Carries a Dream",
        paragraphs: [
            "For many children from tribal communities, the start of a new academic year often comes with uncertainty—not because of a lack of ambition, but because essential school supplies remain beyond their family's reach. Through Aksharam 2026, Bread and Book Foundation transformed this reality by ensuring that every child could walk into the classroom with confidence, dignity, and hope. Conducted on 24 May 2026 at Vithura Grama Panchayat, Thiruvananthapuram, Kerala and inaugurated by MLA G. Stephen, the initiative provided complete educational kits containing school bags, notebooks, stationery, umbrellas, tiffin boxes, and all the essentials needed for a successful academic year.",
            "What made Aksharam 2026 truly special was not just the distribution of educational materials, but the joy and optimism it brought to hundreds of families. With more than 400 participants, including over 200 parents and their children, the event became a powerful reminder that education has the ability to change lives and create opportunities where none seemed possible. The smiles on the faces of children receiving their kits reflected more than happiness—they reflected renewed confidence, encouragement, and the belief that their dreams matter. Through Aksharam 2026, BBF India reaffirmed its commitment to ensuring that no child's future is limited by poverty.",
        ],
        images: [
            { src: "/images/projects/Aksharam-2026/aksharam-1.jpg",  span: "large" },
            { src: "/images/projects/Aksharam-2026/aksharam-12.jpg",  span: "small" },
            { src: "/images/projects/Aksharam-2026/aksharam-14.jpg",  span: "small" },
        ],
        collage: "/images/projects/Aksharam-2026/aksharam-16.jpg",
        bg: CREAM,
        textColor: "#1A1A1A",
        descColor: "#555555",
        accentBar: "#FE8F00",
        flip: true,
    },
    {
        id: "veyil-pookkal",
        icon: "/images/our-program/learning-centre.svg",
        title: "Veyil Pookkal",
        subtitle: "Preserving Culture, Inspiring Futures",
        paragraphs: [
            "Veyil Pookkal was a vibrant summer camp initiative organised by Bread and Book Foundation in collaboration with Suhrut Balabhavan, dedicated to empowering tribal children through learning, creativity, and cultural enrichment. The camp was inaugurated by Padma Shri Lakshmikutty Amma, whose presence and inspiring words added great significance to the programme. Bringing together children from various tribal communities, the camp provided a joyful and nurturing environment where they could learn, explore their talents, build friendships, and create lasting memories through educational, recreational, and cultural activities.",
            "One of the most meaningful aspects of Veyil Pookkal was its commitment to preserving and promoting the rich cultural heritage of tribal communities. Children were given the opportunity to learn, practice, and celebrate traditional art forms, folk performances, indigenous knowledge, and cultural customs passed down through generations. By reconnecting young minds with their roots, the camp fostered a strong sense of identity, pride, and belonging. More than a summer camp, Veyil Pookkal became a celebration of culture, resilience, and hope—empowering children to embrace their heritage while confidently stepping towards a brighter future.",
        ],
        images: [
            { src: "/images/projects/Veyil-pookal/veyil-pookkal-17.jpg",  span: "large" },
            { src: "/images/projects/Veyil-pookal/veyil-pookkal-15.jpg",  span: "small" },
            { src: "/images/projects/Veyil-pookal/veyil-pookkal-2.jpg",  span: "small" },
        ],
        collage: "/images/projects/Veyil-pookal/veyil-pookkal-1.jpg",
        bg: PURPLE,
        textColor: "#FFFFFF",
        descColor: "rgba(255,255,255,0.80)",
        accentBar: "#FE8F00",
        flip: false,
    },
    {
        id: "hunger-to-hope",
        icon: "/images/our-program/Zero-hunger.svg",
        title: "From Hunger to Hope",
        subtitle: "Meal Distribution at Hope Community Village",
        paragraphs: [
            "Bread and Book Foundation's Meal Distribution Program at Hope Community Village is a meaningful initiative dedicated to ensuring that children have access to nutritious meals that support their health, growth, and overall well-being. We believe that no child should have to struggle with hunger while pursuing education and building a brighter future. Through this project, BBF sponsors daily meals for the children of Hope Community Village, helping create a stable and nurturing environment where they can learn, grow, and thrive.",
            "The impact of this initiative extends far beyond the meals served. Every plate of food represents dignity, compassion, and a commitment to creating lasting change in the lives of vulnerable children. Through the unwavering support of donors and well-wishers, Bread and Book Foundation has already provided more than 16,200 nutritious meals to the children of Hope Community Village, ensuring consistent nourishment and care for those who need it most.",
        ],
        images: [
            { src: "/images/projects/Midday-meal-hope/hunger-5.jpg", span: "large" },
            { src: "/images/projects/Midday-meal-hope/hunger-13.jpg", span: "small" },
            { src: "/images/projects/Midday-meal-hope/hunger-11.jpg", span: "small" },
        ],
        collage: "/images/projects/Midday-meal-hope/hunger-12.jpg",
        bg: CYAN,
        textColor: "#FFFFFF",
        descColor: "rgba(255,255,255,0.80)",
        accentBar: "#FE8F00",
        flip: true,
    },
    {
        id: "learning-centre",
        icon: "/images/our-program/learning-centre.svg",
        title: "BBF Learning Centre, Bhopal",
        subtitle: "Empowering Every Child with the Right to Learn, Dream, and Succeed",
        paragraphs: [
            "For countless children living on the streets and in vulnerable communities across Bhopal, education often remains a distant dream overshadowed by poverty, child labour, and daily survival. To change this reality, Bread and Book Foundation established the BBF Learning Centre, Bhopal—a safe and nurturing space where children from marginalised backgrounds, including ragpickers and child street workers, are given an opportunity to learn, grow, and rediscover their childhood. The centre serves as a bridge between exclusion and opportunity, ensuring that no child is denied the chance to build a better future simply because of the circumstances into which they were born.",
            "At the BBF Learning Centre, children receive foundational education, literacy support, life-skills training, and individual attention tailored to their learning needs. Beyond academics, our team actively engages with families and communities, creating awareness about the importance of education, child protection, health, and personal development. Through continuous guidance and support, out-of-school children are identified, prepared academically, and successfully mainstreamed into formal schools. Every child who walks through our doors carries a story of struggle, but through education, encouragement, and compassion, those stories are being rewritten into stories of hope, dignity, and achievement.",
        ],
        images: [
            { src: "/images/projects/Bhopal-learning-centre/bhopal-1.jpg", span: "large" },
            { src: "/images/projects/Bhopal-learning-centre/bhopal-2.jpg", span: "small" },
            { src: "/images/projects/Bhopal-learning-centre/bhopal-3.jpg", span: "small" },
        ],
        collage: "/images/projects/Bhopal-learning-centre/bhopal-4.jpg",
        bg: CREAM,
        textColor: "#1A1A1A",
        descColor: "#555555",
        accentBar: "#FE8F00",
        flip: false,
    },
];

// ─── Image mosaic (1 large + 2 small stacked) ─────────────────────────────────
function ImageMosaic({ images, collage }) {
    const [main, ...rest] = images;
    return (
        <div className="flex gap-3 h-full">
            {/* Large featured image */}
            <div className="relative flex-1 rounded-xl overflow-hidden min-h-[340px]">
                <Image
                    src={main.src}
                    alt="project image"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                />
            </div>

            {/* Stacked smaller images */}
            <div className="flex flex-col gap-3 w-[42%]">
                {rest.map((img, i) => (
                    <div
                        key={i}
                        className="relative flex-1 rounded-xl overflow-hidden"
                    >
                        <Image
                            src={img.src}
                            alt="project image"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 20vw"
                        />
                    </div>
                ))}

                {/* Collage strip as third smaller panel */}
                <div className="relative flex-1 rounded-xl overflow-hidden">
                    <Image
                        src={collage}
                        alt="collage"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 20vw"
                    />
                </div>
            </div>
        </div>
    );
}

// ─── Project card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
    const isLight = project.bg === CREAM;
    const isFlipped = project.flip;

    return (
        <ScrollReveal delay={0.1}>
            <div
                id={project.id}
                className="rounded-3xl overflow-hidden scroll-mt-28"
                style={{ backgroundColor: project.bg }}
            >
                <div className={`flex flex-col lg:flex-row ${isFlipped ? "lg:flex-row-reverse" : ""} min-h-[460px]`}>

                    {/* ── Text side ── */}
                    <div className="flex flex-col justify-center px-8 md:px-12 py-12 lg:w-[48%] shrink-0">
                        {/* Icon */}
                        <div className="w-10 h-10 relative mb-5">
                            <Image
                                src={project.icon}
                                alt="icon"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Title block */}
                        <div className="mb-5">
                            <h3
                                className="text-2xl md:text-3xl font-extrabold leading-tight mb-1"
                                style={{ color: project.textColor }}
                            >
                                {project.title}
                            </h3>
                            <p
                                className="text-sm md:text-base font-medium italic"
                                style={{ color: project.accentBar }}
                            >
                                {project.subtitle}
                            </p>
                            <div
                                className="mt-4 h-[3px] w-12 rounded-full"
                                style={{ backgroundColor: project.accentBar }}
                            />
                        </div>

                        {/* Paragraphs */}
                        <div className="space-y-4">
                            {project.paragraphs.map((para, i) => (
                                <p
                                    key={i}
                                    className="text-sm md:text-[15px] leading-relaxed"
                                    style={{ color: project.descColor }}
                                >
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* ── Image mosaic side ── */}
                    <div className={`flex-1 p-5 lg:py-6 ${isFlipped ? "lg:pr-6 lg:pl-6" : "lg:pl-6 lg:pr-6"}`}>
                        <div className="h-full min-h-[300px] lg:min-h-0">
                            <ImageMosaic images={project.images} collage={project.collage} />
                        </div>
                    </div>

                </div>
            </div>
        </ScrollReveal>
    );
}

// ─── Section wrapper ───────────────────────────────────────────────────────────
export default function RecentProjectsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-3">
                            Our Recent Project
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                            Stories from the Ground
                        </h2>
                        <div className="w-12 h-[3px] bg-primary mx-auto rounded-full" />
                    </div>
                </ScrollReveal>

                {/* Cards */}
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}
