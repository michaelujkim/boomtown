import React from "react";
import PropTypes from "prop-types";

import ItemCard from "../../components/ItemCard/ItemCard";
import Masonry from "react-masonry-component";
import styles from "./styles.js";

const Items = ({ list }) => (
  <div style={styles.CardWrap}>
    <Masonry elementType={"ul"} style={styles.CardWrap}>
      {list.map(item => (
        <li key={item.id} style={styles.Narrow}>
          <ItemCard item={item} key={item.id} />
        </li>
      ))}
    </Masonry>
  </div>
);

Items.propTypes = {
  list: PropTypes.array.isRequired
};

export default Items;
