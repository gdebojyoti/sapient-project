import { GalleryProps } from '../../types/gallery'

const Gallery = ({ assets }: GalleryProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4'>
      {assets.map(({ id, url, caption }) => (
        <div key={id}>
          <img src={url} />
          <div>{caption}</div>
        </div>
      ))}
    </div>
  )
}



export default Gallery
