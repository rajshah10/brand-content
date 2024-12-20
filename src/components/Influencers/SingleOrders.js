/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Checkbox, Container, Dialog, InputAdornment, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Avatar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { api_url } from '../../constants';
import toast, { Toaster } from 'react-hot-toast';
import BreadCrumb from '../common/BreadCrumb';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';

const SingleOrders = () => {
    const location = useLocation();
    const fileInputRef = useRef(null);
    const [campaigns, setCampaigns] = useState([])
    const [campaignsInfluencers, setCampaignsForInfluencers] = useState([]);
    const { influencer } = location.state || {};
    const [selectedCampaigns, setSelectedCampaigns] = useState([]);
    const [messages, setMessages] = useState([]);
    const [messagesOther, setMessagesOther] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);
    const [attachments, setAttachments] = useState([]);

    const [openDialog, setOpenDialog] = useState(false);
    const [statusToUpdate, setStatusToUpdate] = useState('');
    const [comment, setComment] = useState('');

    const openStatusDialog = (status) => {
        setStatusToUpdate(status);
        setOpenDialog(true);
        setMessage("")
    };

    const useStyles = makeStyles((theme) => ({
        container: {
            marginTop: "15px",
            // display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease',
            display: (props) => props.isSlid ? 'none' : 'flex',
        },
        buttonContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
        },
        iconButton: {
            transition: 'opacity 0.3s ease',
        },
    }));

    const [isSlid, setIsSlid] = useState(false);
    const classes = useStyles({ isSlid });

    const handleSlide = () => {
        setIsSlid(prev => !prev);
    };

    const combinedMessages = [
        ...(Array.isArray(messages?.messages) ? messages.messages : []),
        ...(Array.isArray(messagesOther?.messages) ? messagesOther.messages : [])
    ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    const [message, setMessage] = useState('');

    const fetchMessages = async (influencerId, campaignId) => {
        setLoading(true);
        try {
            const response = await axios.get(`${api_url}/api/messages/message-brand/${influencerId}/${campaignId}`);
            setMessages(response.data);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    const fetchMessagesOther = async (influencerId, campaignId) => {
        try {
            const response = await axios.get(`${api_url}/api/messages/message-influencer/${influencerId}/${campaignId}`);
            setMessagesOther(response.data);
        } catch (error) {
        }
    };

    const handleCheckboxChange = (campaignId) => {
        setSelectedCampaigns(prev => (prev === campaignId ? null : campaignId));
        setMessages([])
        setMessagesOther([])
        if (!selectedCampaigns?.includes(campaignId)) {
            fetchMessages(influencer?._id, campaignId)
            fetchMessagesOther(influencer?._id, campaignId)
        }

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
        if (!openDialog) {
            if (!influencer || !message.trim() || !selectedCampaigns.length) return;
        }

        setSending(true);
        try {
            const formData = new FormData();
            formData.append('from', selectedCampaigns);
            formData.append('to', influencer._id);
            formData.append('content', message);
            if (openDialog) {
                formData.append('status', statusToUpdate);
            }

            attachments.forEach((file, index) => {
                formData.append(`attachments`, file);
            });

            await axios.post(`${api_url}/api/messages/send`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setMessage('');
            // setSelectedCampaigns([]);
            setAttachments([]);
            setOpenDialog(false)
            toast.success('Message sent successfully!');
            fetchMessages(selectedCampaigns, influencer._id)
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Failed to send message';
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setSending(false);
        }
    };

    const handleFileChange = (e) => {
        setAttachments([...e.target.files]);
        // Reset the file input value
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const fileNamesArray = attachments.length > 0
        ? Array.from(attachments).map(file => file.name)
        : [];

    useEffect(() => {
        if (campaigns?.length > 0) {
            const influencerDetails = campaigns.find(inf => inf._id === influencer?._id);
            if (influencerDetails) {
                setCampaignsForInfluencers(influencerDetails.campaigns);
            } else {
                setCampaignsForInfluencers([]); // or handle it as you prefer if no match is found
            }
        }
    }, [influencer, campaigns]);
    return (
        <Container maxWidth="xl" className="py-4">
            <div style={{ margin: "10px 20px" }}>
                <BreadCrumb title={"Influencer List"} />
            </div>
            <Toaster position="top-right" reverseOrder={false} />
            {influencer && (
                <div className="flex flex-col lg:flex-row gap-8 px-4">
                    {/* Left Side - Details Section */}

                    <div>
                        <Paper elevation={3} className={`p-6 sm:w-full ${isSlid ? "" : "lg:w-96"}`} >
                            <div className='flex justify-between items-center'>
                                {
                                    !isSlid && <IconButton className={classes.iconButton} onClick={handleSlide}>
                                        <KeyboardArrowLeftIcon />
                                    </IconButton>
                                }
                                {
                                    isSlid && <IconButton className={classes.iconButton} onClick={handleSlide}>
                                        <KeyboardArrowRightIcon />
                                    </IconButton>
                                }
                            </div>
                            <div className={classes.container}>
                                <Typography variant="h5" className="mb-4 font-bold text-gray-800">Influencer Details</Typography>
                                <Avatar sx={{ width: "48px", height: "48px" }} className="mt-4 rounded-full mx-auto mb-4 object-cover" src={influencer.media} alt={""} />
                                <TableContainer >
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-semibold">Name:</TableCell>
                                                <TableCell>{influencer.firstName} {influencer.lastName}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-semibold">Bio:</TableCell>
                                                <TableCell>{influencer.bio}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-semibold">Email:</TableCell>
                                                <TableCell>{influencer.email}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-semibold">Niche:</TableCell>
                                                <TableCell>{influencer.niche.join(', ')}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-semibold">Phone:</TableCell>
                                                <TableCell>{influencer.phoneNumber}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-semibold">Socials:</TableCell>
                                                <TableCell><ul className="list-disc pl-5">
                                                    {influencer.socialMediaLinks.map(link => (
                                                        <li key={link.id}>
                                                            <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                                {link.link.split('/')[2]}: {link.followerCount}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </div>
                        </Paper>
                    </div>

                    {/* Right Side - Messages and Campaigns Section */}
                    <div className={`w-full`}>
                        <Paper elevation={3} className="p-6">
                            {/* <Typography variant="h5" className="mb-4 font-bold text-gray-800">Campaigns and Messages</Typography> */}

                            {influencer?.status !== "pending" && (
                                <div className="mb-6">
                                    <Typography variant="h6" gutterBottom className="font-semibold">Campaigns</Typography>
                                    <TableContainer>
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
                                    </TableContainer>
                                </div>
                            )}

                            {combinedMessages?.length > 0 && influencer?.status !== "pending" && (
                                <div className="mb-6">
                                    <Typography variant="h6" gutterBottom className="font-semibold">Messages</Typography>
                                    <div className="h-96 overflow-y-auto border rounded-md p-4">
                                        {combinedMessages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`p-3 rounded-lg mb-2 ${message.from === influencer?._id ? "bg-green-100 ml-auto" : "bg-blue-100"} max-w-[80%]`}
                                            >
                                                <Typography variant="caption" className="text-gray-600">
                                                    {new Date(message.timestamp).toLocaleString()}
                                                </Typography>
                                                <Typography variant="body2">{message.content}</Typography>
                                                {message.attachments && message.attachments.length > 0 && (
                                                    <div className="mt-2">
                                                        {message.attachments.map((file, idx) => (
                                                            <div key={idx} className="mt-1">
                                                                {file.endsWith('.mp4') || file.endsWith('.mov') ? (
                                                                    <video width="240" height="180" controls className="rounded">
                                                                        <source src={file} type="video/mp4" />
                                                                        Your browser does not support the video tag.
                                                                    </video>
                                                                ) : (
                                                                    <img
                                                                        className="cursor-pointer rounded max-w-full h-auto"
                                                                        onClick={() => window.open(file, '_blank')}
                                                                        src={file}
                                                                        alt="attachment"
                                                                    />
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {influencer?.status !== "pending" && !openDialog && (
                                <div className="mb-4">
                                    <TextField
                                        label="Message"
                                        multiline
                                        maxRows={4}
                                        fullWidth
                                        variant="outlined"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IconButton
                                                        component="label"
                                                        color="primary"
                                                    >
                                                        <AttachFileIcon />
                                                        <input
                                                            ref={fileInputRef}
                                                            type="file"
                                                            hidden
                                                            multiple
                                                            onChange={handleFileChange}
                                                        />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        color="primary"
                                                        disabled={sending || selectedCampaigns?.length === 0 || message?.length === 0}
                                                        onClick={handleSendMessage}
                                                    >
                                                        <SendIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </div>
                            )}
                            {fileNamesArray.length > 0 && (
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    style={{ marginTop: '8px', whiteSpace: 'pre-line' }} // Ensure new lines are respected
                                >
                                    {fileNamesArray.join('\n')}
                                </Typography>
                            )}

                            {influencer?.status === "pending" && (
                                <Typography variant="body1" className="my-4 text-red-500">
                                    Messages can be sent to Hired Influencers only
                                </Typography>
                            )}

                            <div className="flex flex-wrap justify-center gap-4 mb-4">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={sending || selectedCampaigns?.length === 0}
                                    onClick={() => openStatusDialog('Partially Approved')}
                                >
                                    Partially Approve
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={sending || selectedCampaigns?.length === 0}
                                    onClick={() => openStatusDialog('Approved')}
                                >
                                    Approve
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={sending || selectedCampaigns?.length === 0}
                                    onClick={() => openStatusDialog('Closed')}
                                >
                                    Close
                                </Button>
                            </div>

                            {/* {!openDialog && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={handleSendMessage}
                                    disabled={sending || selectedCampaigns?.length === 0 || message?.length === 0}
                                >
                                    {sending ? 'Sending...' : 'Send Message'}
                                </Button>
                            )} */}
                        </Paper>
                    </div>
                </div>
            )}

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Add Comment</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Comment"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setOpenDialog(false); setMessage("") }}>Cancel</Button>
                    <Button onClick={handleSendMessage} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default SingleOrders
