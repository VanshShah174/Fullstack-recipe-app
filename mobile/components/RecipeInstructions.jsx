import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { recipeDetailStyles } from '../assets/styles/recipe-detail.styles';
import { COLORS } from '../constants/colors';

const RecipeInstructions = ({ instructions }) => {
  return (
    <View style={recipeDetailStyles.sectionContainer}>
      <View style={recipeDetailStyles.sectionTitleRow}>
        <LinearGradient
          colors={["#9C27B0", "#673AB7"]}
          style={recipeDetailStyles.sectionIcon}
        >
          <Ionicons name="book" size={16} color={COLORS.white} />
        </LinearGradient>
        <Text style={recipeDetailStyles.sectionTitle}>Instructions</Text>
        <View style={recipeDetailStyles.countBadge}>
          <Text style={recipeDetailStyles.countText}>{instructions.length}</Text>
        </View>
      </View>

      <View style={recipeDetailStyles.instructionsContainer}>
        {instructions.map((instruction, index) => (
          <View key={index} style={recipeDetailStyles.instructionCard}>
            <LinearGradient
              colors={[COLORS.primary, COLORS.primary + "CC"]}
              style={recipeDetailStyles.stepIndicator}
            >
              <Text style={recipeDetailStyles.stepNumber}>{index + 1}</Text>
            </LinearGradient>
            <View style={recipeDetailStyles.instructionContent}>
              <Text style={recipeDetailStyles.instructionText}>{instruction}</Text>
              <View style={recipeDetailStyles.instructionFooter}>
                <Text style={recipeDetailStyles.stepLabel}>Step {index + 1}</Text>
                <TouchableOpacity style={recipeDetailStyles.completeButton}>
                  <Ionicons name="checkmark" size={16} color={COLORS.primary} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecipeInstructions; 