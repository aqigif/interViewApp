import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { Container, Content, Header } from "native-base";
export default class Corp extends Component {
  render() {
    return (
        <View style={styles.corpWrapper}>
          <View style={styles.logo}>
            <Text style={{ color: "white", fontSize:18 }}>{"<?>"}</Text>
          </View>
          <Text style={styles.corpName}>aqigif Corp.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  logo: {
    width: 50,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#251b5a"
  },
  corpWrapper: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  corpName: {
    color: "#251b5a",
    fontWeight: "bold",
    fontSize: 25
  },
});
