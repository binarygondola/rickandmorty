import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet } from 'react-native';
import { RMButton } from '../../../../components/RMButton';

interface FilterProps {
  status: string;
  setStatus: (_: string) => void;
  species: string;
  setSpecies: (_: string) => void;
  setFilters: (_: string) => void;
}

export const Filter = ({ status, setStatus, species, setSpecies, setFilters }: FilterProps) => {
  const setCheckedStatus = (val: string) => {
    if (val !== status) {
      setStatus(val);
    } else {
      setStatus('');
    }
  }

  const setSpeciesStatus = (val: string) => {
    if (val !== species) {
      setSpecies(val);
    } else {
      setSpecies('');
    }
  }

  return (
    <View style={styles.filterContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>STATUS</Text>
        <MyCheckbox
          isChecked={status === 'alive'}
          setChecked={() => setCheckedStatus('alive')}
          text='Alive'
        />
        <MyCheckbox
          isChecked={status === 'dead'}
          setChecked={() => setCheckedStatus('dead')}
          text='Dead'
        />
        <MyCheckbox
          isChecked={status === 'unknown'}
          setChecked={() => setCheckedStatus('unknown')}
          text='Unknown'
        />

        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text style={styles.label}>SPECIES</Text>
          <MyCheckbox
            isChecked={species === 'human'}
            setChecked={() => setSpeciesStatus('human')}
            text='Human'
          />
          <MyCheckbox
            isChecked={species === 'humanoid'}
            setChecked={() => setSpeciesStatus('humanoid')}
            text='Humanoid'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <RMButton
            onPress={() => {
              setStatus('');
              setSpeciesStatus('');
              setFilters('');
            }}
            text='RESET'
            pressed={false}
            style={{ backgroundColor: 'white', borderColor: '#224229', borderWidth: 1 }}
            textColor='#224229'
          />
          <RMButton
            onPress={() => {
              let speciesFilter = !!species ? `&species=${species}` : '';
              let statusFilter = !!status ? `&status=${status}` : '';
              setFilters(`${speciesFilter}${statusFilter}`);
            }}
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
    padding: 16,
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
