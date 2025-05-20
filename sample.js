import React from 'react';
import { Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function App() {
  const db = SQLite.openDatabase('test.db');

  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, name TEXT);',
      [],
      () => console.log('Table created successfully'),
      (error) => console.log('Error creating table', error)
    );
  });

  return (
    <View>
      <Text>SQLite Test</Text>
    </View>
  );
}