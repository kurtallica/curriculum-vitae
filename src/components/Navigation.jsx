import * as React from "react";
import { AppBar, Box, Toolbar, Container, Button } from "@mui/material";
import "./navigation.css";

const pages = ["Home", "Skills", "Experience", "Contact"];

function NavMenuContainer() {
  return <NavigationMenu />;
}

function NavigationMenu() {
  return (
    <AppBar class="appbar" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                className="appbar-button"
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: "black",
                  fontWeight: "100",
                  ":hover": {
                    border: "1px solid black",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavMenuContainer;
