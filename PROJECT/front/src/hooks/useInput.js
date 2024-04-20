import { useState, useEffect } from 'react';

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // useEffect(() => {
    //     console.log("Значение изменено на: ", value);
    // }, [value]);

    return {
        value,
        onChange: handleChange
    };
}

export default useInput;