import { GalleryItemProps } from '@/types/gallery'

import Image from '@/components/Sapient/Image'
import Video from '@/components/Sapient/Video'

const GalleryItem = ({ type, ...rest }: GalleryItemProps) => {
  switch (type) {
    case 'image':
      return <Image {...rest} />
    case 'video':
      return <Video {...rest} />
    default:
      return null
  }
}

export default GalleryItem