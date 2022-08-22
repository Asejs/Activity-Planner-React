import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, FormControl, Grid, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export default function AddActivity() {
  return (
    <Card sx={{ mb: '30px'}}>
      <CardHeader
        action={
          <IconButton aria-label="settings" sx={{ '& svg': {fontSize: "40px"} }}>
            <CloseIcon />
          </IconButton>
        }
        title="Legg til ny aktivitet"
      />
      <CardContent>
        <Typography component={'span'} variant="body2" color="text.secondary">
            <FormControl variant="standard">
                <Box
                component="form"
                sx={{'& .MuiTextField-root': { m: 1, width: '100%' },}}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Tittel på aktivitet"
                    />

                    <TextField
                    id="outlined-number"
                    label="Dato"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />

                    <TextField
                    required
                    id="outlined-required"
                    label="Sted"
                    />

                    <TextField
                    required
                    id="outlined-required"
                    label="Beskrivelse av aktivitet"
                    multiline
                    rows={9}
                    />
                </div>
                </Box>
            </FormControl>

            <Grid container spacing={2} sx={{ ml: '5px'}}>
              <Grid item xs={1}>
                <h4>Last opp et bilde:</h4>
              </Grid>

              <Grid item xs={2}>
                <input type="file"
                id="fileUploadButton"
                style={{ display: 'none' }}
                // onChange={onFileChange}
                />

                <label htmlFor={'fileUploadButton'}>
                  <Button
                      variant="contained"
                      component="span"
                      sx={{ backgroundColor: 'darkgrey' }}
                  >
                    Velg fil
                  </Button>
                </label>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ ml: '5px'}}>
              <Grid item xs={1}>
                <h4>Velg et bilde:</h4>
              </Grid>

              <Grid item xs={2}>
                  Bilde alternativer
              </Grid>
            </Grid>

            <Box  sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <Button variant='contained' sx={{ backgroundColor: 'darkgrey' }}>Legg til aktivitet</Button>
            </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
