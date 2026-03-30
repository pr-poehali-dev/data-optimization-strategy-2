export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Наш подход к восстановлению</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждый человек уникален — и путь к выздоровлению тоже. Мы создаём индивидуальную программу, сочетая медицинскую помощь, психотерапию и поддержку близких.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 flex-shrink-0"></span>
            <span className="text-sm uppercase tracking-wide">Круглосуточная медицинская помощь</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 flex-shrink-0"></span>
            <span className="text-sm uppercase tracking-wide">Индивидуальная и групповая психотерапия</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 flex-shrink-0"></span>
            <span className="text-sm uppercase tracking-wide">Программа работы с семьёй</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 flex-shrink-0"></span>
            <span className="text-sm uppercase tracking-wide">Сопровождение после выписки</span>
          </div>
        </div>
        <button className="bg-teal-700 text-white border border-teal-700 px-6 py-3 text-sm transition-all duration-300 hover:bg-teal-800 cursor-pointer w-fit uppercase tracking-wide">
          Узнать о программах
        </button>
      </div>
    </div>
  );
}