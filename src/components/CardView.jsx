import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

/**
 * Component: Card View
 * Description: show card and list view of the added posts
 * @param {*} props 
 * @returns 
 */

const useStyles = makeStyles({

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardView = (props) => {

  const classes = useStyles();
  return (

    <Card className={classes.root} variant="outlined">
      <CardContent>

        <Typography variant="h6" component="h2">
          {props.title.substr(0, 22)}
          <DeleteOutlineIcon className={classes.pos} style={{ float: 'right', cursor: 'pointer' }} onClick={() => props.deleteAction(props.id)} />
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>

  );
}

export default CardView