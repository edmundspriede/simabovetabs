import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstLevelTabOne = () => (
  <SecondLevelTabs firstTab="First Level - Tab 1" />
);

const FirstLevelTabTwo = () => (
  <SecondLevelTabs firstTab="First Level - Tab 2" />
);

const SecondLevelTabOne = ({ firstTab }) => (
  <View style={styles.scene}><Text>{`${firstTab} - Second Level - Tab 1`}</Text></View>
);

const SecondLevelTabTwo = ({ firstTab }) => (
  <View style={styles.scene}><Text>{`${firstTab} - Second Level - Tab 2`}</Text></View>
);

const SecondLevelTabs = ({ firstTab }) => {
  const [secondLevelIndex, setSecondLevelIndex] = useState(0);
  const secondLevelRoutes = [
    { key: 'secondOne', title: 'Second Tab 1' },
    { key: 'secondTwo', title: 'Second Tab 2' },
  ];

  const renderSecondLevelScene = SceneMap({
    secondOne: () => <SecondLevelTabOne firstTab={firstTab} />,
    secondTwo: () => <SecondLevelTabTwo firstTab={firstTab} />,
  });

  return (
    <TabView
      navigationState={{ index: secondLevelIndex, routes: secondLevelRoutes }}
      renderScene={renderSecondLevelScene}
      onIndexChange={setSecondLevelIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={props => <TabBar {...props} style={styles.tabBar} />}
    />
  );
};

const App = () => {
  const [firstLevelIndex, setFirstLevelIndex] = useState(0);
  const firstLevelRoutes = [
    { key: 'firstOne', title: 'Tab 1' },
    { key: 'firstTwo', title: 'Tab 2' },
  ];

  const renderFirstLevelScene = SceneMap({
    firstOne: FirstLevelTabOne,
    firstTwo: FirstLevelTabTwo,
  });

  return (
    <TabView
      navigationState={{ index: firstLevelIndex, routes: firstLevelRoutes }}
      renderScene={renderFirstLevelScene}
      onIndexChange={setFirstLevelIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={props => <TabBar {...props} style={styles.tabBar} />}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: '#6200ee',
  },
});

export default App;
