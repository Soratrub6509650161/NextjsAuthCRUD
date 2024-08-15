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
                <p className="text-2xl font-bold mt-[1.5rem]" style={{ color: '#0f1923' }}>{title}</p>
                <p className="text-base font-bold mt-[0.5rem]" style={{ color: '#686d71' }}>{discrip}</p>
            </div>
        </>
    )
}

export default Card
