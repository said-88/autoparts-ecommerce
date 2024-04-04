'use client';
import { HiMiniMinusCircle, HiMiniPlusCircle } from "react-icons/hi2";

interface Props {
    quantity: number;
    onQuantityChange: (value: number) => void;
}

export const QuantitySelector = ({quantity, onQuantityChange}: Props) => {
    
    const handleOnChange = (value: number) => {
        if (quantity + value < 1) return;
        onQuantityChange(quantity + value);
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) { // Verifica si es un número válido
            onQuantityChange(newValue);
        }
    };

return (
    <div className="flex">
            <button onClick={ () => handleOnChange(-1)}>
                    <HiMiniMinusCircle size={30}/>
            </button>

            <input value={ quantity } onChange={handleInput} className="mx-3 w-[50px] rounded text-center" type="text"/>

            <button onClick={ () => handleOnChange(+1)}>
                    <HiMiniPlusCircle size={30}/>
            </button>
    </div>
)
}
