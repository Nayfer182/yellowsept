import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import {Card } from 'react-native-paper';

export default function App(){
  return(
   <ScrollView>
  
    <View  style={styles.container}>
     <Text style={styles.paragraph}>Campanha de prevenção de Suicídio</Text>
     <Card>
      <Image style={styles.logo} source={require('../yellowset.jpg')}/>
      <Text style={styles.paragraph}>Histórico Pessoal
      </Text>
     </Card>
  
    </View>
  </ScrollView>
  
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph:{
    textAlign: 'center',
    fontWeight:'bold' ,
    fontSize: '22',
  },
  logo :{
    widgth: 100,
    height: 200,
    resizeMode: 'stretch',
    paddingRight: 100,
    paddingLeft: 100,
    alignItems: 'center',
  },
}
)
