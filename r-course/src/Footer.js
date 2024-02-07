import React, { useState } from 'react'

const Footer = () => {

    const [name, setFooter] = useState()

    function footerChanger() {
        const name = ["Good", "Bad", "Worst"]
        const suffle = Math.floor(Math.random() * 3)
        setFooter(name[suffle]);
    }



    const year = new Date()
    return (
        <footer>
            Copyright &copy; {year.getFullYear()}
            <p>Be aware This is {name}</p>
            <button onClick={footerChanger} >Click me!</button>
        </footer>
    )
}

export default Footer

// &copy; for coppyrigt
// &nbsp; for spacing