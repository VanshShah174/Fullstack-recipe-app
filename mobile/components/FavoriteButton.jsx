import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { recipeDetailStyles } from '../assets/styles/recipe-detail.styles';
import { COLORS } from '../constants/colors';

const FavoriteButton = ({ isSaved, isSaving, onToggleSave }) => {
  return (
    <TouchableOpacity
      style={recipeDetailStyles.primaryButton}
      onPress={onToggleSave}
      disabled={isSaving}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.primary + "CC"]}
        style={recipeDetailStyles.buttonGradient}
      >
        <Ionicons name="heart" size={20} color={COLORS.white} />
        <Text style={recipeDetailStyles.buttonText}>
          {isSaved ? "Remove from Favorites" : "Add to Favorites"}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FavoriteButton; 