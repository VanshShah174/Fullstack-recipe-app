import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { recipeDetailStyles } from '../assets/styles/recipe-detail.styles';
import { COLORS } from '../constants/colors';

const RecipeStats = ({ recipe }) => {
  return (
    <View style={recipeDetailStyles.statsContainer}>
      <View style={recipeDetailStyles.statCard}>
        <LinearGradient
          colors={["#FF6B6B", "#FF8E53"]}
          style={recipeDetailStyles.statIconContainer}
        >
          <Ionicons name="time" size={20} color={COLORS.white} />
        </LinearGradient>
        <Text style={recipeDetailStyles.statValue}>{recipe.cookTime}</Text>
        <Text style={recipeDetailStyles.statLabel}>Prep Time</Text>
      </View>

      <View style={recipeDetailStyles.statCard}>
        <LinearGradient
          colors={["#4ECDC4", "#44A08D"]}
          style={recipeDetailStyles.statIconContainer}
        >
          <Ionicons name="people" size={20} color={COLORS.white} />
        </LinearGradient>
        <Text style={recipeDetailStyles.statValue}>{recipe.servings}</Text>
        <Text style={recipeDetailStyles.statLabel}>Servings</Text>
      </View>
    </View>
  );
};

export default RecipeStats; 