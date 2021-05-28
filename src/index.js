import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import sheets from './api'

class App extends React.Component{
    state = {
        name: '',
        age: '',
        salary: '',
        hobby: ''
    }
    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        sheets.post(this.state).then(response => {
            this.setState({
                name: '',
                age: '',
                salary: '',
                hobby: ''
            })
            window.alert('Successfully submitted!')
          })
    }
    render(){
        return(
            <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {this.state.name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {this.state.age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {this.state.salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {this.state.hobby} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
          </Form>
      </Container>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))



