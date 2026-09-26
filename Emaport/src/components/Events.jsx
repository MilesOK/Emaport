import { GalleryGrid } from './GalleryGrid'
import { portfolios } from './portfolioData'

export function Events() { return <GalleryGrid category="Events" {...portfolios.Events} /> }
