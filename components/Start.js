import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import BackgroundImage from "../imgs/Bg.png";

export default class Start extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      bgColor: this.colors.pink,
    };
  }

  // function to update the state with the new background color for Chat Screen chosen by the user
  changeBgColor = (newColor) => {
    this.setState({ bgColor: newColor });
  };

  colors = {
    green: "#085F63",
    lightGreen: "#49BEB7",
    yellow: "#FCCF4D",
    red: "#EF255F",
    aqua: "#0CECDD",
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BackgroundImage}
          resizeMode="cover"
          style={styles.BackgroundImage}
        >
          <View style={styles.titleBox}>
            <Text style={styles.title}> Happy Chat!</Text>
          </View>

          <View style={styles.box1}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}
                placeholder="What is your name?"
              />
            </View>

            <View style={styles.colorBox}>
              <Text style={styles.chooseColor}>
                {" "}
                Pick your background color!{" "}
              </Text>
            </View>

            <View style={styles.colorArray}>
              <TouchableOpacity
                style={styles.color1}
                onPress={() => this.changeBgColor(this.colors.green)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color2}
                onPress={() => this.changeBgColor(this.colors.lightGreen)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color3}
                onPress={() => this.changeBgColor(this.colors.yellow)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color4}
                onPress={() => this.changeBgColor(this.colors.red)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color5}
                onPress={() => this.changeBgColor(this.colors.aqua)}
              ></TouchableOpacity>
            </View>

            <Pressable
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  bgColor: this.state.bgColor,
                })
              }
            >
              <Text style={styles.buttonText}>Let's start chatting!</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  BackgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleBox: {
    height: "50%",
    width: "88%",
    alignItems: "center",
    paddingTop: 100,
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#C84B31",
  },
  box1: {
    backgroundColor: "rgba(255, 255, 255, 0.7);",
    height: "46%",
    width: "88%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  inputBox: {
    borderWidth: 2,
    borderRadius: 1,
    borderColor: "grey",
    width: "88%",
    height: 60,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  input: {
    fontSize: 22,
    fontWeight: "300",
    color: "black",
  },

  colorBox: {
    marginRight: "auto",
    paddingLeft: 15,
    width: "88%",
  },

  chooseColor: {
    fontSize: 16,
    fontWeight: "300",
    alignItems: "center",
    paddingLeft: 50,
  },

  colorArray: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  color1: {
    backgroundColor: "#085F63",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  color2: {
    backgroundColor: "#49BEB7",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  color3: {
    backgroundColor: "#FCCF4D",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  color4: {
    backgroundColor: "#EF255F",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  color5: {
    backgroundColor: "#0CECDD",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  button: {
    width: "88%",
    height: 70,
    borderRadius: 8,
    backgroundColor: "#2155CD",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
