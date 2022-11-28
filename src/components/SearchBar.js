<<<<<<< HEAD
import React, { useState } from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            } />

            <input type="submit" />

        </form>
    )
=======
import React, {useState} from 'react'
import { useState } from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

<<<<<<< HEAD
  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
        <input id='search' className='input' type="text" placeholder="Search Songs or Artist" 
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <input type="submit" value='search' className='submit'/>
    </form>
  )
>>>>>>> with_router
=======
    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            } />

            <input type="submit" />

        </form>
    )
>>>>>>> with_router
}

export default SearchBar