import { Image, Text, View } from "@react-pdf/renderer";

const TitleSection = ({ label, icon }: { label: string; icon: string }) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <Image
          src={icon}
          style={{
            width: 12,
            height: 12,
            color: "#262626",
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 5,
            fontSize: 12,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "#262626",
          borderRadius: 50,
          width: 50,
          marginBottom: 5,
        }}
      />
    </>
  );
};

export default TitleSection;
