
import React, { Component } from "react";
//import { Grid, Row, Col, Table } from "react-bootstrap";
import { Table, Button } from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Card from "components/Card/Card.jsx";
import { thArrayLoan, thArrayAgent, tdArray, tdArrayAgent } from "variables/Variables.jsx";
import AddUser from "./AddUser";

class AgentTableList extends Component {
  state = {
    users: []
  }
  render() {
    return (
      <div className="content">
        <div><h3 className="mr-auto">List of Agents</h3><AddUser/></div>
        <Table striped size="sm" responsive>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Deposit</th>
          <th>Commission</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {this.state.users.map((user, key) => 
          <tr key={user._id}>
          <th scope="row">{user.index}</th>
          <td>{user.name}</td>
          <td>{user.deposit}</td>
          <td>{user.commission}</td>
          <td>{user.role}</td>
          <td><Button color="primary" size="sm" onClick={this.handleDelete}>Delete</Button>{' '}
              <Button color="secondary" size="sm" onClick={this.handleEdit}>Edit</Button></td>
        </tr>
        )}
        
      </tbody>
    </Table>
      </div>
    );
  }

  componentDidMount = async () => {

  

    const resp = await fetch("http://localhost:3300/users", {
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
    }
    })
    console.log(resp)
    //console.log(await resp.json())
    const users = await resp.json()
      console.log(users)
    this.setState({
      users: users
    })


  }

  handleDelete = () => {
    alert("Deleted!")
  }

  handleEdit = () => {
    alert("Edited!")
  }

}

export default AgentTableList;
