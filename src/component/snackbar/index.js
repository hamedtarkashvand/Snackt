import React, { useState } from 'react'


const SnackBar = (props) => {
    console.log(props.setting.styles);
    const [isOpen, setIsOpen] = useState(true);
    console.log(isOpen)
    const showSnackBar = () => {
        return (
            <h1 className={ isOpen ? "show" : "hide"} style ={props.setting.styles} >  {props.setting.text}</h1>
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