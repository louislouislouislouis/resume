import { Text, View } from "@react-pdf/renderer";
import TitleSection from "../components/titleSection";

import languageImg from "../assets/images/language.png";
import { CONTENT } from "../content";

const Languages = () => {
  return (
    <View>
      <TitleSection label="languages" icon={languageImg} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {Object.keys(CONTENT.LANGUAGES).map((key) => (
          <View
            key={key}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                flex: 3,
                fontSize: 9,
                textTransform: "uppercase",
                marginBottom: 1,
              }}
            >
              {key}
            </Text>
            <Text
              style={{
                flex: 3,
                fontSize: 9,
                marginBottom: 1,
              }}
            >
              {/* @ts-ignore */}
              {CONTENT.LANGUAGES[key]}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Languages;
