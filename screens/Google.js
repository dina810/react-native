import { Alert,  Linking} from "react-native";
const Google = () => {

    const handlePress =  () => {
        const supported =  Linking.canOpenURL("https://google.com");
        if (supported) {
           Linking.openURL("https://google.com");
        } else {
          Alert.alert(`Don't know how to open this URL: "https://google.com"`);
        }
      };  

  return (
    handlePress()
  );
};

export default Google;