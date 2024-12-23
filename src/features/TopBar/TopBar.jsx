import { Box, Container, TextField } from "@mui/material";

function TopBar() {
  return (
    <Container
      maxwidth="false"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 1,
      }}
    >
      <Box sx={{ background: "red" }}>1</Box>
      <Box sx={{}}>
        <TextField />
      </Box>
      <Box sx={{ background: "red" }}>3</Box>
    </Container>
  );
}

export default TopBar;
