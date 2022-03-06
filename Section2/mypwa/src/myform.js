import React from 'react'
import {Card, CardContent, Grid, Paper, TextField, Button} from '@mui/material';
const Myform = () => {
  return (
    <div>
        <Paper className="container">
            <Grid container justifyContent="center">
                <Grid >
                    <Card>
                        <CardContent>
                        <p className="h3 text-center mb-5  text-primary">Contact US</p>
                            <form>
                            <TextField
                        className="w-100 mt-3"
                        placeholder="firstName"
                        label="firstName" />
                        <TextField
                        className="w-100 mt-3"
                        placeholder="lastName"
                        label="lastName" />
                        <TextField
                        className="w-100 mt-3"
                        placeholder="Email"
                        label="Email" />
                        <TextField
                        className="w-100 mt-3"
                        placeholder="MobileNo."
                        label="MobileNo." />
                        <TextField
                        className="w-100 mt-3"
                        placeholder="Message...."
                        label="Message...." />

                       <Button
                        type="submit"
                        color="error"
                        variant="contained"
                        className="mt-5"
                      >
                        Submit Your Message
                      </Button>
                            </form>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    </div>
  )
}

export default Myform;