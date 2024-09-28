import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textcontainer}
          onChangeText={goalInputHandler}
          placeholder="Your course goal!"
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalcontainer}>
      <ScrollView >
        {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  textcontainer: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalcontainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 6,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
