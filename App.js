import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <View
        style={{
          padding: 10,
          flexDirection: "column",
          backgroundColor: "#3b8a9c",
          alignItems: "stretch",
          justifyContent: "space-around",
          height: 300,
        }}
      >
        <View style={{ backgroundColor: "red", borderRadius: 10, padding: 15 }}>
          <Text>Section 1</Text>
        </View>

        <View
          style={{
            backgroundColor: "green",
            borderRadius: 10,
            padding: 15,
            width: "80%",
          }}
        >
          <Text>Section 2</Text>
        </View>

        <View
          style={{
            backgroundColor: "blue",
            borderRadius: 10,
            padding: 15,
            width: "50%",
          }}
        >
          <Text>Section 3</Text>
        </View>
      </View>

      <StatusBar style="auto" />

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          backgroundColor: "#3b8a9c",
          alignItems: "center",
          justifyContent: "space-around",
          height: 70,
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            borderRadius: 10,
            padding: 15,
            width: "25%",
            justifyContent: "center",
          }}
        >
          <Text>Section 1</Text>
        </View>

        <View
          style={{
            backgroundColor: "green",
            padding: 15,
            borderRadius: 10,
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Section 2</Text>
        </View>

        <View
          style={{
            backgroundColor: "blue",
            padding: 15,
            borderRadius: 10,
            width: "25%",
            justifyContent: "center",
          }}
        >
          <Text>Section 3</Text>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          backgroundColor: "#3b8a9c",
          alignItems: "center",
          justifyContent: "center",
          height: 60,
        }}
      >
        <View
          style={{
            backgroundColor: "blue",
            padding: 15,
            borderRadius: 10,
            width: "25%",
          }}
        >
          <Text>Section 3</Text>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          backgroundColor: "#3b8a9c",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            padding: 15,
            borderRadius: 10,
            width: "25%",
          }}
        >
          <Text>Section 3</Text>
        </View>

        <View
          style={{
            backgroundColor: "red",
            padding: 15,
            borderRadius: 10,
            width: "25%",
          }}
        >
          <Text>Section 3</Text>
        </View>
      </View>




      





      <View
        style={styles.maincontainer}
      >
        <View
          style={styles.section01}
        >
          <Text>Section 1</Text>
        </View>

        <View
          style={styles.section02}
        >
          <Text>Section 2</Text>
        </View>

        <View
          style={styles.section03}
        >
          <Text>Section 3</Text>
        </View>

      </View>







      <View
        style={{
          padding: 10,
          flexDirection: "column",
          backgroundColor: "#3b8a9c",
          alignItems: "stretch",
          justifyContent: "space-around",
          height: 300,
        }}
      >
        <View style={{
                      backgroundColor: "blue",
                      borderRadius: 10,
                      padding: 15,
                      width: "50%" 
                      }}>
          <Text>Section 1</Text>
        </View>

        <View
          style={{
            backgroundColor: "green",
            borderRadius: 10,
            padding: 15,
            width: "80%",
          }}
        >
          <Text>Section 2</Text>
        </View>

        <View
          style={{
            backgroundColor: "red", borderRadius: 10, padding: 15
          }}
        >
          <Text>Section 3</Text>
        </View>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  maincontainer: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#3b8a9c",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
  },
  section01: {
    flex: 3,
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
  },
  section02: {
    flex: 2,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
  },
  section03: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
  }

});