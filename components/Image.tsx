import { ImageProps } from '@/types/gallery'

const Image = ({ url, caption }: ImageProps) => {
  return (
    <figure className='rounded-lg'>
      <img src={url} alt={caption} className='w-full object-cover aspect-video' />
      <figcaption className='bg-black bg-opacity-50 text-white p-2 text-sm'>
        {caption}
      </figcaption>
    </figure>
  )
}

export default Image