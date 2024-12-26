import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchBar from "./components/SearchBar";
import UserButtons from "./components/UserButtons";

function TopBar() {
  return (
    <Grid container sx={{ padding: "20px 0", background: "#4A5568" }}>
      <Container sx={{ display: "flex" }}>
        <Grid size={4} sx={{}}></Grid>
        <Grid
          size={4}
          display={"flex"}
          justifyContent={"center"}
          sx={{ padding: "0 40px" }}
        >
          <SearchBar />
        </Grid>
        <Grid
          size={4}
          display={"flex"}
          justifyContent={"flex-end"}
          gap={"20px"}
          sx={{}}
        >
          <UserButtons />
        </Grid>
      </Container>
    </Grid>
  );
}

export default TopBar;
