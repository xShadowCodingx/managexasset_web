// This is the main Navigation component for the side nav

import React, { useEffect, useRef, useState } from 'react'

import navigation_styles from './Navigation.module.css'
import NavLink from './components/NavLink'

export default function Navigation() {

    const [show, setShow] = useState(false)
    const navRef = useRef(null)
    HandleOutsideClick(navRef, setShow)

    // Handles closing the navigation if a user clicks outside of the nav
    function HandleOutsideClick(ref) {
        useEffect(() => {
            function handleClick(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShow(false)
                }
            }

            document.addEventListener("mousedown", handleClick)
            return () => {
                document.removeEventListener("mousedown", handleClick)
            }
        }, [ref])
    }

    return (
        <>
            <div ref={navRef} className={`${navigation_styles.__navigation_container} ${show === true ? navigation_styles.__navigation_container_show : navigation_styles.__navigation_container_hide}`}>
                <div className={`${navigation_styles.__navigation_internal_container} ${show === true ? navigation_styles.__navigation_internal_container_show : navigation_styles.__navigation_internal_container_hide}`}>
                    <span className={navigation_styles.__navigation_internal_button_container}>
                        <button onClick={() => show === true ? setShow(false) : setShow(true)}>&lt;</button>
                    </span>
                    <div className={navigation_styles.__navigation_logo_container}>
                        <img src='/managexasset.png' alt="ManagexAsset Logo" />
                    </div>
                    <div className={navigation_styles.__navigation_link_container}>
                        <NavLink className={navigation_styles.__navigation_link} url='/dashboard' text='Dashboard' />
                        <NavLink className={navigation_styles.__navigation_link} url='/' text='Login' />
                    </div>
                </div>
            </div>
        </>
    )
}
