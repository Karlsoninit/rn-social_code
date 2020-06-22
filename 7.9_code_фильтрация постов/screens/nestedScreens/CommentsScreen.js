import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import db from "../../firebase/config";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { nickName } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPosts();
  }, []);
  const createPost = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, nickName });
  };

  const getAllPosts = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text>{item.nickName}</Text>
              <Text>{item.comment}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setComment} />
      </View>
      <TouchableOpacity onPress={createPost} style={styles.sendBtn}>
        <Text style={styles.sendLabel}>add post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentContainer: {
    borderWidth: 1,
    borderColor: "#20b2aa",
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 10,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: "#20b2aa",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  sendLabel: {
    color: "#20b2aa",
    fontSize: 20,
  },
  inputContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#20b2aa",
  },
});

export default CommentsScreen;
