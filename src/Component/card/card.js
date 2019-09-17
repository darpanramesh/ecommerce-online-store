import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleRating from '../../Component/5star/star'
import { IoMdCart,IoIosHeart } from "react-icons/io";
import history from '../../history'

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    marginLeft:"2%",
    marginBottom:"1%",
    padding:"1%",
    display:'inline-block'
  },
  media: {
    height: 150,
  },
});

function MediaCard(props) {
  const count = 1;
  console.log(props)
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={()=>{history.push('/product',{description:props.description,name:props.name,price:props.price,product:props.product});console.log(props)}}>
        <CardMedia
          className={classes.media}
          image={props.product}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}<br />
            <span style={{fontSize:'15px'}}>
            Rs: {props.price}
            </span>
          </Typography>
        </CardContent>
      <SimpleRating />
      </CardActionArea>
      <CardActions>
        <Button style={{ color: "#fff", backgroundColor: "#878a8f",}}  size="small" color="primary">
        <IoIosHeart />&nbsp;
        Like
        </Button>
        <Button onClick={()=>{props.click({props,count});console.log(props)}} style={{ color: "#fff", backgroundColor: "#878a8f",}} size="small" color="primary">
        <IoMdCart /> &nbsp;         
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard;