import React,{Component} from 'react';
import { StyleSheet, Text,Alert } from 'react-native';
import {Content, Container, Header, View, Fab,Title, Left, Icon, Right, Button, Body } from 'native-base';
export default class Inicio extends Component {
  constructor(props) {
    super(props);
    
    this.state = {active: false };
  }
  
  
  render() {
   
    return (
      <Container>
      <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Inicio</Title>
          </Body>
          <Right />
        </Header>
       
       
          {/*here we will put the content  */}
          <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
       
        </Container>
    );
  }
}
