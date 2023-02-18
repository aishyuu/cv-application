import '../styles/preview.css'

export default function PreviewCV({state}) {
    return(
        <div>
            <h1>Output</h1>
            <div className="previewContainer">
                <div className="previewHeader">
                    <h1>{state.firstName} {state.lastName}</h1>
                    <h3>{state.title}</h3>
                </div>
                <div className="previewProfessionalInfo">
                    <section className="professionalInfoSub">
                        <h3 className="infoSubHeader">Description</h3>
                        <div className="infoBlock">
                            <div className="infoDescriptionBlock">
                                {state.description}
                            </div>
                        </div>
                    </section>
                    <section className="professionalInfoSub">
                        <h3 className="infoSubHeader">Experience</h3>
                        <div className="infoBlock">
                            <h4>{state.experiencePosition}</h4>
                            <h4>{state.experienceCompany}</h4>
                            <h4>{state.experienceStart} - {state.experienceTo}</h4>
                            <p>{state.experienceDescription}</p>
                        </div>
                    </section>
                    <section className="professionalInfoSub">
                        <h3 className="infoSubHeader">Education</h3>
                    </section>
                </div>
                <div className="previewAdditionalInfo">
                    <img 
                        src={state.photoURL} 
                        className="profileImage"
                        alt="profile"
                        width="200"
                        height="200"
                    />
                    <section className="additionalInfoSection">
                        <h3 className="additionalInfoHeader">Personal Details</h3>
                        <section className="additionalInfoSub">
                            <h4 className="additionalInfoSubHeader">Address</h4>
                            {state.address}
                        </section>
                        <section className="additionalInfoSub">
                            <h4 className="additionalInfoSubHeader">Email</h4>
                            {state.email}
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}