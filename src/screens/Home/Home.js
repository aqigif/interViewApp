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
import Instructions from './components/Instructions'
import Corp from '../../components/Corp'
export default class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Corp />

        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Instructions />

          <TouchableOpacity style={[styles.buttonContainer, styles.startButton]} onPress={()=>this.props.navigation.navigate("Quest")}>
            <Text style={styles.startText}>Start ...</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  welcome: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeText: {
    color: "#251b5a",
    fontWeight: "bold",
    fontSize: 25
  },
  buttonContainer: {
    marginTop:100,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 200,
    borderRadius: 30
  },
  startButton: {
    backgroundColor: "#f39b25"
  },
  startText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});