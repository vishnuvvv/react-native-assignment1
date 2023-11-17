import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item.id} style={[styles.card, { backgroundColor: item.backgroundColor }]}>
          <Text style={[styles.cardTitle, { color: 'white' }]}>Name: {item.name}</Text>
          <Text style={[styles.cardText, { color: 'white' }]}>Email: {item.email}</Text>
          <Text style={[styles.cardText, { color: 'white' }]}>Address: {item.address}</Text>
          <Text style={[styles.cardText, { color: 'white' }]}>Phone: {item.phone}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    width: '80%',
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;
