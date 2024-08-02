import React, { useEffect, useState } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Container, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Checkbox, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";
import axios from "axios";
import { api_url } from "../../constants";
import toast, { Toaster } from "react-hot-toast";
import NoFound from "../common/NoFound";

const OrdersInfluencers = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [influencerData, setInfluencerData] = useState([]);
    const [messagesOther, setMessagesOther] = useState([]);
    const [selectedInfluencer, setSelectedInfluencer] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState([]);
    const [selectedCampaigns, setSelectedCampaigns] = useState([]); // State for selected campaign IDs

    const handleFilterChange = (event) => {
        setStatusFilter(event.target.value);
    };

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
                campaignIds: selectedCampaigns,
            });
            setMessage('');
            setSelectedCampaigns([]);
            setDialogOpen(false);
            toast.success('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
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
        setSelectedCampaigns([])
        setMessages([])
        setMessagesOther([])
    };

    const handleCheckboxChange = (campaignId) => {
        setSelectedCampaigns(prev => (prev === campaignId ? null : campaignId));
        setMessages([])
        setMessagesOther([])
        fetchMessages(selectedInfluencer?._id, campaignId)
        fetchMessagesOther(selectedInfluencer?._id, campaignId)
    };

    const filteredInfluencers = statusFilter
        ? influencerData.filter(influencer => influencer.status === statusFilter)
        : influencerData;


    const fetchMessages = async (influencerId, campaignId) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`${api_url}/api/messages/message-brand/${influencerId}/${campaignId}`);
            setMessages(response.data);
        } catch (error) {
            setError('No Messages Found');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const fetchMessagesOther = async (influencerId, campaignId) => {


        try {
            const response = await axios.get(`${api_url}/api/messages/message-influencer/${influencerId}/${campaignId}`);
            setMessagesOther(response.data);
        } catch (error) {
            setError('Error fetching messages');
            console.error(error);
        }
    };
    const combinedMessages = [
        ...(Array.isArray(messages?.messages) ? messages.messages : []),
        ...(Array.isArray(messagesOther?.messages) ? messagesOther.messages : [])
    ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    console.log("COmbined messages: ", selectedInfluencer)
    const id = localStorage.getItem('id')

    return (
        <>
            <div>
                <Toaster position="top-right" reverseOrder={false} />
                <MenuComponent open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} />
            </div>
            <Container>
                <div className="my-12 mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Influencers</h6>
                        <div className="flex gap-2 items-center">
                            <h6>Status:</h6>
                            <select
                                value={statusFilter}
                                onChange={handleFilterChange}
                                className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                            >
                                <option value="">All</option>
                                <option value="pending">Pending</option>
                                <option value="Hired">Hired</option>
                            </select>
                        </div>
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
                                {filteredInfluencers?.length > 0 ? (
                                    filteredInfluencers.map((influencer) => (
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
                                    ))) : (
                                    <tr>
                                        <td colSpan="5" className="text-black">
                                            <NoFound />
                                        </td>
                                    </tr>)}
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
                                    {
                                        selectedInfluencer?.status !== "pending" && <div className="mt-4">
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
                                                                    disabled={campaign.brandid !== id}
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
                                    }
                                    {
                                        selectedInfluencer?.status !== "pending" && <div className="mt-6 grid grid-cols-1 border p-2 rounded-sm overflow-y-auto h-64 message-overflow">
                                            <div>
                                                <h6>Messages</h6>
                                                <div className="mt-2 flex flex-col gap-2">
                                                    {combinedMessages.length > 0 ? (
                                                        combinedMessages.map((message, index) => (
                                                            <div
                                                                key={index}
                                                                className={`p-2 rounded-md ${message.from === selectedInfluencer?._id ? "bg-green-200 self-end" : "bg-blue-200 self-start"}`}
                                                            >
                                                                <div className="text-sm text-gray-600">{new Date(message.timestamp).toLocaleString()}</div>
                                                                <h6>{message.content}</h6>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div>
                                                            <h6>No messages found</h6>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    {/* Message Form */}
                                    {
                                        selectedInfluencer?.status !== "pending" &&
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

                                    }

                                    {
                                        selectedInfluencer?.status === "pending" && 
                                        <Typography sx={{ margin: "10px 0px" }}>
                                            Messages can be sent to Hired Influencers only
                                        </Typography>
                                    }
                                </>
                            )}
                        </DialogContent>

                        <DialogActions>
                            <button
                                className={`px-4 py-1 rounded-md ${sending || selectedCampaigns?.length === 0 || message?.length === 0
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#4F46E5] text-white'
                                    }`}
                                onClick={handleSendMessage}
                                disabled={sending || selectedCampaigns?.length === 0 || message?.length === 0}
                            >
                                {sending ? 'Sending...' : 'Send Message'}
                            </button>
                            <button className="px-4 py-1 bg-slate-200 text-black rounded-md" onClick={handleCloseDialog} color="primary">
                                Close
                            </button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Container>
        </>
    );
};

export default OrdersInfluencers;
