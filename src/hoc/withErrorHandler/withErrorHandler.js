import React,{Component} from "react";
import Model from "../../component/UI/Model/Model";
import Aux from "../Aux";

const withErrorHandler =(WrappedComponent, axios)=>{
  return class extends Component{
    state={
      error:null
    }

    componentDidMount(){

      axios.interceptors.request.use(req=>
        {
          this.setState({error:null})
        })

     axios.interceptors.response.use(null,error=>{
       this.setState({error:error})
     })
    }

  render(){
    return (
      <Aux>
        <Model show={this.state.error}>{this.state.error.message}</Model>
      <WrappedComponent {...this.props}/>
      </Aux>
    )
  }
}
}
export default withErrorHandler