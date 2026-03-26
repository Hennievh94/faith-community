import Link from "next/link";

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  icon: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Daily Devotionals",
    description:
      "Start each day with a short devotional reading. Includes scripture, reflection questions, and a prayer to carry with you throughout the day.",
    type: "Reading",
    icon: "&#128214;",
  },
  {
    id: 2,
    title: "Worship Song Collection",
    description:
      "A curated collection of worship and praise songs. Includes lyrics, chord charts, and links to listen. Perfect for personal worship or group settings.",
    type: "Music",
    icon: "&#127925;",
  },
  {
    id: 3,
    title: "New Believer's Guide",
    description:
      "Just starting your journey with Jesus? This guide covers the basics of Christianity — who Jesus is, what salvation means, how to pray, and how to read the Bible.",
    type: "Guide",
    icon: "&#127793;",
  },
  {
    id: 4,
    title: "Prayer Templates",
    description:
      "Not sure how to pray? These templates help you structure your prayers. Each one starts with gratitude, followed by specific prayer topics like healing, wisdom, and protection.",
    type: "Prayer",
    icon: "&#128591;",
  },
  {
    id: 5,
    title: "Bible Reading Plans",
    description:
      "Structured plans to help you read through the Bible. Choose from 30-day, 90-day, or 1-year plans. Each comes with daily readings and reflection prompts.",
    type: "Reading",
    icon: "&#128216;",
  },
  {
    id: 6,
    title: "Testimony Writing Guide",
    description:
      "Learn how to write and share your testimony effectively. Includes prompts to help you recall your journey, structure your story, and inspire others with your faith.",
    type: "Guide",
    icon: "&#9997;&#65039;",
  },
  {
    id: 7,
    title: "Healing Scriptures",
    description:
      "A collection of Bible verses focused on healing — physical, emotional, and spiritual. Use these for personal meditation or when praying for healing over yourself and others.",
    type: "Scripture",
    icon: "&#10084;&#65039;&#8205;&#129657;",
  },
  {
    id: 8,
    title: "Family Worship Activities",
    description:
      "Fun and meaningful worship activities for families. Includes Bible stories for kids, family prayer ideas, and creative ways to teach children about Jesus.",
    type: "Family",
    icon: "&#128106;",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <section className="bg-gentle-blue text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            &#128214; Resources & Materials
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Everything you need for worship, praise, prayer, and growing in your
            faith. Whether you&apos;re just starting or deepening your walk with
            Jesus.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* For Seekers Banner */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-accent mb-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">
            New to Christianity?
          </h2>
          <p className="text-foreground/70 mb-4">
            If you haven&apos;t chosen to believe yet, start with our New
            Believer&apos;s Guide and explore the testimonies of others who
            found hope in Jesus.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/testimonies"
              className="bg-deep-purple text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-deep-purple/90 transition-colors"
            >
              Read Testimonies
            </Link>
            <Link
              href="/profile"
              className="border border-primary text-primary px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Create Your Profile
            </Link>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-accent hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{resource.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-primary">
                      {resource.title}
                    </h3>
                    <span className="text-xs bg-gentle-blue/10 text-gentle-blue px-2 py-0.5 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <button className="mt-3 text-sm text-gentle-blue font-medium hover:text-primary transition-colors">
                    Access Resource &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
