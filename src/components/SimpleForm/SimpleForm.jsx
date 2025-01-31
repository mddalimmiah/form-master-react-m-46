const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
       console.log('form submitted');
    }
    return (

        /*
        form neyar daap
        1. use form tag and onSubmit handler with event(e) from a access e.target.{} name to get values:
        2. use individual field state for input field
        */
        <div>
            <form onSubmit={handleSubmit}>
                    <input type="text" name="name" id="" />
                    <br />
                    {/* <button>Submit</button> */}
                    <input type="email" name="email" id="" />
                    <br />
                    <input type="number" name="phone" id="" />
                    <br />
                    <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;