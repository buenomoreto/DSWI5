import React from 'react'

export const Mensagem = ({ mensagm }) => {
    return (
        <>
            <div className='invalid-feedback'>
                {
                    <p style={{ margin: '0' }}>
                        <span>
                            {mensagm}
                        </span>
                    </p>
                }
            </div>
        </>
    )
}
export default Mensagem