import React, { useState } from 'react'

const SnackBar = (props) => {
    const [isOpen, setIsOpen] = useState(true)
    const showSnackBar = () => {
        return (
            <h1>{props.setting.text}</h1>
        )
    }

    const openSnackBar = () => {
        if (isOpen) {
            setTimeout(function () {
                setIsOpen(false)
            }, props.setting.duration)
            return showSnackBar()
        }
    }
    return (
        <>
            {openSnackBar()}
        </>
    )
}


export default SnackBar;