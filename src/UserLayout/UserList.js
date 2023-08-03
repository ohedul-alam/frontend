import React from "react";
import './custom.css';
function UserList() {
    return (
        <div className="main main-app p-3 p-lg-4 d-flex flex-column">
      <div className="d-md-flex align-items-center justify-content-between mb-4">
        <div>
          <ol className="breadcrumb fs-sm mb-1">
            <li className="breadcrumb-item"><a href="#">ホーム</a></li>
            <li className="breadcrumb-item active" aria-current="page">ユーザ一覧</li>
          </ol>
          <h4 className="main-title mb-0">ユーザを管理しましょう</h4>
        </div>
      </div>

      <div className="row g-3 mb-5">
        <div className="col-12">
          <div className="card card-one">
            <div className="card-header">
              <h6 className="card-title">ユーザ一覧</h6>
              <div className="ms-auto">
                <a className="btn btn-primary btn-sm px-4" href="../admin/user-edit.html">
                  <span>新規</span>
                </a>
              </div>

              <div className="dropdown-file ms-3">
                <a href="" className="dropdown-link" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-2-fill"></i></a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="" className="dropdown-item download"><i className="ri-download-2-line"></i> CSVダウンロード</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-agent">
                  <thead>
                    <tr>
                      <th style={{width:'2rem'}}>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="ck0" />
                          <label className="form-check-label" for="ck0"></label>
                        </div>
                      </th>
                      <th  style={{width:'auto'}}>ユーザ名</th>
                      <th  style={{width:'20rem'}}>参加ワークスペース</th>
                      <th  style={{width:'6rem'}}>作成日</th>
                      <th  style={{width:'6rem'}}>更新日</th>

                      <th  style={{width:'3rem'}}>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="ck1" />
                          <label className="form-check-label" for="ck1"></label>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar"><img src="../../assets/img/img6.jpg" alt="" /></div>
                          <div>
                            <h6 className="mb-0">谷津 勝弘</h6>
                            <span className="fs-xs text-secondary">yatsu@digital-knowledge.co.jp</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avater-list">
                          <span className="me-2 fs-xs">1 ワークスペース</span>
                          <ul>
                            <li><div className="avatar" data-bs-toggle="tooltip" title="株式会社デジタル・ナレッジ"><span className="avatar-initial bg-gray-700">DK</span></div></li>
                          </ul>
                        </div>
                      </td>
                      
                      <td><span className="ff-numerals fs-xs">2023/06/15</span></td>
                      <td><span className="ff-numerals fs-xs">2023/06/20</span></td>

                      <td>
                        
                        <div className="d-flex justify-content-end">
                          <a href="" className="link-more" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-2-fill"></i></a>
                          <div className="dropdown-menu dropdown-menu-end" >
                            <a href="" className="dropdown-item"><i className="ri-download-2-line"></i> 編集</a>
                            <a href="" className="dropdown-item"><i className="ri-download-2-line"></i> 削除</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="ck1" />
                          <label className="form-check-label" for="ck1"></label>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar"><img src="../../assets/img/img6.jpg" alt="" /></div>
                          <div>
                            <h6 className="mb-0">谷津 勝弘</h6>
                            <span className="fs-xs text-secondary">yatsu@digital-knowledge.co.jp</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avater-list">
                          <span className="me-2 fs-xs">2 ワークスペース</span>
                          <ul>
                            <li><div className="avatar" data-bs-toggle="tooltip" title="株式会社デジタル・ナレッジ"><span className="avatar-initial bg-gray-700">DK</span></div></li>
                            <li><div className="avatar" data-bs-toggle="tooltip" title="株式会社情報企画"><span className="avatar-initial bg-gray-700">情企</span></div></li>
                          </ul>
                        </div>
                      </td>
                      
                      <td><span className="ff-numerals fs-xs">2023/06/15</span></td>
                      <td><span className="ff-numerals fs-xs">2023/06/20</span></td>

                      <td>
                        <div className="d-flex justify-content-end">
                          <a href="" className="link-more"><i className="ri-more-2-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="ck1" />
                          <label className="form-check-label" for="ck1"></label>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar"><img src="../../assets/img/img6.jpg" alt="" /></div>
                          <div>
                            <h6 className="mb-0">谷津 勝弘</h6>
                            <span className="fs-xs text-secondary">yatsu@digital-knowledge.co.jp</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avater-list">
                          <span className="me-2 fs-xs">1 ワークスペース</span>
                          <ul>
                            <li><div className="avatar" data-bs-toggle="tooltip" title="中央出版株式会社"><img src="../../assets/img/workspace1.png" alt=""/></div></li>
                          </ul>
                        </div>
                      </td>
                      
                      <td><span className="ff-numerals fs-xs">2023/06/15</span></td>
                      <td><span className="ff-numerals fs-xs">2023/06/20</span></td>

                      <td>
                        <div className="d-flex justify-content-end">
                          <a href="" className="link-more"><i className="ri-more-2-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="ck1" />
                          <label className="form-check-label" for="ck1"></label>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar"><img src="../../assets/img/img6.jpg" alt="" /></div>
                          <div>
                            <h6 className="mb-0">谷津 勝弘</h6>
                            <span className="fs-xs text-secondary">yatsu@digital-knowledge.co.jp</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avater-list">
                          <span className="me-2 fs-xs">1 ワークスペース</span>
                          <ul>
                            <li><div className="avatar" data-bs-toggle="tooltip" title="株式会社デジタル・ナレッジ"><span className="avatar-initial bg-gray-700">DK</span></div></li>
                          </ul>
                        </div>
                      </td>
                      
                      <td><span className="ff-numerals fs-xs">2023/06/15</span></td>
                      <td><span className="ff-numerals fs-xs">2023/06/20</span></td>

                      <td>
                        <div className="d-flex justify-content-end">
                          <a href="" className="link-more"><i className="ri-more-2-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="ck1" />
                          <label className="form-check-label" for="ck1"></label>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar"><img src="../../assets/img/img6.jpg" alt="" /></div>
                          <div>
                            <h6 className="mb-0">谷津 勝弘</h6>
                            <span className="fs-xs text-secondary">yatsu@digital-knowledge.co.jp</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avater-list">
                          <span className="me-2 fs-xs">3 ワークスペース</span>
                          <ul>
                            <li><div className="avatar" data-bs-toggle="tooltip" title="株式会社デジタル・ナレッジ"><span className="avatar-initial bg-gray-700">DK</span></div></li>
                            <li><div className="avatar" data-bs-toggle="tooltip" title="中央出版株式会社"><img src="../../assets/img/workspace1.png" alt=""/></div></li>
                            <li><div className="avatar" data-bs-toggle="tooltip" title="株式会社情報企画"><span className="avatar-initial bg-gray-700">情企</span></div></li>
                          </ul>
                        </div>
                      </td>
                      
                      <td><span className="ff-numerals fs-xs">2023/06/15</span></td>
                      <td><span className="ff-numerals fs-xs">2023/06/20</span></td>

                      <td>
                        <div className="d-flex justify-content-end">
                          <a href="" className="link-more"><i className="ri-more-2-fill"></i></a>
                        </div>
                      </td>
                    </tr>

                    
                  </tbody>
                </table>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="fs-xs">全 191 件中 1 件 〜 50 件を表示</span>
                  <nav>
                    <ul className="pagination mb-0 justify-content-end fs-xs">
                      <li className="page-item disabled"><a className="page-link" href="#">前へ</a></li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">次へ</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
       
            </div>
     
          </div>

        </div>

      </div>

      <div className="main-footer mt-auto">
        <span>&copy; 2023. tidybook. All Rights Reserved.</span>

      </div>

    </div>

    
    );
  }
  
  export default UserList;
  