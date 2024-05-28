import PropTypes from 'prop-types'
import { useState } from 'react'

export const AddCategory = ({ onAddCategory }) => {
  const [search, setSearch] = useState('')

  const onInputChange = (e) => { setSearch(e.target.value) }
  const onSubmit = (e) => {
    e.preventDefault()

    if (search.trim().length <= 1) return

    onAddCategory(search.trim())
    setSearch('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder="Search for gif's"
        value={search}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}
