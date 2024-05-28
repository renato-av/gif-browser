import PropType from 'prop-types'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs({ category })

  return (
    <li>
      <h3>{category}</h3>
      {isLoading && (<p>Cargando...</p>)}

      <div className='card-grid'>
        {images.map((image) =>
          <GifItem key={image.id} {...image} />
        )}
      </div>
    </li>
  )
}

GifGrid.propTypes = {
  category: PropType.string.isRequired
}
