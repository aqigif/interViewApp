import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
  AsyncStorage
} from "react-native";
import { Spinner, Container, Content, Header } from "native-base";
import TextQuestion from "./components/TextQuestion";
import MultiChoiceQuestion from "./components/MultiChoiceQuestion";
import MultiSelectQuestion from "./components/MultiSelectQuestion";
import * as actionQuestion from "../../redux/actions/index";
import { connect } from "react-redux";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      attachment: null,
      menu: "text",
      number: 1
    };
  }
  componentDidMount() {
    const number = this.state.number
    this.props.getQuestion(number);
    this.props.navigation.setParams({number});
  }
  _sendAnswer = async () => {
    const valueToken= await AsyncStorage.getItem('token')
    await this.props.answering({
      question_id: this.props.quest.data.id,
      answer: this.state.answer,
      attachment: this.state.attachment,
      token:valueToken
    });
    this._nextNumber()
  };
  _answeringValue = (value) => {
    this.setState({answer: value})
  };
  _attachingValue = (value) => {
    this.setState({attachment: value})
  };
  _nextNumber = async () => {
    await this.setState({ number: this.state.number + 1 });
    if(this.state.number<=this.props.quest.total){
      const number = await this.state.number
      this.props.getQuestion(number)
      this.props.navigation.setParams({number});
    }else{
      this.props.navigation.navigate("Home");
    }
  };
  static navigationOptions = ({ navigation }) => {
    return{
      headerStyle:{backgroundColor:'#251b5a'},
      headerTitle:`Question ${navigation.getParam('number')}`,
      headerTitleStyle:{color:'#fff'}
    }
  }
  render() {
    console.log(this.state.answer)
    const menu = this.props.quest.data.type;
    const quest = this.props.quest.data;
    let now, section
    if (menu == "text") {
      section = 1
      now = <TextQuestion quest_id={quest.id} answeringValue={this._answeringValue} question={quest.description} />;
    } else if (menu == "choice") {
      section = 2
      now = (
        <MultiChoiceQuestion
          quest_id={quest.id}
          answeringValue={this._answeringValue}
          options={quest.options}
          question={quest.description}
        />
      );
    } else if (menu == "select") {
      section = 3
      now = (
        <MultiSelectQuestion
          quest_id={quest.id}
          answeringValue={this._answeringValue}
          options={quest.options}
          question={quest.description}
        />
      );
    } else if (menu == "video") {
      section = 4
      now = <Text>it should be camera</Text>;
    } else {
      now = <Text>Nothing</Text>;
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
          <Text style={{ color: "#fff" }}>
            Section {section} of 4
          </Text>
          <Text style={{ color: "#fff" }}>
            Time : {this.props.quest.data.timer}
          </Text>
        </View>
        <View style={styles.body}>
          {now}
          {/* {a=b? a=g? a=f?z: y: c : d} */}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.startButton]}
            onPress={() => this._sendAnswer()}
          >
            <Text style={styles.startText}>{this.state.answer==""?"Next":"Submit"}</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    quest: state.quest,
    answer: state.answer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestion: number => dispatch(actionQuestion.getQuestion(number)),
    answering: value => dispatch(actionQuestion.answering(value))
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
    alignItems: "center"
  },
  welcomeText: {
    color: "#251b5a",
    fontWeight: "bold",
    fontSize: 25
  },
  buttonContainer: {
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
