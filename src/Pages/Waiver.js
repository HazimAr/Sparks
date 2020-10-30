import React from 'react'

const reload = function () {
    window.location.reload();
}


const Wavier = () => {
    return (
        <div>
            <div>
                <iframe title='haxor' className='waiver-form' src="https://docs.google.com/forms/d/e/1FAIpQLSc69qiSEgR1lzd19VX1_pGNljzPCehwtGWagrnaAFf_yVHcjw/viewform?embedded=true" Width="640" Height="1100" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                <button className='waiver-button' onClick={reload}>New Form</button>
            </div>
        </div>
    )
}
export default Wavier;