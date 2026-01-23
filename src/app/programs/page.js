import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ImageSlider from "@/components/ImageSlider";

export const metadata = {
    title: "Our Programs | Bread and Book Foundation",
    description: "Explore our initiatives in education, nutrition, and community development.",
};

const programsData = [
    {
        title: "Education and Empowerment",
        content: [
            "At Bread and Book Foundation (BBF India), education opens the door to dignity and opportunity. Through Project Vidya and Project Hope, we work to ensure that children from underserved communities are not denied learning due to poverty or lack of resources. These initiatives are designed to create supportive learning environments where children are encouraged to grow with confidence and purpose.",
            "We provide essential educational support such as school supplies, uniforms, textbooks, and access to basic digital learning tools. Our digital literacy initiatives help children—especially those in rural and marginalized areas—develop foundational skills needed to thrive in today’s world.",
            "BBF places strong emphasis on educating and empowering girls by promoting equal access to learning and creating safe spaces that encourage continued schooling. Alongside education, we support families through skill-based livelihood initiatives, helping build stability at home so children can remain in school. Through Project Vidya and Project Hope, education becomes a powerful foundation for lasting change for children, families, and communities."
        ],
        images: [
            "/images/ps-1.png",
            "/images/s1.jpg",
            "/images/ps1-3.jpeg",
            "/images/ps1-4.jpg"
        ],
        bgColor: "bg-[#F9F9F9]"
    },
    {
        title: "Basic needs and Immediate Relief",
        content: [
            "At Bread and Book Foundation (BBF India), we believe that dignity begins with meeting basic human needs. Through our Sarva Aahaar project, we provide nutritious meals to children and families who face food insecurity, ensuring no one goes hungry during difficult times. For families living on the margins, everyday life is shaped by uncertainty—where access to food, health, warmth, and hygiene cannot be taken for granted. BBF steps in during these moments of vulnerability to provide timely support that helps children and families regain stability and security.",
            "Our approach to immediate relief is rooted in compassion and responsiveness. Whether addressing ongoing hardships or sudden crises, we work closely with communities to ensure essential needs are met in a respectful and practical manner. By supporting households during periods of food insecurity, health challenges, seasonal extremes, or emergency situations, we help reduce the pressures that often push children out of school and families deeper into poverty.",
            "Beyond short-term assistance, BBF’s relief efforts aim to restore a sense of normalcy and resilience. When families are supported through difficult times, children are better able to return to learning, caregivers can focus on rebuilding their livelihoods, and communities can begin to recover with confidence. Through this integrated approach, BBF ensures that immediate relief is not just a response to crisis, but a foundation for long-term well-being and opportunity."
        ],
        images: [
            "/images/ps2-1.jpeg",
            "/images/ps2-2.jpeg",
            "/images/ps2-3.jpeg",
            "/images/ps2-4.jpeg"
        ],
        bgColor: "bg-white"
    },
    {
        title: "Health and Special Care",
        content: [
            "Health quietly shapes every child’s ability to learn, grow, and dream. Even minor, untreated illnesses can disrupt schooling, weaken confidence, and place families under immense strain. At Bread and Book Foundation (BBF India), we recognize that educational progress is deeply connected to physical well-being, especially in rural and underserved communities where access to healthcare remains limited.",
            "BBF’s health-related efforts focus on improving access to basic medical support through community-based initiatives. With the support of doctors and dedicated volunteers, we have conducted small-scale health awareness programs and provided essential medicinal support in rural villages. These efforts help families address common health concerns early, reducing preventable complications and easing the burden on caregivers.",
            "As part of our evolving commitment to child well-being, BBF is working toward structured medical check-up and medicine distribution campaigns in rural areas. These initiatives aim to promote early detection, basic treatment, and health awareness—ensuring children are healthier, more consistent in school, and better equipped to thrive.",
            "We also place importance on dignity and care for children facing additional vulnerabilities. Through health education, community engagement, and supportive interventions, BBF seeks to create safer environments where children can grow with confidence and families feel supported."
        ],
        images: [
            "/images/ps3-1.jpeg",
            "/images/ps3-2.jpeg",
            "/images/ps3-3.jpeg",
            "/images/ps3-4.jpeg"
        ],
        bgColor: "bg-[#F9F9F9]"
    },
    {
        title: "Large-Scale Solutions",
        content: [
            "Sustainable change requires long-term, community-led solutions. At Bread and Book Foundation (BBF India), we envision impact that goes beyond individual interventions—toward transforming entire communities through inclusive and practical development.",
            "As part of this vision, BBF is working toward a future Adopt-a-Village Initiative, designed to support villages holistically by addressing essential needs such as shelter, access to clean water, clothing, nutrition, education, and livelihoods. This initiative aims to be built in close partnership with local communities, where residents actively participate in identifying needs, planning solutions, and sustaining progress. By grounding development in local knowledge and ownership, we hope to create models that are resilient and self-sustaining.",
            "Looking ahead, BBF also seeks to strengthen its impact through collaboration and advocacy—working alongside government bodies, partner organizations, and supporters to scale inclusive approaches to education, health, and basic living conditions. Through these combined efforts, BBF aims to move from relief to transformation, creating pathways for villages not just to survive, but to thrive over time."
        ],
        images: [
            "/images/ps4-1.jpeg",
            "/images/ps4-2.jpeg",
            "/images/ps4-3.jpeg",
            "/images/ps4-2.jpeg"
        ],
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
                                        <ImageSlider images={program.images} interval={3000} />
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
