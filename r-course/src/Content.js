import React, { useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Content = () => {

    const nameChanger = () => {
        const name = ["Thor", "Odin", "Loki"]
        const suffle = Math.floor(Math.random() * 3)
        return name[suffle];
    }

    const handleClick = (e) => {
        console.log(e.target.innerText);
    }

    const handleClick1 = (name) => {
        console.log(`WTF ${name} ..!`);
    }

    const [number, setNumber] = useState(999)

    function increseNum() {
        setNumber(preNumber => preNumber + 1)
    }

    function decreseNum() {
        setNumber(number - 1)
    }

    const [item, setItem] = useState(
        [
            {
                id: 1,
                checked: true,
                item: "Eat"
            },
            {
                id: 2,
                checked: false,
                item: "Sleep"
            },
            {
                id: 3,
                checked: true,
                item: "Code"
            },{
                id: 4,
                checked: false,
                item: "Drift"
            },{
                id: 5,
                checked: true,
                item: "Race"
            }
        ]
    )

    const handleCheckboxChange = (id) => {
        const listItem = (item.map((i) =>
            i.id === id ? { ...i, checked: !i.checked } : i));
        setItem(listItem)
        localStorage.setItem("todo", JSON.stringify(listItem))
    };

    const handleDel = (id) => {
        const listItem = item.filter((i) =>
            i.id !== id)
        setItem(listItem)
        localStorage.setItem("todo", JSON.stringify(listItem))
    }

    const navigate = useNavigate();
    const handleWhiteNavigate = () => {
        navigate('/female');
    };

    const handleBlackNavigate = () => {
        navigate('/male');
    };

    return (
        <main>
            {(item.length) ? (
                <ul>
                    {item.map((i) => (
                        <li className='item' key={i.id}>
                            <input
                                type="checkbox"
                                checked={i.checked}
                                onChange={() => handleCheckboxChange(i.id)}
                            />
                            <label className='inner' style={(i.checked) ? { textDecoration: 'line-through' } : null} onDoubleClick={() => handleCheckboxChange(i.id)}
                            >{i.item}</label>
                            <RiDeleteBin6Fill
                                role="button"
                                tabIndex="0"
                                onClick={() => handleDel(i.id)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p> Empty List</p>
            )
            }
            {/* <p onDoubleClick={() => handleClick1("Ediot")}>
                This is {nameChanger()}, King of Asgard ..!
            </p> */}
            {/* <button onClick={handleClick1}>WOW</button> */}
            <span> <button onClick={() => handleBlackNavigate()}>Black Colour WOW</button></span>
            <span> <button onClick={() => handleWhiteNavigate()}>White  Colour WOW</button></span>

            {/* <p>
                King Of Asgard {nameChanger()}
            </p>
            <button onClick={increseNum}>
                +
            </button>{number}<button onClick={decreseNum}>
                -
            </button> */}
        </main>
    )
}

export default Content