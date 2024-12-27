import { Box, Button, Divider, TextField, Typography } from "@mui/material";

function LoginForm() {
  return (
    <Box
      sx={{
        background: "#4A5568",
        padding: "40px",
        width: "1000px",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          align="center"
          color="primary.contrastText"
          sx={{ textTransform: "uppercase" }}
        >
          Please Log In
        </Typography>
        <TextField fullWidth label="Email or Username" />
        <TextField fullWidth label="Password" />
        <Button variant="outlined">Log In</Button>
      </Box>
      <Divider sx={{ margin: "20px" }} color="#fff" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography component="p" variant="p">
          Or continue with
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button variant="outlined">Google</Button>
          <Button variant="outlined">Google</Button>
          <Button variant="outlined">Google</Button>
        </Box>
      </Box>
      <Divider sx={{ margin: "20px" }} color="#fff" />
      <Typography component="p" variant="p" color="#fff">
        Click <a href="/">here</a> for registration
      </Typography>
    </Box>
  );
}

export default LoginForm;
