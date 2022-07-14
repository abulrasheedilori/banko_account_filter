import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from ".././styles";

const AccountItems = ({ item }) => {
  return (
    <View style={styles.accountCont}>
      <TouchableOpacity style={styles.itemBox}>
        <Text style={styles.detail}>{item.date}</Text>
        <Text style={styles.detail}>{item.desc}</Text>
        <Text style={styles.price}>{item.amount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(AccountItems);
