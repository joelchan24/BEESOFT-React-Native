import React,{Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class Monitoreo extends Component {
  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
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
            <Title>Monitoreo</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => alert("Pussy")}>
            <Text>Prueba de Sensor 1</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => alert("Pussy")}>
            <Text>Prueba  temperatura</Text>
          </Button>
        </Content>
        </Container>
    );
  }
}
