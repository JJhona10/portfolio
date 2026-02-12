
import React, { useState } from 'react';

// Assets definition
const ASSETS = {
  BACKGROUND: 'https://github.com/JJhona10/imagens-bolt/blob/main/bg.png?raw=true',
  FOTO: 'https://github.com/JJhona10/imagens-bolt/blob/main/foto.png?raw=true',
  TEXTO_HOME: 'https://github.com/JJhona10/imagens-bolt/blob/main/texto.png?raw=true',
  WHATSAPP: 'https://github.com/JJhona10/imagens-bolt/blob/main/botao%20whats.png?raw=true',
  PHOTOSHOP: 'https://github.com/JJhona10/imagens-bolt/blob/main/botao%20ps.png?raw=true',
  AFTER_EFFECTS: 'https://github.com/JJhona10/imagens-bolt/blob/main/botao%20ae.png?raw=true',
  PREMIERE: 'https://github.com/JJhona10/imagens-bolt/blob/main/botao%20pr.png?raw=true',
  AI_PAGES: 'https://github.com/JJhona10/imagens-bolt/blob/main/botao%20ai.png?raw=true',
  // Internal Page Headers
  TEXTO_PS: 'https://github.com/JJhona10/portifolio-midias/blob/main/texto%20ps.png?raw=true',
  TEXTO_AE: 'https://github.com/JJhona10/portifolio-midias/blob/main/texto%20ae.png?raw=true',
  TEXTO_PR: 'https://github.com/JJhona10/portifolio-midias/blob/main/texto%20pr.png?raw=true',
  TEXTO_IA: 'https://github.com/JJhona10/portifolio-midias/blob/main/texto%20ia.png?raw=true',
  BOTAO_VOLTAR: 'https://github.com/JJhona10/portifolio-midias/blob/main/botao%20voltar.png?raw=true',
};

const PHOTOSHOP_GALLERY = [
  'https://github.com/JJhona10/portifolio-midias/blob/main/photoshop/banner_FACEBBOK.png?raw=true',
  'https://github.com/JJhona10/portifolio-midias/blob/main/photoshop/banner_PROMO%C3%87%C3%83OSHADOW.png?raw=true',
  'https://github.com/JJhona10/portifolio-midias/blob/main/photoshop/banner_YOUTUBE.png?raw=true',
  'https://github.com/JJhona10/portifolio-midias/blob/main/photoshop/bento.png?raw=true',
  'https://github.com/JJhona10/portifolio-midias/blob/main/photoshop/criativo16.png?raw=true',
  'https://github.com/JJhona10/portifolio-midias/blob/main/photoshop/criativo17.png?raw=true',
  'https://github.com/JJhona10/portifolio-midias/blob/main/photoshop/feed_CARROSSEL.png?raw=true',
  'https://github.com/JJhona10/portifolio-midias/blob/main/photoshop/feed_TERAPIA.png?raw=true',
];

const AFTER_EFFECTS_VIDEOS = [
  { id: 'yyA9q5dQTr4', type: 'standard' },
  { id: 'a386sW80nZE', type: 'short' },
  { id: 'KyIYoJAZT-c', type: 'short' },
  { id: 'SwmGch3OQQg', type: 'short' },
  { id: 'bAS2QCXWklg', type: 'short' },
  { id: 'zpt1g59mB7Y', type: 'short' },
  { id: 'Z0GNQXbsZCA', type: 'short' },
  { id: 'JJOFBOafp5E', type: 'short' },
];

const PREMIERE_VIDEOS = [
  { id: 'O6O5ZYL17xQ', type: 'short' },
  { id: 'wS4hLYog1PY', type: 'short' },
  { id: 'LulxhovtIjo', type: 'short' },
  { id: '3rlm3L_UyaM', type: 'short' },
  { id: '7C60vdLZq6g', type: 'short' },
  { id: '0D6y_EGcRJ8', type: 'short' },
  { id: 'p4bkebBysMc', type: 'short' },
  { id: 'U5olxHVEY2U', type: 'short' },
  { id: '47i5zydCU1c', type: 'short' },
  { id: 'Qi5chBuVzrU', type: 'short' },
  { id: '9va14gsWqeo', type: 'standard' },
  { id: 'P7M918mtRdg', type: 'standard' },
];

const AI_CARDS = [
  {
    image: 'https://github.com/JJhona10/portifolio-midias/blob/main/cards/ebook.png?raw=true',
    link: 'https://ebook-inteligenciaemocional.miterapiando.site/',
    title: 'Ebook / Página de Vendas com IA'
  },
  {
    image: 'https://github.com/JJhona10/portifolio-midias/blob/main/cards/links.png?raw=true',
    link: 'https://atendimento.miterapiando.site/',
    title: 'Página de Links com IA'
  },
  {
    image: 'https://github.com/JJhona10/portifolio-midias/blob/main/cards/quiz.png?raw=true',
    link: 'https://quiz-ansiedade.miterapiando.site/',
    title: 'Quiz com IA'
  }
];

const LINKS = {
  WHATSAPP: 'https://wa.me/5544997180807',
};

type View = 'home' | 'photoshop' | 'after-effects' | 'ai-pages' | 'premiere';

// Reusable Layout for Internal Pages
const InternalPageLayout: React.FC<{ 
  headerImg: string; 
  setView: (view: View) => void;
  children: React.ReactNode;
  headerWidthClass?: string;
}> = ({ headerImg, setView, children, headerWidthClass = "w-[60%] md:w-[50%]" }) => (
  <div className="w-full max-w-[700px] px-4 py-12 flex flex-col items-center">
    {/* Header Image and Centered Back Button - Critical for first fold */}
    <div className="w-full flex flex-col items-center gap-6 mb-12">
      <img 
        src={headerImg} 
        alt="Header Text" 
        className={`${headerWidthClass} h-auto`}
        decoding="async"
        fetchPriority="high"
        loading="eager"
      />
      <button 
        onClick={() => setView('home')}
        className="transition-transform active:scale-95 hover:scale-105 bg-transparent border-none p-0 cursor-pointer w-[40%] md:w-[34%] max-w-[180px]"
      >
        <img 
          src={ASSETS.BOTAO_VOLTAR} 
          alt="Voltar" 
          className="w-full h-auto" 
          decoding="async" 
          fetchPriority="high" 
          loading="eager"
        />
      </button>
    </div>

    {children}

    {/* Footer - WhatsApp Button requested to be instant */}
    <div className="w-full flex flex-col items-center mt-16">
      <a 
        href={LINKS.WHATSAPP} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full max-w-[340px] transition-transform active:scale-95 hover:scale-105"
      >
        <img 
          src={ASSETS.WHATSAPP} 
          alt="WhatsApp" 
          className="w-full h-auto" 
          decoding="async" 
          loading="eager"
          fetchPriority="high"
        />
      </a>
    </div>
  </div>
);

const HomePage: React.FC<{ setView: (view: View) => void }> = ({ setView }) => (
  <div className="w-full max-w-[480px] px-6 py-12 flex flex-col items-center gap-6">
    <div className="w-full mb-2">
      <img 
        src={ASSETS.FOTO} 
        alt="Jhonatan Felipe" 
        className="w-full h-auto drop-shadow-xl" 
        fetchPriority="high" 
        decoding="async"
        loading="eager"
      />
    </div>
    <div className="w-[85%] mb-4">
      <img 
        src={ASSETS.TEXTO_HOME} 
        alt="Text Overlay" 
        className="w-full h-auto" 
        fetchPriority="high" 
        decoding="async"
        loading="eager"
      />
    </div>
    <div className="w-full flex flex-col gap-5">
      <a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-95 hover:scale-[1.02]">
        <img src={ASSETS.WHATSAPP} alt="WhatsApp" className="w-full h-auto" decoding="async" loading="eager" fetchPriority="high" />
      </a>
      
      <button onClick={() => setView('photoshop')} className="transition-transform active:scale-95 hover:scale-[1.02] border-none bg-transparent p-0 cursor-pointer w-full">
        <img src={ASSETS.PHOTOSHOP} alt="Photoshop" className="w-full h-auto" decoding="async" />
      </button>

      <button onClick={() => setView('after-effects')} className="transition-transform active:scale-95 hover:scale-[1.02] border-none bg-transparent p-0 cursor-pointer w-full">
        <img src={ASSETS.AFTER_EFFECTS} alt="After Effects" className="w-full h-auto" decoding="async" />
      </button>

      <button onClick={() => setView('premiere')} className="transition-transform active:scale-95 hover:scale-[1.02] border-none bg-transparent p-0 cursor-pointer w-full">
        <img src={ASSETS.PREMIERE} alt="Premiere" className="w-full h-auto" decoding="async" />
      </button>

      <button onClick={() => setView('ai-pages')} className="transition-transform active:scale-95 hover:scale-[1.02] border-none bg-transparent p-0 cursor-pointer w-full">
        <img src={ASSETS.AI_PAGES} alt="AI" className="w-full h-auto" decoding="async" />
      </button>
    </div>
  </div>
);

const PhotoshopPage: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <InternalPageLayout headerImg={ASSETS.TEXTO_PS} setView={setView}>
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} alt="Expanded" className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-200" />
        </div>
      )}
      <div className="w-full flex flex-col gap-8 mb-4 items-center">
        {PHOTOSHOP_GALLERY.map((imgUrl, index) => (
          <div 
            key={index} 
            className="w-full overflow-hidden rounded-xl shadow-2xl bg-black/10 transition-transform hover:scale-[1.01] active:scale-[0.99] cursor-zoom-in"
            onClick={() => setSelectedImg(imgUrl)}
          >
            <img 
              src={imgUrl} 
              alt={`Item ${index + 1}`} 
              className="w-full h-auto block" 
              // Load the first 3 images immediately to cover the entire first screen
              loading={index < 3 ? "eager" : "lazy"}
              fetchPriority={index < 3 ? "high" : "auto"}
              decoding="async"
            />
          </div>
        ))}
      </div>
    </InternalPageLayout>
  );
};

const VideoList: React.FC<{ videos: { id: string; type: string }[] }> = ({ videos }) => (
  <div className="w-full flex flex-col gap-10 mb-4 items-center">
    {videos.map((video, index) => {
      const videoUrl = video.type === 'short' 
        ? `https://www.youtube.com/shorts/${video.id}` 
        : `https://www.youtube.com/watch?v=${video.id}`;
      return (
        <a 
          key={index} 
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`group w-full max-w-[380px] overflow-hidden rounded-2xl shadow-2xl bg-black/40 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-white/10 ${
            video.type === 'short' ? 'aspect-[9/16]' : 'aspect-video'
          }`}
        >
          <img 
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
            alt={`Thumbnail ${index + 1}`} 
            className="w-full h-full object-cover object-center opacity-100 group-hover:opacity-90 transition-opacity" 
            loading={index < 2 ? "eager" : "lazy"}
            fetchPriority={index < 2 ? "high" : "auto"}
            decoding="async"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/40 transition-all group-active:scale-90 shadow-lg">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-[10px] text-white/80 uppercase tracking-widest font-bold backdrop-blur-sm">
            {video.type === 'short' ? 'Shorts' : 'Video'}
          </div>
        </a>
      );
    })}
  </div>
);

const AfterEffectsPage: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  return (
    <InternalPageLayout headerImg={ASSETS.TEXTO_AE} setView={setView}>
      <VideoList videos={AFTER_EFFECTS_VIDEOS} />
    </InternalPageLayout>
  );
};

const PremierePage: React.FC<{ setView: (view: View) => void }> = ({ setView }) => (
  <InternalPageLayout headerImg={ASSETS.TEXTO_PR} setView={setView}>
    <VideoList videos={PREMIERE_VIDEOS} />
  </InternalPageLayout>
);

const AIPagesView: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  return (
    <InternalPageLayout 
      headerImg={ASSETS.TEXTO_IA} 
      setView={setView} 
      headerWidthClass="w-[69%] md:w-[58%]"
    >
      <div className="w-full flex flex-col gap-8 mb-4 items-center">
        {AI_CARDS.map((card, index) => (
          <a 
            key={index} 
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[380px] block"
            style={{ boxShadow: 'none', border: 'none', background: 'transparent', borderRadius: '0', padding: '0', margin: '0', outline: 'none' }}
          >
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-auto block" 
              style={{ boxShadow: 'none', border: 'none', background: 'transparent', borderRadius: '0', opacity: '1' }} 
              loading={index < 2 ? "eager" : "lazy"}
              fetchPriority={index < 2 ? "high" : "auto"}
              decoding="async"
            />
          </a>
        ))}
      </div>
    </InternalPageLayout>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const handleSetView = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: `url(${ASSETS.BACKGROUND})`,
        backgroundColor: '#000' 
      }}
    >
      {view === 'photoshop' && <PhotoshopPage setView={handleSetView} />}
      {view === 'after-effects' && <AfterEffectsPage setView={handleSetView} />}
      {view === 'ai-pages' && <AIPagesView setView={handleSetView} />}
      {view === 'premiere' && <PremierePage setView={handleSetView} />}
      {view === 'home' && <HomePage setView={handleSetView} />}
    </div>
  );
};

export default App;
