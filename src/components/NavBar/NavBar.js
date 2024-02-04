// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../logo-FAST-NU.png";

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <header
//       className="navbar w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm"
//       style={{ height: "80px" }}
//     >
//       <div
//         className="container mx-auto flex justify-between items-center py-7 px-5"
//         style={{ height: "80px" }}
//       >
//         <NavLink
//           exact
//           to="/"
//           className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
//           style={{ textDecoration: 'none' }}
//         >
//           <img className="w-15 h-12  " src={logo} alt="FAST NUCES Logo" />
//           <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">
//             Career Development Portal
//           </span>
//           <i className="fas fa-code"></i>
//         </NavLink>

//         <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
//           <NavLink
//             exact
//             to="/"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             exact
//             to="/jobs"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             Jobs
//           </NavLink>
//           <NavLink
//             exact
//             to="/newsfeed"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             NewsFeed
//           </NavLink>
//           <NavLink
//             exact
//             to="/about"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             About
//           </NavLink>

//           <NavLink
//             exact
//             to="/contact"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             Contact Us
//           </NavLink>
//           <NavLink
//             exact
//             to="/board"
//             activeClassName="active"
//             className="mr-8 hover:text-gray-300"
//           >
//             Board of Directors
//           </NavLink>
//         </nav>

//         <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         </div>

//         <button
//           className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
//           onClick={handleClick}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {click && (
//           <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
//             <NavLink
//               exact
//               to="/"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               exact
//               to="/jobs"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Job Posting
//             </NavLink>
//             <NavLink
//               exact
//               to="/newsfeed"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               News Feed
//             </NavLink>
//             <NavLink
//               exact
//               to="/about"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               About
//             </NavLink>
//             <NavLink
//               exact
//               to="/Career"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Career
//             </NavLink>
//             <NavLink
//               exact
//               to="/contact"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Contact Us
//             </NavLink>
//             <NavLink
//               exact
//               to="/board"
//               activeClassName="active"
//               className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
//               onClick={handleClick}
//             >
//               Board of Directors
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo-FAST-NU.png";
import "./NavBar.css";
<<<<<<< HEAD
=======
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//     /**
//      * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
//      * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
//      * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
//      * proper interaction with the underlying content.
//      */
//     position: 'relative',
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {

//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));

// function PersistentDrawerRight() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
//             Persistent drawer
//           </Typography>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerOpen}
//             sx={{ ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Main open={open}>
//         <DrawerHeader />
        
      
//       </Main>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//           },
//         }}
//         variant="persistent"
//         anchor="right"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </Box>
//   );
// }
>>>>>>> ff46f2a8061981bbf3478e1133783e313a2b09bb

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <header
      className="navbar w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm"
      style={{ height: "80px" }}
    >
      <div
        className="container mx-auto flex justify-between items-center py-7 px-5"
        style={{ height: "80px" }}
      >
        <NavLink
          exact
          to="/home"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
          style={{ textDecoration: "none" }}
        >
          <img className="w-15 h-12  " src={logo} alt="FAST NUCES Logo" />
          <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">
            Career Development Portal
          </span>
          <i className="fas fa-code"></i>
        </NavLink>

        <nav
          className="xs:hidden sm:hidden md:hidden xl:block md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide"
          style={{}}
        >
          <NavLink
            exact
            to="/login"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Login
          </NavLink>
          <NavLink
            exact
            to="/home"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/jobs"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Jobs
          </NavLink>
          <NavLink
            exact
            to="/newsfeed"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            NewsFeed
          </NavLink>
          <NavLink
            exact
            to="/about"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            About
          </NavLink>

          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Contact Us
          </NavLink>
          <NavLink
            exact
            to="/board"
            activeClassName="active"
            className="mr-8 hover:text-gray-300"
          >
            Board of Directors
          </NavLink>
        </nav>

        {/* <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div> */}

        <button
          className="xl:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {click && (
          <div className="w-full flex flex-col px-3 md:hidden  bg-gray-900 text-base uppercase text-center font-semibold navbar_drawer">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/jobs"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Job Posting
            </NavLink>
            <NavLink
              exact
              to="/newsfeed"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              News Feed
            </NavLink>
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              About
            </NavLink>
            <NavLink
              exact
              to="/Career"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Career
            </NavLink>
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
            <NavLink
              exact
              to="/board"
              activeClassName="active"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={handleClick}
            >
              Board of Directors
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;