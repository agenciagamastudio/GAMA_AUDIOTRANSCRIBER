import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#161616] via-[#1a1a1a] to-[#161616]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#88CE11]/20 to-transparent py-12 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black text-white mb-4">GAMA Brandbook</h1>
          <p className="text-2xl text-gray-300">
            Brand DNA, Visual System, Voice e Componentes Oficiais
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Status */}
          <div className="bg-[#272727] rounded-2xl p-8 mb-12 border border-[#88CE11]/30">
            <h2 className="text-2xl font-bold text-[#88CE11] mb-4">✅ FASE 1: Logo System & Favicon</h2>
            <p className="text-gray-300 mb-4">
              Status: Implementado e funcional. Logo em 4 variações + Favicon em 5 tamanhos.
            </p>
            <Link
              href="/brand/logo-system"
              className="inline-block bg-[#88CE11] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#9FDD2B] transition"
            >
              Ver Logo System →
            </Link>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Logo System',
                description: '4 variações de logo + 5 tamanhos de favicon',
                href: '/brand/logo-system',
                icon: '🎨',
              },
              {
                title: 'Próximas Fases',
                description: 'FASE 2-6 em desenvolvimento',
                href: '#',
                icon: '🚀',
                disabled: true,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-xl p-6 border transition ${
                  item.disabled
                    ? 'bg-[#272727]/30 border-white/5 opacity-50 cursor-not-allowed'
                    : 'bg-[#272727] border-white/10 hover:border-[#88CE11]/50'
                }`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                {!item.disabled && (
                  <Link href={item.href} className="text-[#88CE11] font-bold hover:text-[#9FDD2B]">
                    Explorar →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 mt-20 py-12 px-6 text-center text-gray-400">
        <p>GAMA Brandbook V2 • April 2026</p>
      </footer>
    </div>
  );
}
