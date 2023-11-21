import { View } from "@react-pdf/renderer";
import TitleSection from "../components/titleSection";
import TextSection from "../components/textSection";
import { CONTENT } from "../content";
import profileimg from "../assets/images/user.png";

const Profile = () => {
  return (
    <View>
      <TitleSection label="profil" icon={profileimg} />
      <TextSection>{CONTENT.PROFILE}</TextSection>
    </View>
  );
};

export default Profile;
