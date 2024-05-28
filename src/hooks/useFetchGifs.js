import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ({ category }) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getImages = async () => {
    setIsLoading(true)
    const images = await getGifs(category)
    setImages(images)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [category])

  return {
    images,
    isLoading
  }
}
