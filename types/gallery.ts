export interface GalleryProps {
  assets: Asset[]
  pageSize: PageSize
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