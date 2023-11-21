import { View } from "@react-pdf/renderer";

import TitleSection from "../components/titleSection";
import TimedExperiences from "../components/timedExperiences";

import { CONTENT } from "../content";

import suitcase from "../assets/images/suitcase.png";

const WorkExperiences = () => {
  return (
    <View>
      <TitleSection label="Work Experiences" icon={suitcase} />
      <TimedExperiences experiences={CONTENT.WORKEXPERIENCES} />
    </View>
  );
};

export default WorkExperiences;
