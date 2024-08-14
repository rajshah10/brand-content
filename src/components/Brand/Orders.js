import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Skeleton, Dialog, DialogTitle, DialogContent, IconButton, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, DialogActions, TextField } from "@mui/material";
import Header from "../common/Header";
import MenuComponent from "../common/MenuComponent";
import { useNavigate } from "react-router";
import { api_url } from "../../constants";
import CloseIcon from "@mui/icons-material/Close";
import NoFound from "../common/NoFound";
import toast, { Toaster } from "react-hot-toast";

const Orders = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [sending, setSending] = useState(false);
    const [orders, setOrders] = useState([]);
    const [messages, setMessages] = useState([]);
    const [messagesOther, setMessagesOther] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const influencerId = localStorage.getItem('id');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const openMenu = Boolean(anchorEl);

    const fetchOrders = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`${api_url}/api/campaign/${influencerId}/campaigns`);
            setOrders(response.data);
        } catch (error) {
            setError('Error fetching data');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMessages = async (influencerId, campaignId) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`${api_url}/api/messages/message-influencer/${influencerId}/${campaignId}`);
            setMessages(response.data);
        } catch (error) {
            setError('Error fetching messages');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    console.log("Messages", messages)

    useEffect(() => {
        fetchOrders();
    }, [influencerId]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCampaignClick = (campaign) => {
        setSelectedCampaign(campaign);
        fetchMessages(influencerId, campaign?._id);
        fetchMessagesOther(influencerId, campaign?._id)
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        setSelectedCampaign(null);
        setMessages([]);
        setMessagesOther()
    };

    const fromId = localStorage.getItem("id")
    const handleSendMessage = async () => {
        if (!selectedCampaign || !message.trim()) return;

        setSending(true);
        try {
            await axios.post(`${api_url}/api/messages/sendbrand`, {
                from: fromId,
                to: selectedCampaign._id,
                content: message,
                campaignIds: null,
            });
            setMessage('');
            setDialogOpen(false);
            toast.success('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setSending(false);
        }
    };
    const fetchMessagesOther = async (influencerId, campaignId) => {

        setError(null);

        try {
            const response = await axios.get(`${api_url}/api/messages/message-brand/${influencerId}/${campaignId}`);
            setMessagesOther(response.data);
        } catch (error) {
            setError('No Messages Found');
            console.error(error);
        }
    };

    const combinedMessages = [
        ...(Array.isArray(messages?.messages) ? messages.messages : []),
        ...(Array.isArray(messagesOther?.messages) ? messagesOther.messages : [])
    ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    return (
        <>
            <div>
                <Toaster position="top-right" reverseOrder={false} />
                <MenuComponent open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} search={false} />
            </div>
            <Container>
                <div className="my-12 mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Orders</h6>
                    </div>

                    {loading && (
                        <div className="relative overflow-x-auto my-6">
                            <table className="w-full text-sm text-left text-gray-500 table-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Order Id</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Company Name</th>
                                        <th scope="col" className="px-6 py-3">Compensation</th>
                                        <th scope="col" className="px-6 py-3">Deadlines</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(1)].map((_, index) => (
                                        <tr className="bg-white border-b" key={index}>
                                            <td className="px-6 py-4"><Skeleton width="100px" height={20} /></td>
                                            <td className="px-6 py-4"><Skeleton width="150px" height={20} /></td>
                                            <td className="px-6 py-4"><Skeleton width="80px" height={20} /></td>
                                            <td className="px-6 py-4"><Skeleton width="100px" height={20} /></td>
                                            <td className="px-6 py-4"><Skeleton width="120px" height={20} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}


                    {!loading && (
                        <div className="relative overflow-x-auto my-6">
                            <table className="w-full text-sm text-left text-gray-500 table-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Order Id</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Company Name</th>
                                        <th scope="col" className="px-6 py-3">Compensation</th>
                                        <th scope="col" className="px-6 py-3">Deadlines</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders?.length > 0 ? (
                                        orders.map((order, index) => (
                                            <tr className="bg-white border-b cursor-pointer" key={index} onClick={() => handleCampaignClick(order)}>
                                                <td className="px-6 py-4 text-slate-500">{order._id}</td>
                                                <td className="px-6 py-4 font-medium text-slate-500 whitespace-nowrap">{order.COEmail}</td>
                                                <td className="px-6 py-4 text-slate-500">{order.companyName}</td>
                                                <td className="px-6 py-4 text-slate-500">{order.compensation}</td>
                                                <td className="px-6 py-4 text-slate-500">{order.deadlines}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-black">
                                                <NoFound />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>
                    )}

                    <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="md">
                        <DialogTitle>
                            Campaign Details
                        </DialogTitle>
                        <DialogContent >
                            {selectedCampaign && (
                                <div>
                                    <TableContainer component={Paper}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell colSpan={2} align="left">
                                                        <h4>Campaign Details</h4>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><strong>Order Id:</strong></TableCell>
                                                    <TableCell>{selectedCampaign._id}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Email:</strong></TableCell>
                                                    <TableCell>{selectedCampaign.COEmail}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Company Name:</strong></TableCell>
                                                    <TableCell>{selectedCampaign.companyName}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Compensation:</strong></TableCell>
                                                    <TableCell>{selectedCampaign.compensation}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Deadlines:</strong></TableCell>
                                                    <TableCell>{selectedCampaign.deadlines}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {
                                        combinedMessages?.length > 0 && <div className="mt-6 grid grid-cols-1 border p-2 rounded-sm overflow-y-auto h-64 message-overflow">
                                            <div>
                                                <h6>Messages</h6>
                                                <div className="mt-2 flex flex-col gap-2">
                                                    {combinedMessages.length > 0 ? (
                                                        combinedMessages.map((message, index) => (
                                                            <div
                                                                key={index}
                                                                className={`p-2 rounded-md ${message.from === selectedCampaign?._id ? "bg-green-200 self-end" : "bg-blue-200 self-start"}`}
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
                                    <div className="mt-6">
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            label="Write a message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <button className={`px-4 py-1 rounded-md ${sending || message?.length === 0
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-[#4F46E5] text-white'
                                }`} onClick={handleSendMessage} color="primary" >
                                {sending ? 'Sending...' : 'Send Message'}
                            </button>
                            <button className="px-4 py-1 bg-slate-200 text-black rounded-md" onClick={handleDialogClose} color="primary">
                                Close
                            </button>
                        </DialogActions>

                    </Dialog>
                </div>
            </Container>
        </>
    );
};

export default Orders;
