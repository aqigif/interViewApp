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
export default class Instructions extends Component {
  render() {
    return (
          <View style={{flexWrap:'wrap', justifyContent:'center', alignItems:'center', paddingHorizontal:20}}>
            <Text style={styles.instructionText}>Instructions :</Text>
            <Text style={styles.instructionTextDetail}>Answer it wisely and Quickly, each question has only once answer and one minute. Take a breath and enjoyyy</Text>
            <Text style={styles.instructionTextDetail}>Questions Type:</Text>
            <View style={styles.questionsTypeWrapper}>
              <Text style={styles.questionsType}>1. Multiple Choice</Text>
              <Text style={styles.questionsType}>2. Essay</Text>
              <Text style={styles.questionsType}>3. Multiple Select</Text>
              <Text style={styles.questionsType}>4. Video Interview</Text>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  instructionText: {
    color: "#000",
    fontSize: 16
  },
  instructionTextDetail: { fontSize: 14, textAlign:'center'},
  questionsTypeWrapper: { justifyContent: "center" },
  questionsType: { fontSize: 14 },
  buttonContainer: {
    marginTop:100,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 200,
    borderRadius: 30
  }
});
