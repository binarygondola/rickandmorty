import React from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text } from 'react-native';
import { RMButton } from './RMButton';
import { styles } from './Filter.styled';
import { colorScheme } from '../colorScheme';

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
        <View style={styles.buttonContainer}>
          <RMButton
            onPress={() => {
              setStatus('');
              setSpeciesStatus('');
              setFilters('');
            }}
            text='RESET'
            pressed={false}
            style={styles.resetButton}
            textColor={colorScheme.primaryGreen}
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

interface MyCheckboxProps {
  isChecked: boolean,
  setChecked: (_: boolean) => void,
  text: string
}

const MyCheckbox = ({ isChecked, setChecked, text }: MyCheckboxProps) => {
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? colorScheme.darkGreen : undefined}
      />
      <Text style={styles.checkboxText}>{text}</Text>
    </View>
  )
}
