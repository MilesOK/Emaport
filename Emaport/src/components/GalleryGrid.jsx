export function GalleryGrid({ category, description, images, galleryUrl }) {
  return <div>
    <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-8 sm:flex-row sm:items-end">
      <div><p className="font-mono text-[10px] uppercase tracking-[.12em] text-clay">Portfolio / {category}</p><h3 className="mt-2 font-serif text-[clamp(2rem,6vw,2.5rem)] leading-none font-medium">{category}</h3></div>
      <p className="max-w-sm text-sm leading-relaxed text-[#63736d] sm:text-right">{description}</p>
    </div>
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-5">
      {images.map((image, index) => <figure className={`group overflow-hidden bg-[#b9c7cc] ${index === 0 ? 'col-span-2 sm:row-span-2' : ''}`} key={image.src}>
        <img className={`w-full object-cover transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-105 ${index === 0 ? 'h-[21rem] sm:h-full sm:min-h-[31rem]' : 'h-44 sm:h-52 md:h-64'}`} src={image.src} alt={image.alt} loading="lazy" />
      </figure>)}
    </div>
    {galleryUrl && <div className="mt-8 text-center sm:mt-10"><a className="inline-flex min-h-11 items-center border-b border-ink pb-1 text-sm font-medium transition-colors hover:border-clay hover:text-clay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" href={galleryUrl} target="_blank" rel="noreferrer">View the full gallery <span className="ml-2 text-base" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div>}
  </div>
}
