import React, {useState} from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import formStyles from "../../../components/UI/Styles/formStyle";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

const ContactUs = () => {
    const formClasses = formStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const list = [
        "Technical Issue",
        "Registration / Membership Issue",
        "General Issue"
    ];

    const form = (
       <div style={{textAlign:"center", width: "70%", margin:"auto"}}>
            <Typography variant="h3">Contact Us</Typography>
            <p><Typography>If you are having technical difficulty with the website, or if you have a general question about JayDoc Free Clinic, please use the following form to submit your query:</Typography></p>
            <Container component="main" maxWidth="md">
            <CssBaseline />
            <form className={formClasses.root} noValidate autoComplete="off">
                <Grid container spacing={2} direction={"column"} alignItems={"stretch"}>
                    <TextField
                        value={name}
                        onChange={event => setName(event.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="subject"
                        label="Subject"
                        name="subject"
                        autoFocus
                    />
                    <TextField
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <FormControl variant="outlined" className={formStyles.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple" required fullWidth>Category</InputLabel>
                        <Select
                            native
                            value={category}
                            onChange={event => setCategory(event.target.value) }
                            label="Category"
                            inputProps={{
                                name: 'category',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="Select a category" value="" />
                            {list.map( listItem => {
                                return (
                                    <option key={listItem} value={listItem}>{listItem}</option>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <TextField
                        value={subject}
                        onChange={event => setSubject(event.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="subject"
                        label="Subject"
                        name="subject"
                    />
                    <TextField
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        id="outlined-textarea"
                        label="Message"
                        placeholder="Keep up the good work"
                        multiline
                        variant="outlined"
                        fullWidth
                        required
                        rows={15}
                        inputProps={{ className: formClasses.textarea }}
                    />
                </Grid>
            </form>
            </Container>
        </div>
    );

    return form;
};

export default ContactUs;

