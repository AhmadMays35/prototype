import { Groups, Home, Person, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{display:{xs: "none", sm: "block"} }}><List>
        <ListItem disablePadding>
          <ListItemButton componenet="a" href="#home">
            <ListItemIcon>
                <Home/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
                <ListItemIcon>
                    <Storefront/>
                </ListItemIcon>
            <ListItemText primary="Marketplace" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton componenet="a" href="#simple-life">
                    <ListItemIcon>
                        <Person />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>

        </ListItem>
        </List>
        </Box>
    );
};

export default Sidebar;