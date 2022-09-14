import React from 'react'

//Destructure the props then only we can use it in our Component
const Gallery = ({ data }) => {
    return (
        <div className='container'>
            <div className="row">
                {/*Hydrate the Data in a Row and use it in col & use key in Col*/}
                {data.map((image) =>
                    <div className="col-md-3" key={image.id}>
                        {/* src attribute wrap it in a backTicks and we have used four different attributes for that use our hydrated var {image.}*/}
                        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                            height="200" width="250" alt={image.title} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Gallery
