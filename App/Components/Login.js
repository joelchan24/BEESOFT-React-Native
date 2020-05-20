import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      username:'',
       password:''
     };
  }
  
  componentDidMount(){
    this._loadInitialState().done();
  } 
  
  _loadInitialState=async ()=>{
    var value = await AsyncStorage.getItem('user');
    if(value!==null)
    {
      /* this.props.navigation.navigate('Profile'); */
    }
  }
  
  login = async() =>{

alert(this.state.password +" "+this.state.username);
console.log(this.state.username);

/* fetch('http://192.168.0.106:8080/Api/Login/authenticate',{
  method:'POST',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json',
  },
  body:JSON.stringify({
Username:this.state.username,
Password:this.state.password

  })
}).then((response)=>response.blob())
.then((res=>{ */
  /* if(res.success===true)
  { */ 
    await AsyncStorage.setItem('user','val')
this.props.navigation.navigate('Profile');
   /* }else{
    alert("esta mal");
  } */
/* }))
 */
  }


  
  render() {
    return (
      <Container>

      <ImageBackground source={require('../Img/fondo.jpg')} style={{width: '100%', height: '100%'}}>

      <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(username) => this.setState({username})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={password=> this.setState({password})} />
            </Item>
            
          </Form>
          <View style={{margin:10,marginTop:20}}>
         
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={this.login}>
            <Text>Ingresar</Text>
          </Button>
          </View>
        </Content>
      </ImageBackground>

      </Container>
    );
  }
  
}
const styles=StyleSheet.create({
  /* btn:{
    alignSelf:'c',
    padding:20,
    alignItems:'center'
  } */
    });