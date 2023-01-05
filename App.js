/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"blue",justifyContent:"center",alignItems:"center"}}>
      <View style={{flex:0.5,backgroundColor:"red",justifyContent:"center",alignItems:"center",width:"100%"}}>
      <Text style={{justifyContent:"center",color:"green"}}>Cuadro1</Text>
      </View>

      <View style={{flex:1,flexDirection:"row",height:"100%",backgroundColor:"orange",justifyContent:"center",alignItems:"center",width:"100%"}}>
      <View style={{flex:2,backgroundColor:"black",height:"100%",justifyContent:"center",alignItems:"center",width:"100%"}}>
      <Text style={{justifyContent:"center",color:"yellow"}}>Cuadro3</Text>
        </View>

      <View style={{flex:1,backgroundColor:"green",height:"100%",justifyContent:"center",alignItems:"center",width:"100%"}}>
      <Text style={{justifyContent:"center",color:"yellow"}}>Cuadro3</Text>
        </View>

        </View>
     
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
