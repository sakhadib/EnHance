// // Header.tsx
// import { useState } from "react";
// import { AppBar, Toolbar, Box, Button, IconButton } from "@mui/material";
// import { Dashboard, Folder, Group, Construction, AccountCircle, Logout, LaptopChromebook, Brightness4, Brightness7 } from "@mui/icons-material"; // Material UI Icons
// import { useNavigate } from "react-router-dom";
// import { useTheme } from '@mui/material/styles';

// interface HeaderProps {
//   toggleTheme: () => void;
// }

// export default function Log_Header({ toggleTheme }: HeaderProps) {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const navigate = useNavigate();
//   const theme = useTheme(); // Access current theme to get mode

//   const navigateTo = (path: string) => {
//     navigate(path);
//   };

//   return (
//     <AppBar position="static" color="inherit" sx={{ borderBottom: 1, borderColor: "divider" }}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Logo and Navigation */}
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Button
//             startIcon={<Dashboard />}
//             color="primary"
//             sx={{ fontWeight: "bold", textTransform: "none" }}
//             onClick={() => navigateTo("/")}
//           >
//             EnHance
//           </Button>
//           <Box sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}>
//             <Button startIcon={<LaptopChromebook />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/dashboard")}> Dashboard </Button>
//             <Box sx={{ width: 16 }} />
//             <Button startIcon={<Folder />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/projects")}> Projects </Button>
//             <Box sx={{ width: 16 }} />
//             <Button startIcon={<Group />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/teams")}> Teams </Button>
//             <Box sx={{ width: 16 }} />
//             <Button startIcon={<Construction />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/how-to-use")}> How To Use </Button>
//           </Box>
//         </Box>

//         {/* Theme Toggle and User Actions */}
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <IconButton color="inherit" onClick={toggleTheme} sx={{ mr: 2 }}>
//             {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
//           </IconButton>
//           <Button startIcon={<AccountCircle />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/profile")}> Profile </Button>
//           <Box sx={{ width: 16 }} />
//           <Button startIcon={<Logout />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/logout")}> Log Out </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }


import { useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton } from "@mui/material";
import { Dashboard, Folder, Group, Construction, AccountCircle, Logout, LaptopChromebook, Brightness4, Brightness7 } from "@mui/icons-material"; // Material UI Icons
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

interface HeaderProps {
  toggleTheme: () => void;
}

export default function Log_Header({ toggleTheme }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const theme = useTheme(); // Access current theme to get mode

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo and Navigation */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            startIcon={<Dashboard />}
            color="primary"
            sx={{ fontWeight: "bold", textTransform: "none" }}
            onClick={() => navigateTo("/")}
          >
            EnHance
          </Button>
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}>
            <Button startIcon={<LaptopChromebook />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/dashboard")}> Dashboard </Button>
            <Box sx={{ width: 16 }} />
            <Button startIcon={<Folder />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/projects")}> Projects </Button>
            <Box sx={{ width: 16 }} />
            <Button startIcon={<Group />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/teams")}> Teams </Button>
            <Box sx={{ width: 16 }} />
            <Button startIcon={<Construction />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/how-to-use")}> How To Use </Button>
          </Box>
        </Box>

        {/* Theme Toggle and User Actions */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" onClick={toggleTheme} sx={{ mr: 2 }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button startIcon={<AccountCircle />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/profile")}> Profile </Button>
          <Box sx={{ width: 16 }} />
          <Button startIcon={<Logout />} sx={{ color: "text.secondary", textTransform: "none" }} onClick={() => navigateTo("/logout")}> Log Out </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
