import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
function Sidebar({ routes, onMenuItemClick }) {
    return (
        <ListGroup className="sidebar">
                {routes.map((route, key) => (
                    <ListGroupItem key={key} onClick={() => onMenuItemClick(route.id)}>
                        <i className={route.icon} />
                        <span> {route.name}</span>
                    </ListGroupItem>
                ))}
        </ListGroup>
    );
}

export default Sidebar;
