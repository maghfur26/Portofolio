import Sertif1 from "../../assets/sertif1.png";
import Sertif2 from "../../assets/sertif2.png";
import Sertif3 from "../../assets/sertif3.png";
import Sertif4 from "../../assets/sertif4.png";
import Sertif5 from "../../assets/sertif5.png";
import Sertif6 from "../../assets/sertif6.png";
import Sertif7 from "../../assets/sertif7.png";
import Sertif8 from "../../assets/sertif8.png";
import Sertif9 from "../../assets/sertif9.jpg";
import Sertif10 from "../../assets/sertif10.jpg";
import { useState } from "react";

const certificateData = [
  { id: 1, title: "MSIB Batch 7 Full Stack Web Development", issuer: "Kampus Merdeka", date: "2024", image: Sertif1 },
  { id: 2, title: "Full Stack Web Development", issuer: "Vocasia", date: "2024", image: Sertif2 },
  { id: 3, title: "React Fundamentals", issuer: "Codepolitan", date: "2024", image: Sertif3 },
  { id: 4, title: "Alibaba Cloud Computing", issuer: "Alibaba Cloud", date: "2024", image: Sertif4 },
  { id: 5, title: "Fundamental JavaScript", issuer: "Dicoding", date: "2024", image: Sertif5 },
  { id: 6, title: "Frontend Web Junior", issuer: "Dicoding", date: "2024", image: Sertif6 },
  { id: 7, title: "Web Developer Certification", issuer: "BNSP", date: "2025", image: Sertif7 },
  { id: 8, title: "Fundamental PHP", issuer: "Codepolitan", date: "2024", image: Sertif8 },
  { id: 9, title: "Fundamental Machine Learning", issuer: "Dicoding", date: "2026", image: Sertif9 },
  { id: 10, title: "Fundamental Deep Learning", issuer: "Dicoding", date: "2026", image: Sertif10 },
];

function Sertifikat() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const handleOpenModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <section className="w-full px-6 py-28 md:px-12 lg:px-20 bg-surface relative" id="certificate">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent"></div>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Certificates</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            Professional <span className="text-gradient">credentials</span>
          </h2>
          <p className="text-text-tertiary text-sm font-medium">
            {certificateData.length} certificates from{" "}
            {new Set(certificateData.map((c) => c.issuer)).size} institutions
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {certificateData.map((cert, index) => {
            const isLarge = index < 2;
            return (
              <article
                key={cert.id}
                className={`group cursor-pointer ${isLarge ? "sm:col-span-2 lg:col-span-2" : ""}`}
                onClick={() => handleOpenModal(cert.image, cert.title)}
              >
                <div className="h-full bg-white rounded-3xl overflow-hidden border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1">
                  <div className={`relative overflow-hidden ${isLarge ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {cert.date}
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="text-accent text-xs font-bold uppercase tracking-wider">{cert.issuer}</p>
                    <h3 className="text-base font-semibold text-text-primary mt-1.5 leading-snug group-hover:text-accent transition-colors duration-200">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              ✕ Tutup
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt={selectedTitle}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />

            {/* Title */}
            <p className="text-center text-white/70 text-sm mt-3">{selectedTitle}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Sertifikat;