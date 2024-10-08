import React from "react";
import ReactDom from "react-dom/client";
import '../../css/app.css';
import AdminDashboard from "./AdminDashboard";
import Dashboard from "./Dashboard";

if(document.getElementById('admin-main')){
    ReactDom.createRoot(document.getElementById('admin-main')).render(
        <React.StrictMode>
            <AdminDashboard />
        </React.StrictMode>
    )
}else if(document.getElementById('main')){
    const rootUrl = 'http://localhost:8000';
    ReactDom.createRoot(document.getElementById('main')).render(
        <React.StrictMode>
            <Dashboard rootUrl={rootUrl} />
        </React.StrictMode>
    )
}