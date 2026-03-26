import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Hope. Share Faith.
            <br />
            <span className="text-secondary">Experience God&apos;s Love.</span>
          </h1>
          <p className="text-lg md:text-xl text-accent mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a lifelong believer, newly curious about
            Christianity, or searching for hope and salvation &mdash; you belong
            here. This is a place to pray, share testimonies, and grow together
            in faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prayers"
              className="bg-secondary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-soft-gold transition-colors"
            >
              Request a Prayer
            </Link>
            <Link
              href="/testimonies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Read Testimonies
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="bg-accent py-6 px-4 text-center">
        <p className="text-primary italic text-lg max-w-3xl mx-auto">
          &quot;Come to me, all you who are weary and burdened, and I will give
          you rest.&quot; &mdash; Matthew 11:28
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            What You&apos;ll Find Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="&#128591;"
              title="Prayer Requests"
              description="Ask for prayers for yourself, your loved ones, or places around the world. We always start with gratitude — being thankful for what God has already given us."
              href="/prayers"
            />
            <FeatureCard
              icon="&#10024;"
              title="Testimonies & Miracles"
              description="Read and share powerful stories of faith, salvation, and miracles. Your testimony could be the light that guides someone else to Jesus."
              href="/testimonies"
            />
            <FeatureCard
              icon="&#127932;"
              title="Worship Groups"
              description="Join worship and praise groups to connect with fellow believers. Grow together in community and strengthen your faith."
              href="/groups"
            />
            <FeatureCard
              icon="&#128214;"
              title="Resources & Materials"
              description="Access worship materials, devotionals, and resources for praise. Whether you're new to faith or seasoned, there's something for you."
              href="/resources"
            />
            <FeatureCard
              icon="&#128100;"
              title="Your Spiritual Profile"
              description="Share where you are on your spiritual journey. Are you a new believer? Curious? Looking for healing? This community meets you where you are."
              href="/profile"
            />
            <FeatureCard
              icon="&#10084;&#65039;"
              title="A Place of Healing"
              description="Many have found Jesus after trauma, loss, or hopelessness. This is a safe space to share your story and find comfort in His love."
              href="/testimonies"
            />
          </div>
        </div>
      </section>

      {/* Call to Action for Seekers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Haven&apos;t Chosen to Believe Yet?
          </h2>
          <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
            That&apos;s okay. You are welcome here just as you are. Browse the
            testimonies of people who were once in your shoes &mdash; people who
            had little or no hope, who faced trauma, broken relationships, and
            pain. Read how Jesus transformed their lives.
          </p>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Use the resources here to learn more about Jesus at your own pace.
            No pressure. Just love.
          </p>
          <Link
            href="/testimonies"
            className="bg-deep-purple text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-deep-purple/90 transition-colors"
          >
            Explore Testimonies
          </Link>
        </div>
      </section>

      {/* For Believers */}
      <section className="py-16 px-4 bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Already a Believer?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Share how your life has changed since you started to believe. Your
            testimony is powerful &mdash; it could be exactly what someone else
            needs to hear today. Join worship groups, offer prayers for others,
            and be a light in this community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/testimonies"
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Share Your Testimony
            </Link>
            <Link
              href="/groups"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Join a Worship Group
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="gradient-card border border-accent rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </Link>
  );
}
