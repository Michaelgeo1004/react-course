import React, { useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";


const Content = () => {

    function nameChanger() {
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
                item: "Race"
            }
        ]
    )
 
    const handleCheckboxChange = (id) => {
        setItem(item.map((i) => {
            if (item.id === id) {
                return { ...i, checked: !item.checked };
            }
            return item;
        }));
    };

    return (
        <main>
            <ul>
                {item.map((i) => (
                    <li className='item' key={i.id}>
                        <input
                            type="checkbox"
                            checked={i.checked}
                            onChange={() => handleCheckboxChange(i.id)}
                        />
                        <label>{i.item}</label>
                        <RiDeleteBin6Fill
                            role="button"
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>

            <p onDoubleClick={() => handleClick1("Ediot")}>
                This is {nameChanger()}, King of Asgard ..!
            </p>
            {/* <button onClick={handleClick1}>WOW</button> */}
            <button onClick={(e) => handleClick(e)}>WOW</button>

            <p>
                King's in Asgard {nameChanger()}
            </p>
            <button onClick={increseNum}>
                +
            </button>
            <span>
                {number}
            </span>
            <button onClick={decreseNum}>
                -
            </button>
        </main>
    )
}

export default Content