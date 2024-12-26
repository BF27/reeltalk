import { Button } from "@mui/material";

function UserButtons() {
  return (
    <>
      <Button variant="contained" sx={{ minWidth: "120px" }}>
        Log In
      </Button>
      <Button variant="outlined" sx={{ minWidth: "120px" }}>
        Sign Up
      </Button>
    </>
  );
}

export default UserButtons;
