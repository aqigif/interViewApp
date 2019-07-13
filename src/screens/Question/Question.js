import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image
} from "react-native";
import { Spinner,Container, Content, Header } from "native-base";
import TextQuestion from "./components/TextQuestion";
import MultiChoiceQuestion from "./components/MultiChoiceQuestion";
import MultiSelectQuestion from "./components/MultiSelectQuestion";
import * as actionQuestion from "../../redux/actions/index";
import { connect } from "react-redux";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "Text"
    };
  }
  componentDidMount(){
    this.props.getQuestion(1)
  }
  render() {
    console.log(this.props.quest)
    const menu = this.props.quest.data.type;
    let prev, now, next;
    if (menu == "text") {
      now = <TextQuestion quest_id={this.props.quest.data.id} question={this.props.quest.data.description}/>;
      next = "Choice";
    } else if (menu == "choice") {
      prev = "Text";
      now = <MultiChoiceQuestion />;
      next = "Select";
    } else if (menu == "select") {
      prev = "Choice";
      now = <MultiSelectQuestion />;
      next = "Camera";
    } else if (menu == "camera") {
      prev = "Select";
      now = <Text>it should be camera</Text>;
      next = "Text";
    }
    return this.props.quest.isLoading === true ? (
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
        <View
          style={{
            backgroundColor: "grey",
            height: 50,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 20,
            justifyContent: "space-between"
          }}
        >
          <Text style={{ color: "#fff" }}>Number</Text>
          <Text style={{ color: "#fff" }}>Time</Text>
        </View>
        <View style={styles.body}>
          {now}
        </View>
          <View style={{ flexDirection: "row", justifyContent:'center' }}>
            <TouchableOpacity
              style={[
                styles.buttonControllerContainer,
                styles.controllerButton
              ]}
              onPress={() => this.setState({ menu: prev })}
            >
              <Text style={styles.conrollerText}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.startButton]}
            >
              <Text style={styles.startText}>Save Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonControllerContainer,
                styles.controllerButton
              ]}
              onPress={() => this.setState({ menu: next })}
            >
              <Text style={styles.conrollerText}>Next</Text>
            </TouchableOpacity>
          </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    quest: state.quest
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestion: (number) => dispatch(actionQuestion.getQuestion(number))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  body: {
    marginTop: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: "#251b5a",
    fontWeight: "bold",
    fontSize: 25
  },
  buttonContainer: {
    marginTop: 300,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 150,
    borderRadius: 5
  },
  startButton: {
    backgroundColor: "#f39b25"
  },
  startText: {
    color: "#fff",
    fontSize: 20
  },
  buttonControllerContainer: {
    marginTop: 300,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 70,
    borderRadius: 5
  },
  controllerButton: {
    borderColor: "#f39b25",
    borderWidth: 2
  },
  conrollerText: {
    color: "#f39b25",
    fontSize: 16
  }
});
