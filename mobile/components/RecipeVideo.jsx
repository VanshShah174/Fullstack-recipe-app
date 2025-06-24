import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { recipeDetailStyles } from '../assets/styles/recipe-detail.styles';
import { COLORS } from '../constants/colors';

const RecipeVideo = ({ youtubeUrl, getYouTubeEmbedUrl }) => {
  if (!youtubeUrl) return null;

  return (
    <View style={recipeDetailStyles.sectionContainer}>
      <View style={recipeDetailStyles.sectionTitleRow}>
        <LinearGradient
          colors={["#FF0000", "#CC0000"]}
          style={recipeDetailStyles.sectionIcon}
        >
          <Ionicons name="play" size={16} color={COLORS.white} />
        </LinearGradient>

        <Text style={recipeDetailStyles.sectionTitle}>Video Tutorial</Text>
      </View>

      <View style={recipeDetailStyles.videoCard}>
        <WebView
          style={recipeDetailStyles.webview}
          source={{ uri: getYouTubeEmbedUrl(youtubeUrl) }}
          allowsFullscreenVideo
          mediaPlaybackRequiresUserAction={false}
        />
      </View>
    </View>
  );
};

export default RecipeVideo; 