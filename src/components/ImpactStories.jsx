"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const stories = [
    {
        id: "story-1",
        title: "For the First Time, My Child Holds a Book",
        description: `In the Hinotiya settlement of Bhopal, education was never part of life. For generations, no child from the Fakir community had ever gone to school.

Faizan was one of those children.

His mother leaves home every day before sunrise to collect scrap, carrying heavy sacks on her head. When she returned in the afternoon, Faizan would still be waiting — hungry, restless, and unnoticed by the world.

When Bread and Book Foundation began its learning centre in the community, Faizan was hesitant. He had never held a pencil before.

Slowly, things changed.

Today, Faizan can write his name, read simple words, and proudly carries his school bag. With BBF’s support, he was enrolled in a formal school becoming one of the first children in his community to step into a classroom.

His mother says quietly,

“I never went to school. But now my son will.”

For Faizan, education is not just learning it is the beginning of a future his family never imagined.`,
        image: "/images/bopal-c.jpeg",
    },
    {
        id: "story-2",
        title: "Hope Reached Srinagar Rural Colony",
        description: `In Srinagar Rural Colony, daily life is a constant struggle. Most families survive on irregular daily-wage work, and when work is unavailable, hunger quietly enters their homes.

Children often miss school — not because they lack interest, but because their families cannot afford notebooks, uniforms, or even proper meals. Many children spend their days helping at home or accompanying their parents to work sites.

When Bread and Book Foundation reached Srinagar Rural Colony, the team found children eager to learn but lacking even the most basic resources.

Through BBF’s intervention, children began receiving education support, learning materials, and regular engagement activities. Slowly, classrooms filled again — not with fear, but with curiosity.

For the first time, children had their own notebooks. For the first time, they were encouraged to dream.

One mother shared with tears in her eyes,

“We never thought someone would come here only for our children.”

Today, children in Srinagar Rural Colony attend learning sessions regularly. Their confidence has grown, their attendance has improved, and their parents now see education as a path out of poverty — not a burden.

What began as support has now become hope.

Because when education reaches the last home, the future begins to change.`,
        image: "/images/srinagar.jpeg",
    },
    {
        id: "story-3",
        title: "Education Saved Her from a Child Marriage",
        description: `At just 14 years old, Sunita’s life was about to change forever.

In her community, girls are often married early — out of fear, poverty, and social pressure. When her family suspected she might speak to a boy, they began planning her marriage quietly.

Through BBF’s regular community visits, the team learned about the situation and intervened. They counselled the family, explained the legal consequences, and most importantly — spoke about Sunita’s right to education.

With continuous follow-up and trust-building, the marriage was stopped.

Today, Sunita attends the learning centre regularly. She is learning to read and write — something no woman in her family has ever done before.

She says,

“I want to become someone who can stand on her own.”

Because of timely support, Sunita’s childhood was protected — and her future rewritten.`,
        image: "/images/female.jpeg",
    },
];

export default function ImpactStories() {
    return (
        <section className="py-24 bg-[#faf9f6]"> {/* Warm off-white background */}
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#2C2C2C] mb-6">Stories of Change</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-60"></div>
                </div>

                <div className="space-y-32">
                    {stories.map((story) => (
                        <div key={story.id} id={story.id} className="scroll-mt-32">
                            <ScrollReveal>
                                <div className="space-y-12">
                                    {/* Centered Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center leading-tight max-w-4xl mx-auto">
                                        {story.title}
                                    </h3>

                                    {/* Content Layout: Image (Left) - Text (Right) */}
                                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                                        {/* Image Container */}
                                        <div className="w-full lg:w-5/12 relative shrink-0">
                                            <div className="absolute inset-0 bg-gray-200 transform translate-x-3 translate-y-3 rounded-2xl"></div>
                                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg bg-white">
                                                <Image
                                                    src={story.image}
                                                    alt={story.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="w-full lg:w-7/12">
                                            <div className="prose prose-lg prose-p:text-gray-700 prose-p:leading-relaxed max-w-none">
                                                <p className="whitespace-pre-line text-lg text-gray-700 leading-relaxed">
                                                    {story.description}
                                                </p>
                                            </div>
                                            <div className="mt-8 flex items-center gap-4 text-primary/60">
                                                <div className="h-px bg-primary/30 flex-1"></div>
                                                <span className="text-sm font-medium">Bread & Book Foundation</span>
                                                <div className="h-px bg-primary/30 flex-1"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
