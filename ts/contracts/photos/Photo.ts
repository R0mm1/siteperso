import PhotoExif from "./PhotoExif";

export default interface Photo{
    id: string
    title: string

    description?: string

    url_s?: string
    url_m?: string

    exifs: PhotoExif
}
