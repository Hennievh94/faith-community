"use client";

import { useState } from "react";

interface Testimony {
  id: number;
  name: string;
  title: string;
  story: string;
  category: string;
  date: string;
  likeCount: number;
}

const sampleTestimonies: Testimony[] = [
  {
    id: 1,
    name: "Maria S.",
    title: "From Hopelessness to Hope",
    story:
      "I never believed in God. After losing my job, my home, and nearly my family, I had no hope left. A neighbor invited me to church and everything changed. I felt a peace I had never experienced. Jesus saved me from the darkest place I've ever been. My life has completely turned around — I have a new job, restored relationships, and a joy that doesn't depend on circumstances.",
    category: "Salvation",
    date: "March 20, 2026",
    likeCount: 47,
  },
  {
    id: 2,
    name: "James T.",
    title: "Healed from Years of Pain",
    story:
      "I suffered from chronic back pain for 12 years. Doctors said surgery was the only option but couldn't guarantee results. My church group prayed over me for weeks. One morning I woke up and the pain was gone. That was 3 years ago and it hasn't returned. God is a healer and I am living proof.",
    category: "Miracle",
    date: "March 18, 2026",
    likeCount: 63,
  },
  {
    id: 3,
    name: "Rachel W.",
    title: "A Young Believer's Journey",
    story:
      "I started believing at age 7 when my grandmother told me about Jesus. She was the most peaceful, loving person I knew. I wanted what she had. Now at 28, my faith has carried me through college, career changes, and the loss of that same grandmother. She planted a seed that became the foundation of my entire life.",
    category: "Faith Journey",
    date: "March 15, 2026",
    likeCount: 38,
  },
  {
    id: 4,
    name: "Anthony P.",
    title: "Delivered from Addiction",
    story:
      "I was addicted to alcohol for 15 years. It destroyed my marriage and almost took my life. After a near-fatal accident, I cried out to God for the first time. That was the beginning of my deliverance. Through prayer, community support, and surrendering to Jesus, I've been sober for 4 years. If He can save me, He can save anyone.",
    category: "Deliverance",
    date: "March 12, 2026",
    likeCount: 82,
  },
];

const testimonyCategories = [
  "All",
  "Salvation",
  "Miracle",
  "Faith Journey",
  "Deliverance",
  "Healing",
  "Relationship",
  "Other",
];

export default function TestimoniesPage() {
  const [testimonies, setTestimonies] = useState<Testimony[]>(sampleTestimonies);
  const [showForm, setShowForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    story: "",
    category: "Salvation",
  });

  const filtered =
    activeCategory === "All"
      ? testimonies
      : testimonies.filter((t) => t.category === activeCategory);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newTestimony: Testimony = {
      id: Date.now(),
      name: formData.name || "Anonymous",
      title: formData.title,
      story: formData.story,
      category: formData.category,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      likeCount: 0,
    };
    setTestimonies([newTestimony, ...testimonies]);
    setFormData({ name: "", title: "", story: "", category: "Salvation" });
    setShowForm(false);
  }

  function handleLike(id: number) {
    setTestimonies(
      testimonies.map((t) =>
        t.id === id ? { ...t, likeCount: t.likeCount + 1 } : t
      )
    );
  }

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <section className="bg-deep-purple text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            &#10024; Testimonies & Miracles
          </h1>
          <p className="text-accent text-lg max-w-2xl mx-auto">
            Read powerful stories of faith, salvation, and God&apos;s miracles.
            Share your own testimony &mdash; it could change someone&apos;s
            life.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex gap-2 flex-wrap">
            {testimonyCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-deep-purple text-white"
                    : "bg-white text-primary border border-accent hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-soft-gold transition-colors"
          >
            {showForm ? "Cancel" : "+ Share Your Testimony"}
          </button>
        </div>

        {/* Testimony Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 shadow-md border border-accent mb-8"
          >
            <h3 className="text-xl font-bold text-primary mb-4">
              Share Your Testimony
            </h3>
            <p className="text-sm text-foreground/60 mb-6 italic">
              Your story matters. Whether you believed from a young age, found
              Jesus after hardship, or experienced a miracle &mdash; share it
              here to encourage others.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Your Name (optional)
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Anonymous"
                  className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  {testimonyCategories.filter((c) => c !== "All").map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-primary mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Give your testimony a title..."
                required
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-primary mb-1">
                Your Story
              </label>
              <textarea
                value={formData.story}
                onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                placeholder="Tell us about your journey — how you came to Jesus, what happened, how your life has changed..."
                rows={6}
                required
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <button
              type="submit"
              className="bg-deep-purple text-white px-6 py-2 rounded-lg font-semibold hover:bg-deep-purple/90 transition-colors"
            >
              Share Testimony
            </button>
          </form>
        )}

        {/* Testimonies List */}
        <div className="space-y-6">
          {filtered.map((testimony) => (
            <div
              key={testimony.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-accent"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {testimony.title}
                  </h3>
                  <p className="text-sm text-foreground/50">
                    by {testimony.name} &middot; {testimony.date}
                  </p>
                </div>
                <span className="text-xs bg-deep-purple/10 text-deep-purple px-2 py-1 rounded-full">
                  {testimony.category}
                </span>
              </div>

              <p className="text-foreground/80 leading-relaxed my-4">
                {testimony.story}
              </p>

              <button
                onClick={() => handleLike(testimony.id)}
                className="flex items-center gap-2 text-sm text-deep-purple hover:text-primary transition-colors"
              >
                <span>&#10084;&#65039;</span>
                <span>This blessed me</span>
                <span className="bg-deep-purple/10 px-2 py-0.5 rounded-full text-xs">
                  {testimony.likeCount}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
