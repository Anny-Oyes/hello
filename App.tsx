import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const URL_API = "http://localhost:3000";
const token = "";
let recipes;

export default function App() {
  const [r, setR] = useState<listRecipesResponsive>();

  const cliente = HttpClient

  useEffect(() => {
    console.log('antes de la llamada');
    getRecipes(URL_API).then(recipes => {

      console.log("recipes", recipes)

    });
    console.log('después de la llamada');

  }, [r]);

  const getRecipes = async (url: any) => {
    const response = await fetch(`${url}/recipes`, {
      headers: {
        authorizathion: `Barer ${token}`
      }
    });

    const data = await response.json();
    console.log(data);
    setR(data)

  }

  return (
    <View style={styles.container}>
      {r.map((item) => (
        <Text key={item.title}></Text>
      ))}
    </View>
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
