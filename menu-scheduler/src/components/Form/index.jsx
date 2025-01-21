import { useState } from 'react';
import allIngredients from '../../db/ingredients';

function AllergyForm() {
    const [checkedState, setCheckedState] = useState(
        new Array(allIngredients.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allergies = [];
        if (checkedState.includes(true)) {
            checkedState.forEach((item, index) => {
                if (item) {
                    allergies.push(allIngredients[index]);
                }
            });
        }
        console.log(allergies);
        setCheckedState(new Array(allIngredients.length).fill(false));
    };

    return (
        <div className="form">
            <h1>Input Allergy</h1>
            <form onSubmit={handleSubmit}>
                {allIngredients.map((ingredient, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={index}
                            name={ingredient}
                            value={ingredient}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <label htmlFor={index}>{ingredient}</label>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default AllergyForm;

// function Form() {
//     const [name, setName] = useState('');
//     const [allergy, setAllergy] = useState('');

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;

//         if (name === 'name') {
//             setName(value);
//         } else {
//             setAllergy(value);
//         }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(name, allergy);

//         setName('');
//         setAllergy('');
//     };

//     return (
//         <div className="form">
//             <h1>Input Allergy</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     value={name}
//                     name="name"
//                     onChange={handleInputChange}
//                     type="text"
//                     placeholder="Full Name"
//                 />
//             <select
//                 value={allergy}
//                 name="allergy"
//                 onChange={handleInputChange}
//             >
//                 <option value="">Select Allergy</option>
//                 <option value="peanut">Peanut</option>
//                 <option value="gluten">Gluten</option>
//                 <option value="seafood">Seafood</option>
//             </select> 
//             <button type="submit">Submit</button>
//             </form>   
//         </div>
//     )
// }

// export default Form;