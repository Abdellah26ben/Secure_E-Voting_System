import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button,
  Row,
  Badge,
  Col
} from "shards-react";

const cardStyle = {
  width: "12rem",
  height: "12rem",
  background: "gray",
  margin: "5rem",
  borderradius: "10px"
  
};

const cardSelect = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  
};

class App extends React.Component {
  // Constructor 
  constructor(props) {
      super(props);
      
      this.state = {
          items: [],
          DataisLoaded: false,
          showing:false,
          title:"Vote Here"
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  
  componentDidMount() {

    let CurrentElection = JSON.parse(localStorage.getItem('currentElection'));
    let CurrentPosition = JSON.parse(localStorage.getItem('currentPosition'));
    console.log(CurrentElection)
    console.log(CurrentPosition)


      fetch(
"http://127.0.0.1:8000/api/auth/candidates/"+CurrentElection+"/"+CurrentPosition)
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }

  handleInput = (e) => {
    
    let CurrentVoter = e.target.value;
    localStorage.setItem("currentVoter",JSON.stringify(CurrentVoter));
    let CurrentPosition = JSON.parse(localStorage.getItem('currentPosition'));
    console.log(CurrentVoter)
    console.log(CurrentPosition)

}   

SubmitVote = () => {
    
  let CurrentVoter = JSON.parse(localStorage.getItem('currentVoter'));
  let CurrentPosition = JSON.parse(localStorage.getItem('currentPosition'));
  this.setState({ title: "Voted !" });
  console.log(CurrentVoter)
  console.log(CurrentPosition)

} 


  render() {
    const { DataisLoaded, items } = this.state;
    const { showing } = this.state;
    
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;
    return (

      
      <div class="row">
      <div class="col">
        <div class="card card-small overflow-hidden mb-4">
          <div class="card-header bg-dark">
            <h6 class="m-0 text-white">List Of Candidates</h6>
          </div>
          <div class="card-body p-0 pb-3 bg-dark text-center">
            <table class="table table-dark mb-0">
              <thead class="thead-dark">
                <tr>
                  
                  <th scope="col" class="border-bottom-0">Candidate Name</th>
                  <th scope="col" class="border-bottom-0">Vote!</th>
                </tr>
              </thead>
              <tbody>

              {
                items.map((item) => ( 
                <tr>
                  
                  <td>{item['fields'].election_candidate_name}</td>
                 
                  <td><input type="radio" name="myGroupName"onClick={e => this.handleInput(e, "value")} value = {item['fields'].election_candidate_name}>{this.props.myValue}</input>
</td>
                </tr>
                  
                  ))
                }


    
              </tbody>
            </table>
          </div>
          <button type='button' onClick={e => this.SubmitVote()}   className="btn btn-primary btn-block">{this.state.title}</button>

        </div>

      </div>
    </div>
    );
  }
}
export default App