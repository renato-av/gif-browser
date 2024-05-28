import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { AddCategory, GifGrid } from './components'

const doesValueExistsOnArray = (array, value) => array.map(i => i.toLowerCase()).includes(value.toLowerCase())

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (doesValueExistsOnArray(categories, newCategory)) {
      toast.error('Category already exists')
      return
    }

    setCategories(old => [newCategory, ...old])
  }

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      <ul>
        {
          categories.map(category => (
            <GifGrid key={category} category={category} />
          ))
        }
      </ul>

      <Toaster richColors position='top-center' />
    </>
  )
}
