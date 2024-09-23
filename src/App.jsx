import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AppBar, Tabs, Tab, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';

// Custom dark theme
const theme = createTheme({
  palette: {  
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e', // Dark background for form
    },
    text: {
      primary: '#fff',
      secondary: '#90caf9',
    },
  },
});

function App() {
  // useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // On form submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', paddingTop: '20px' }}>
        
        {/* Header with AppBar */}
        <AppBar position="static" sx={{ bgcolor: '#6a1b9a', padding: '10px 0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: 4 }}>
            <h1 style={{ color: '#fff', margin: 0 }}>Innovatrix Academy</h1>
            <Tabs value={0} textColor="inherit">
              <Tab label="Admission Form" />
              <Tab label="Verify Admission" />
            </Tabs>
          </Box>
        </AppBar>

        <Box
          sx={{
            padding: '20px',
            bgcolor: 'background.paper',
            borderRadius: '8px',
            maxWidth: '800px',
            margin: '40px auto',
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          <h2 style={{ color: theme.palette.text.primary, textAlign: 'center' }}>Admission Form</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              
              {/* Full Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  color="primary"
                  InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                  {...register("fullName", { required: 'Full Name is required' })}
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                />
              </Grid>

              {/* Father Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Father Name"
                  variant="outlined"
                  color="primary"
                  InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                  {...register("fatherName", { required: 'Father Name is required' })}
                  error={!!errors.fatherName}
                  helperText={errors.fatherName?.message}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  color="primary"
                  InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                  {...register("email", { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>

              {/* Phone Number */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  color="primary"
                  InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                  {...register("phoneNumber", { required: 'Phone Number is required' })}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />
              </Grid>

              {/* National ID */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="National ID (CNIC)"
                  variant="outlined"
                  color="primary"
                  InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                  {...register("cnic", { required: 'CNIC is required' })}
                  error={!!errors.cnic}
                  helperText={errors.cnic?.message}
                />
              </Grid>

              {/* Date of Birth */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{ shrink: true, style: { color: theme.palette.text.secondary } }}
                  {...register("dob", { required: 'Date of Birth is required' })}
                  error={!!errors.dob}
                  helperText={errors.dob?.message}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth color="primary" sx={{ borderRadius: '20px', padding: '12px' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
