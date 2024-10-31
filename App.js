import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeList from './screens/RecipeList';
import AddRecipe from './screens/AddRecipe';
import RecipeDetails from './screens/RecipeDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipeList">
        <Stack.Screen name="RecipeList" component={RecipeList} options={{ title: 'Recipes' }} />
        <Stack.Screen name="AddRecipe" component={AddRecipe} options={{ title: 'Add Recipe' }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ title: 'Recipe Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
