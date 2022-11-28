import React, { useState } from 'react'

<<<<<<< HEAD
function GalleryItem(props){
=======
const GalleryItem = (props) => {
>>>>>>> with_suspense
    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div style={{
                'width': '25vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin' : '2px',
                'position': 'relative'
            }}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> with_router

    const detailView = () => {
        return (
            <div style={{
                'width': '80vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin' : '2px',
                'position': 'relative',
                'backgroundImage': `url(${props.item.artworkUrl100})`,
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover',
                'color': 'white'
            }}>
                <h2>{props.item.trackName}</h2>
<<<<<<< HEAD
                <h3>
                    <Link to={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
<<<<<<< HEAD
                    <Link to={`.albums/${props.item.collectionId}`}>
=======
                    <Link to={`/album/${props.item.collectionId}`}>
>>>>>>> with_router
                        {props.item.collectionName}
                    </Link>
                </h3>
=======
                <h3>{props.item.collectionName}</h3>
>>>>>>> with_suspense
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
<<<<<<< HEAD

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
=======
    
const detailView = () => {
    return (
        <div style={detailStyle}>
            <h2>{props.item.trackName}</h2>
            <h3>
                <Link to={`/artist/${props.item.artistId}`}>
                    {props.item.artistName}
                </Link>
            </h3>
            <h3>
                <Link to={`/album/${props.item.collectionId}`}>
                    {props.item.collectionName}
                </Link>
            </h3>
            <h4>{props.item.primaryGenreName}</h4>
            <h4>{props.item.releaseDate}</h4>
>>>>>>> with_router
        </div>
    )
<<<<<<< HEAD
}
=======
>>>>>>> with_router
=======
} 
>>>>>>> with_suspense

<<<<<<< HEAD
=======
    return (
        <div onClick={() =>setView(!view)} style={{'display': 'inline-block'}}>
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}
        </div>
    )
}
<<<<<<< HEAD
>>>>>>> with_router
=======

>>>>>>> with_router
export default GalleryItem