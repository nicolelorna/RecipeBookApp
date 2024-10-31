import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function RecipeList({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Recipe Book</Text>
      {recipes.length > 0 ? (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
            >
              <Text style={styles.recipeName}>{item.name}</Text>
              <Text style={styles.recipeDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noRecipesText}>No recipes yet. Click "Add Recipe" to start!</Text>
      )}
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('AddRecipe', { addRecipe })}
      >
        <Text style={styles.addButtonText}>Add Recipe</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  recipeDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  noRecipesText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 32,
  },
});
