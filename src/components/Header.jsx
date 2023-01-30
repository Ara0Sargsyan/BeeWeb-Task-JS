import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header({ children }) {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", color: "#FFB300" },
              }}
            >
              BeeWeb
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>{children}</Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
