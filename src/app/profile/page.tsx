"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    spiritualStatus: "",
    reasonForJoining: "",
    wantPrayers: "",
    joinGroups: false,
    isNewBeliever: "",
    howFoundFaith: "",
    pastExperiences: "",
    lifeSinceBelieving: "",
    additionalNotes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            &#128100; Your Spiritual Profile
          </h1>
          <p className="text-accent text-lg max-w-2xl mx-auto">
            Tell us about yourself and where you are on your spiritual journey.
            This helps us connect you with the right community, resources, and
            prayer support.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {saved && (
          <div className="bg-green-100 text-green-700 border border-green-300 rounded-lg p-4 mb-6 text-center font-medium">
            Your profile has been saved! Welcome to the community.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-accent">
            <h2 className="text-xl font-bold text-primary mb-4">
              About You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>
          </div>

          {/* Spiritual Status */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-accent">
            <h2 className="text-xl font-bold text-primary mb-4">
              Where Are You Spiritually?
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-primary mb-1">
                Your current spiritual journey
              </label>
              <select
                name="spiritualStatus"
                value={formData.spiritualStatus}
                onChange={handleChange}
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="">Select one...</option>
                <option value="lifelong">Lifelong believer in Jesus</option>
                <option value="recent">Recently started believing</option>
                <option value="new">New believer (just accepted Jesus)</option>
                <option value="curious">Curious about Christianity</option>
                <option value="seeking">Seeking hope and salvation</option>
                <option value="returning">Returning to faith after time away</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Why are you here?
              </label>
              <textarea
                name="reasonForJoining"
                value={formData.reasonForJoining}
                onChange={handleChange}
                placeholder="What brought you to this community? What are you looking for?"
                rows={3}
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          {/* Prayer & Groups */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-accent">
            <h2 className="text-xl font-bold text-primary mb-4">
              Prayer & Community
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-primary mb-1">
                Would you like prayers done for you or others?
              </label>
              <select
                name="wantPrayers"
                value={formData.wantPrayers}
                onChange={handleChange}
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="">Select one...</option>
                <option value="self">Yes, for myself</option>
                <option value="others">Yes, for others</option>
                <option value="both">Yes, for myself and others</option>
                <option value="not-yet">Not yet, I&apos;m just exploring</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="joinGroups"
                id="joinGroups"
                checked={formData.joinGroups}
                onChange={handleChange}
                className="w-4 h-4 text-primary rounded border-accent focus:ring-secondary"
              />
              <label htmlFor="joinGroups" className="text-sm text-foreground/80">
                I would like to join worshipping groups
              </label>
            </div>
          </div>

          {/* New Believer Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-accent">
            <h2 className="text-xl font-bold text-primary mb-2">
              Are You a New Believer?
            </h2>
            <p className="text-sm text-foreground/60 mb-4">
              If you are new to faith in Jesus, we&apos;d love to hear your
              story. This helps us support you better and your experience may
              inspire others.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-primary mb-1">
                Are you a new believer?
              </label>
              <select
                name="isNewBeliever"
                value={formData.isNewBeliever}
                onChange={handleChange}
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="">Select one...</option>
                <option value="yes">Yes, I am a new believer</option>
                <option value="considering">I am considering believing</option>
                <option value="no">No, I have believed for a while</option>
                <option value="not-yet">I haven&apos;t chosen to believe yet</option>
              </select>
            </div>

            {(formData.isNewBeliever === "yes" || formData.isNewBeliever === "considering") && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-primary mb-1">
                  How did you come across this choice? How did you find out
                  about Jesus?
                </label>
                <textarea
                  name="howFoundFaith"
                  value={formData.howFoundFaith}
                  onChange={handleChange}
                  placeholder="Tell us how you discovered faith in Jesus..."
                  rows={3}
                  className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            )}
          </div>

          {/* Past Experiences */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-accent">
            <h2 className="text-xl font-bold text-primary mb-2">
              Your Story (Optional)
            </h2>
            <p className="text-sm text-foreground/60 mb-4">
              Share as much or as little as you are comfortable with. Some
              people started believing at a young age. Others found Jesus after
              traumatic experiences, bad relationships, emotional or physical
              pain, or when they had lost all hope. Your story matters.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-primary mb-1">
                Past experiences or memories that led you to Jesus
              </label>
              <textarea
                name="pastExperiences"
                value={formData.pastExperiences}
                onChange={handleChange}
                placeholder="Share what led you to faith — this could be experiences, people, events, or moments that changed your perspective..."
                rows={5}
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-primary mb-1">
                For those who have been saved: How has your life changed since
                you started to believe?
              </label>
              <textarea
                name="lifeSinceBelieving"
                value={formData.lifeSinceBelieving}
                onChange={handleChange}
                placeholder="Tell us about the difference faith has made in your life..."
                rows={4}
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Anything else you&apos;d like to share?
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Any other thoughts, prayer needs, or things you'd like the community to know..."
                rows={3}
                className="w-full border border-accent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Save My Profile
            </button>
            <p className="text-xs text-foreground/40 mt-2">
              Your information is kept private and shared only within this
              community.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
