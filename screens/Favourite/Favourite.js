import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Header } from "../../components";
import { COLORS, dummyData, icons, SIZES } from "../../constants";
import { TabContext } from "../../context/TabContext";

const Favourite = ({ navigation }) => {
  const { selectedTab } = useContext(TabContext);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}
            activeOpacity={0.8}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        // rightComponent={
        //   <TouchableOpacity
        //     style={{
        //       alignItems: "center",
        //       justifyContent: "center",

        //       borderRadius: SIZES.radius,
        //     }}
        //     activeOpacity={0.8}
        //   >
        //     <Image
        //       source={dummyData?.myProfile?.profile_image}
        //       style={{ width: 40, height: 40, borderRadius: SIZES.radius }}
        //     />
        //   </TouchableOpacity>
        // }
      />
    </View>
  );
};

export default Favourite;
