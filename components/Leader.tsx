import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const DATA = [
  {
    name: 'John', 
    position: 'Leader'
  },
  
];

const Item = ({ name, position }:any) => (
  
  <View style={{
    flex: 1, flexDirection: 'row', borderWidth: 1, borderRadius: 8, marginBottom: 10,
    padding:10,width:'90%',marginLeft:15
  }}>
    <View>
    <Ionicons name='person-circle-sharp' size={40} color={ '#1588ea'} />
    </View>
    <View style={{paddingLeft:10}}>
      <Text style={styles.title}>
        {name} {'\n'}
        <Text style={{fontSize:18,color:'rgb(163,163,163)'}}>
        {position}
        </Text>
      </Text>
    </View>
    <View style={{position:'absolute',left:'80%',top:'35%'}}>
      <AntDesign name='star' size={30} color={'rgb(202,217,248)'} />
    </View>
    <View style={{ position: 'absolute', left: '93%', top: '35%' }}>
     <Feather name='phone-call' size={30} color={'#000'} />
    </View>
  </View>
);

const Leader = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name}
      position={ item.position} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  
  title: {
    fontSize: 25,
    paddingTop:5,
  },
});

export default Leader;