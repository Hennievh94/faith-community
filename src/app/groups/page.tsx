"use client";

import { useState } from "react";

interface WorshipGroup {
  id: number;
  name: string;
  description: string;
  members: number;
  type: string;
  schedule: string;
  joined: boolean;
}

const sampleGroups: WorshipGroup[] = [
  {
    id: 1,
    name: "Morning Praise & Worship",
    description:
      "Start your day with praise! We gather online every morning to worship through song, scripture reading, and prayer. All are welcome — from new believers to seasoned worshippers.",
    members: 128,
    type: "Worship",
    schedule: "Daily, 6:00 AM",
    joined: false,
  },
  {
    id: 2,
    name: "Prayer Warriors",
    description:
      "A dedicated group focused on intercessory prayer. We pray for the community's prayer requests, for nations, and for each other. If you have a heart for prayer, join us.",
    members: 85,
    type: "Prayer",
    schedule: "Mon, Wed, Fri - 7:00 PM",
    joined: false,
  },
  {
    id: 3,
    name: "New Believers Fellowship",
    description:
      "A warm, welcoming group for those who are new to faith in Jesus. Ask questions, learn the basics of Christianity, and find mentors who will walk with you on your journey.",
    members: 64,
    type: "Fellowship",
    schedule: "Saturdays, 10:00 AM",
    joined: false,
  },
  {
    id: 4,
    name: "Youth on Fire",
    description:
      "A group for young believers passionate about Jesus. We discuss faith challenges unique to younger generations, worship together, and support each other in our walk.",
    members: 156,
    type: "Youth",
    schedule: "Fridays, 6:00 PM",
    joined: false,
  },
  {
    id: 5,
    name: "Bible Study Circle",
    description:
      "Deep dive into God's Word together. Each week we study a different book or topic, share insights, and grow in our understanding of scripture.",
    members: 92,
    type: "Study",
    schedule: "Tuesdays & Thursdays, 7:30 PM",
    joined: false,
  },
  {
    id: 6,
    name: "Healing & Restoration",
    description:
      "A safe space for those dealing with trauma, grief, addiction recovery, or emotional pain. We pray for healing and share testimonies of God's restorative power.",
    members: 47,
    type: "Support",
    schedule: "Wednesdays, 8:00 PM",
    joined: false,
  },
];

export default function GroupsPage() {
  const [groups, setGroups] = useState<WorshipGroup[]>(sampleGroups);

  function handleJoin(id: number) {
    setGroups(
      groups.map((g) =>
        g.id === id
          ? { ...g, joined: !g.joined, members: g.joined ? g.members - 1 : g.members + 1 }
          : g
      )
    );
  }

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            &#127932; Worship Groups
          </h1>
          <p className="text-accent text-lg max-w-2xl mx-auto">
            Connect with fellow believers. Join worship, prayer, study, and
            fellowship groups to grow together in faith and community.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-accent flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-primary">{group.name}</h3>
                <span className="text-xs bg-accent text-primary px-2 py-1 rounded-full">
                  {group.type}
                </span>
              </div>

              <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-1">
                {group.description}
              </p>

              <div className="flex items-center justify-between text-sm text-foreground/50 mb-4">
                <span>&#128101; {group.members} members</span>
                <span>&#128197; {group.schedule}</span>
              </div>

              <button
                onClick={() => handleJoin(group.id)}
                className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                  group.joined
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-primary text-white hover:bg-primary-light"
                }`}
              >
                {group.joined ? "Joined ✓" : "Join Group"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
