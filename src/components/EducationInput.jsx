import '../styles/personalInput.css'

export default function EducationInput(props) {
    return(
        <div className="educationInfoContainer">
            <h2>Education Information</h2>
            <div className="infoInput">
                <input 
                    type="text"
                    name="educationName"
                    value={props.state.educationName}
                    onChange={props.handleChange}
                    placeholder="University Name"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text" 
                    name="educationCity"
                    value={props.state.educationCity}
                    onChange={props.handleChange}
                    placeholder="University City"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text" 
                    name="educationDegree"
                    value={props.state.educationDegree}
                    onChange={props.handleChange}
                    placeholder="Degree"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text" 
                    name="educationSubject"
                    value={props.state.educationSubject}
                    onChange={props.handleChange}
                    placeholder="Subject"
                />
            </div>
            <div className="infoInput">
                <p>Start</p>
                <input 
                    type="date"
                    name="educationStart"
                    value={props.state.educationStart}
                    onChange={props.handleChange}
                    placeholder="Start"
                />
            </div>
            <div className="infoInput">
                <p>End</p>
                <input 
                    type="date"
                    name="educationTo"
                    value={props.state.educationTo}
                    onChange={props.handleChange}
                    placeholder="To"
                />
            </div>
        </div>
    )
}