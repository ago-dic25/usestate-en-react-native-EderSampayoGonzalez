import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  function saludarAlumno() {
    var emojis = contarCaracteres();
    if (nombre.trim() === ''){
        setMensaje(emojis + '\nEscribe tu nombre...');
    } else {
        setMensaje(emojis + `\nHola ${nombre}`);
    }
  }

  function contarCaracteres() {
    if (nombre.length === 0) {
      return('🥀🥀🥀🥀🥀');
    }
    else if (nombre.length > 0 && nombre.length <= 10) {
      return('💀💀💀💀💀');
    }
    else if (nombre.length > 10 && nombre.length <= 20) {
      return('👻👻👻👻👻');
    }
    else {
      return('👾👾👾👾👾');
    }
  }

  return (
    <View style={styles.container}>
      <Text>{mensaje}</Text>
      <TextInput
        placeholder="Escribe tu nombre"
        value = {nombre}
        onChangeText={(text) => setNombre(text)}
        style={styles.input}
      />

      <Button title="Mostrar mensaje"
        onPress={ saludarAlumno }
        style={styles.boton}
      />

      <Button title="Limpiar Nombre de Alumno"
        onPress={() => setNombre('')}
        style={styles.boton}
      />

      <Button title="Aumentar"
        onPress={() => setContador(contador + 1)}
        style={styles.boton}
      />
      <Text>Haz hecho click {contador} veces.</Text>

      <StatusBar style="auto" />
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

  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 100,
    padding: 10,
    margin: 12,
  },
});
