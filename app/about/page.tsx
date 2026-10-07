export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#17251d]">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
          За нас
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Хората зад Move With Purpose.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#536158]">
          Тук ще разкажем кои сме, как се роди идеята за инициативата и
          защо вярваме, че заедно можем да направим нещо значимо.
        </p>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
            Екипът
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Хората, които стоят зад инициативата.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Team member 1 */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <div className="flex h-80 items-center justify-center bg-[#d9ded6] text-6xl">
              👤
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold">
                Име на човек
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[#71856f]">
                Роля в екипа
              </p>

              <p className="mt-4 leading-7 text-[#536158]">
                Кратко представяне на човека ще бъде добавено тук.
              </p>
            </div>
          </div>

          {/* Team member 2 */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <div className="flex h-80 items-center justify-center bg-[#e5e8e1] text-6xl">
              👤
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold">
                Име на човек
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[#71856f]">
                Роля в екипа
              </p>

              <p className="mt-4 leading-7 text-[#536158]">
                Кратко представяне на човека ще бъде добавено тук.
              </p>
            </div>
          </div>

          {/* Team member 3 */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <div className="flex h-80 items-center justify-center bg-[#d9ded6] text-6xl">
              👤
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold">
                Име на човек
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[#71856f]">
                Роля в екипа
              </p>

              <p className="mt-4 leading-7 text-[#536158]">
                Кратко представяне на човека ще бъде добавено тук.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-[#17251d] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#aab8a9]">
                Нашата история
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Как започна всичко?
              </h2>
            </div>

            <div className="text-lg leading-8 text-[#d7ddd7]">
              <p>
                Тук ще разкажем историята на Move With Purpose и как се
                роди идеята за инициативата.
              </p>

              <p className="mt-6">
                Ще добавим вашата лична история, мотивация и причината,
                поради която сте решили да организирате това бягане.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our goal */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#71856f]">
            Нашата цел
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Защо правим това?
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#536158]">
            Тук ще бъде описано какво искаме да постигнем чрез инициативата
            и как хората, които се включат, могат да помогнат за тази цел.
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
