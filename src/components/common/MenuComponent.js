import { AccountCircleOutlined, Logout, PersonAdd, Settings } from '@mui/icons-material'
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React from 'react'
import { useNavigate } from 'react-router';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const MenuComponent = (props) => {
    const { anchorEl, handleClose, open } = props
    const navigate = useNavigate()
    return (
        <div>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.12))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <AccountCircleOutlined style={{ color: "slategray" }} />My Profile
                </MenuItem>
                <MenuItem onClick={() => navigate("/influencers/1/profile")} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <EditOutlinedIcon style={{ color: "slategray" }} />Edit Profile
                </MenuItem>
                <MenuItem onClick={() => navigate("/campaigncreation")} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <AddBoxOutlinedIcon style={{ color: "slategray" }} />Create Campaign
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon style={{ color: "slategray" }}>
                        <LockOpenOutlinedIcon/>
                    </ListItemIcon>
                    Orders
                </MenuItem>
                <Divider />
                {/* <MenuItem onClick={handleClose}>
                    <ListItemIcon style={{ color: "slategray" }}>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem> */}
                <MenuItem onClick={handleClose}>
                    <ListItemIcon style={{ color: "slategray" }}>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>

            </Menu>
        </div>
    )
}

export default MenuComponent
