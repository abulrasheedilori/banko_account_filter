import React, { useState, useCallback} from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FlatList, Text, TextInput, View } from "react-native";
import { Colors } from "react-native-paper";
import AccountItems from "./components/AccountItems";
import { check } from "./utils/util";
import { DATA } from "./store/dummyData";
import styles from "./styles";

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(DATA);

  const handleSearchQuery = useCallback((text, list) => {
    const formatedInput = text.toLowerCase();
    const filteredData = list.filter((value) => {
      return check(value, formatedInput);
    });
    setData(filteredData);
    setInput(text);
  }, [input]);

  const renderItem = ({ item }) => <AccountItems item={item} />;

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" backgroundColor={Colors.amber100} />

      <View style={styles.screen}>
        <View style={styles.input}>
          <TextInput
            style={styles.search}
            placeholder="search by date with '/', description or amount"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={input}
            onChangeText={(newText) => handleSearchQuery(newText, DATA)}
          />
        </View>
        <Text style={styles.accountHistoryTitle}>Account History</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaProvider>
  );
}
