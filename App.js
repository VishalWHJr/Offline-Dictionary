  //Mam I have Written these comment Lines because here someTopics are new to me which I searched from the details of the Project Given to me      
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './localDb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word: 'Loading...',
      lexicalCategory: '',
      definition: '',
    };
  }
//////// Getword function for determing the word is in database or Not 
  getWord = (text) => {
    var text = text.toLowerCase();

    try {
      var word = dictionary[text]['word'];
      var lexicalCategory = dictionary[text]['lexicalCategory'];
      var definition = dictionary[text]['definition'];
      this.setState({
        word: word,
        lexicalCategory: lexicalCategory,
        definition: definition,
      });
    } catch (err) {
      alert('sorry This Word Is not available');

      this.setState({
        text: '',
        isSearchPressed: false,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'yellow'}
          centerComponent={{
            text: 'Dictionary',
            style: { color: 'red', fontSize: 25 },
          }}
        />
        <Text style={styles.headingText}>        Search your word Here</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: 'Loading...',
              lexicalCategory: '',
              examples: [],
              defination: '',
            });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ isSearchPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

        <View>
          <View style={styles.outputContainer}>
            <Text style={{ fontSize: 20 }}>
              {this.state.isSearchPressed && this.state.word === 'Loading...'
                ? this.state.word : ''}
            </Text>

            {this.state.word !== 'Loading...' ? (

       //Mam I have Written these comment Lines because here someTopics are new to me which I searched from the details of the Project Given to me        
              <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailsTitle}>Word : </Text>
                  <Text style={{ fontSize: 18 }}>{this.state.word}</Text>
                </View>

                <View style={styles.detailsContainer}>
                  <Text style={styles.detailsTitle}>Type : </Text>
                  <Text style={{ fontSize: 18 }}>
                    {this.state.lexicalCategory}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop:40 }}>
                  <Text style={styles.detailsTitle}>Definition : </Text>
                  <Text style={{ fontSize: 18 }}>{this.state.definition}</Text>
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },

 
  outputContainer: {
    flex: 0.7,
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:40
  },
  detailsTitle: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
  },

  goButton: {
    backgroundColor:"orange",
    width: '32%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderRadius:15,
    borderWidth:3,
    borderColor:"yellow"
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop:-4
  },
  headingText: {
    fontSize: 27,
    color: 'blue',
    fontWeight: 'bold',
  

  },
});
