import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

export default class Mainscreen extends Component{
    constructor(){
        super();
        this.state={
            longitude:"",
            latitude:"",
            altitude:""
        }
getLocation = ()=>{
    const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
        async function getISS(){
            const response = await fetch(api_url);
            data = await response.json();
            console.log(data);
        }
}


    return (
        <View>
                        <TextInput style={styles.formTextInput}
                            placeholder = {"Longitude"}
                            keyboardType={"numeric"}
                            onChangeText={(text)=>{
                              this.setState({longitude:text})
                        }}/>
                        <TextInput style={styles.formTextInput}
                            placeholder = {"Latitude"}
                            keyboardType={"numeric"}
                            onChangeText={(text)=>{
                              this.setState({latitude:text})
                        }}/>
                        <TextInput style={styles.formTextInput}
                            placeholder = {"Altitude"}
                            keyboardType={"numeric"}
                            onChangeText={(text)=>{
                              this.setState({altitude:text})
                        }}/>
                        <TouchableOpacity style = {styles.registerButton}
                        onPress={()=>{this.getLocation()}}>
                            <View>
                                <Text>
                                    Get location
                                </Text>
                            </View>
                        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({ button:{ width:100, height:30, justifyContent:'center', alignItems:'center', backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, elevation : 16 }, subtitle :{ flex:1, justifyContent:'center', alignItems:'center' } }) 