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

export default class TexQuestion extends Component {
  render() {
    return (
        <View style={styles.quizWrapper}>
          <View>
            <Text>{this.props.question}</Text>
          </View>
          <View style={{marginVertical:20,borderWidth:0.5, borderRadius:10, width:'100%'}}>
              <TextInput placeholder="Type Your Answer" multiline={true}/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  quizWrapper: {
    width:'100%',
    height:100,
    justifyContent: "center",
    alignItems: "center"
  },
});
