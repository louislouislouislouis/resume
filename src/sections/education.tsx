import { View } from "@react-pdf/renderer";

import TitleSection from "../components/titleSection";
import TimedExperiences from "../components/timedExperiences";

import { CONTENT } from "../content";

import EducationImg from "../assets/images/mortarboard.png";

const Education = () => {
  return (
    <View>
      <TitleSection label="Education" icon={EducationImg} />
      <TimedExperiences experiences={CONTENT.EDUCATIONS} />
    </View>
  );
};

export default Education;
