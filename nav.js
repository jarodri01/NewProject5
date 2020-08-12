import React from 'react';
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
   render() {
      return (
        <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href='/loginpage'>LoginPage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/home'>SchedulerCalendar</Nav.Link>
        </Nav.Item>
        {this.props.children}
      </Nav>
      )
   }
}
export default NavBar;