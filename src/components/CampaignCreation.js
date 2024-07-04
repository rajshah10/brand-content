import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import MenuComponent from "./common/MenuComponent";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const CampaignCreation = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [campaign, setCampaign] = useState({
        companyName: '',
        campaignTitle: '',
        campaignDescription: '',
        requirements: '',
        deliverables: '',
        deadlines: '',
        compensation: '',
        createdDateTime: new Date().toISOString()
    });


    const handleChange = (e) => {
        setCampaign({
            ...campaign,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the campaign data submission
        console.log('Campaign Details:', campaign);
    };

    return (
        <>
            <div>
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <div className="bg-white shadow-sm w-full px-3 sm:px-4 md:px-8 lg:px-8 py-3 flex justify-between">
                    <div>
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            required
                            className="block xs:w-full sm:w-96 md:w-96 lg:w-96 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                        />
                        <div className="absolute top-1 right-2">
                            <SearchOutlinedIcon style={{ fontSize: "18px", color: "slategray" }} />
                        </div>
                    </div>
                    <div>
                        <div onClick={handleClick} className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-slate-300 cursor-pointer">
                            <span className="font-medium text-slate-500 ">JL</span>
                        </div>
                    </div>
                </div>
            </div>

            <Container>
                <div className="my-6 mx-8">
                    <h2 className="text-center text-2xl font-bold my-4">Create New Campaign</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <TextField
                            fullWidth
                            label="Company Name"
                            name="companyName"
                            value={campaign.companyName}
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Campaign Title"
                            name="campaignTitle"
                            value={campaign.campaignTitle}
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Campaign Description"
                            name="campaignDescription"
                            value={campaign.campaignDescription}
                            onChange={handleChange}
                            variant="outlined"
                            multiline
                            rows={4}
                        />
                        <TextField
                            fullWidth
                            label="Requirements"
                            name="requirements"
                            value={campaign.requirements}
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Deliverables"
                            name="deliverables"
                            value={campaign.deliverables}
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Deadlines"
                            name="deadlines"
                            value={campaign.deadlines}
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Compensation"
                            name="compensation"
                            value={campaign.compensation}
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Created DateTime"
                            name="createdDateTime"
                            value={campaign.createdDateTime}
                            variant="outlined"
                            disabled
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Create Campaign
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default CampaignCreation;
