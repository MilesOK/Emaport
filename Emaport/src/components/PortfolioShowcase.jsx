import { useState } from 'react'
import { Birthdays } from './Birthdays'
import { Corporate } from './Corporate'
import { Events } from './Events'
import { Weddings } from './Weddings'

const categories = { Weddings, Corporate, Birthdays, Events }

export function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState('Weddings')
  const ActiveGallery = categories[activeCategory]
  return <section id="work" className="bg-[#dce7eb] py-21 md:py-30">
    <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1180px] md:w-[calc(100%-4rem)]">
      <div className="mb-11 flex flex-col gap-7 md:mb-19 md:flex-row md:items-end md:justify-between">
        <div><p className="font-mono text-[10px] font-medium uppercase tracking-[.08em] text-[#667680]">02 / Selected work</p><h2 className="mt-6 font-serif text-[clamp(2.65rem,5vw,4.75rem)] leading-[.98] font-medium">Stories worth<br />holding onto.</h2></div>
        <div className="flex flex-wrap gap-1" aria-label="Portfolio categories">{Object.keys(categories).map((category) => <button className={`cursor-pointer border px-3 py-2 text-xs transition-colors ${activeCategory === category ? 'border-ink text-ink' : 'border-transparent text-[#65726e] hover:border-[#65726e]'}`} type="button" key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
      </div>
      <ActiveGallery />
    </div>
  </section>
}
