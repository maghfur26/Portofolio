import HeadingText from "../components/HeadingText";

const contactMethods = [
  {
    id: 1,
    icon: "📧",
    title: "Email",
    description: "Drop me a line anytime",
    contact: "hello@example.com",
    link: "mailto:hello@example.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: "📱",
    title: "Phone",
    description: "Call me for urgent matters",
    contact: "+62 812-3456-7890",
    link: "tel:+6281234567890",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Location",
    description: "Based in Jakarta, Indonesia",
    contact: "Jakarta, Indonesia",
    link: "#",
    color: "from-purple-500 to-pink-500",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "💼",
    url: "#",
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    icon: "🐙",
    url: "#",
    color: "hover:text-gray-400",
  },
  {
    name: "Twitter",
    icon: "🐦",
    url: "#",
    color: "hover:text-sky-400",
  },
  {
    name: "Instagram",
    icon: "📸",
    url: "#",
    color: "hover:text-pink-400",
  },
];

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-slate-950 px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <HeadingText text="Get In Touch" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto font-poppins">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 font-poppins">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  📞 Let's Connect
                </span>
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a key={method.id} href={method.link} className="group block">
                    <div className="relative">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                      ></div>
                      <div className="relative bg-slate-900 p-6 rounded-xl border border-slate-800 group-hover:border-slate-700 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{method.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors font-poppins">
                              {method.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-1">
                              {method.description}
                            </p>
                            <p className="text-gray-300 font-medium">
                              {method.contact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 font-poppins">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  🌐 Follow Me
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`group bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg text-center ${social.color}`}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <p className="text-gray-300 font-medium font-poppins">
                      {social.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4 font-poppins">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  ⚡ Quick Info
                </span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-white font-medium">
                    Within 24 hours
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-green-400 font-medium">
                    Open for projects
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time Zone:</span>
                  <span className="text-white font-medium">GMT+7 (WIB)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Preferred Contact:</span>
                  <span className="text-white font-medium">Email</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-8 text-center font-poppins">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              🤔 Frequently Asked Questions
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2 font-poppins">
                  How long does a typical project take?
                </h4>
                <p className="text-gray-400 text-sm">
                  Project timelines vary depending on scope, but most websites
                  take 2-6 weeks from start to finish.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 font-poppins">
                  Do you work with international clients?
                </h4>
                <p className="text-gray-400 text-sm">
                  Absolutely! I work with clients worldwide and am comfortable
                  with different time zones.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2 font-poppins">
                  What's your development process?
                </h4>
                <p className="text-gray-400 text-sm">
                  I follow an agile approach: Discovery → Design → Development →
                  Testing → Launch → Support.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 font-poppins">
                  Do you provide ongoing support?
                </h4>
                <p className="text-gray-400 text-sm">
                  Yes! I offer maintenance packages and ongoing support to keep
                  your website running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
