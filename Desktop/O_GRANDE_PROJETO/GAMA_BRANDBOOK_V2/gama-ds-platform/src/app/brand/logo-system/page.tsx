'use client';

import Image from 'next/image';

export default function LogoSystemPage() {
  const logoVariations = [
    {
      name: 'Primária',
      description: 'Versão padrão em verde neon. Use em landing pages, documentos e contextos normais.',
      file: '/logos/logo-primary.svg',
      usage: 'Website, documentos, apresentações',
      minSize: '200px',
      background: 'Qualquer fundo',
    },
    {
      name: 'Negativa',
      description: 'Versão branca para fundos escuros. Perfeita para dark mode e backgrounds escuros.',
      file: '/logos/logo-negative.svg',
      usage: 'Dark mode, fundos escuros (#161616+)',
      minSize: '200px',
      background: '#161616 ou escuro',
    },
    {
      name: 'Monocromática',
      description: 'Versão em preto puro. Ideal para impressão B&W e contextos sem cor.',
      file: '/logos/logo-monochrome.svg',
      usage: 'Impressão B&W, FAX, cópias',
      minSize: '200px',
      background: 'Branco ou claro',
    },
    {
      name: 'Ícone Only',
      description: 'Apenas o símbolo sem texto. Perfeito para favicon, ícone de app e espaços pequenos.',
      file: '/logos/logo-icon.svg',
      usage: 'Favicon, app icon, barra de navegação',
      minSize: '48px',
      background: 'Qualquer fundo',
    },
  ];

  const clearSpaceRules = [
    {
      title: 'Mínimo Espaçamento (Clear Space)',
      description: 'Mantenha um espaço mínimo em volta do logo igual a 1/4 da altura total do símbolo.',
      example: '20px ao redor (em 256x256px)',
    },
    {
      title: 'Tamanho Mínimo',
      description: 'Nunca use o logo em tamanho menor que 48px de largura em contextos digitais.',
      example: 'Favicon: mínimo 64x64px',
    },
    {
      title: 'Proporção',
      description: 'Sempre mantenha a proporção original (1:1 para ícone, variável para versão com texto).',
      example: 'Não distorça, não alongue, não comprima',
    },
  ];

  const wrongUsage = [
    {
      title: '❌ Rotação ou Inclinação',
      description: 'Nunca rotacione ou incline o logo. Sempre mantenha vertical.',
    },
    {
      title: '❌ Mudança de Cores',
      description: 'Use apenas cores aprovadas (#88CE11 verde, #FFFFFF branco, #000000 preto).',
    },
    {
      title: '❌ Adição de Efeitos',
      description: 'Não adicione drop shadows, gradientes não-aprovados ou outros efeitos.',
    },
    {
      title: '❌ Redimensionamento Desproporcional',
      description: 'Não altere aspect ratio. Se mudar tamanho, mantenha proporção 1:1.',
    },
    {
      title: '❌ Combinação com Outros Logos',
      description: 'Logo GAMA sempre é usado isolado. Não combine com outras marcas no mesmo espaço.',
    },
    {
      title: '❌ Uso em Tamanho Muito Pequeno',
      description: 'Abaixo de 48px a legibilidade é comprometida. Aumente o tamanho ou use versão simplificada.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#161616] via-[#1a1a1a] to-[#161616]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#88CE11]/20 to-transparent py-16 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black text-white mb-4">Logo System</h1>
          <p className="text-xl text-gray-300">
            Identidade visual completa do GAMA Brandbook. Variações, guias de uso e melhores práticas.
          </p>
        </div>
      </section>

      {/* Variações de Logo */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">4 Variações de Logo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logoVariations.map((logo) => (
              <div key={logo.name} className="bg-[#272727] rounded-2xl p-8 border border-white/10 hover:border-[#88CE11]/50 transition">
                {/* Logo Preview */}
                <div className="bg-[#1a1a1a] rounded-lg p-8 mb-6 flex items-center justify-center min-h-[200px] border border-white/5">
                  <img
                    src={logo.file}
                    alt={`Logo ${logo.name}`}
                    className="w-32 h-32 object-contain"
                  />
                </div>

                {/* Logo Details */}
                <h3 className="text-2xl font-bold text-[#88CE11] mb-2">{logo.name}</h3>
                <p className="text-gray-300 mb-4">{logo.description}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uso:</span>
                    <span className="text-white">{logo.usage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tamanho Mín:</span>
                    <span className="text-white">{logo.minSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fundo:</span>
                    <span className="text-white">{logo.background}</span>
                  </div>
                </div>

                {/* Download Link */}
                <a
                  href={logo.file}
                  download
                  className="mt-6 inline-block bg-[#88CE11] text-black px-4 py-2 rounded-lg font-bold hover:bg-[#9FDD2B] transition"
                >
                  ↓ Download SVG
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clear Space Rules */}
      <section className="py-20 px-6 bg-[#0a0a0a]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Clear Space - Regras de Espaçamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clearSpaceRules.map((rule) => (
              <div key={rule.title} className="bg-[#272727] rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-[#88CE11] mb-3">{rule.title}</h3>
                <p className="text-gray-300 mb-3">{rule.description}</p>
                <div className="bg-[#1a1a1a] rounded p-3 text-sm text-gray-400">
                  <code>{rule.example}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wrong Usage */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">O QUE NÃO FAZER</h2>
          <div className="space-y-4">
            {wrongUsage.map((item) => (
              <div key={item.title} className="bg-[#272727]/50 border border-red-500/30 rounded-lg p-6 flex gap-4">
                <div className="text-2xl">🚫</div>
                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Favicon Sizes */}
      <section className="py-20 px-6 bg-[#0a0a0a]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Favicons - Múltiplos Tamanhos</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { size: '16x16', file: '/favicon-16x16.png', desc: 'Browser Tab' },
              { size: '32x32', file: '/favicon-32x32.png', desc: 'Bookmarks' },
              { size: '180x180', file: '/apple-touch-icon.png', desc: 'iOS' },
              { size: '192x192', file: '/android-chrome-192x192.png', desc: 'Android' },
              { size: '512x512', file: '/android-chrome-512x512.png', desc: 'Splash' },
            ].map((favicon) => (
              <div key={favicon.size} className="bg-[#272727] rounded-lg p-4 text-center border border-white/10">
                <img
                  src={favicon.file}
                  alt={`Favicon ${favicon.size}`}
                  className="w-24 h-24 mx-auto mb-3 bg-[#1a1a1a] p-2 rounded"
                />
                <p className="text-sm font-bold text-white">{favicon.size}</p>
                <p className="text-xs text-gray-400">{favicon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Download Completo</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Todos os logos estão disponíveis em SVG na pasta <code className="bg-[#272727] px-3 py-1 rounded">/public/logos/</code>
          </p>
          <button className="bg-[#88CE11] text-black px-8 py-4 rounded-lg font-black text-lg hover:bg-[#9FDD2B] transition">
            📦 Download Logo Package
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-8 px-6 text-center text-gray-400">
        <p>GAMA Brandbook V2 • Logo System Guide • Last Updated: April 2026</p>
      </footer>
    </div>
  );
}
