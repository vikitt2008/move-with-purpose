export default function CausePage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#17251d]">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
          Каузата
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Да бягаме за нещо по-голямо.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#536158]">
          Тук ще разкажем за каузата, която стои зад Move With Purpose,
          защо е важна и как всеки участник може да помогне.
        </p>
      </section>

      {/* Main cause */}
      <section className="bg-[#e5e8e1]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
                Нашата кауза
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Защо тази кауза има значение?
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#536158]">
                Тук ще добавим информация за проблема, който искаме да
                подкрепим, и защо сме избрали именно него.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#536158]">
                Ще разкажем и как средствата от инициативата ще бъдат
                използвани.
              </p>
            </div>

            <div className="flex min-h-[400px] items-center justify-center rounded-[2rem] bg-[#d9ded6]">
              <div className="text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#71856f] text-5xl">
                  ❤️
                </div>

                <p className="mt-6 font-semibold text-[#536158]">
                  Тук ще добавим снимка, свързана с каузата
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
            Въздействие
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Как твоето участие помага?
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#536158]">
            Тук ще обясним как участието в бягането се превръща в реална
            подкрепа за каузата.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-4xl font-bold text-[#71856f]">01</p>

            <h3 className="mt-6 text-2xl font-bold">
              Участие
            </h3>

            <p className="mt-4 leading-7 text-[#536158]">
              Всеки участник допринася със своето време и енергия.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-4xl font-bold text-[#71856f]">02</p>

            <h3 className="mt-6 text-2xl font-bold">
              Подкрепа
            </h3>

            <p className="mt-4 leading-7 text-[#536158]">
              Събраните средства ще бъдат насочени към каузата.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-4xl font-bold text-[#71856f]">03</p>

            <h3 className="mt-6 text-2xl font-bold">
              Промяна
            </h3>

            <p className="mt-4 leading-7 text-[#536158]">
              Заедно превръщаме едно бягане в нещо, което има значение.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#17251d] text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#aab8a9]">
            Заедно
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Всяка стъпка има значение.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d7ddd7]">
            Когато се движим заедно, можем да превърнем една малка крачка
            в голяма промяна.
          </p>
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