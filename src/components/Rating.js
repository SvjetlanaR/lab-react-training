import React from 'react'
import './Random.css'

export default function (props) {
    const stars = (num) => {
        const round = Math.round(num)
        const emptyStars = ['☆', '☆', '☆', '☆', '☆']
        for (let i = 0; i < round; i++) {
            emptyStars[i] = '★'
        }
        return emptyStars.join('')
    }
    const rate = stars(props.children)

    return (
        <div className='border'>
            <h2>{rate}</h2>
        </div>
    )
}