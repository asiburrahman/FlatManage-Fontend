import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  

import Root from "../lyout/Root";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import PrivetRoutes from "../Routes/PrivetRoutes";
import Error from "../component/Error/Error";
import Loading from "../component/Loading/Loading";
import LoginProtectedRouts from "../Routes/LoginProtectedRouts";
import MyRequestedFood from "../component/Pages/MyRequestedFood";
import MyPostedFood from "../component/Pages/MyPostedFood";
import Contact from "../component/Pages/Contact";
import About from "../component/Pages/About";
import DashboardLayout from "../lyout/DashboardLayout";
import Dashboard from "../component/Dashboard/Dashboard";
import Apartment from "../component/Pages/Apartment";
import Announcements from "../component/Pages/Announcements";
import ManageMembers from "../component/Profile/Admin/ManageMembers";
import AgreementRequests from "../component/Profile/Admin/AgreementRequests";
import AdminAnnouncementForm from "../component/Profile/Admin/AdminAnnouncementForm";
  
  const router = createBrowserRouter([
    
    {
      path: "/",
      Component: Root,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            Component: Home,
            hydrateFallbackElement: <Loading></Loading>,
        },
    

        {
          path: '/login',
          element: <LoginProtectedRouts><Login></Login></LoginProtectedRouts>
        },
        {
          path: '/register',
          element: <LoginProtectedRouts><Register></Register></LoginProtectedRouts>
        },

        {
          path:'/apartment',
          Component: Apartment,
          // loader: ()=> fetch('http://localhost:3000/availableFood')
        },
      
        

       
        {
          path: '/contact',
          Component: Contact
    
        },
        {
          path: '/about',
          Component: About
    
        },
         

        
      ]

    },
    {
      path: "/dashboard",
      element: <PrivetRoutes><DashboardLayout></DashboardLayout></PrivetRoutes>,
      errorElement: <Error></Error>,
      children:[

        {
          index: true,
          Component: Dashboard,
          // loader: ()=> fetch('http://localhost:3000/availableFood')
        },

         {
          path:'announcement',
          Component: Announcements,
         },
         {
          path:'/dashboard/manageMembers',
          Component: ManageMembers,
        },
         {
          path:'/dashboard/agreementRequests',
          Component: AgreementRequests,
        },
         {
          path:'/dashboard/makeAnnouncement',
          Component: AdminAnnouncementForm,
        },
        
     
       
        
      ]}
    
   
  ]);

  export default router