import HeadingText from "../components/HeadingText";
import Sertif1 from "../../assets/sertif1.png";
import Sertif2 from "../../assets/sertif2.png";
import Sertif3 from "../../assets/sertif3.png";
import Sertif4 from "../../assets/sertif4.png";
import Sertif5 from "../../assets/sertif5.png";
import Sertif6 from "../../assets/sertif6.png";
import Sertif7 from "../../assets/sertif7.png";

const certificateData = [
  {
    id: 1,
    title: "MSIB Batch 7 Full Stack Web Development",
    issuer: "Kampus Merdeka",
    date: "2024",
    description:
      "Learning React, Node.js, and MongoDB to build full-stack web applications.",
    image: Sertif1,
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS"],
    featured: true,
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Vocasia",
    date: "2024",
    description:
      "Complete full-stack development program including frontend, backend, and database technologies.",
    image: Sertif2,
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    id: 3,
    title: "React Fundamentals",
    issuer: "Codepolitan",
    date: "2024",
    description:
      "Learning React fundamentals, including components, props, and state management.",
    image: Sertif3,
    skills: ["React", "JavaScript"],
    featured: false,
  },
  {
    id: 4,
    title: "Alibaba Cloud",
    issuer: "Alibaba Cloud",
    date: "2024",
    description:
      "Learning cloud computing concepts and services from Alibaba Cloud.",
    image: Sertif4,
    skills: ["Cloud Computing", "AWS"],
    featured: false,
  },
  {
    id: 5,
    title: "MSIB Batch 7 Full Stack Web Development",
    issuer: "Kampus Merdeka",
    date: "2024",
    description:
      "Learning React, Node.js, and MongoDB to build full-stack web applications.",
    image: Sertif1,
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS"],
    featured: false,
  },
  {
    id: 6,
    title: "Full Stack Web Development",
    issuer: "Vocasia",
    date: "2024",
    description:
      "Complete full-stack development program including frontend, backend, and database technologies.",
    image: Sertif2,
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    id: 7,
    title: "Fundamental Js",
    issuer: "Dicoding",
    date: "2024",
    description:
      "Learning Fundamental Js, function, object, array, dom manipulation, and event handling and more",
    image: Sertif5,
    skills: ["JavaScript"],
    featured: false,
  },
  {
    id: 8,
    title: "Frontend Web Junior",
    issuer: "Dicoding",
    date: "2024",
    description:
      "Learning HTML, CSS, and JavaScript to build user interfaces for web applications.",
    image: Sertif6,
    skills: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    id: 9,
    title: "Web Developer",
    issuer: "BNSP",
    date: "2025",
    description:
      "This certificate is a official proof from the National Professional Certification Agency (BNSP) stating that a person has recognized competence in the field of web development, in accordance with the Indonesian National Work Competency Standards (SKKNI).",
    image: Sertif7,
    skills: ["web development"],
    featured: true,
  },
  {
    id: 10,
    title: "Web Developer",
    issuer: "BNSP",
    date: "2025",
    description:
      "This certificate is a official proof from the National Professional Certification Agency (BNSP) stating that a person has recognized competence in the field of web development, in accordance with the Indonesian National Work Competency Standards (SKKNI).",
    image: Sertif7,
    skills: ["web development"],
    featured: false,
  },
];

function Sertifikat() {
  return (
    <div
      className="w-full min-h-screen bg-slate-950 px-6 py-16 md:px-12 lg:px-20"
      id="certificate"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <HeadingText text="My Certificates" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto font-poppins">
            Continuous learning is key to staying ahead in technology. Here are
            my professional certifications and achievements that validate my
            skills and expertise.
          </p>
        </div>

        {/* Featured Certificates */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 font-poppins">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              🏆 Featured Certificates
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certificateData
              .filter((certificate) => certificate.featured)
              .map((certificate) => (
                <div key={certificate.id} className="group relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                  <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                      {/* Date Badge */}
                      <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur-sm text-yellow-400 px-3 py-1 rounded-full text-sm font-medium border border-slate-700">
                        {certificate.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-white font-poppins group-hover:text-yellow-400 transition-colors">
                          {certificate.title}
                        </h3>
                      </div>

                      <p className="text-orange-400 text-sm font-medium mb-2">
                        Issued by {certificate.issuer}
                      </p>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {certificate.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {certificate.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-slate-800 text-yellow-400 rounded-full text-xs font-medium border border-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Certificates Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 font-poppins">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              📚 All Certificates
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificateData
              .filter((certificate) => !certificate.featured)
              .map((certificate) => (
                <div key={certificate.id} className="group">
                  <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/50 h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>

                      {/* Date Badge */}
                      <div className="absolute top-3 right-3 bg-slate-800/90 backdrop-blur-sm text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                        {certificate.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-white mb-2 font-poppins group-hover:text-cyan-400 transition-colors">
                        {certificate.title}
                      </h3>

                      <p className="text-purple-400 text-sm font-medium mb-2">
                        {certificate.issuer}
                      </p>

                      <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-3">
                        {certificate.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {certificate.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {certificate.skills.length > 3 && (
                          <span className="px-2 py-1 bg-slate-800 text-gray-500 rounded text-xs">
                            +{certificate.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-12 bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-8 font-poppins text-center">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              📊 Learning Statistics
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {certificateData.length}
              </div>
              <p className="text-gray-400">Total Certificates</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {new Set(certificateData.flatMap((cert) => cert.skills)).size}
              </div>
              <p className="text-gray-400">Skills Covered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {new Set(certificateData.map((cert) => cert.issuer)).size}
              </div>
              <p className="text-gray-400">Trusted Issuers</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-900 rounded-2xl p-12 border border-slate-800">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Continuous Learning Journey
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm always expanding my knowledge and skills. Currently pursuing new
            certifications in cloud computing and advanced React patterns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-300">
              View Learning Path
            </button>
            <button className="px-8 py-3 bg-slate-800 text-gray-300 font-semibold rounded-full border border-slate-700 hover:border-slate-600 hover:text-white hover:scale-105 transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sertifikat;
