import * as React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../atoms/buttons/CustomButton";
import TextContainer from "../atoms/text-container/TextContainer";
import TransparentCard from "../molecules/TransparentCard";
import DynamicBackground from "../templates/DynamicBackground";

export default function HomeScreen({ navigation }) {
	return (
		<DynamicBackground>
			<View style={styles.container}>
				<TransparentCard />

				<CustomButton
					onPress={() => navigation.navigate("Date Picker")}
					title={"date picker"}
				/>

				<CustomButton
					onPress={() => navigation.navigate("Select Passengers")}
					title={"Select Passengers"}
				/>

				<TextContainer title={"hi"} />

				<CustomButton
					onPress={() => navigation.navigate("Destination Search")}
					title={"Destination Search"}
				/>
			</View>
		</DynamicBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "top",
	},
});
