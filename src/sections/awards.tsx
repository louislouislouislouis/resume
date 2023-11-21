import { Text, View } from "@react-pdf/renderer";

import { CONTENT } from "../content";

import TitleSection from "../components/titleSection";

import medalImg from "../assets/images/medal.png";

const Awards = () => {
  return (
    <View>
      <TitleSection label="Awards" icon={medalImg} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {CONTENT.AWARDS.map((dip) => (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
            key={dip.title}
          >
            <Text
              style={{
                fontWeight: "semibold",
                textTransform: "uppercase",
                fontSize: 9,
              }}
            >
              {dip.title}
            </Text>
            <Text
              style={{
                fontWeight: "ultralight",
                textAlign: "justify",
                fontSize: 9,
              }}
            >
              {dip.description}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Awards;
