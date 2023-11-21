import { Document, Page, View, Font } from "@react-pdf/renderer";

import { FONT } from "./consts";

import Profile from "./sections/profile";
import Education from "./sections/education";
import WorkExperiences from "./sections/workExperiences";
import Projects from "./sections/projects";
import ProSkills from "./sections/proSkills";
import Languages from "./sections/languages";
import Diplomas from "./sections/diplomas";
import Hobbies from "./sections/hobbies";
import Awards from "./sections/awards";
import Header from "./components/header";
import LeftColumn from "./components/leftColumn";
import RightColumn from "./components/rightColumn";
import { CONTENT } from "./content";

Font.register(FONT);

// Create Document Component
const MyDocument = () => {
  return (
    <Document
      title={`Resume of ${CONTENT.NAME}`}
      author={CONTENT.NAME}
      subject={`Resume of ${CONTENT.NAME}`}
      keywords={`Resume of ${CONTENT.NAME}`}
      onRender={() => console.log("dfdd")}
    >
      <Page
        size="A4"
        style={{
          fontFamily: "Montserrat",
          color: "#262626",
          border: "10px solid #010101",
          padding: 40,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            paddingTop: 10,
            gap: 10,
          }}
        >
          <LeftColumn>
            <Profile />
            <Education />
            <WorkExperiences />
            <Projects />
          </LeftColumn>
          <RightColumn>
            <ProSkills />
            <Languages />
            <Diplomas />
            <Hobbies />
            <Awards />
          </RightColumn>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
