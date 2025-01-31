import { useState } from "react";
// 1. use form tag and onSubmit handler with event(e) from a access e.target.{} name to get values:
// 2. form number-2:  controlled element: use individual field state for input field
// 3. controlled element: one objet in a state holding all the input field values
// 4. uncontrolled element: useRef to create a reference to the element and access value by using like: nameRef.current.value
// 5. use hook to handle states and submit and error example react hook form

// 5. reusable components: 
const StatefulForm = () => {
    // const [name, setName] = useState(null);
    const [name, setName] = useState('dalim');
    const [email, setEmail] =useState(null);
    const [password, setPassword] =useState(null);

    const [error, setError] =useState('')
    const handleSubmit = e =>{
        e.preventDefault();

        if(password.length <6){
            setError('Password must be 6 character or longer');
        }
        else{
            setError('');
            console.log(name, email, password);
        }
       
        

    }
    const handleNameChange =e =>{
        setName(e.target.value);
    }
    const handleEmailChange =e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange =e =>{
        setPassword(e.target.value);
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* name  এর মধ্যে ভ্যালু দিলে আর  useState a jei name dibo sei name default name hisebe thakbe */}
                    <input value={name}
                    onChange={handleNameChange}
                    type="text" name="name" id="" />
                    <br />
                    {/* <button>Submit</button> */}
                    <input 
                    onChange={handleEmailChange}
                    type="email" name="email" id="" />
                    <br />
                    <input onChange={handlePasswordChange} 
                    
                    type="password" name="password" id="" required />
                    <br />
                    <input type="submit" value="Submit" />

                    {
                        error && <p>{error}</p>
                    }
            </form>
        </div>
    );
};

export default StatefulForm;