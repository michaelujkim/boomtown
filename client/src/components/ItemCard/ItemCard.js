import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Gravatar from "react-gravatar";
import PropTypes from "prop-types";
import moment from "moment";
const ItemCard = ({ item }) => (
  <div>
    <Card>
      <CardMedia overlay={<CardTitle title={item.borrower} />}>
        <img src={item.imageurl} alt="" />
      </CardMedia>
      <CardHeader
        title={item.itemowner.fullname}
        subtitle={moment()
          .startOf("day")
          .fromNow()}
        avatar={<Gravatar email={item.itemowner.email} />}
      />

      <CardTitle title={item.title} subtitle={item.tags} />
      <CardText>{item.description}</CardText>
      <CardActions>
        <FlatButton label="Borrow" />
      </CardActions>
    </Card>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemCard;
