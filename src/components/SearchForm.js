import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCourse() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite Course</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCourse}
          />
        </div>
      </form>
    </section>
  )
}
