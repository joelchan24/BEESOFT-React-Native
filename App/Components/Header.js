import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";


export default class Header extends React.Component {
  render() {
    return (
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
    );
  }
}
