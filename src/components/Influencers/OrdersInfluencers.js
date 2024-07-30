import React, { useEffect, useState } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Container, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Checkbox } from "@mui/material";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";
import axios from "axios";
import { api_url } from "../../constants";

const OrdersInfluencers = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [influencerData, setInfluencerData] = useState([]);
    const [selectedInfluencer, setSelectedInfluencer] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [selectedCampaigns, setSelectedCampaigns] = useState([]); // State for selected campaign IDs
    const id = localStorage.getItem('id');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getInfluencerData = async () => {
        try {
            const response = await axios.get(`${api_url}/api/influencers`);
            if (response.data) {
                setInfluencerData(response.data);
            }
        } catch (error) {
            console.error("Error fetching influencer data", error);
        }
    };

    const getAllCampaigns = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${api_url}/api/influencers/campaignOfInfluncers`);
            if (response.data) {
                setCampaigns(response.data);
            }
        } catch (error) {
            console.error('Error fetching campaigns:', error);
        } finally {
            setLoading(false);
        }
    };

    const getCampaignsForInfluencer = (influencerId) => {
        const influencer = campaigns.find(influencer => influencer._id === influencerId);
        return influencer ? influencer.campaigns : [];
    };

    const handleSendMessage = async () => {
        if (!selectedInfluencer || !message.trim()) return;

        setSending(true);
        try {
            await axios.post(`${api_url}/api/messages/send`, {
                from: selectedCampaigns,
                to: selectedInfluencer._id,
                content: message,
                campaignIds: selectedCampaigns, // Send selected campaign IDs
            });
            setMessage(''); // Clear message input
            setSelectedCampaigns([]); // Clear selected campaigns
            setDialogOpen(false); // Close dialog on success
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message');
        } finally {
            setSending(false);
        }
    };

    useEffect(() => {
        getInfluencerData();
        getAllCampaigns();
    }, []);

    const handleRowClick = (influencer) => {
        setSelectedInfluencer(influencer);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedInfluencer(null);
    };

    const handleCheckboxChange = (campaignId) => {
        setSelectedCampaigns(prev => (prev === campaignId ? null : campaignId));
    };

    console.log("Selec",selectedCampaigns)

    return (
        <>
            <div>
                <MenuComponent open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} />
            </div>
            <Container>
                <div className="my-12 mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Influencers</h6>
                    </div>

                    <div className="relative overflow-x-auto my-6">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">Niche</th>
                                    <th scope="col" className="px-6 py-3">Followers</th>
                                </tr>
                            </thead>
                            <tbody>
                                {influencerData.map((influencer) => (
                                    <tr className="bg-white border-b cursor-pointer" key={influencer._id} onClick={() => handleRowClick(influencer)}>
                                        <th className="px-6 py-4 font-medium text-slate-500 whitespace-nowrap">{influencer._id}</th>
                                        <td className="px-6 py-4 font-medium text-slate-500 whitespace-nowrap">
                                            {influencer.firstName} {influencer.lastName}
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{influencer.email}</td>
                                        <td className="px-6 py-4 text-slate-500">{influencer.niche.join(', ')}</td>
                                        <td className="px-6 py-4 text-slate-500">
                                            {influencer.socialMediaLinks.map(link => (
                                                <div key={link.id} className="flex items-center gap-2 mb-2">
                                                    <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                        {link.link.split('/')[2]}
                                                    </a>
                                                    <span className="text-gray-500">{link.followerCount}</span>
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Dialog for displaying influencer details */}
                    <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
                        <DialogTitle>Influencer Details</DialogTitle>
                        <DialogContent>
                            {selectedInfluencer && (
                                <>
                                    <TableContainer component={Paper}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell colSpan={2} align="center"><Typography variant="h6">Details</Typography></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><strong>Photo:</strong></TableCell>
                                                    <TableCell><img className="w-48 h-48" src={selectedInfluencer.media} alt="Influencer" /></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Name:</strong></TableCell>
                                                    <TableCell>{selectedInfluencer.firstName} {selectedInfluencer.lastName}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Bio:</strong></TableCell>
                                                    <TableCell>{selectedInfluencer.bio}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Email:</strong></TableCell>
                                                    <TableCell>{selectedInfluencer.email}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Niche:</strong></TableCell>
                                                    <TableCell>{selectedInfluencer.niche.join(', ')}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Phone Number:</strong></TableCell>
                                                    <TableCell>{selectedInfluencer.phoneNumber}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Social Media Links:</strong></TableCell>
                                                    <TableCell>
                                                        <ul>
                                                            {selectedInfluencer.socialMediaLinks.map(link => (
                                                                <li key={link.id}>
                                                                    <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                                        {link.link.split('/')[2]}: {link.followerCount}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    {/* Display campaigns related to the selected influencer */}
                                    <div className="mt-4">
                                        <Typography variant="h6" gutterBottom>Campaigns</Typography>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Select</TableCell>
                                                    <TableCell>Campaign Name</TableCell>
                                                    <TableCell>Details</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {getCampaignsForInfluencer(selectedInfluencer._id).map(campaign => (
                                                    <TableRow key={campaign._id}>
                                                        <TableCell>
                                                            <Checkbox
                                                                checked={selectedCampaigns?.includes(campaign._id)}
                                                                onChange={() => handleCheckboxChange(campaign._id)}
                                                            />
                                                        </TableCell>
                                                        <TableCell>{campaign.campaignTitle}</TableCell>
                                                        <TableCell>{campaign.campaignDescription}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>

                                    {/* Message Form */}
                                    <TextField
                                        label="Message"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        variant="outlined"
                                        margin="normal"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog} color="primary">Close</Button>
                            <Button onClick={handleSendMessage} color="primary" disabled={sending}>
                                {sending ? 'Sending...' : 'Send Message'}
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Container>
        </>
    );
};

export default OrdersInfluencers;
