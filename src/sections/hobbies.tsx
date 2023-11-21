import { View } from "@react-pdf/renderer";

import { CONTENT } from "../content";

import TitleSection from "../components/titleSection";
import TextSection from "../components/textSection";

import hobbyImg from "../assets/images/hobbies.png";

const Hobbies = () => {
  return (
    <View>
      <TitleSection label="Hobbies" icon={hobbyImg} />
      <TextSection>{CONTENT.HOBBIES}</TextSection>
    </View>
  );
};

export default Hobbies;
