// write your CatList component here

import React from 'react' 

const CatList = (props) => {
    const cats = props.catPics.map((catPic) =>  <img key={catPic.id} src={catPic.url} alt={catPic.id}/>)
    return(
        <div>
            {cats}
        </div>
    )
}

export default CatList