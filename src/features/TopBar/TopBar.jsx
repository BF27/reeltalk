import { Box, Button, InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";

function TopBar() {
  return (
    <Grid container sx={{ padding: "20px 0", background: '#4A5568' }}>
      <Grid size={4} sx={{}}></Grid>
      <Grid
        size={4}
        display={"flex"}
        justifyContent={"center"}
        sx={{ padding: "0 40px" }}
      >
        <TextField
          label="Search"
          fullWidth={true}
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>
      <Grid
        size={4}
        display={"flex"}
        justifyContent={"flex-end"}
        gap={"20px"}
        sx={{}}
      >
        <Button variant="contained" sx={{ minWidth: "120px" }}>
          Log In
        </Button>
        <Button variant="outlined" sx={{ minWidth: "120px" }}>
          {" "}
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
}

export default TopBar;
