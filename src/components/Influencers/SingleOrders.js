/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { api_url } from '../../constants';
import toast, { Toaster } from 'react-hot-toast';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BreadCrumb from '../common/BreadCrumb';

const SingleOrders = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [campaigns, setCampaigns] = useState([])
    const [campaignsInfluencers, setCampaignsForInfluencers] = useState([]);
    const { influencer } = location.state || {};
    const [selectedCampaigns, setSelectedCampaigns] = useState([]);
    const [messages, setMessages] = useState([]);
    const [messagesOther, setMessagesOther] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);

    const combinedMessages = [
        ...(Array.isArray(messages?.messages) ? messages.messages : []),
        ...(Array.isArray(messagesOther?.messages) ? messagesOther.messages : [])
    ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    const [message, setMessage] = useState('');

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

    const handleCheckboxChange = (campaignId) => {
        setSelectedCampaigns(prev => (prev === campaignId ? null : campaignId));
        setMessages([])
        setMessagesOther([])
        fetchMessages(influencer?._id, campaignId)
        fetchMessagesOther(influencer?._id, campaignId)
    };

    const id = localStorage.getItem('id')

    const getAllCampaigns = async () => {

        try {
            const response = await axios.get(`${api_url}/api/influencers/campaignOfInfluncers`);
            if (response.data) {
                setCampaigns(response.data);
            }
        } catch (error) {
            console.error('Error fetching campaigns:', error);
        }
    };

    useEffect(() => {
        getAllCampaigns()
    }, [])

    const handleSendMessage = async () => {
        if (!influencer || !message.trim()) return;

        setSending(true);
        try {
            await axios.post(`${api_url}/api/messages/send`, {
                from: selectedCampaigns,
                to: influencer._id,
                content: message,
                campaignIds: selectedCampaigns,
            });
            setMessage('');
            setSelectedCampaigns([]);
            toast.success('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setSending(false);
        }
    };


    useEffect(() => {
        if (campaigns?.length > 0) {
            const influencerDetails = campaigns?.find(influencer => influencer._id === influencer?._id);
            setCampaignsForInfluencers(influencerDetails.campaigns)
        }
    }, [influencer, campaigns]);

    return (
        <Container>
            <div style={{ marginTop: "20px" }}>
                <BreadCrumb title={"Influencer List"}/>
            </div>
            <div className='my-6'>
                <Toaster position="top-right" reverseOrder={false} />
                {influencer && (
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
                                        <TableCell><img className="w-48 h-48" src={influencer.media} alt="Influencer" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Name:</strong></TableCell>
                                        <TableCell>{influencer.firstName} {influencer.lastName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Bio:</strong></TableCell>
                                        <TableCell>{influencer.bio}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Email:</strong></TableCell>
                                        <TableCell>{influencer.email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Niche:</strong></TableCell>
                                        <TableCell>{influencer.niche.join(', ')}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Phone Number:</strong></TableCell>
                                        <TableCell>{influencer.phoneNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Social Media Links:</strong></TableCell>
                                        <TableCell>
                                            <ul>
                                                {influencer.socialMediaLinks.map(link => (
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
                            influencer?.status !== "pending" && <div className="mt-4">
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
                                        {campaignsInfluencers?.map(campaign => (
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
                            combinedMessages?.length > 0 && influencer?.status !== "pending" && <div className="mt-6 grid grid-cols-1 border p-2 rounded-sm overflow-y-auto h-64 message-overflow">
                                <div>
                                    <h6>Messages</h6>
                                    <div className="mt-2 flex flex-col gap-2">
                                        {combinedMessages.length > 0 ? (
                                            combinedMessages.map((message, index) => (
                                                <div
                                                    key={index}
                                                    className={`p-2 rounded-md ${message.from === influencer?._id ? "bg-green-200 self-end" : "bg-blue-200 self-start"}`}
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
                            influencer?.status !== "pending" &&
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
                            influencer?.status === "pending" &&
                            <Typography sx={{ margin: "10px 0px" }}>
                                Messages can be sent to Hired Influencers only
                            </Typography>
                        }
                    </>
                )}



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


            </div>
        </Container>
    )
}

export default SingleOrders
