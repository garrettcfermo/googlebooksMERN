import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import IconButton from '@material-ui/core/IconButton'
import FavoriteRounded from '@material-ui/icons/FavoriteRounded'
import DeleteRounded from '@material-ui/icons/DeleteRounded'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  }
})


class Home extends Component {

  state = {
    expanded: null,
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })
  };


  render() {
    const { classes } = this.props
    const { expanded } = this.state

    return (
      <>
        {
          !this.props.book ? (
            <Stepper activeStep={-1}>
              <Step>
                <StepLabel>Search For A Book By Its Title</StepLabel>
              </Step>
              <Step>
                <StepLabel>Look Over Book Information</StepLabel>
              </Step>
              <Step>
                <StepLabel>Add Book To Your List</StepLabel>
              </Step>
            </Stepper>
          ) :
            (
              <Grid container spacing={8} style={{ marginTop: '2vh' }}>
                <Grid item xs={6} style={{ textAlign: 'center' }}>
                  <img style={{height:'400px'}} src={this.props.book.image} alt={this.props.book.title} />
                </Grid>
                <Grid item xs={5} className={classes.root}>
                  <ExpansionPanel expanded={false}>
                    <ExpansionPanelSummary>
                      <Typography className={classes.heading}>Title</Typography>
                      <Typography className={classes.secondaryHeading}>{this.props.book.title}</Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={false}>
                    <ExpansionPanelSummary>
                      <Typography className={classes.heading}>Author</Typography>
                      <Typography className={classes.secondaryHeading}>{this.props.book.authors}</Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={false}>
                    <ExpansionPanelSummary>
                      <Typography className={classes.heading}>Published Date</Typography>
                      <Typography className={classes.secondaryHeading}>{this.props.book.publishedDate}</Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>Description</Typography>
                      <Typography className={classes.secondaryHeading}>
                        Click To View The Description Of The Book
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        {this.props.book.description}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={false}>
                    <ExpansionPanelSummary>
                      <Typography className={classes.heading}>Link</Typography>
                      <Typography className={classes.secondaryHeading}> <a target="_blank" rel="noopener noreferrer" href={this.props.book.link}>Click Here!</a></Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={false}>
                    <ExpansionPanelSummary>
                      <Typography className={classes.secondaryHeading}>
                        <IconButton>
                          <FavoriteRounded onClick={this.props.favBook} />
                        </IconButton>
                        <IconButton>
                          <DeleteRounded onClick={this.props.removeBook} />
                        </IconButton>
                      </Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                </Grid>
              </Grid>
            )
        }
      </>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)






