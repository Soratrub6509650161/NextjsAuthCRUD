import React from 'react'
import Image from "next/image";



function Card({ img, title, discrip }) {
    return (
        <>
            <div>
                <Image
                    src={img}
                    className="h-[20rem] w-[50rem] object-cover"
                    alt={title}
                />
                <p>{title}</p>
                <p>{discrip}</p>
            </div>
        </>
    )
}
export default Card
