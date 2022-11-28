import React, { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
//import { createResource as fetchData } from './helper'

function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])

	const API_URL = 'https://itunes.apple.com/search?term='

	useEffect(() => {
		if(search) {
			const fetchData = async () => {
				document.title = `${search} Music`
				const response = await fetch(API_URL + search)
				const resData = await response.json()
				if (resData.results.length > 0) {
					return setData(resData.results)
				} else {
					return setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [search])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}

	return (
		<div>
			{message}
			<Router>
				<Routes>
					<Route path="/" element={
						<React.Fragment>
							<SearchBar handleSearch = {handleSearch}/>
							<Gallery data={data} />
						</React.Fragment>
					} />
					<Route path="/album/:id" element={<AlbumView />} />
					<Route path="/artist/:id" element={<ArtistView />} />
				</Routes>
			</Router>
		</div>
  	);
// 	let [data, setData] = useState([null])

// 	// const API_URL = 'https://itunes.apple.com/search?term='

// 	useEffect(() => {
// 		if (search) {
// 			setData(fetchData(search))
// 		}
// 	}, [search])


// 	const handleSearch = (e, term) => {
// 		e.preventDefault()
// 		setSearch(term)
// 	}

// 	const renderGallery = () => {
// 		if (data) {
// 			return (
// 				<Suspense fallback={<h1>Loading...</h1>}>
// 					<Gallery data={data} />
// 				</Suspense>
// 			)
// 		}
// 	}

// 	return (
// 		<div className="App">
// 			<SearchBar handleSearch={handleSearch} />
// 			{message}
// 			{renderGallery()}
// 		</div>
// 	);
// }

export default App