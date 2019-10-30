import { lazy } from 'react';

export const Login = lazy(() => import('../components/UserManagement/Login'));
export const BusDashboard = lazy(() =>
  import('../components/BusBooking/Dashboard')
);
export const Forgotpassword = lazy(() =>
  import('../components/UserManagement/Forgotpassword')
);
export const Resetpassword = lazy(() =>
  import('../components/UserManagement/Resetpassword')
);
export const About = lazy(() => import('../components/common/About'));
export const Privacy = lazy(() => import('../components/common/Privacy'));
export const Terms = lazy(() => import('../components/common/Terms'));
export const Contact = lazy(() => import('../components/common/Contact'));
export const Register = lazy(() =>
  import('../components/UserManagement/Registation')
);
export const Faq = lazy(() => import('../components/common/Faq'));
export const Career = lazy(() => import('../components/common/Career'));
export const PassengerInfo = lazy(() =>
  import('../components/BusBooking/PassengerInfo')
);
export const Dashboard = lazy(() => import('../components/Dashboard'));
export const UserAgreement = lazy(() =>
  import('../components/common/Useragreement')
);
export const Gst = lazy(() => import('../components/common/Gst'));
export const PaymentOption = lazy(() =>
  import('../components/common/Paymentoption')
);
export const Payment = lazy(() => import('../components/common/Payment'));
export const CCAvenue = lazy(() => import('../components/common/CCAvenue'));

export const TicketStatus = lazy(() =>
  import('../components/BusBooking/TicketStatus')
);
export const CancelTicket = lazy(() =>
  import('../components/BusBooking/CancelTicket')
);

export const Profile = lazy(() =>
  import('../containers/Profile')
);
