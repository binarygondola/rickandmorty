import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet } from 'react-native';
import { RMButton } from '../../../../components/RMButton';

export const Filter = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.filterContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>STATUS</Text>
        <MyCheckbox
          isChecked={isChecked}
          setChecked={setChecked}
          text='Alive'
        />
        <MyCheckbox
          isChecked={isChecked}
          setChecked={setChecked}
          text='Dead'
        />
        <MyCheckbox
          isChecked={isChecked}
          setChecked={setChecked}
          text='Unknown'
        />

        <Text style={styles.label}>SPECIES</Text>
        <MyCheckbox
          isChecked={isChecked}
          setChecked={setChecked}
          text='Human'
        />
        <MyCheckbox
          isChecked={isChecked}
          setChecked={setChecked}
          text='Humanoid'
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <RMButton
            onPress={() => { }}
            text='RESET'
            pressed={false}
          />
          <RMButton
            onPress={() => { }}
            text='APPLY'
            pressed={false}
          />
        </View>
      </View>
    </View>
  );
};

const MyCheckbox = ({ isChecked, setChecked, text }: { isChecked: boolean, setChecked: (_: any) => void, text: string }) => {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 4, paddingVertical: 4 }}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#162C1B' : undefined}
      />
      <Text style={{ fontFamily: "Inter_400Regular", marginLeft: 8 }}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
    boxShadow: '4 4 0 0 #224229',
    borderColor: '#224229',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingRight: 10,
  },
  label: {
    fontSize: 12,
    color: '#59695C',
    marginBottom: 4,
    fontFamily: "DMMono_400Regular",
    letterSpacing: 1.08,
  },
  labelText: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: '#162C1B',
    marginBottom: 10,
  },

});
