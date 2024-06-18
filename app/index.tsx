import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text, View } from "react-native";
import { useState } from "react";

const colors = ["#F7DC6F","#A2D9C3","D7BDE2"]

export default function Index() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
 
 

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Pomodoro</Text>
      <Text style = {styles.text}>{time}</Text>
      <StatusBar style= "dark"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: "900", 
  }
})
