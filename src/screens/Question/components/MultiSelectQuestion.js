import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  FlatList
} from "react-native";

export default class MultiSelectQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      answered: null
    };
  }
  componentDidMount(){
    this._getOption()
  }
  _choosing=async()=>{
    let array = []
    const options = this.state.answers
    for(let index=0;index < options.length;index++){
      if(options[index].isChecked==true){
        array = array.concat(options[index].value)
      }
    }
    const string = await array.toString();
    await this.setState({answered:string})
    this.props.answeringValue(this.state.answered)
  }
  _getOption=async()=>{
    let array = []
    const options = this.props.options
    const optionSplit = options.split(',')
    for(let id=1;id < optionSplit.length;id++){
      array = array.concat({"id":id,"value":optionSplit[id],"isChecked":false})
    }
    await this.setState({answers:array})
  }
  checkBtnData = async(id) => {
    let answer = this.state.answers
    answer.forEach(answer => {
       if (answer.id === id)
          answer.isChecked =  !answer.isChecked
    })
    await this.setState({answers: answer})
    this._choosing()
  }
  render() {
    return (
      <View style={styles.quizWrapper}>
        <View style={{ marginBottom: 20 }}>
        <Text>{this.props.question}</Text>
        </View>
        {this.state.answers.map((data, key) => {
          return (
            <View key={key}>
              {data.isChecked == true ? (
                <TouchableOpacity onPress={() => this.checkBtnData(data.id)} style={styles.btnActive}>
                  <Text style={styles.textItemActive}>{data.value}</Text>
                </TouchableOpacity>
              ) : (
                
                <TouchableOpacity 
                  onPress={() => this.checkBtnData(data.id)}
                  style={styles.btn}
                >
                  <Text style={styles.textItem}>{data.value}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },
  btnActive: {
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ACACAC",
    backgroundColor: "#251b5a",
    paddingLeft: 20,
    padding: 5,
    justifyContent: "center"
  },
  btn: {
    width: 300,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ACACAC",
    paddingLeft: 20,
    justifyContent: "center"
  },
  textItemActive: {
    color: "#fff",
    fontSize: 18
  },
  textItem: {
    color: "#251b5a",
    fontSize: 18
  },
  quizWrapper: {
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
    marginVertical:20,
  },
});
