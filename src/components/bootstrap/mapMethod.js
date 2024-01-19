import ProfileCard from "./card"



const MapMethod=()=>{
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

        } ,{name:"Archana", 
        color:"red" ,
        designation:"CEO",
        salary:"60k"
    },
        {
            name:"Navya" ,
            color:"green" ,
            designation:"SINGER",
            salary:"60k"

        }
    ]
    return(
    <>
    {members.map((details)=><ProfileCard profile= {details} key={details.id}/>)}
    </>
    )
}
export default MapMethod