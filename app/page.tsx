export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#17251d]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
              Благотворително бягане
            </p>

            <h1 className="mt-6 text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              Бягай с цел.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#536158] sm:text-xl">
              Move With Purpose е бягане, което събира хората около една
              обща идея — да се движим заедно и да помагаме там, където
              има нужда.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/info"
                className="rounded-full bg-[#17251d] px-7 py-4 font-semibold text-white transition-transform hover:scale-105"
              >
                Включи се
              </a>

              <a
                href="/cause"
                className="rounded-full border border-[#17251d]/20 px-7 py-4 font-semibold transition-colors hover:bg-white"
              >
                Научи повече
              </a>
            </div>
          </div>

          <div className="flex min-h-[480px] items-center justify-center rounded-[2rem] bg-[#d9ded6]">
            <div className="text-center">
              <div className="text-8xl">🏃</div>

              <p className="mt-6 text-lg font-semibold text-[#536158]">
                Тук ще добавим снимка от бягането
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event details */}
      <section className="bg-[#17251d] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#aab8a9]">
                Кога
              </p>

              <p className="mt-4 text-3xl font-bold">
                Дата
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#aab8a9]">
                Къде
              </p>

              <p className="mt-4 text-3xl font-bold">
                Място
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#aab8a9]">
                Разстояние
              </p>

              <p className="mt-4 text-3xl font-bold">
                5 км
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the run */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
              Бягането
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Повече от километри.
            </h2>
          </div>

          <div className="text-lg leading-8 text-[#536158]">
            <p>
              Move With Purpose е инициатива, която превръща движението
              в начин да подкрепим нещо значимо.
            </p>

            <p className="mt-6">
              Независимо дали си опитен бегач или просто искаш да
              направиш първата си крачка, мястото ти е сред нас.
            </p>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="bg-[#e5e8e1]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
            Защо да се включиш?
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Движение, хора и кауза на едно място.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-4xl font-bold text-[#71856f]">01</p>

              <h3 className="mt-6 text-2xl font-bold">
                Движи се
              </h3>

              <p className="mt-4 leading-7 text-[#536158]">
                Направи нещо добро за себе си, докато правиш нещо добро
                и за другите.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-4xl font-bold text-[#71856f]">02</p>

              <h3 className="mt-6 text-2xl font-bold">
                Бъди част от общност
              </h3>

              <p className="mt-4 leading-7 text-[#536158]">
                Срещни хора, които вярват, че малките действия могат да
                доведат до голяма промяна.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-4xl font-bold text-[#71856f]">03</p>

              <h3 className="mt-6 text-2xl font-bold">
                Подкрепи каузата
              </h3>

              <p className="mt-4 leading-7 text-[#536158]">
                Всяка регистрация и всяка стъпка помагат да дадем
                смисъл на това бягане.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#17251d] text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#aab8a9]">
            Move With Purpose
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Готов ли си да бягаш с цел?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d7ddd7]">
            Присъедини се към инициативата и направи следващата си
            стъпка значима.
          </p>

          <a
            href="/info"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#17251d] transition-transform hover:scale-105"
          >
            Регистрация
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#17251d]/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-[#536158] lg:px-10">
          <p>© 2026 Move With Purpose</p>
        </div>
      </footer>
    </main>
  );
}