import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Credentials, SimpleFeathersCoordinator } from '@yanux/coordinator/js/simple';

import ResourceManagementElementWebViewComponent from './ResourceManagementElementWebViewComponent';
import ComponentsDistributionElementWebViewComponent from './ComponentsDistributionElementWebViewComponent';

export default function App() {
  // const credentials = new Credentials('yanux', [
  //    '3XR7jY_LUX5eY7W6bphiRK1Z0WWp6TI_BDs0oCXcPxkQ1UefXiyegju1Npj4fBlDIIAQHP-DbJx0Y_vLg-q6KHsi7VBrCvdtFcry260g2rvS5LswvuFed0nSyQJf628Q4gm337f3PdkmHvL8wkOXaXxQGieSJvYl6_2QBY-xhQ_yoySkreOTx0d7Wfb5xh1XqwK9Lpw4gQ57PbbBqOV7btQ84FwmY7SqN86SEFty1GVzNDzXf9p22grVAkSfggSI',
  //    'react-native-coordinator'
  // ])

  // const coordinator = new SimpleFeathersCoordinator(
  //    'https://yanux-broker.herokuapp.com/',
  //    'https://albuquerques.net/yanux/device1',
  //    'react-native-coordinator',
  //     credentials, 
  //     storage = AsyncStorage
  // );

  // coordinator.init().then(res => {
  //   console.log('Connected:', res);
  // }).catch(err => console.log(err));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={{ textAlign: 'center', fontSize: 36 }}>Header</Text>
      <ResourceManagementElementWebViewComponent />
      <ComponentsDistributionElementWebViewComponent />
      <Text style={{ textAlign: 'center', fontSize: 20 }}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
