import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BreadCrumb = ({ title }) => {
    return (
        <div className='mb-6'>
            <Breadcrumbs aria-label="breadcrumb">

                {
                    title && <Link
                        underline="hover"
                        color="inherit"
                        to={title !== "Orders" ? "/orders-influencer" : "/orders"}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: "13px" }} /> {title ? title : "Brand Home"}
                    </Link>
                }
                {
                    !title && <Link
                        underline="hover"
                        color="inherit"
                        to={title ? "/Influencer" : "/brands"}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: "13px" }} /> {title ? title : "Brand Home"}
                    </Link>
                }
                {/* <Typography sx={{ color: 'text.primary' }}></Typography> */}
            </Breadcrumbs>
        </div>
    )
}

export default BreadCrumb
