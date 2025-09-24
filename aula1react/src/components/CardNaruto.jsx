export function CardNaruto() {
  return (
    <main className="w-sm text-left flex flex-col gap-2 border border-gray-300 p-4 rounded-md">
      <header className="text-gray-400 font-medium">
        <span>15 de Abril, 2025 - 18:35</span>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-1">Tailwind é sensacional!</h2>
        <p className="text-sm text-gray-600">
          Tailwind simplesmente mudou a maneira como eu construo interfaces! A
          versatilidade e a liberdade para estilizar meus componentes são os
          grandes diferenciais dessa ferramenta.
        </p>
      </section>
      <footer className="flex items-center">
        <img
          src="https://tiermaker.com/images/chart/chart/naruto-classico--sem-figurantes--filosofisica--395963/capajpg.png"
          alt="Imagem de perfil João Pedro"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3>João Pedro</h3>
          <p>Engenheiro de Software</p>
        </div>
      </footer>
    </main>
  );
}