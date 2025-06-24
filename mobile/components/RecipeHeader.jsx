import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { recipeDetailStyles } from '../assets/styles/recipe-detail.styles';
import { COLORS } from '../constants/colors';

const RecipeHeader = ({ 
  recipe, 
  isSaved, 
  isSaving, 
  onBack, 
  onToggleSave 
}) => {
  return (
    <View style={recipeDetailStyles.headerContainer}>
      <View style={recipeDetailStyles.imageContainer}>
        <Image
          source={{ uri: recipe.image }}
          style={recipeDetailStyles.headerImage}
          contentFit="cover"
        />
      </View>

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.9)"]}
        style={recipeDetailStyles.gradientOverlay}
      />

      <View style={recipeDetailStyles.floatingButtons}>
        <TouchableOpacity
          style={recipeDetailStyles.floatingButton}
          onPress={onBack}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            recipeDetailStyles.floatingButton,
            { backgroundColor: isSaving ? COLORS.gray : COLORS.primary },
          ]}
          onPress={onToggleSave}
          disabled={isSaving}
        >
          <Ionicons
            name={isSaving ? "hourglass" : isSaved ? "bookmark" : "bookmark-outline"}
            size={24}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>

      {/* Title Section */}
      <View style={recipeDetailStyles.titleSection}>
        <View style={recipeDetailStyles.categoryBadge}>
          <Text style={recipeDetailStyles.categoryText}>{recipe.category}</Text>
        </View>
        <Text style={recipeDetailStyles.recipeTitle}>{recipe.title}</Text>
        {recipe.area && (
          <View style={recipeDetailStyles.locationRow}>
            <Ionicons name="location" size={16} color={COLORS.white} />
            <Text style={recipeDetailStyles.locationText}>{recipe.area} Cuisine</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default RecipeHeader; 