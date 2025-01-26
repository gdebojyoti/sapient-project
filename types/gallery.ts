export interface GalleryProps {
  assets: Asset[]
  pageSize: PageSize
}

export interface GalleryItemProps {
  type: AssetType
  url: string
  caption: string
}

export interface Asset {
  type: AssetType
  id: string
  url: string
  caption: string
}

export type AssetType = "image" | "video"

export interface PageSize {
  mobile: number
  desktop: number
}

export interface ImageProps {
  url: string
  caption: string
}

export interface VideoProps {
  url: string
  caption: string
}