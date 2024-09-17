import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { api_url } from '../../constants';
import toast, { Toaster } from 'react-hot-toast';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { Container, IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import BreadCrumb from '../common/BreadCrumb';
import { makeStyles } from '@mui/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SingleOrderInfluencer = () => {
    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [messagesOther, setMessagesOther] = useState([]);
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const influencerId = localStorage.getItem('id');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [attachments, setAttachments] = useState([]);
    const fileInputRef = useRef(null);


    const location = useLocation();
    const { campaign } = location.state || {};

    const fromId = localStorage.getItem("id")

    const fetchMessages = async (influencerId, campaignId) => {
        setLoading(true);
        try {
            const response = await axios.get(`${api_url}/api/messages/message-influencer/${influencerId}/${campaignId}`);
            setMessages(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMessagesOther = async (influencerId, campaignId) => {
        try {
            const response = await axios.get(`${api_url}/api/messages/message-brand/${influencerId}/${campaignId}`);
            setMessagesOther(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMessages(influencerId, campaign?._id)
        fetchMessagesOther(influencerId, campaign?._id)
    }, [influencerId, campaign?._id])


    const handleSendMessage = async () => {
        if (!campaign || !message.trim()) return;
        setError('');

        setSending(true);
        try {
            const formData = new FormData();
            formData.append('from', fromId);
            formData.append('to', campaign?._id);
            formData.append('content', message);

            attachments.forEach((file, index) => {
                formData.append(`attachments`, file);
            });
            await axios.post(`${api_url}/api/messages/sendbrand`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage('');
            setAttachments([]);
            toast.success('Message sent successfully!');
            fetchMessagesOther(fromId, campaign?._id)
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Failed to send message';
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setSending(false);
        }
    };
    const combinedMessages = [
        ...(Array.isArray(messages?.messages) ? messages.messages : []),
        ...(Array.isArray(messagesOther?.messages) ? messagesOther.messages : [])
    ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    const handleFileChange = (e) => {
        setAttachments([...e.target.files]);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const fileNamesArray = attachments.length > 0
        ? Array.from(attachments).map(file => file.name)
        : [];

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

    return (
        <Container maxWidth="xl" className="py-4">
            <Toaster position="top-right" reverseOrder={false} />
            <div style={{ margin: "10px 20px" }}>
                <BreadCrumb title={"Orders"} />
            </div>
            <div className="flex flex-col lg:flex-row gap-8 px-4">
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
                        {campaign && (
                            <div>
                                <TableContainer >
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell colSpan={2} align="left">
                                                    <Typography variant="h5" className="mb-4 font-bold text-gray-800">Campaign Details</Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell><strong>Order Id:</strong></TableCell>
                                                <TableCell>{campaign._id}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><strong>Email:</strong></TableCell>
                                                <TableCell>{campaign.COEmail}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><strong>Company Name:</strong></TableCell>
                                                <TableCell>{campaign.companyName}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><strong>Compensation:</strong></TableCell>
                                                <TableCell>{campaign.compensation}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><strong>Deadlines:</strong></TableCell>
                                                <TableCell>{campaign.deadlines}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </div>

                        )}
                    </div>
                </Paper>

                <div className={`w-full`}>
                    <Paper elevation={3} className="p-6">
                        {
                            combinedMessages?.length > 0 && <div className="mt-6 grid grid-cols-1 border p-2 rounded-sm overflow-y-auto h-96 message-overflow">
                                <div>
                                    <h6>Messages</h6>
                                    <div className="mt-2 flex flex-col gap-2">
                                        {combinedMessages.length > 0 ? (
                                            combinedMessages.map((message, index) => (
                                                <div
                                                    key={index}
                                                    className={`p-2 rounded-md ${message.from === campaign?._id ? "bg-green-200 self-end" : "bg-blue-200 self-start"}`}
                                                >
                                                    <div className="text-sm text-gray-600">{new Date(message.timestamp).toLocaleString()}</div>
                                                    <h6>{message.content}</h6>
                                                    {message.attachments && message.attachments.length > 0 && (
                                                        <div className="my-2">
                                                            {message.attachments.map((file, idx) => (
                                                                <div key={idx}>
                                                                    {file.endsWith('.mp4') || file.endsWith('.mov') ? (
                                                                        <video width="320" height="240" controls>
                                                                            <source src={file} type="video/mp4" />
                                                                            Your browser does not support the video tag.
                                                                        </video>
                                                                    ) : (
                                                                        <img className='cursor-pointer' onClick={() => window.open(file, '_blank')} src={file} alt="attachment" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
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
                                maxRows={4}
                                variant="outlined"
                                label="Write a message"
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
                                                disabled={sending || message?.length === 0}
                                                onClick={handleSendMessage}
                                            >
                                                <SendIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div>
                        {fileNamesArray.length > 0 && (
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                style={{ marginTop: '8px', whiteSpace: 'pre-line' }} // Ensure new lines are respected
                            >
                                {fileNamesArray.join('\n')}
                            </Typography>
                        )}
                        {/* <div className="my-4">
                            <input type="file" multiple onChange={handleFileChange} />
                        </div> */}
                    </Paper>
                </div>
            </div>

            {/* <button className={`px-4 py-1 rounded-md ${sending || message?.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#4F46E5] text-white'
                }`} onClick={handleSendMessage} color="primary" >
                {sending ? 'Sending...' : 'Send Message'}
            </button> */}
            {/* <button className="px-4 py-1 bg-slate-200 text-black rounded-md"  color="primary">
                Close
            </button> */}
        </Container >
    )
}

export default SingleOrderInfluencer
