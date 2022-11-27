<<<<<<< HEAD
import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery(props) {

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
=======
import React, { useContext } from 'react'
import Galleryitem from './GalleryItem';

function Gallery(props) {
  const display = props.data.map((item, index) => {
>>>>>>> with_router
    return (
      <Galleryitem item={item} key={index}/>
    )
  })

  return (
    <div>
        {display}
    </div>
  )
}

export default Gallery