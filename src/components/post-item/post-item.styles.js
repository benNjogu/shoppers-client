import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    flexDirection: "row",
  },
  name: {
    color: "blue",
    padding: "8px 0 8px 0",
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
  },
  newPrice: {
    color: "black",
    fontWeight: "bold",
  },
  originalPrice: {
    fontSize: "8px",
    textDecorationLine: "line-through",
    marginLeft: "8px",
    marginTop: "2.5px",
  },
  sponsored: {
    fontSize: "12px",
    paddingLeft: "16px",
    position: "absolute",
    bottom: "12px",
  },
  cardContent: {
    padding: "0 16px 16px 16px",
  },
  media: {
    height: 0,
    //paddingTop: "56.25%",
    paddingTop: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardMedia: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  CardActions: {
    position: "absolute",
    right: "0",
  },
  grid: {
    display: "flex",
  },
});
