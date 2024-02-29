import React from 'react';
import { Drawer, List, Button, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';


const Sidebar = ({ open, onClose, links, onMenuItemClick }) => {
  const handleClick = (text, pageName) => {
    console.log(`Clic sur "${text}"`);
    onMenuItemClick(pageName);
  };

  const handleDeconnexion = () => {
    window.location.href = '/login'; 
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        {links.map((link, index) => (
          <ListItem key={index}>
            <Button onClick={() => handleClick(link.name, link.pageName)}>
              <ListItemIcon>
                {link.icon}
              </ListItemIcon>
              <ListItemText primary={link.name} />
            </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
       <List>
        <ListItem>
          <Button onClick={handleDeconnexion}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Déconnexion" />
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
