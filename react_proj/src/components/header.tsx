// Header.tsx
import { useState } from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Home, Dashboard, Construction, Login, Rocket } from "@mui/icons-material"; // Material UI Icons
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate(); // Call useNavigate here at the top level

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar position="static" color="inherit" sx={{ borderBottom: 1, borderColor: "divider" }}>
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
            <Button
              startIcon={<Home />}
              sx={{ color: "text.secondary", textTransform: "none" }}
              onClick={() => navigateTo("/")}
            >
              Home 
            </Button>
            <Box sx={{ width: 16 }} /> {/* Blank space */}
            <Button
              startIcon={<Construction />}
              sx={{ color: "text.secondary", textTransform: "none" }}
              onClick={() => navigateTo("/use")}
            >
              How To Use
            </Button>
            <Box sx={{ width: 16 }} /> {/* Blank space */}
          </Box>
        </Box>

        {/* Sign Up and Login */}
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}>
          <Box>
            <Button
              startIcon={<Login />}
              sx={{ color: "text.secondary", textTransform: "none" }}
              onClick={() => navigateTo("/login")}
            >
              Login 
            </Button>
          </Box>
          <Box sx={{ width: 16 }} /> {/* Blank space */}
          <Box>
            <Button
              startIcon={<Rocket />}
              sx={{ color: "text.secondary", textTransform: "none" }}
              onClick={() => navigateTo("/signup")}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
