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
import { BrowserRouter as Router, Link } from "react-router-dom";
const ItemCard = ({ item }) => (
  <div>
    <Card>
      {item.borrower ? (
        <CardMedia
          overlay={
            <CardTitle title={`Borrowed By ${item.borrower.fullname}`} />
          }
        >
          <img src={item.imageurl} alt="" />
        </CardMedia>
      ) : (
        <CardMedia>
          <img src={item.imageurl} alt="" />
        </CardMedia>
      )}
      <Link to={`profile/${item.itemowner.id}`}>
        <CardHeader
          title={item.itemowner.fullname}
          subtitle={moment()
            .startOf("day")
            .fromNow()}
          avatar={<Gravatar email={item.itemowner.email} />}
        />
      </Link>
      <CardTitle
        title={item.title}
        subtitle={item.tags.map(i => i.title).join(", ")}
      />
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
