import { StatusBar, StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: Colors.amber100,
  },
  input: {
    width: "94%",
    height: 50,
    marginHorizontal: "3%",
    flexDirection: "row",
    borderRadius: 8,
    marginTop: 24,
    borderColor: "transparent",
    borderWidth: 1,
    elevation: 1,
    backgroundColor: Colors.amber200,
  },
  search: {
    flex: 1,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  accountHistoryTitle: {
    marginVertical: 12,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
  item: {
    width: "90%",
    height: "auto",
    padding: "0.5rem",
    marginHorizontal: "5%",
    marginVertical: 8,
  },
  date: {
    padding: 8,
    marginLeft: "5%",
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  accountCont: {
    marginVertical: 2,
  },
  itemBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: 1,
    borderWidth: 1,
    borderColor: Colors.amber300,
    borderRadius: 8,
    elevation: 1,
    backgroundColor: Colors.amber200
  },
  detail: {
    fontSize: 18,
    fontWeight: "600",
    padding: 5,
    color: "gray",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    padding: 5,
    color: "gray",
  },
  date: {
    fontSize: 21,
    fontWeight: "bold",
    padding: 5,
    color: "black",
  },
});
