import React from "react";
import './custom.css';
function MainHeader({flipState}) {
    return (
        <div className="header-main px-3 px-lg-4">
        <a id="menuSidebar" href="#" className="menu-link me-3 me-lg-4" onClick={e=>flipState()}><i className="ri-menu-2-fill"></i></a>
  
        <div className="form-search me-auto">
          <input type="text" className="form-control" placeholder="全体からキーワード検索" />
          <i className="ri-search-line"></i>
        </div>
     
  
        <div className="dropdown dropdown-skin">
          <a href="" className="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i className="ri-settings-3-line"></i></a>
          <div className="dropdown-menu dropdown-menu-end mt-10-f">
            <label>Skin Mode</label>
            <nav id="skinMode" className="nav nav-skin">
              <a href="" className="nav-link active">Light</a>
              <a href="" className="nav-link">Dark</a>
            </nav>
            <hr />
            <label>Sidebar Skin</label>
            <nav id="sidebarSkin" className="nav nav-skin">
              <a href="" className="nav-link active">Default</a>
              <a href="" className="nav-link">Prime</a>
              <a href="" className="nav-link">Dark</a>
            </nav>
            <hr />
            <label>Direction</label>
            <nav id="layoutDirection" className="nav nav-skin">
              <a href="" className="nav-link active">LTR</a>
              <a href="" className="nav-link">RTL</a>
            </nav>
          </div>
   
        </div>
 
  
        <div className="dropdown dropdown-notification ms-3 ms-xl-4">
          <a href="" className="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"><small>3</small><i className="ri-notification-3-line"></i></a>
          <div className="dropdown-menu dropdown-menu-end mt-10-f me--10-f">
            <div className="dropdown-menu-header">
              <h6 className="dropdown-menu-title">Notifications</h6>
            </div>
        
            <ul className="list-group">
              <li className="list-group-item">
                <div className="avatar online"><img src="../../assets/img/img10.jpg" alt="" /></div>
                <div className="list-group-body">
                  <p><strong>Dominador Manuel</strong> and <strong>100 other people</strong> reacted to your comment "Tell your partner that...</p>
                  <span>Aug 20 08:55am</span>
                </div>
            
              </li>
              <li className="list-group-item">
                <div className="avatar online"><img src="../../assets/img/img11.jpg" alt="" /></div>
                <div className="list-group-body">
                  <p><strong>Angela Ighot</strong> tagged you and <strong>9 others</strong> in a post.</p>
                  <span>Aug 18 10:30am</span>
                </div>
               
              </li>
              <li className="list-group-item">
                <div className="avatar"><span className="avatar-initial bg-primary">a</span></div>
                <div className="list-group-body">
                  <p>New listings were added that match your search alert <strong>house for rent</strong></p>
                  <span>Aug 15 08:10pm</span>
                </div>
               
              </li>
              <li className="list-group-item">
                <div className="avatar online"><img src="../../assets/img/img14.jpg" alt="" /></div>
                <div className="list-group-body">
                  <p>
                    Reminder: <strong>Jerry Cuares</strong> invited you to like <strong>Cuares Surveying Services</strong>. <br /><a href="">Accept</a> or
                    <a href="">Decline</a>
                  </p>
                  <span>Aug 14 11:50pm</span>
                </div>
               
              </li>
              <li className="list-group-item">
                <div className="avatar online"><img src="../../assets/img/img15.jpg" alt="" /></div>
                <div className="list-group-body">
                  <p><strong>Dyanne Aceron</strong> reacted to your post <strong>King of the Bed</strong>.</p>
                  <span>Aug 10 05:30am</span>
                </div>
               
              </li>
            </ul>
            <div className="dropdown-menu-footer"><a href="">Show all Notifications</a></div>
          </div>
          
        </div>
        
        <div className="dropdown dropdown-profile ms-3 ms-xl-4">
          <a href="" className="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"
            ><div className="avatar online"><img src="../../assets/img/img1.jpg" alt="" /></div
          ></a>
          <div className="dropdown-menu dropdown-menu-end mt-10-f">
            <div className="dropdown-menu-body">
              <div className="avatar avatar-xl online mb-3"><img src="../../assets/img/img1.jpg" alt="" /></div>
              <h5 className="mb-1 text-dark fw-semibold">久野 雅則</h5>
              <p className="fs-sm text-secondary">システム管理者</p>
  
              <nav className="nav">
                <a href=""><i className="ri-edit-2-line"></i> アカウント設定</a>
              </nav>
              <hr />
              <nav className="nav">
                <a href=""><i className="ri-question-line"></i> ヘルプページ</a>
                <a href=""><i className="ri-logout-box-r-line"></i> ログアウト</a>
              </nav>
            </div>
           
          </div>
         
        </div>
        
      </div>
    
    );
  }
  
  export default MainHeader;
  