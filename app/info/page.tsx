export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#17251d]">
      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
          Информация
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
          Информация и регистрация
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#536158]">
          Тук ще бъде цялата допълнителна информация за бягането и начинът,
          по който можеш да се включиш.
        </p>

        {/* Registration */}
        <div className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            Регистрация
          </h2>

          <p className="mt-4 text-[#536158]">
            Формата за регистрация ще бъде добавена тук.
          </p>

          <div className="mt-8 space-y-4">
            <div className="h-14 rounded-xl border border-[#17251d]/15 bg-[#f7f6f2]" />
            <div className="h-14 rounded-xl border border-[#17251d]/15 bg-[#f7f6f2]" />
            <div className="h-14 rounded-xl border border-[#17251d]/15 bg-[#f7f6f2]" />
          </div>

          <button
            type="button"
            className="mt-8 rounded-full bg-[#17251d] px-7 py-4 font-semibold text-white"
          >
            Регистрация
          </button>
        </div>
      </section>
    </main>
  );
}