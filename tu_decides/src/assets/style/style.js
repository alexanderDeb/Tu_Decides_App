import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },

  vote: {
    paddingTop: 20,
    flexDirection: "column",
  },
  grid: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 7,
    marginVertical: 7,
    gap: 50,
    paddingTop: 30,
    justifyContent: "center",
  },
  card: {
    height: 140,
    width: 150,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 15,
  },

  list: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardList: {
    borderRadius: 25,
    padding: 10,
    height: "75%",
    width: "80%",
  },
  listComponent: {
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  scrollView: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  img: {
    height: 100,
    width: 100,
    padding: 10,
  },
  t: {
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
  },
  titleContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  suggestionsContainer: {
    paddingTop: '10%',
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#F2B705",
    padding: 4,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 100,
    margin: 2,
  },
});

export default style;
