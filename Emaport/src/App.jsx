import { PortfolioShowcase } from './components/PortfolioShowcase'

const shell = 'mx-auto w-[calc(100%-2.5rem)] max-w-[1180px] md:w-[calc(100%-4rem)]'

function Header() {
  return <nav className={`relative z-10 flex items-center justify-between pt-6 md:pt-7 ${shell}`} aria-label="Primary navigation">
    <a className="inline-flex flex-col font-semibold leading-[.78] tracking-[.05em]" href="#home">Ben<span className="text-[10px] font-normal tracking-[.19em]">Walker</span></a>
    <div className="hidden gap-8 text-[13px] md:flex"><a href="#work">Portfolio</a><a href="#about">About</a><a href="#contact">Contact</a></div>
    <a className="border-b border-ink pb-1 text-[12px] md:text-[13px]" href="#contact">Let's talk <span className="ml-2">↗</span></a>
  </nav>
}

function Hero() {
  return <section id="home" className="relative isolate h-[100svh] min-h-[640px] overflow-hidden bg-[#e8eff1]">
    <div className="absolute inset-y-0 right-0 w-full bg-[url('/images/Emacyber2.jpeg')] bg-[length:auto_78%] bg-[position:72%_100%] bg-no-repeat sm:bg-[length:auto_88%] sm:bg-[position:80%_100%] lg:w-[64%] lg:bg-[length:auto_94%] lg:bg-[position:60%_100%]" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#e8eff1] via-[#e8eff1]/70 to-transparent lg:via-[#e8eff1]/15" />
    <Header />
    <div className={`absolute top-28 left-1/2 z-10 w-[calc(100%-2.5rem)] -translate-x-1/2 md:top-1/2 md:w-[calc(100%-4rem)] md:max-w-[1180px] md:-translate-y-[34%] ${shell}`}>
      <p className="font-mono text-[10px] font-medium uppercase tracking-[.08em] text-[#667680]">Ben Walker / photographer</p>
      <h1 className="my-4 font-serif text-[clamp(3.4rem,8vw,7.25rem)] leading-[.87] font-medium tracking-tight md:my-5">Making room<br />for the real.</h1>
      <div className="flex max-w-[730px] flex-col gap-5 md:flex-row md:items-end md:justify-between"><p className="w-[255px] text-[13px] leading-relaxed md:text-[14px]">Weddings, portraits, corporate stories, and celebrations worth returning to.</p><a href="#work" className="inline-block w-fit border-b border-ink pb-1.5 text-[13px] hover:border-clay hover:text-clay">Explore the portfolio <span className="ml-2 text-base">↓</span></a></div>
    </div>
    <p className="absolute right-5 bottom-6 z-10 text-right font-mono text-[10px] leading-relaxed tracking-[.06em] uppercase text-[#546570] md:right-10 md:bottom-7">Based in Uyo<br />Available anywhere</p>
  </section>
}

function About() {
  return <section id="about" className={`${shell} py-23 md:py-38`}><p className="font-mono text-[10px] font-medium uppercase tracking-[.08em] text-[#667680]">01 / A little introduction</p><div className="mt-8 grid items-end gap-8 md:grid-cols-[1.2fr_.8fr] md:gap-17"><h2 className="font-serif text-[clamp(2.65rem,5vw,4.75rem)] leading-[.98] font-medium">There is beauty in the<br className="hidden md:block" /> <em className="text-clay">in-between.</em></h2><div className="max-w-[370px]"><p className="mb-7 text-[15px] leading-relaxed md:text-base">I am Ben, an Uyo-based photographer drawn to honest gestures, imperfect light, and the pulse of people together. My work lives somewhere between observation and feeling.</p><a className="inline-block border-b border-ink pb-1.5 text-[13px] hover:border-clay hover:text-clay" href="#contact">More about my approach <span className="ml-2">↗</span></a></div></div></section>
}

function Services() {
  const services = [['01', 'Weddings', 'Unscripted coverage of your big day and all the small moments inside it.'], ['02', 'Corporate', 'Visual storytelling for teams, founders, brands, and launches.'], ['03', 'Birthdays & events', 'Personal celebrations and gatherings captured with warmth and energy.']]
  return <section className={`${shell} py-23 md:py-36`}><p className="font-mono text-[10px] font-medium uppercase tracking-[.08em] text-[#667680]">03 / Ways to work together</p><div className="mt-7 grid gap-11 md:mt-9 md:grid-cols-2 md:gap-30"><h2 className="max-w-[520px] font-serif text-[clamp(2.65rem,5vw,4.75rem)] leading-[.98] font-medium">For the moments that ask to be <em className="text-clay">felt again.</em></h2><div className="border-t border-[#b8c0ba]">{services.map(([number, title, text]) => <article className="grid grid-cols-[48px_1fr] gap-3 border-b border-[#b8c0ba] py-5.5" key={number}><span className="font-mono text-[10px] text-clay">{number}</span><div><h3 className="mb-2 font-serif text-xl leading-tight font-medium md:text-[22px]">{title}</h3><p className="max-w-[300px] text-[13px] leading-relaxed text-[#63736d]">{text}</p></div></article>)}</div></div></section>
}

function Contact() {
  return <><section id="contact" className="bg-[#1b2a34] text-[#f5f2eb]"><div className={`${shell} py-22 md:py-31`}><p className="font-mono text-[10px] font-medium uppercase tracking-[.08em] text-[#e0e6d5]">04 / Enquiries & collaborations</p><h2 className="my-7 font-serif text-[clamp(2.65rem,5vw,4.75rem)] leading-[.98] font-medium">Let's make<br /><em className="text-[#e98b76]">something true.</em></h2><a className="inline-block border-b border-[#dce1d5] pb-2 text-[15px]" href="mailto:hello@benwalker.studio">hello@benwalker.studio <span className="ml-2">↗</span></a></div></section><footer className={`${shell} flex items-end justify-between py-6 md:items-center md:py-7`}><a className="inline-flex flex-col font-semibold leading-[.78] tracking-[.05em]" href="#home">BEN<span className="text-[10px] font-normal tracking-[.19em]">WALKER</span></a><p className="hidden font-mono text-[10px] text-[#6c7973] md:block">© {new Date().getFullYear()} Ben Walker Studios</p><div className="flex gap-4 font-mono text-[10px] text-[#6c7973]"><a href="#home">Instagram</a><a href="#home">Pinterest</a></div></footer></>
}

function App() { return <main><Hero /><About /><PortfolioShowcase /><Services /><Contact /></main> }

export default App
