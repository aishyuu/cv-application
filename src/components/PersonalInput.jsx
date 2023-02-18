import '../styles/personalInput.css'

export default function PersonalInput(props) {
    return(
        <div className="personalInfoContainer">
            <h2>Personal Information</h2>
            <div className="infoInput">
                <input 
                    type="text" 
                    name="firstName" 
                    value={props.state.firstName}
                    onChange={props.handleChange}
                    placeholder="First name"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text"
                    name="lastName"
                    value={props.state.lastName}
                    onChange={props.handleChange}
                    placeholder="Last name" 
                />
            </div>
            <div className="infoInput">
                <input
                    type="text"
                    name="title"
                    value={props.state.title}
                    onChange={props.handleChange}
                    placeholder="Title"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text" 
                    name="photoURL"
                    value={props.state.photoURL}
                    onChange={props.handleChange}
                    placeholder="Photo URL"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="text" 
                    name="address" 
                    value={props.state.address}
                    onChange={props.handleChange}
                    placeholder="Address"
                />
            </div>
            <div className="infoInput">
                <input 
                    type="email" 
                    name="email"
                    value={props.state.email}
                    onChange={props.handleChange}
                    placeholder="Email"
                />
            </div>
            <div className="infoInput">
                <textarea
                    name="description" 
                    rows="10"
                    placeholder='Description'
                    value={props.state.description}
                    onChange={props.handleChange}
                ></textarea>
            </div>
        </div>
        
    )
}