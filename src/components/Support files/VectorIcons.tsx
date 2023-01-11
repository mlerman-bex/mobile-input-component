import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";
//down below we create a interface for our icon element.
interface IconProps {
  type:
    | typeof AntDesign
    | typeof Icon
    | typeof FontAwesome
    | typeof FontAwesome5
    | typeof Ionicons
    | typeof Feather
    | typeof MaterialCommunityIcons
    | typeof Entypo
    | typeof MaterialIcons
    | typeof SimpleLineIcons
    | typeof Octicons
    | typeof Foundation;
  name: string;
  color?: string;
  size?: number;
  style?: any;
}
export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  Icon,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
};
const IconType: React.FC<IconProps> = (props: IconProps) => {
  const Tag = props.type; // custom element type
  return (
    <>
      {props.type && props.name && (
        <Tag
          name={props.name}
          size={props.size}
          color={props.color}
          style={props.style}
        /> //use the type here which will held which type of vector icon will be use
      )}
    </>
  );
};
export default IconType;
