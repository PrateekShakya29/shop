import React from 'react'
import "./sidebar.css";
import { Link } from "react-router-dom";
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Storefront, Timeline, TrendingUp } from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon'/>
                            Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>
                            Sale
                        </li>
                    </ul> 
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                        <li className="sidebarListItem">
                            <PermIdentity className='sidebarIcon'/>
                            Users
                        </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcon'/>
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className='sidebarIcon'/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul> 
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul> 
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Stuff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul> 
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar