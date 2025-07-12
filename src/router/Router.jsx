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
import ManageCoupons from "../component/Profile/Admin/ManageCoupons";
import MakePayment from "../component/Profile/Member/Makepayment";
import StripePayment from "../component/Profile/Member/StripePayment";
import PaymentHistory from "../component/Profile/Member/PaymentHistory";
import AdminProtectedRouts from "../Routes/AdminProtectedRouts";
import MemberProtectedRouts from "../Routes/MemberProtectedRouts";
  
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
          element:<AdminProtectedRouts><ManageMembers></ManageMembers></AdminProtectedRouts>
        },
         {
          path:'/dashboard/agreementRequests',
          element: <AdminProtectedRouts><AgreementRequests></AgreementRequests></AdminProtectedRouts>,
        },
         {
          path:'/dashboard/makeAnnouncement',
          element: <AdminProtectedRouts><AdminAnnouncementForm></AdminAnnouncementForm></AdminProtectedRouts>,
        },
         {
          path:'/dashboard/manageCoupons',
          element: <AdminProtectedRouts><ManageCoupons></ManageCoupons></AdminProtectedRouts>,
        },
         {
          path:'/dashboard/member/payment',
          element:<MemberProtectedRouts><MakePayment></MakePayment></MemberProtectedRouts>
        },
         {
          path:'/dashboard/member/stripePayment',
          element:<MemberProtectedRouts><StripePayment></StripePayment></MemberProtectedRouts>
        },
         {
          path:'/dashboard/member/history',
          element:<MemberProtectedRouts><PaymentHistory></PaymentHistory></MemberProtectedRouts>
        },
        
     
       
        
      ]}
    
   
  ]);

  export default router