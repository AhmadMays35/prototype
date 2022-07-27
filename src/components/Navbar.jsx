import { Mail, Pets, Badge, Notifications } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Typography, InputBase, Box, Avatar, Menu, MenuItem, } from '@mui/material'
import { borderRadius, width } from "@mui/system";
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent: "space-between"
})

const Search= styled("div") (({ theme}) => ({
    backgroundColor: "white",
     padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%", 
}))
const Icons= styled(Box) (({ theme}) => ({display:"none",alignItems:"center", gap:"20px", [theme.breakpoints.up("sm")]:{display: "flex"}}));

const UserBox= styled(Box) (({ theme}) => ({display:"flex" ,alignItems:"center", gap:"10x", [theme.breakpoints.up("sm")]:{display: "none"}}));


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>LAMA DEV </Typography>
                <Pets sx={{display:{xs:"block", sm:"none"} }}/>
                <Search><InputBase placeholder="search..."></InputBase></Search> 
            <Icons>
                <Badge badgeContent={4} color="error">
                <Mail/>
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar sx={{width:30, height:30}} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            onClick={e=>setOpen(true)}/>
            </Icons>
            <UserBox            onClick={e=>setOpen(true)}>
            <Avatar sx={{width:30, height:30}} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/> 
            <Typography variant="span">John</Typography>
            </UserBox>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
            </AppBar>
    );
};

export default Navbar