import React from 'react'
import four0four from '../../Images/404.png'
import tacodie from '../../Images/taco.gif'

export default function PageNotFound() {
    return (
        <div className='FourZeroFour-div'>
            <img src={tacodie} className='FourZeroFour-img' alt="rip taco" />
            <img src={four0four} className='FourZeroFour-img2'style={{ zIndex: '20' }} alt="404" />
            <h3 className="FourZeroFour-Header">THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</h3>
            <p className="FourZeroFour-Text">
                (Unless you were looking for a page with an animation of a taco
                <br/>
                tripping and literally spilling the beans. If that's the case, it
                <br/>
                definitely exists, and you definitely found it.)</p>
            <a id='fof-button' className='intro-button' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Go Home</a>
        </div>
    )
}