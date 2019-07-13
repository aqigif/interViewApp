import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StatusBar,
  ScrollView,
  AsyncStorage
} from "react-native";
import { Spinner,Container, Content, Header } from "native-base";
import * as actionRegister from "../../redux/actions/index";
import { connect } from "react-redux";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      inputName: "",
      inputEmail: "",
      inputPassword: ""
    };
  }
  handleRegister = async () => {
    if (
      this.state.inputName == "" ||
      this.state.inputEmail == "" ||
      this.state.inputPassword == ""
    ) {
      alert("Lengkapi Form Terlebih dahulu");
    } else {
      await this.props.register({
        name: this.state.inputName,
        email: this.state.inputEmail,
        password: this.state.inputPassword
      });
      if (this.props.regis.saveToken != null) {
          this.props.navigation.navigate("Home");
          console.log(this.props.regis.saveToken);
        }
      }
    };
  render() {
    console.log(this.props.regis)
    return this.props.regis.isLoading === true ? (
      <View
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#251b5a"
          translucent={false}
        />
        <Spinner color="#517da2" style={{ justifyContent: "center" }} />
        <Text>Loading . . .</Text>
      </View>
    ) : (
      <Container style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>interView</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Name"
              underlineColorAndroid="transparent"
              onChangeText={text =>
                this.setState({
                  inputName: text
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={text =>
                this.setState({
                  inputEmail: text
                })
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={text =>
                this.setState({
                  inputPassword: text
                })
              }
            />
          </View>

          <TouchableOpacity
            style={[styles.buttonContainer, styles.registerButton]}
            onPress={this.handleRegister}
          >
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    regis: state.regis
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (value) => dispatch(actionRegister.register(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#251b5a"
  },
  logo: {
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25
  },
  content: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  icon: {
    width: 30,
    height: 30
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  registerButton: {
    backgroundColor: "#f39b25"
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
