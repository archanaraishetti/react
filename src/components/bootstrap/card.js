import reactImage from "./download.jpeg"
const ProfileCard=(props)=>{
    console.log(props);
    return(
<div className="card img-fluid" style={{width:"100%"}}>
    <img className="card-img-top" src={reactImage}alt="Card image" style={{width:"100%"}}/>
    <div className="card-img-overlay">
      <h4 className="card-title" style={{color:props.profile.color}}>{props.profile.name}</h4>
      <p className="card-text">{props.profile.designation}</p>
      <p className="card-text">{props.profile.salary}</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
    )
}
export default ProfileCard