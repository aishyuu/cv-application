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
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function handleDummyData() {
    setState({
      firstName: 'Bob',
      lastName: 'Jones',
      title: 'Web Developer',
      photoURL: 'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg',
      address: '0000 address ave, city, state, country',
      email: 'email@email.com',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sed nisi a dolores illo, repellendus minima velit veritatis mollitia architecto accusantium exercitationem maiores vero voluptate minus quia, reiciendis consequuntur rerum?',
      experiencePosition: 'Software Engineer',
      experienceCompany: 'Facebook',
      experienceCity: 'Los Angeles, CA',
      experienceStart: '2016',
      experienceTo: 'Present',
      experienceDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, illum rerum vitae architecto, dolorum repellendus, molestias blanditiis ipsum unde assumenda officia velit maiores minima explicabo aut fugiat enim iste distinctio?',
      educationName: 'Harvard',
      educationCity: 'Cambridge, Massachusetts',
      educationDegree: 'Bachelors of Science',
      educationSubject: 'Applied Mathematics',
      educationStart: 'August 2018',
      educationTo: 'May 2022'
    })
  }

  function handleReset() {
    setState({
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
    })
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
          handleChange={getDetails}
        />
        <button className="dummyDataButton" onClick={handleDummyData}>Apply Dummy Data</button>
        <button className="resetButton" onClick={handleReset}>Reset</button>
      </div>
      <div className="preview">
        <PreviewCV 
          state={state}
        />
      </div>
    </div>
  )
}

export default App
