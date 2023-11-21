import { Text, View } from "@react-pdf/renderer";

import TitleSection from "../components/titleSection";

import { CONTENT } from "../content";

import proImg from "../assets/images/settings.png";

const COLUMN = 2;

const divideArray = <T,>(arr: T[], divider: number) => {
  let finalArray = [];
  for (let i = 0; i < arr.length; i += divider) {
    finalArray.push(arr.slice(i, i + divider));
  }
  return finalArray;
};

const ProSkills = () => {
  return (
    <View>
      <TitleSection label="Pro skills" icon={proImg} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {divideArray(CONTENT.PROSKILLS, COLUMN).map((arr, idx) => (
          <View
            key={idx}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {arr.map((skill) => (
              <Text
                key={skill}
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  marginBottom: 1,
                  flex: 1,
                }}
              >
                {skill}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProSkills;
