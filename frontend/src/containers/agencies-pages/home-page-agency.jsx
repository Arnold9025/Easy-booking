import React, { Component } from "react";
import routesAgency from "../../routes.js";
import Sidebar from "../../components/side-barAgency";
import { Row, Col } from "reactstrap";

class HomePageAgency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenuItem: null
        };
    
      }
   

    handleMenuItemClick = (menuItem) => {
        this.setState({ selectedMenuItem: menuItem });
    }

    renderComponent() {
        const route = routesAgency.find(r => r.id === this.state.selectedMenuItem);
        if (route && route.component) {
            const SelectedComponent = route.component;
            return <SelectedComponent currentUser={this.props.currentUser}/>;
        }
        return null;
    }

    render() {
        return (
            <Row >
           <Col md={2}>
            <Sidebar
            routes={routesAgency}
            onMenuItemClick={this.handleMenuItemClick}
        />
        </Col> 
            <Col md={10}>
               
                <div className="main-panel">
                    <div className="content">
                        {this.renderComponent()}
                    </div>
                </div>
            </Col>
            </Row>
        );
    }
}

export default HomePageAgency;
