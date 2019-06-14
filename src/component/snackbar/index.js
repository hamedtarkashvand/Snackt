import React, { useState } from 'react'


const SnackBar = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const classes = ["snk"];
    const showSnackBar = () => {
        return (
            <h1
                className={ classes.join(" ") }
                style ={props.setting.styles} >{props.setting.text}</h1>
        )
    }

    const openSnackBar = () => {

        if (isOpen) {
            // setTimeout(function () {
            //              setIsOpen(false)
            //            }, props.setting.duration);
            classes.push( isOpen ? "show" : "hide" );
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