import React, { Component } from 'react';
import { Text, View, AsyncStorage,ActivityIndicator, StyleSheet } from 'react-native';
import { Container} from "native-base";

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
      _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(userToken ? 'Home' : 'Register');
    }
    render() {
        return (
            <Container style={styles.container}>
                <ActivityIndicator size={"large"} />
                <Text style={styles.loading}>Loading...</Text>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#251b5a',
        position : 'absolute',
        top : 0,
        left : 0,
        bottom : 0,
        right : 0,
    },
    loading: {
      textAlign: 'center',
      color: '#fff',
      marginBottom: 5,
    },
  });
  