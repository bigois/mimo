import AddIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import TrashIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import {
    List,
    Button,
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Box,
    DialogTitle,
    Dialog,
    TextField,
    Container,
    createTheme,
    ThemeProvider,
    CssBaseline, Modal
} from '@mui/material';
import './app.css';
import React from 'react';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

function App() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Modal sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} open={true}>
                <Box component={'section'} sx={{p: 6, border: '1px solid', borderRadius: 4, m: 4}}>
                    <Typography variant={'h3'} align={'center'} color={'primary'} sx={{mb: 6}}>LISTA DE
                        TAREFAS</Typography>
                    <Typography variant={'h5'} align={'left'} color={'secondary'}>Pendente</Typography>
                    <List>
                        <ListItem
                            secondaryAction={<>
                                <IconButton edge={'end'} aria-label={'comments'} sx={{mr: 0}}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton edge={'end'} aria-label={'comments'}>
                                    <TrashIcon/>
                                </IconButton>
                            </>}
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Checkbox edge={'start'} defaultChecked={false}/>
                                </ListItemIcon>
                                <ListItemText primary={'Comprar pão'}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Typography variant={'h5'} align={'left'} color={'secondary'}>Concluído</Typography>
                    <List>
                        <ListItem
                            secondaryAction={<>
                                <IconButton edge={'end'} aria-label={'comments'} sx={{mr: 0}}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton edge={'end'} aria-label={'comments'}>
                                    <TrashIcon/>
                                </IconButton>
                            </>}
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Checkbox edge={'start'} defaultChecked={true}/>
                                </ListItemIcon>
                                <ListItemText primary={'Treinar'}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
                        <Button variant={'contained'} color={'primary'} size={'large'} endIcon={<AddIcon/>}
                                onClick={handleClickOpen}>
                            Adicionar tarefa
                        </Button>
                    </Box>
                    <Dialog onClose={handleClose} open={open}>
                        <DialogTitle>Adicionar tarefa</DialogTitle>
                        <TextField id={'outlined-basic'} label={'Descrição da tarefa'} variant={'outlined'} required/>
                        <Button variant={'contained'} color={'success'} size={'large'} startIcon={<SaveIcon/>}
                                onClick={handleClose}>Adicionar
                            tarefa</Button>
                    </Dialog>
                </Box>
            </Modal>
        </ThemeProvider>
    );
}

export default App;
