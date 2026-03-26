"use client";

import { useState } from "react";

interface PrayerRequest {
  id: number;
  name: string;
  type: "self" | "others" | "place";
  category: string;
  gratitude: string;
  request: string;
  date: string;
  prayerCount: number;
}

const samplePrayers: PrayerRequest[] = [
  {
    id: 1,
    name: "Sarah M.",
    type: "self",
    category: "Healing",
    gratitude: "I am thankful for my family who supports me through everything.",
    request:
      "Please pray for my healing journey. I have been struggling with chronic pain and I trust that God has a plan for me.",
    date: "March 25, 2026",
    prayerCount: 24,
  },
  {
    id: 2,
    name: "David K.",
    type: "others",
    category: "Wisdom",
    gratitude: "Grateful for the community here and the strength God gives me daily.",
    request:
      "Praying for my brother who is going through a difficult divorce. May God grant him wisdom and peace during this time.",
    date: "March 24, 2026",
    prayerCount: 18,
  },
  {
    id: 3,
    name: "Grace L.",
    type: "place",
    category: "Relief",
    gratitude: "Thank you Lord for the safety of my family.",
    request:
      "Please pray for the communities affected by flooding in the south. May God provide relief, shelter, and comfort to those displaced.",
    date: "March 23, 2026",
    prayerCount: 42,
  },
  {
    id: 4,
    name: "Michael R.",
    type: "self",
    category: "Anointing",
    gratitude: "I thank God for opening doors I never imagined possible.",
    request:
      "I am preparing to lead a new ministry at my church. Please pray for God's anointing and guidance as I step into this role.",
    date: "March 22, 2026",
    prayerCount: 31,
  },
];

const categories = [
  "Healing",
  "Wisdom",
  "Anointing",
  "Stress Relief",
  "Relationships",
  "Salvation",
  "Guidance",
  "Protection",
  "Gratitude",
  "Other",
];

export default function PrayersPage() {
  const [prayers, setPrayers] = useState<PrayerRequest[]>(samplePrayers);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<"all" | "self" | "others" | "place">("all");
  const [formData, setFormData] = useState({
    name: "",
    type: "self" as "self" | "others" | "place",
    category: "Healing",
    gratitude: "",
    request: "",
  });

  const filteredPrayers =
    filter === "all" ? prayers : prayers.filter((p) => p.type === filter);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newPrayer: PrayerRequest = {
      id: Date.now(),
      name: formData.name || "Anonymous",
      type: formData.type,
      category: formData.category,
      gratitude: formData.gratitude,
      request: formData.request,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      prayerCount: 0,
    };
    setPrayers([newPrayer, ...prayers]);
    setFormData({ name: "", type: "self", category: "Healing", gratitude: "", request: "" });
    setShowForm(false);
  }

  function handlePray(id: number) {
    setPrayers(
      prayers.map((p) =>
        p.id === id ? { ...p, prayerCount: p.prayerCount + 1 } : p
      )
    );
  }

  const typeLabels = { self: "For Myself", others: "For Others", place: "For a Place" };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            &#128591; Prayer Requests
          </h1>
          <p className="text-accent text-lg max-w-2xl mx-auto">
            We always start our prayers with gratitude. Be thankful for what you
            already have, then bring your requests before God and this community.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex gap-2 flex-wrap">
            {(["all", "self", "others", "place"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-accent hover:bg-accent"
                }`}
              >
                {f === "all" ? "All Prayers" : typeLabels[f]}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-soft-gold transition-colors"
          >
            {showForm ? "Cancel" : "+ Submit Prayer Request"}
          </button>
        </div>

        {/* Prayer Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 shadow-md border border-accent mb-8"
          >
            <h3 className="text-xl font-bold text-primary mb-4">
              Submit a Prayer Request
            </h3>
            <p className="text-sm text-foreground/60 mb-6 italic">
              &quot;Do not be anxious about anything, but in every situation, by
              prayer and petition, with thanksgiving, present your requests to
              God.&quot; &mdash; Philippians 4:6
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
                  Prayer For
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value as "self" | "others" | "place" })
                  }
                  className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="self">Myself</option>
                  <option value="others">Others</option>
                  <option value="place">A Place</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-primary mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-primary mb-1">
                Start with Gratitude &#10084;&#65039;
              </label>
              <textarea
                value={formData.gratitude}
                onChange={(e) => setFormData({ ...formData, gratitude: e.target.value })}
                placeholder="What are you thankful for today?"
                rows={2}
                required
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-primary mb-1">
                Your Prayer Request
              </label>
              <textarea
                value={formData.request}
                onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                placeholder="Share your prayer request with the community..."
                rows={4}
                required
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Submit Prayer Request
            </button>
          </form>
        )}

        {/* Prayer List */}
        <div className="space-y-4">
          {filteredPrayers.map((prayer) => (
            <div
              key={prayer.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-accent prayer-glow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-sm font-semibold text-primary">
                    {prayer.name}
                  </span>
                  <span className="mx-2 text-foreground/30">|</span>
                  <span className="text-xs bg-accent text-primary px-2 py-1 rounded-full">
                    {prayer.category}
                  </span>
                  <span className="mx-2 text-foreground/30">|</span>
                  <span className="text-xs text-foreground/50">
                    {typeLabels[prayer.type]}
                  </span>
                </div>
                <span className="text-xs text-foreground/40">{prayer.date}</span>
              </div>

              <div className="bg-warm-white rounded-lg p-3 mb-3 border-l-4 border-secondary">
                <p className="text-sm italic text-foreground/60">
                  <strong className="text-secondary">Grateful for:</strong>{" "}
                  {prayer.gratitude}
                </p>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                {prayer.request}
              </p>

              <button
                onClick={() => handlePray(prayer.id)}
                className="flex items-center gap-2 text-sm text-primary hover:text-deep-purple transition-colors"
              >
                <span>&#128591;</span>
                <span>I prayed for this</span>
                <span className="bg-accent px-2 py-0.5 rounded-full text-xs">
                  {prayer.prayerCount}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
