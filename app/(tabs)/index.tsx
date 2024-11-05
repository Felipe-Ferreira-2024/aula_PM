import React from 'react';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View>
        
        <Button
          title="Entre com Google"
          color="#f2f3fa"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      
      <View>
        
        <Button
          title="Entre com facebook"
          color="#f2f3fa"
          onPress={() => Alert.alert('')}
          
        />
      </View>

      <View>
        
        <Button
          title="Cadastrar"
          color="#0c0c0d"
          onPress={() => Alert.alert('')}
        />
      </View>
      <Separator />
      
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,

  },
  Button: { 
    color: '#0c0c0d',
  },
  ButtonText:{
    color:'#0c0c0d',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;