import React from 'react'

function Container({ children }) {
    return (
        <div className= "flex mx-auto max-w-7xl min-h-screen">
            {children}
        </div>
    )
}

export default Container
