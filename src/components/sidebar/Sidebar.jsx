import React, { useContext } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { DarkModeContext } from "../context/darkModeContext";
const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Raiadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <p className="title">MAIN</p>
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <AddBusinessIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <BusinessCenterIcon className="icon" />
            <span>Order</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <EqualizerIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOptions" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
    </div>
  );
};

export default Sidebar;
