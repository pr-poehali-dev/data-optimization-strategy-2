import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blocks = [
  {
    icon: "💉",
    text: "Наркотическая зависимость — это настоящий кошмар, который касается не только самого человека, но и его близких. Попадая в плен этого вируса, люди сталкиваются с угрозами для физического и психического здоровья, социальным изгнанием, проблемами с законом и даже смертью.",
  },
  {
    icon: "💔",
    text: "Для тех, кто столкнулся с наркозависимостью, прорыв в этом круговороте является настоящим испытанием. Желание снова погрузиться в этот мир может быть настолько сильным, что даже знание об опасных последствиях не помешает человеку вернуться к употреблению. Кроме того, с зависимостью могут прийти агрессия, депрессия и другие тяжелые психологические проблемы.",
  },
  {
    icon: "🗣",
    text: "Близкие, такие как родители, супруги и дети, могут чувствовать себя безвыходно в ситуации, когда не знают, как помочь зависимому. Они могут столкнуться с финансовыми трудностями, вопросами законности и социальным изгнанием.",
  },
  {
    icon: "👨🏻‍⚕️",
    text: "Лечение наркотической зависимости — это необходимость. Оно включает в себя медикаментозное лечение, психотерапию, терапевтические мероприятия, реабилитационные программы и поддержку от близких. Лечение может быть длительным и требует терпения, но это позволяет преодолеть зависимость и вернуться к здоровой жизни.",
  },
  {
    icon: "❤️",
    text: "Помните, наркотическая зависимость — это болезнь, а не проявление слабости или лени. Люди, столкнувшиеся с зависимостью, нуждаются в социальной поддержке и понимании, а не в осуждении и укоризне.",
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