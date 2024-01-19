import ProfileCard from "./card"
import mapMethod from "./mapMethod"

const BootstrapLayout=()=>{
    const members=[
        {name:"Archana", 
        color:"red" ,
        designation:"CEO",
        salary:"60k"
    },
        {
            name:"Navya" ,
            color:"green" ,
            designation:"SINGER",
            salary:"60k"

        },
        {
            name:"Vyshu",
             color:"yellow", 
            designation:"INFLUNCER",
            salary:"60k"

        }
    ]
    return(
        <>
        <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p> 
      </div>
        
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
           <ProfileCard profile={members[0]} />
          </div>
          <div className="col-sm-4">
          <ProfileCard profile={members[1]}/>
          </div>
          <div className="col-sm-4">
           <ProfileCard profile={members[2]}/>
          </div>
        </div>
      </div>
      
      </>
    )
}
export default BootstrapLayout