import React, {Component} from 'react';
import Widget from "../../component/common/widgets";
import {Grid} from "@mui/material";

class Dashboard extends Component {
    render() {
        return (
            <Grid container gap={5} item className={'h-screen pt-28 px-5'}>
                <Widget type="Available Drivers" path="/driver" number={5}/>
                <Widget type="Available Drivers" path="/driver" number={5}/>
                <Widget type="Available Drivers" path="/driver" number={5}/>
            </Grid>
        );
    }
}

export default Dashboard;