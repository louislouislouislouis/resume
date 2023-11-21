import { Image, Link, Text, View } from "@react-pdf/renderer";

import { CONTENT } from "../content";

const Header = () => {
  return (
    <>
      <View
        style={{
          paddingTop: 15,
          paddingBottom: 15,
          fontSize: 30,
          textAlign: "center",
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
          }}
        >
          {CONTENT.NAME}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "ultralight",
            textAlign: "center",
          }}
        >
          {CONTENT.TITLE}
        </Text>
      </View>
      <View
        style={{
          margin: "auto",
          backgroundColor: "#949494",
          height: 1,
          borderRadius: 50,
          width: "100%",
        }}
      />
      <View
        style={{
          fontSize: 9,
          paddingVertical: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {CONTENT.INFOS.map((item) => (
          <View
            key={item.label}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              fontWeight: "light",
            }}
          >
            <Image
              src={item.icon}
              style={{
                width: 10,
                height: 10,
              }}
            />
            <Link
              style={{ textDecoration: "none", color: "#262626" }}
              src={item.value}
            >
              {item.label}
            </Link>
          </View>
        ))}
      </View>
      <View
        style={{
          margin: "auto",
          backgroundColor: "#949494",
          height: 1,
          borderRadius: 50,
          width: "100%",
        }}
      />
    </>
  );
};

export default Header;
