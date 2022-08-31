import PhotoExif from "./PhotoExif";

export default interface Photo{
    id: string
    title: string

    description?: string

    url_s?: string
    height_s?: string
    width_s?: string

    url_m?: string
    height_m?: string
    width_m?: string

    exifs: PhotoExif
}
