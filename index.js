
import React, { useState, } from 'react';
import { View, Text ,Image ,FlatList,TouchableOpacity ,LayoutAnimation} from 'react-native';
import styles from './styles.js';

export const Accordian = ({
  AccordiaButtonTitle,
  accordiaItem,
  accordianButtonStyles,
  activeIcon,
  nonActiveIcon,
  defaultActiveTab
}) => {
  const AccordianTitle = !!AccordiaButtonTitle
    ? AccordiaButtonTitle
    : ['Tab1', 'Tab2', 'Tab3', 'Tab4'];
  const CollapaseItem = !!accordiaItem
    ? accordiaItem
    : [<Section1/>,<Section2/>,<Section3/>,<Section4/>];

  const toggleTab = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedTab(index == selectedTab ? -1 : index);
  };



  const [selectedTab, setSelectedTab] = useState(defaultActiveTab);

  const renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <TouchableOpacity
          style={[
            !!accordianButtonStyles
              ? accordianButtonStyles
              : styles.accordiaButton,
            selectedTab == index && styles.avtiveAccordianButton,
          ]}
          onPress={() => toggleTab(index)}>
          <Text style={styles.accordianButtonText}>{item}</Text>
          {selectedTab == index ? activeIcon() : nonActiveIcon()}
        </TouchableOpacity>

        {accodianItem(index)}
      </View>
    );
  };

  const accodianItem = (index) => {
    if (selectedTab == index) {
      return CollapaseItem[index];
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={AccordianTitle}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export const Section1 = ()=>{
  return(
    <View>
      <Text>Section 1</Text>
    </View>
  )
}

export const Section2 = ()=>{
  return(
    <View>
      <Text>Section 2</Text>
    </View>
  )
}
export const Section3 = ()=>{
  return(
    <View>
      <Text>Section 3</Text>
    </View>
  )
}
export const Section4 = ()=>{
  return(
    <View>
      <Text>Section 4</Text>
    </View>
  )
}

export const ActiveIcon = ()=>{
  return(
    <Image
    style={styles.activeIcon}
    source={require('../assets/down.png')}
  />
  )
}
export const NonActiveIcon = ()=>{
  return(
    <Image
    style={styles.nonActiveIcon}
    source={require('../assets/right.png')}
  />
  )
}

// export default Accordian;
