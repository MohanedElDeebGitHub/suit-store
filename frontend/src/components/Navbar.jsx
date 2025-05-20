import React from "react";
import { AppBar, Toolbar, Typography, Box, Tabs, Tab, IconButton, InputBase, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "#061739",
  boxShadow: "none",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  "& .MuiTab-root": {
    color: "#fff",
    opacity: 0.7,
    fontWeight: 500,
    fontSize: "1rem",
    textTransform: "none",
    minWidth: 90,
  },
  "& .Mui-selected": {
    color: "#fff",
    opacity: 1,
    fontWeight: 600,
    background: "#fff2",
    borderRadius: 8,
  },
}));

const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 24,
  backgroundColor: "#fff",
  marginLeft: theme.spacing(5),
  width: 350,
  display: "flex",
  alignItems: "center",
  padding: "2px 12px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

export default function NavBar({ tab, onTabChange }) {
  const navigate = useNavigate();

  // Handle tab changes and route navigation
  const handleTabChange = (event, newValue) => {
    onTabChange && onTabChange(event, newValue);
    if (newValue === 0) navigate("/womenclothing");
    else if (newValue === 1) navigate("/menclothing");
    else if (newValue === 2) navigate("/kidsclothing");
  };

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ minHeight: 64 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>EVOO</Typography>
        <StyledTabs
          value={tab}
          onChange={handleTabChange}
          textColor="inherit"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab label="Women" />
          <Tab label="Men" />
          <Tab label="Kids" />
        </StyledTabs>
        <Box sx={{ flexGrow: 1 }} />
        <SearchBox>
          <SearchIcon color="action" />
          <StyledInputBase placeholder="Search for product, categories or styles" />
        </SearchBox>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <FavoriteBorderIcon sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton>
          <Badge badgeContent={2} color="error">
            <ShoppingBagOutlinedIcon sx={{ color: "#fff" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <PersonOutlineIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
}