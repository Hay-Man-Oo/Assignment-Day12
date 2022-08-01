import React, { useEffect, useState } from "react";
import { StyleSheet,FlatList, View, SafeAreaView,Image, Text ,ScrollView} from "react-native";

export default function Users() {

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const json = await response.json();
      setData(json.data);

    }
    catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
    console.log(data);
  });
  return (

    <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({ item, i }: any) =>

                  <ScrollView>
                    <View key={i}>
                        <View style={styles.avatarView}>
                            <Image
                        source={{ uri: item.avatar }}
                        style={styles.avatar}
                            />
                            <View style={styles.nameView}>
                                <View style={{ flexDirection: "row",paddingTop:8 }}>
                                    <Text style={{ fontSize: 20 }}>{item.first_name} </Text>
                                    <Text style={{ fontSize: 20 }}>{item.last_name}</Text>
                                </View>
                                <Text>{item.email}</Text>
                            </View>
                        </View>
                    </View>
                    </ScrollView>

                }
            />


        </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    fles: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 20
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 40,
  },
  nameView: {
    flexDirection: "column",
    paddingLeft: 20
  },
})