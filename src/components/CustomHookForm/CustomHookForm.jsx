import useInputState from "../../hooks/useInputState";

const CustomHookForm = () => {
    // const [name, handleNameChange] = useInputState('dalim')
    const emailState =useInputState('dalim@gmail.com')
    console.log('form data',emailState.value)

    const handleSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                    {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" />
                    <br /> */}
                    {/* <button>Submit</button> */}
                    <input {...emailState} type="email" name="email" id="" />
                    <br />
                    <input type="password" name="password" id="" />
                    <br />
                    <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;