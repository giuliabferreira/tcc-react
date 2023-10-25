import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BuildIcon from '@mui/icons-material/Build';
import Login from '../Login/Login';
import {Route , BrowserRouter, Link  } from 'react-router-dom';
import { ListItem } from '@mui/material';

export const mainListItems = (
  <div>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Início" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listagem" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EventNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Agenda" />
    </ListItemButton>
  </div>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
    Opções
    </ListSubheader>
    <Link to={"/Login"}>
    <ListItemButton>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItemButton >
    </Link>
  </React.Fragment>
);