
import './App.css'
// import CustomHookForm from './components/CustomHookForm/CustomHookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  
  const handleSignUpSubmit = data =>{
    console.log('Sign Up data', data);
}
const handleProfileUpdate = data => {
console.log('Update Profile data', data);

}

  return (
    <>
     
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>

        <div>
          <h2>Sign Up </h2>
          <p>Please sign up right now!</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitButtonText='Update' handleSubmit={handleProfileUpdate}>

        <div>
          <h2>Update Profile</h2>
          <p>Update your profile and chill now!</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
