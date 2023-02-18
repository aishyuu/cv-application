import '../styles/personalInput.css'

export default function ExperienceInput(props) {
    return(
        <div className="experienceInfoContainer">
            <h2>Experience Information</h2>
            <div className="infoInput">
                <input 
                    type="text"
                    name="experiencePosition"
                    value={props.state.experiencePosition}
                    onChange={props.handleChange}
                    placeholder="Position"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text"
                    name="experienceCompany"
                    value={props.state.experienceCompany}
                    onChange={props.handleChange}
                    placeholder="Company"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text" 
                    name="experienceCity"
                    value={props.state.experienceCity}
                    onChange={props.handleChange}
                    placeholder="City"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text" 
                    name="experienceStart"
                    value={props.state.experienceStart}
                    onChange={props.handleChange}
                    placeHolder="Start Date"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text" 
                    name="experienceTo"
                    value={props.state.experienceTo}
                    onChange={props.handleChange}
                    placeHolder="To Date"
                />
            </div>
            <div className="infoInput">
                <textarea 
                    name="experienceDescription" 
                    rows="10"
                    placeholder="Job Description"
                    value={props.state.experienceDescription}
                    onChange={props.handleChange}
                ></textarea>
            </div>
        </div>
    )
}