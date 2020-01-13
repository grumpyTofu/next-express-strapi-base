import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Query from './query';
import SECTIONS_QUERY from '../apollo/queries/sections/sections';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default props => {

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            //Not clipped
            //width: `calc(100% - ${drawerWidth}px)`,
            //marginLeft: drawerWidth,
    
            //Clipped
            width: '100vw',
            zIndex: theme.zIndex.drawer + 1,  
            //backgroundColor: '#442360',
            //Roche Blue
            //backgroundColor: '#0066C9',
            //Tableau Roche Blue
            //backgroundColor: '#004d99',
            backgroundColor: '#3785F3',
            background: 'linear-gradient(90deg, rgba(22,36,63,1) 0%, rgba(55,133,243,1) 50%, rgba(0,102,201,1) 90%)',        
            border: 'none'
        },
        toolBar: {
            display: 'flex',
            display: 'flexbox',
            display: 'box',
            alignItems: 'flex-end'
        },
        tabContainer: {
            height: 'inherit',
            minHeight: 'inherit',
        },
        tabContainerIE: {
            height: '100%',
            minHeight: '100%',
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <AppBar position="static"> */}
            <AppBar position="fixed">
                <Toolbar className={classes.toolBar}>
                {/* <Toolbar> */}
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Query query={SECTIONS_QUERY}>
                        {({ data: { sections } }) => {
                            return <TabSection data={sections} />
                        }}
                    </Query>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const TabSection = props => {

    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/false || !!document.documentMode;

    const useStyles = makeStyles(theme => ({
        link: {
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
                color: 'white',
                textDecoration: 'none'
            }
        }
    }));

    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AntTabs value={value} onChange={handleChange} aria-label="tabs">
        {/* <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"> */}
            {props.data.map((section, index) =>
                <Link href={"/section/?section=" + section.id} as={"/" + section.title.toLowerCase()} key={section.title + "NextLink"}>
                    <a className={classes.link} key={section.title + "Link"}>
                        <Tab label={section.title} {...a11yProps(index)} />
                    </a>
                </Link>
            )}
        </AntTabs>
    );
}

const AntTabs = withStyles({
    indicator: {
        height: '3px',
        backgroundColor: '#c2b6b6',
        //backgroundImage: 'linear-gradient(315deg, #c2b6b6 0%, #576574 74%)',        
        //borderRadius: '8px'
        // display: 'none'
    },
})(Tabs);