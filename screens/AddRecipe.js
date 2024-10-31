import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddRecipe({ navigation, route }) {
  const { addRecipe } = route.params;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleAddRecipe = () => {
    const newRecipe = {
      id: Date.now().toString(), 
      name,
      description,
      ingredients: ingredients.split(','),
      instructions,
    };
    addRecipe(newRecipe); 
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Recipe Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <TextInput
        style={styles.input}
        placeholder="Instructions"
        value={instructions}
        onChangeText={setInstructions}
        multiline
      />
      <Button title="Add Recipe" onPress={handleAddRecipe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#008000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});
