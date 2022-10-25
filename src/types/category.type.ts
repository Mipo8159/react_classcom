export type CategoryType = {
  _id: string
  title: string
  body: string
  image: {
    _id: string
    key: string
    imgUrl: string
    createdAt: string
    updatedAt: string
  }
  products: string[]
  createdAt: string
  updatedAt: string
}
