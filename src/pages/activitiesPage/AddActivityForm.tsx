import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, FormControl, Grid, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import { cardStyle, iconAlignment, iconLargerSize  } from '../../muiStyles';

type AddActivityFormProps = {
  onClick: () => void;
  showAddActivityForm: boolean;
}

export default function AddActivityForm({onClick, showAddActivityForm}: AddActivityFormProps) {
  return (
    <>
      {showAddActivityForm &&
      (<Card sx={ cardStyle }>
        <CardHeader
          action={
            <IconButton aria-label="settings" sx={ iconLargerSize } onClick={onClick}>
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

              <Grid container spacing={2} sx={{ ml: '1px', mt: '5px', mb: '8px'}}>
                <Grid item xs={3}>
                  <h4>Last opp et bilde:</h4>
                </Grid>
                <Grid item xs={2}>
                  <input type="file"
                    id="fileUploadButton"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor={'fileUploadButton'}>
                    <Button
                      variant="contained"
                      component="span"
                    >
                      <ImageIcon sx={ iconAlignment } />
                      Velg fil
                    </Button>
                  </label>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ ml: '1px'}}>
                <Grid item xs={3}>
                  <h4>Velg et bilde:</h4>
                </Grid>
                <Grid item xs={2}>
                    <p>Bilde alternativer</p>
                </Grid>
              </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant='contained'>
                  <AddIcon sx={ iconAlignment }/>
                  Legg til aktivitet
                </Button>
              </Box>
              
          </Typography>
        </CardContent>
      </Card>)
      }
    </>
  );
}
