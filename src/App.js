import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./components/SingleColor";

export default function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [colorsList, setColorsList] = useState([]);

    const handleColorInput = (e) => {
        setColor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const colors = new Values(color).all(10);
            setColorsList(colors);
        }
        catch(err) {
            setError(true);
        }
    }

    return (
        <>
            <section className="container">
                <h3>color generator</h3>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="#f0f0f0" 
                        value={color} 
                        onChange={handleColorInput} 
                        className={`${error ? 'error' : null}`}
                    />

                    <button className="btn" type="submit">
                        submit
                    </button>
                </form>
            </section>

            <section className="colors">
                {colorsList.map((color, index) => {
                    return (
                        <SingleColor 
                            key={index} 
                            {...color} 
                            index={index} 
                        />
                    )
                })}
            </section>
        </>
    );
}
