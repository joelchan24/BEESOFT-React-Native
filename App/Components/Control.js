import React,{Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class Control extends Component {
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
            <Title>Control</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          {/*here we will put the content  */}
        </Content>
        </Container>
    );
  }
}
