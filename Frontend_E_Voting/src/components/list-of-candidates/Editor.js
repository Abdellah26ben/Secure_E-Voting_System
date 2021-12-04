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

export default function App() {
  const [selected, setSelected] = React.useState(0);

 

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
                  <th scope="col" class="border-bottom-0">#</th>
                  <th scope="col" class="border-bottom-0">First Name</th>
                  <th scope="col" class="border-bottom-0">Last Name</th>
                  <th scope="col" class="border-bottom-0">Country</th>
                  <th scope="col" class="border-bottom-0">City</th>
                  <th scope="col" class="border-bottom-0">Vote!</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Graham</td>
                  <td>Brent</td>
                  <td>Benin</td>
                  <td>Ripabottoni</td>
                  <td><input class='myclass' type='button' value='Vote here'/></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark</td>
                  <td>Angela</td>
                  <td>Estonia</td>
                  <td>Borghetto di Vara</td>
                  <td><input class='myclass' type='button' value='Vote here'/></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Wylie</td>
                  <td>Joseph</td>
                  <td>Korea, North</td>
                  <td>Guelph</td>
                  <td><input class='myclass' type='button' value='Vote here'/></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Garth</td>
                  <td>Clementine</td>
                  <td>Indonesia</td>
                  <td>Narcao</td>
                  <td><input class='myclass' type='button' value='Vote here'/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }