import { Text, View } from "@react-pdf/renderer";
import TitleSection from "../components/titleSection";

import diplomasImg from "../assets/images/diploma.png";
import { CONTENT } from "../content";

const Diplomas = () => {
  return (
    <View>
      <TitleSection label="Diplomas" icon={diplomasImg} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {CONTENT.DIPLOMAS.map((dip) => (
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

export default Diplomas;
