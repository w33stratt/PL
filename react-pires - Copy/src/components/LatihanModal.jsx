import React from 'react'
import styled from 'styled-components'

const data =  [
    {
      id : "1",
      judul : "climate chnage",
      paragraf: "loremgfhsdgjfhgdsjhfsdj"
    },
    {
      id : "2",
      judul : "climate chnage",
      paragraf: "loremgfhsdgjfhgdsjhfsdj"
    },
    {
      id : "3",
      judul : "climate chnage",
      paragraf: "loremgfhsdgjfhgdsjhfsdj"
    },
    {
      id : "4",
      judul : "climate chnage",
      paragraf: "loremgfhsdgjfhgdsjhfsdj"
    },
  
  ]


function LatihanModal({id}) {
    return (
        <>
           {data.map((content) => {
               content.id == id && (
                   <div>
                       <h1>{content.judul}</h1>
                       <p>{content.paragraf}</p>
                   </div>
               )
           })}
        </>
    )
}

export default LatihanModal
