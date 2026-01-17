import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

export const metadata = {
    title: "Our Programs | Bread and Book Foundation",
    description: "Explore our initiatives in education, nutrition, and community development.",
};

const programsData = [
    {
        title: "Education and Empowerment",
        content: [
            "Education is the cornerstone of liberation. For a child growing up in poverty, a classroom is more than a room with desks—it’s a sanctuary of possibility. When girls and boys step into our learning centers, they step into a world where their potential is nurtured, not stifled. Imagine a young girl in a rural village, her hands gripping a tablet for the first time, her eyes widening as she explores a digital lesson on renewable energy. This isn’t just about technology; it’s about dismantling barriers.",
            "Our focus on girls in STEM is revolutionary. In societies where girls are often sidelined, we create spaces where they can excel in science, math, and coding. These girls don’t just solve equations; they solve problems—designing clean water systems for their villages or developing apps to track crop yields. When a girl graduates from our STEM scholarship program, she becomes a torchbearer for her community, proving that brilliance knows no gender.",
            "Empowerment also thrives beyond textbooks. For mothers trapped in cycles of poverty, our vocational training programs are lifelines. A woman learning tailoring or nursing doesn’t just earn an income—she reshapes her family’s destiny. Her children no longer skip school to work odd jobs; instead, they sit beside peers, dreaming of careers as teachers, engineers, or artists. Education, in this way, becomes a family legacy, passed down like a cherished heirloom."
        ],
        image: "/images/program-education.png",
        bgColor: "bg-[#F9F9F9]" // Added background for the first section
    },
    {
        title: "Basic needs and Immediate Relief",
        content: [
            "A hungry child cannot focus on fractions. A sick child cannot memorize poems. This truth drives our commitment to meeting basic needs first. In slums and remote villages, we set up community kitchens where the aroma of freshly cooked meals draws children to school. These meals do more than fill stomachs—they fuel curiosity. A boy who once scavenged for scraps now solves math puzzles; a girl who fainted from hunger now leads classroom debates.",
            "Hygiene is equally vital. In regions where clean water is scarce, our hygiene kits—filled with soap, menstrual products, and sanitizers—become shields against disease. When girls no longer miss school due to periods, classrooms grow louder with their voices. During disasters, our rapid-response teams deliver emergency supplies, but we also teach resilience: rainwater harvesting techniques, drought-resistant farming, and disaster preparedness. These lessons transform victims into survivors, ensuring communities don’t just recover—they thrive."
        ],
        image: "/images/program-relief.png",
        bgColor: "bg-white"
    },
    {
        title: "Health and Special Care",
        content: [
            "Health is the silent architect of a child’s future. A malnourished body struggles to learn; an untreated illness can derail dreams. Our mobile health clinics traverse dusty roads to reach children in forgotten corners, offering vaccinations, nutrition screenings, and lifesaving treatments. For a mother cradling a feverish child, these clinics are miracles—places where fear dissolves into relief.",
            "Menstrual health is a battleground for dignity. In many communities, girls drop out of school when they menstruate, shrouded in shame. We combat this with education and reusable sanitary pads, turning whispered struggles into conversations about strength. A 14-year-old who once hid at home now stands tall in science class, her confidence unshaken by stigma.",
            "For children with disabilities, our care is tailored and tender. Autistic children like Arjun, who once lived in silence, find their voices through speech therapy. Orphans in our group homes don’t just receive shelter—they find family. Caregivers teach them to cook, laugh, and trust again, proving that love can heal even the deepest wounds."
        ],
        image: "/images/program-health.png",
        bgColor: "bg-[#F9F9F9]"
    },
    {
        title: "Large-Scale Solutions",
        content: [
            "True change demands systemic action. Our Adopt-a-Village Initiative is a tapestry of transformation. In one village, barren land now blooms with community farms. A school stands where there was once rubble, its walls echoing with children reciting alphabets. Solar panels power evening study sessions, and women lead micro-enterprises weaving textiles. This isn’t charity—it’s partnership. Villagers co-design every project, ensuring solutions are rooted in their wisdom.",
            "Policy advocacy amplifies these efforts. We lobby governments to fund inclusive education and healthcare, turning grassroots successes into national blueprints. Collaborations with global NGOs bring innovations like AI-driven tutoring to remote schools, proving that progress knows no borders."
        ],
        image: "/images/program-solutions.png",
        bgColor: "bg-white"
    }
];

export default function Programs() {
    return (
        <div className="bg-background min-h-screen mt-[-80px]">
            {/* Hero Section */}
            <PageHero
                title="Our Programs"
                subtitle="Transforming lives through holistic and sustainable interventions."
            />

            {/* Programs List */}
            <div className="">
                {programsData.map((program, index) => (
                    <section key={index} className={`py-20 ${program.bgColor}`}>
                        <div className="container mx-auto px-6">
                            <ScrollReveal>
                                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                                    {/* Image Side */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                                            <Image
                                                src={program.image}
                                                alt={program.title}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Overlay for depth */}
                                            <div className="absolute inset-0 bg-black/10 ring-1 ring-black/5 rounded-2xl"></div>
                                        </div>
                                    </div>

                                    {/* Text Side */}
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <div>
                                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                                                {program.title}
                                            </h2>
                                            <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                                        </div>
                                        <div className="space-y-4">
                                            {program.content.map((paragraph, pIndex) => (
                                                <p key={pIndex} className="text-lg text-gray-700 leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>
                ))}
            </div>


            {/* CTA */}
            <section className="py-20 bg-accent/10">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold mb-6">Want to get involved?</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join us in making a difference. Whether you want to volunteer, partner, or advocate, there is a place for you here.
                        </p>
                        <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-accent transition-all inline-block">
                            Contact Us
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
