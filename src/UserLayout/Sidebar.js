import React from "react";
import './custom.css';
function Sidebar() {
    return (
        <div className="sidebar">
      <div className="sidebar-header">
        <a href="../" className="sidebar-logo">tidybook</a>
      </div>
    
      <div id="sidebarMenu" className="sidebar-body">
        <div className="nav-group show">
          <a href="#" className="nav-label">管理者メニュー</a>
          <ul className="nav nav-sidebar">
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-pie-chart-line"></i> <span>ダッシュボード</span></a>
            </li>
            <li className="nav-item">
              <a href="../admin/workspace-list.html" className="nav-link"><i className="ri-building-line"></i> <span>ワークスペース管理</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link active"><i className="ri-group-fill"></i> <span>ユーザ管理</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-message-2-line"></i> <span>おしらせ管理</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-file-word-2-line"></i> <span>Wiki</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-equalizer-line"></i> <span>全体設定</span></a>
            </li>
            
          </ul>
        </div>

        <div className="nav-group">
          <a href="#" className="nav-label">ワークスペースメニュー</a>
          <ul className="nav nav-sidebar">
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-pie-chart-line"></i> <span>ダッシュボード</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-group-line"></i> <span>ユーザ管理</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-admin-line"></i> <span>ロール設定</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-group-2-line"></i> <span>チーム管理</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-book-3-line"></i> <span>講座管理</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-line-chart-line"></i> <span>講座受講状況</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-folders-line"></i> <span>コンテンツ管理</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-message-2-line"></i> <span>おしらせ管理</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-file-word-2-line"></i> <span>Wiki</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-wallet-3-line"></i> <span>契約プラン</span></a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link"><i className="ri-equalizer-line"></i> <span>ワークスペース設定</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-footer-top">
          <div className="sidebar-footer-thumb">
            <img src="../../assets/img/img1.jpg" alt="" />
          </div>
      
          <div className="sidebar-footer-body">
            <h6><a href="../pages/profile.html">久野 雅則</a></h6>
            <p>システム管理者</p>
          </div>
    
          <a id="sidebarFooterMenu" href="" className="dropdown-link"><i className="ri-arrow-down-s-line"></i></a>
        </div>
   
        <div className="sidebar-footer-menu">
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

    
    );
  }
  
  export default Sidebar;
  