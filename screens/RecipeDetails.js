import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RecipeDetails({ route, navigation }) {
  const { recipe } = route.params;

  return (
    <View>
      <Text>{recipe.name}</Text>
      <Text>{recipe.description}</Text>
      <Text>Ingredients: {recipe.ingredients.join(', ')}</Text>
      <Text>Instructions: {recipe.instructions}</Text>
      <Button title="Back to Recipes" onPress={() => navigation.goBack()} />
    </View>
  );
}
