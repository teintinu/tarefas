import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "material-ui/Checkbox";
// import { FormControlLabel, FormGroup } from "material-ui/Form";
import Grid from "material-ui/Grid";
import IconButton from "material-ui/IconButton";
import List, {
  ListItem,
  // ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "material-ui/List";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import * as React from "react";

const styles = (theme: any) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

function generate(element: any) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class InteractiveList extends React.Component {
  public state = {
    dense: false,
    secondary: false,
  };

  public render() {
    const { classes } = this.props as any;
    const { dense, secondary } = this.state;

    return (
      <div className={classes.root}>
        <Grid item xs={12} md={6}>
          <Typography variant="title" className={classes.title}>
            Tarefas a fazer
            </Typography>
          <div className={classes.demo}>
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value={""}
              margin="normal"
            />
            <List dense={dense}>
              {generate(
                <ListItem>
                  <Checkbox
                    checked={false}
                    tabIndex={-1}
                    disableRipple
                  />                    <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </div >
    );
  }
}

export default withStyles(styles)(InteractiveList as any);
