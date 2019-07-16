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

export default class MultiChoiceQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      checked: null
    };
  }
  componentDidMount(){
    this._getOption()
  }
  _choosing=async(key)=>{
    await this.setState({ checked: key })
    this.props.answeringValue(this.state.answers[key])
  }
  _getOption=async()=>{
    const options = this.props.options
    const optionSplit = options.split(',')
    let array = [] 
    array = array.concat(optionSplit)
    await this.setState({answers:array})
  }
  render() {
    return (
      <View style={styles.quizWrapper}>
        <View style={{marginBottom:20}}>
          <Text>{this.props.question}</Text>
        </View>
        {this.state.answers.map((data, key) => {
          return (
            <View key={key}>
              {this.state.checked == key ? (
                <TouchableOpacity style={styles.btnActive} onPress={() => {this.setState({ checked: null });}}>
                  <Text style={styles.textItemActive}>{data}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => {this._choosing(key);}}
                  style={styles.btn}>
                  <Text style={styles.textItem}>{data}</Text>
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
    backgroundColor:"#251b5a",
    paddingLeft:20,
    padding:5,
    justifyContent: "center",
  },
  btn: {
    width: 300,
    padding:5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ACACAC",
    paddingLeft:20,
    justifyContent: "center"
  },
  textItemActive:{
    color:'#fff',
    fontSize:18
  },
  textItem:{
    color:'#251b5a',
    fontSize:18
  },
  quizWrapper: {
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
    marginVertical:20,
  },
});
