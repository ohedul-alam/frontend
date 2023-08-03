import {React, useState} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import UserListHeader from './UserListHeader';
import UserList from './UserList';
import './custom.css';

export default function UserLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const flipState = ()=>{
    if(showSidebar){
      setShowSidebar(false);
    }else{
      setShowSidebar(true);
    }
    
  }

  //const offsets = ["/apps/file-manager", "/apps/email", "/apps/calendar"];
  //const { pathname } = useLocation();
  //const bc = document.body.classList;

  // set sidebar to offset
//   (offsets.includes(pathname)) ? bc.add("sidebar-offset") : bc.remove("sidebar-offset");
  //bc.add("sidebar-offset")

  // auto close sidebar when switching pages in mobile
  //bc.remove("sidebar-show");

  // scroll to top when switching pages
  //window.scrollTo(0, 0);

  return (
    <div className={showSidebar? 'sidebar-show':''}>
 
      <Sidebar />
      <UserListHeader flipState={flipState}/>
      <UserList />
      {/* <Outlet /> */}

    </div>
   
  )
}