<<<<<<< HEAD
import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery(props){
    const data = props.data.result.read()

    const display = data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
=======
import React, { useContext } from 'react'
import GalleryItem from './GalleryItem'

const Gallery = (props) => {

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

<<<<<<< HEAD
function Gallery(props) {
  const display = props.data.map((item, index) => {
>>>>>>> with_router
=======
>>>>>>> with_router
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery