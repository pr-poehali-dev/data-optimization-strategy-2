import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blocks = [
  {
    icon: "🧠",
    text: "Психологическая помощь.",
  },
  {
    icon: "🤝",
    text: "Социальная адаптация людей, страдающих зависимостью.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header className="bg-neutral-900" />

      <section className="pt-36 pb-16 px-6 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-teal-700 mb-4">О центре</p>
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 tracking-tight leading-tight">
          Единое Начало
        </h1>

        <div className="flex flex-col gap-10">
          {blocks.map((block, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="text-3xl leading-none mt-1">{block.icon}</span>
              <p className="text-neutral-700 text-lg leading-relaxed">{block.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-10">
          <p className="text-neutral-600 text-lg mb-6">
            Детали о программе лечения наркотической зависимости в центре «Единое Начало» доступны по телефону:
          </p>
          <a
            href="tel:+79960050806"
            className="inline-block bg-teal-700 text-white text-xl font-bold px-10 py-5 hover:bg-teal-800 transition-colors duration-300"
          >
            ☎ +7 996 005-08-06
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}