import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Masonry from "react-masonry-component";
import styles from "./styles.css";
const Profile = ({ list }) => (
  <div>
    <Masonry elementType={"ul"}>
      {list.map(item => (
        <li key={item.id}>
          <ProfileCard item={item} key={item.id} />
        </li>
      ))}
    </Masonry>
  </div>
);

Profile.propTypes = {
  list: PropTypes.array.isRequired
};

export default Profile;
