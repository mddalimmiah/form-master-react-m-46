import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef =useRef(null);
    const emailRef=useRef(null);
    const passwordRef =useRef(null);

useEffect( () =>{
    nameRef.current.focus(); // cursor ta focus korar jonno cursor akdom name er okhane thakbe 
}, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <input ref={nameRef} type="text" name="name" id="" />
                    <br />
                    {/* <button>Submit</button> */}
                    <input ref={emailRef} defaultValue={'dalimsaif@gmail.com'} type="email" name="email" id="" />
                    <br />
                    <input ref={passwordRef} type="password" name="password" id=""  required/>
                    <br />
                    <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;