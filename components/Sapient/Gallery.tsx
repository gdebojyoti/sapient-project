import GalleryItem from './GalleryItem'
import { GalleryProps } from '@/types/gallery'

const Gallery = ({ assets }: GalleryProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4'>
      {assets.map(({ id, type, url, caption }) => {
        return (
          <GalleryItem key={id} type={type} url={url} caption={caption} />
        )
      })}
    </div>
  )
}

export default Gallery