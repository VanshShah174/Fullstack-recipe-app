import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { COLORS } from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function LandingPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../assets/images/Home-screen.png')}
          style={styles.illustration}
          contentFit="contain"
        />
      </View>
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>Welcome to Recipe Rally</Text>
        <Text style={styles.subtitle}>
          Discover, cook, and enjoy delicious recipes from around the world! Your next favorite meal is just a tap away. 🍲👩‍🍳
        </Text>
        <LinearGradient
          colors={[COLORS.primary, '#FFB347']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientButton}
        >
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={() => router.push('/(auth)/sign-up')}
          >
            <Text style={styles.primaryButtonText}>👨‍🍳 Let's Cook Together!</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          style={styles.secondaryButton}
          activeOpacity={0.8}
          onPress={() => router.push('/(auth)/sign-in')}
        >
          <Text style={styles.secondaryButtonText}>Already have an Account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'flex-end',
  },
  illustrationContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
    paddingTop: 60,
  },
  illustration: {
    width: width * 0.85,
    height: height * 0.38,
    marginTop: 20,
    marginBottom: 0,
  },
  bottomSheet: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: height * 0.08,
    paddingBottom: 40,
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 10,
    justifyContent: 'center',
    minHeight: height * 0.55,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 10,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 22,
    alignSelf: 'center',
  },
  gradientButton: {
    width: '100%',
    borderRadius: 14,
    marginBottom: 14,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
  },
  primaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0,0,0,0.10)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  secondaryButton: {
    borderColor: COLORS.white,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
  },
  secondaryButtonText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
}); 