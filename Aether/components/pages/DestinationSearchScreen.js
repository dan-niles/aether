import React, { useState } from "react";
import {
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Text,
	StyleSheet,
	ImageBackground,
} from "react-native";
import DestinationSearchBlock from "../organisms/DestinationSearchBlock";
import MarsBg from "../../assets/images/backgrounds/mars-bg-temp.jpeg";
import DynamicBackground from "../templates/DynamicBackground";

const DestinationSearchScreen = () => {
	return (
		<DynamicBackground>
			<DestinationSearchBlock />
		</DynamicBackground>
	);
};

const styles = StyleSheet.create({
	image: {
		flex: 1,
		borderRadius: 8,
		resizeMode: "cover",
		justifyContent: "center",
	},
	imageContainer: {
		flex: 1,
		justifyContent: "flex-end",
		borderRadius: 8,
	},
});
export default DestinationSearchScreen;
