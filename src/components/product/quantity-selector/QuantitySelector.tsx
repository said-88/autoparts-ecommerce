'use client';
import { HiMiniMinusCircle, HiMiniPlusCircle } from "react-icons/hi2";
import { useState } from "react";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({quantity}: Props) => {
    const [count, setCount] = useState(quantity);

    const handleOnChange = (value: string) => {
        const parsedValue = parseInt(value);
        if (count + parsedValue < 1) return;
        setCount(count + parsedValue);
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) { // Verifica si es un número válido
            setCount(newValue);
        }
    };

return (
    <div className="flex">
            <button onClick={ () => handleOnChange("-1")}>
                    <HiMiniMinusCircle size={30}/>
            </button>

            <input value={count} onChange={handleInput} className="mx-3 w-[50px] rounded text-center" type="text"/>

            <button onClick={ () => handleOnChange("+1")}>
                    <HiMiniPlusCircle size={30}/>
            </button>
    </div>
)
}
