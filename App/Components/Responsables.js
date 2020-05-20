import React, { Component } from 'react';
import { Image, View, StyleSheet, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
export default class Responsables extends Component {
  render() {
  
    return (
      <Container style = {styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Responsables</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View style={styles.responsablesbox}>
            <Image style={{width: 150, height: 150}} source={require('../Img/steven.jpg')}/>
            <Text style={styles.name}>Steven Hau</Text>
          </View>  
          <View style={styles.responsablesbox}>
            <Image style={{width: 150, height: 150}} source={require('../Img/joel.jpg')}/>
            <Text style={styles.name}>Joel Chan</Text>
          </View> 
          <View style={styles.responsablesbox}>
            <Image style={{width: 150, height: 150}} source={require('../Img/juan.jpg')}/>
            <Text style={styles.name}>Juan Baas</Text>
          </View> 
          <View style={styles.responsablesbox}>
            <Image style={{width: 150, height: 150}} source={require('../Img/chino.jpg')}/>
            <Text style={styles.name}>Antonio Noh</Text>
          </View> 
          <View style={styles.responsablesbox}>
            <Image style={{width: 150, height: 150}} source={require('../Img/carlos.jpg')}/>
            <Text style={styles.name}>Carlos</Text>
          </View> 
          </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray'
    },
    responsablesbox: {
      backgroundColor: 'white',
      flexDirection: 'row',
      margin: 5,
      elevation: 10
    },
    name: {
      fontSize: 20
    },
     
});
