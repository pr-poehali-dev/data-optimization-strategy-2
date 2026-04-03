export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-100 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-teal-700 mb-4">Связаться с нами</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
          Готовы помочь прямо сейчас
        </h2>
        <p className="text-neutral-600 text-lg mb-12 max-w-2xl mx-auto">
          Звонок бесплатный. Консультация анонимна. Мы работаем круглосуточно.
        </p>
        <a
          href="tel:+79960050806"
          className="inline-block bg-teal-700 text-white text-2xl md:text-3xl font-bold px-12 py-6 hover:bg-teal-800 transition-colors duration-300 tracking-wide mb-6"
        >
          +7 996 005-08-06
        </a>
        <p className="text-neutral-500 text-sm uppercase tracking-widest">
          Звонить можно в любое время суток
        </p>
      </div>
    </section>
  );
}
