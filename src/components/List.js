import React from "react";
import CompanyCard from "./CompanyCard";
//import { CardActions } from "@material-ui/core";
import ActionButton from "./ActionButton";

const List = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <CompanyCard key={card.id} text={card.text} />
      ))}
      <ActionButton asdf />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};

export default List;
