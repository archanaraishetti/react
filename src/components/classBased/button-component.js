import { Component } from "react";





class ButtonComponent extends Component {
    state = {
        imgURL1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CEBdqpSbCF-F2rvuqtDe5PKw7r6ztxFQR6IUepcMBZL43M6uw5xGzbX94Q&s",
        isChanged: false,
        imgURL2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CEBdqpSbCF-F2rvuqtDe5PKw7r6ztxFQR6IUepcMBZL43M6uw5xGzbX94Q&s"
    }

    handleChanged = () => {
        
            this.setState(
                {
                    isChanged: !this.state.isChanged,
                }, () => {
                    console.log(this.state.isChanged);
                }
            )
    
    }

    render() {
        return (
            <>
              <button> <img onClick={this.handleChanged} src={this.state.isChanged?this.state.imgURL2:this.state.imgURL1}></img></button> 
                {
                    this.state.isChanged
                        ?
                        <>
                            <h2>Theme has been changed from black to white</h2>
                        </> :
                        <>
                            <h2>Theme is in dark mode</h2>
                        </>
                }
            </>
        )
    }
}
 export default ButtonComponent
