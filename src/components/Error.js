import React from 'react'

export default function Error({message}) {
    return (
        <p className="alert alert-danger text-center p-2">{message}</p>
    )
}
