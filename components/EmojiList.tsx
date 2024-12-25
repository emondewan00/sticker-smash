import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Image, ImageSource } from "expo-image";

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};

const EmojiList = ({ onSelect, onCloseModal }: Props) => {
  const [emoji] = useState<ImageSource[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);
  return (
    <FlatList
      data={emoji}
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      contentContainerStyle={styles.listContainer}
      horizontal
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

export default EmojiList;
