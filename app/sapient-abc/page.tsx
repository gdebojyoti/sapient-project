import Gallery from '@/components/Sapient/Gallery'
import { GalleryProps } from '@/types/gallery'

const SapientProjectPage = () => {
  return (
    <div>
      <h1>ABC Racing Company</h1>
      <h2>Gallery</h2>
      <Gallery {...sampleGalleryProps} />
    </div>
  )
}

export default SapientProjectPage

const sampleGalleryProps: GalleryProps = {
  assets: [
    {
      type: 'image',
      id: '1',
      url: 'https://images.unsplash.com/photo-1536909526839-8f10e29ba80c',
      caption: 'Sample Image 1',
    },
    {
      type: 'video',
      id: '2',
      url: 'https://videos.pexels.com/video-files/3818936/3818936-hd_1920_1080_30fps.mp4',
      caption: 'Sample Video 1',
    },
    {
      type: 'image',
      id: '3',
      url: 'https://images.unsplash.com/photo-1536909526839-8f10e29ba80c',
      caption: 'Sample Image 2',
    },
    {
      type: 'image',
      id: '4',
      url: 'https://images.unsplash.com/photo-1536909526839-8f10e29ba80c',
      caption: 'Sample Image 3',
    },
    {
      type: 'video',
      id: '5',
      url: 'https://videos.pexels.com/video-files/3818936/3818936-hd_1920_1080_30fps.mp4',
      caption: 'Sample Video 2',
    },
  ],
  pageSize: {
    mobile: 2,
    desktop: 4,
  },
}