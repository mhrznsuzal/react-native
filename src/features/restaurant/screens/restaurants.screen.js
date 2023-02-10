import { StyleSheet, Text, View,StatusBar,SafeAreaView } from 'react-native';

// console.log(StatusBar.currentHeight);

export const RestaurantsScreen=                                                                                                                                                                                                                                                                                                                                () {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <View style={{flex:1, padding:16,background:"grey"}}>
        {/* <Mcard /> */}
      </View>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
