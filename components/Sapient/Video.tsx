import { VideoProps } from '@/types/gallery'

const Video = ({ url, caption }: VideoProps) => {
  return (
    <figure className='rounded-lg'>
      <video src={url} controls className='w-full aspect-video'>
        Your browser does not support the video tag.
      </video>
      <figcaption className='bg-black bg-opacity-50 text-white p-2 text-sm'>
        {caption}
      </figcaption>
    </figure>
  )
}

export default Video