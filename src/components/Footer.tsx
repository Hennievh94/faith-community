import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span>&#10013;</span> Faith Community
            </h3>
            <p className="text-sm text-accent leading-relaxed">
              A place of hope, prayer, and testimony. Whether you are a lifelong
              believer or just curious about Jesus, you are welcome here.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-secondary">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-accent">
              <li>
                <Link href="/prayers" className="hover:text-white transition-colors">
                  Prayer Requests
                </Link>
              </li>
              <li>
                <Link href="/testimonies" className="hover:text-white transition-colors">
                  Testimonies
                </Link>
              </li>
              <li>
                <Link href="/groups" className="hover:text-white transition-colors">
                  Worship Groups
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-secondary">
              Join Us
            </h4>
            <p className="text-sm text-accent leading-relaxed mb-4">
              Start your journey today. Share your story, request a prayer, or
              simply explore the testimonies of others who found hope in Jesus.
            </p>
            <Link
              href="/profile"
              className="inline-block bg-secondary text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-soft-gold transition-colors"
            >
              Create Your Profile
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-6 text-center text-xs text-accent">
          <p>
            &quot;For I know the plans I have for you,&quot; declares the Lord,
            &quot;plans to prosper you and not to harm you, plans to give you
            hope and a future.&quot; &mdash; Jeremiah 29:11
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Faith Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
