import { AccountCircleOutlined, Logout, PersonAdd, Settings } from '@mui/icons-material'
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React from 'react'
import { useNavigate } from 'react-router';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import UnsubscribeOutlinedIcon from '@mui/icons-material/UnsubscribeOutlined';

const MenuComponent = (props) => {
    const { anchorEl, handleClose, open } = props
    const getPartner = localStorage.getItem('type')
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem('selected_partner')
        localStorage.removeItem('type')
        navigate("/login");
    }
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
                {
                    getPartner === "contentCreator" && <>
                        {/* <MenuItem style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <AccountCircleOutlined style={{ color: "slategray" }} />My Profile
                        </MenuItem> */}
                        <MenuItem onClick={() => navigate("/influencers/profile")} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <EditOutlinedIcon style={{ color: "slategray" }} />Edit Profile
                        </MenuItem>
                    </>
                }
                {
                    getPartner !== "contentCreator" && <MenuItem onClick={() => navigate("/campaigncreation")} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <AddBoxOutlinedIcon style={{ color: "slategray" }} />Create Campaign
                    </MenuItem>
                }

                {
                    getPartner !== "contentCreator" && <MenuItem onClick={() => navigate("/manage-campaign")}>
                        <ListItemIcon style={{ color: "slategray" }}>
                            <ManageAccountsOutlinedIcon />
                        </ListItemIcon>
                        Manage Campaign
                    </MenuItem>
                }
                {
                    getPartner !== "contentCreator" && <MenuItem onClick={() => navigate("/manage-subs")}>
                        <ListItemIcon style={{ color: "slategray" }}>
                            <UnsubscribeOutlinedIcon />
                        </ListItemIcon>
                        Manage Subscription
                    </MenuItem>
                }
                {
                    getPartner === "contentCreator" && <MenuItem onClick={() => navigate("/orders-influencer")}>
                        <ListItemIcon style={{ color: "slategray" }}>
                            <LockOpenOutlinedIcon />
                        </ListItemIcon>
                        Orders
                    </MenuItem>
                }

                {
                    getPartner !== "contentCreator" && <MenuItem onClick={() => navigate("/orders-brand")}>
                        <ListItemIcon style={{ color: "slategray" }}>
                            <LockOpenOutlinedIcon />
                        </ListItemIcon>
                        Orders
                    </MenuItem>
                }

                {
                    getPartner !== "contentCreator" && <MenuItem onClick={() => navigate("/contact")}>
                        <ListItemIcon style={{ color: "slategray" }}>
                            <PhoneEnabledOutlinedIcon />
                        </ListItemIcon>
                        Contact Us
                    </MenuItem>
                }


                <Divider />
                <MenuItem onClick={handleLogout}>
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
