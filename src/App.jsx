import { useState } from 'react'
import './App.css'
import EducationInput from './components/EducationInput';
import ExperienceInput from './components/ExperienceInput';
import PersonalInput from './components/PersonalInput.jsx';
import PreviewCV from './components/PreviewCV';

function App() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    title: '',
    photoURL: '',
    address: '',
    email: '',
    description: '',
    experiencePosition: '',
    experienceCompany: '',
    experienceCity: '',
    experienceStart: '',
    experienceTo: '',
    experienceDescription: '',
    educationName: '',
    educationCity: '',
    educationDegree: '',
    educationSubject: '',
    educationStart: '',
    educationTo: ''
  });

  function getDetails(e) {
    console.log(e);
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="App">
      <div className="headerContainer">
        <h1 className="headerText">CV Creator</h1>
      </div>
      <div className="inputContainer">
        <PersonalInput
          state={state}
          handleChange={getDetails}
        />
        <ExperienceInput
          state={state}
          handleChange={getDetails}
        />
        <EducationInput
          state={state}
          handeChange={getDetails}
        />
      </div>
      <div className="previewTest">
        <PreviewCV 
          state={state}
        />
      </div>
    </div>
  )
}

export default App
