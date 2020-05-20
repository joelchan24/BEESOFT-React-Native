import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Icon } from "native-base";


const routes = ["Monitoreo", "Control", "Inicio", "Responsables"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
           <Image
            source={require('../Img/logo.jpg')}
             style={{
              height:200 ,
              width:280,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }} >
           
          </Image> 
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Icon name="home" />
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
