import { Text, View } from "@react-pdf/renderer";

const TimedExperiences = ({
  experiences,
}: {
  experiences: {
    date: string;
    title: string;
    location?: string;
    company: string;
    description: string;
  }[];
}) => {
  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {experiences.map((experience) => (
        <View
          key={experience.title}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 5,
              display: "flex",
              flexDirection: "column",
              fontSize: 9,
            }}
          >
            <Text
              style={{
                fontWeight: "semibold",
                textTransform: "uppercase",
              }}
            >
              {experience.title}
            </Text>
            <Text
              style={{
                fontWeight: "light",
              }}
            >
              {experience.date}
            </Text>
          </View>
          <View
            style={{
              flex: 7,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 9,
                fontWeight: "semibold",
                textTransform: "uppercase",
              }}
            >
              {experience.company}
              {experience.location ? ` • ${experience.location}` : ""}
            </Text>
            <Text
              style={{
                fontSize: 8,
                fontWeight: "extralight",
                textAlign: "justify",
              }}
            >
              {experience.description}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TimedExperiences;
