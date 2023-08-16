import { Text } from "react-native";
import textStyles from "./Styles";

const Body2 = (props) => {
	return <Text style={textStyles.body2}>{props.children}</Text>;
};

export default Body2;
