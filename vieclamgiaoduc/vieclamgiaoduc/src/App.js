import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home_user from './components/user/page_home/Homeuser';
import User_login from './components/user/page_login/User_login';
import User_sign from './components/user/page_sign/User_sign';
import CreateCV from './components/cv/createcv';
import User_jobs from './components/user/page_jobs/User_jobs';
import Search_job from './components/jobs/Search_job';
import Jobdesc_Applyjob from "./components/jobs/Job_desc/Jobdesc_Applyjob"
import Registercandidate from './components/employer/register/Registercandidate';
import Signcandidate from './components/employer/login/Signcandidate';
import DashboardCandi from './components/employer/dashboard/DashboardCandi';
import Dashboardadmin from './components/admin/Dashboardadmin/Dashboardadmin';
import Loginadmin from './components/admin/Loginadmin/Loginadmin';
import store from './components/Redux/store';
import { Provider } from 'react-redux';


import Quanlycv from './components/user/quanlycv/Quanlycv';
import ThongKeDuLieu from './components/user/ThongKeDuLieu/ThongKeDuLieu';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
         <Routes>
                 
                  < Route path='/' element={<Home_user/>}/>
                 
                  <Route path='/quan-ly-cv' element={<Quanlycv/>}/>
                  < Route path='/user/login' element={<User_login/>}/>
                  < Route path='/user/sign' element={< User_sign />}/>
                  < Route path='/thong-ke' element={<ThongKeDuLieu />}/>

                  < Route path='/viec-lam-giao-duc/:jobs' element={< User_jobs />}/>


                  < Route path='/tao-cv' element={< CreateCV/>}/>
                    <Route exact path='/tim-viec' element={<Search_job />} />
                  < Route  path='/tim-viec/:slug' element={< Search_job/>}  />
                  < Route  path='/viec-lam' element={< Jobdesc_Applyjob/>}  />
                  < Route  path='/viec-lam/:slug' element={< Jobdesc_Applyjob/>}  />

                  <Route path='/app/sign' element={<Registercandidate/>}/>
                  <Route path='/app/login' element={<Signcandidate/>}/>
                  <Route path='/app-employer/:slug' element={<DashboardCandi/>}/>
          


                  {/* admin */}
                  <Route path='/admin/:slug' element={<Dashboardadmin/>}/>
                 
                  <Route path='login/admin' element={<Loginadmin/>}/>
                  <Route path='/admin/dashboard/login/admin' element={<Loginadmin/>}/>




                  {/* <Route path="/employer/login" />; */}
         </Routes>
    </div>
    </Provider>
  );
}

export default App;
