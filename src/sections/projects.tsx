import { Text, View } from "@react-pdf/renderer";

import TitleSection from "../components/titleSection";

import { CONTENT } from "../content";

import projectImg from "../assets/images/project-management.png";

const Projects = () => {
  return (
    <View>
      <TitleSection label="Projects" icon={projectImg} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {CONTENT.PROJECTS.main.map((mainProject) => (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
            key={mainProject.title}
          >
            <Text
              style={{
                fontWeight: "semibold",
                textTransform: "uppercase",
                fontSize: 9,
              }}
            >
              {mainProject.title}
            </Text>
            <Text
              style={{
                fontWeight: "ultralight",
                textAlign: "justify",
                fontSize: 9,
              }}
            >
              {mainProject.description}
            </Text>
          </View>
        ))}
        <Text
          style={{
            fontWeight: "semibold",
            textTransform: "uppercase",
            fontSize: 9,
          }}
        >
          {CONTENT.PROJECTS.others.join(", ")}
        </Text>
      </View>
    </View>
  );
};

export default Projects;
