import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { exercises } from '../data/exercises';
import { lessons } from '../data/lessons';

export default function ProgressScreen() {
  const [completedExercises, setCompletedExercises] = useState([]);
  const [viewedLessons, setViewedLessons] = useState([]);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const exercisesData = await AsyncStorage.getItem('completedExercises');
      const lessonsData = await AsyncStorage.getItem('viewedLessons');

      if (exercisesData) {
        setCompletedExercises(JSON.parse(exercisesData));
      }
      if (lessonsData) {
        setViewedLessons(JSON.parse(lessonsData));
      }
    } catch (e) {
      console.log('Error loading progress:', e);
    }
  };

  const resetProgress = async () => {
    try {
      await AsyncStorage.removeItem('completedExercises');
      await AsyncStorage.removeItem('viewedLessons');
      setCompletedExercises([]);
      setViewedLessons([]);
    } catch (e) {
      console.log('Error resetting progress:', e);
    }
  };

  const exerciseProgress = completedExercises.length;
  const totalExercises = exercises.length;
  const exercisePercentage = totalExercises > 0
    ? Math.round((exerciseProgress / totalExercises) * 100)
    : 0;

  const lessonProgress = viewedLessons.length;
  const totalLessons = lessons.length;
  const lessonPercentage = totalLessons > 0
    ? Math.round((lessonProgress / totalLessons) * 100)
    : 0;

  const overallProgress = Math.round(
    ((exerciseProgress + lessonProgress) / (totalExercises + totalLessons)) * 100
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Your Progress</Text>

        <View style={styles.statsCard}>
          <Text style={styles.cardTitle}>Overall Progress</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${overallProgress}%` }]} />
          </View>
          <Text style={styles.percentageText}>{overallProgress}%</Text>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.cardTitle}>Lessons</Text>
          <Text style={styles.statsText}>
            {lessonProgress} / {totalLessons} completed
          </Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${lessonPercentage}%` }]} />
          </View>
          <Text style={styles.percentageText}>{lessonPercentage}%</Text>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.cardTitle}>Exercises</Text>
          <Text style={styles.statsText}>
            {exerciseProgress} / {totalExercises} completed
          </Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${exercisePercentage}%` }]} />
          </View>
          <Text style={styles.percentageText}>{exercisePercentage}%</Text>
        </View>

        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Achievements</Text>

          <View style={styles.achievementCard}>
            <Text style={styles.achievementIcon}>
              {exerciseProgress > 0 ? '🎯' : '⭕'}
            </Text>
            <View style={styles.achievementText}>
              <Text style={styles.achievementTitle}>First Steps</Text>
              <Text style={styles.achievementDescription}>
                Complete your first exercise
              </Text>
            </View>
          </View>

          <View style={styles.achievementCard}>
            <Text style={styles.achievementIcon}>
              {exerciseProgress >= 5 ? '⭐' : '⭕'}
            </Text>
            <View style={styles.achievementText}>
              <Text style={styles.achievementTitle}>Getting Started</Text>
              <Text style={styles.achievementDescription}>
                Complete 5 exercises
              </Text>
            </View>
          </View>

          <View style={styles.achievementCard}>
            <Text style={styles.achievementIcon}>
              {exerciseProgress >= totalExercises ? '🏆' : '⭕'}
            </Text>
            <View style={styles.achievementText}>
              <Text style={styles.achievementTitle}>Python Master</Text>
              <Text style={styles.achievementDescription}>
                Complete all exercises
              </Text>
            </View>
          </View>

          <View style={styles.achievementCard}>
            <Text style={styles.achievementIcon}>
              {lessonProgress >= totalLessons ? '📚' : '⭕'}
            </Text>
            <View style={styles.achievementText}>
              <Text style={styles.achievementTitle}>Knowledge Seeker</Text>
              <Text style={styles.achievementDescription}>
                View all lessons
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={resetProgress}
        >
          <Text style={styles.resetButtonText}>Reset Progress</Text>
        </TouchableOpacity>

        <View style={styles.tipsSection}>
          <Text style={styles.sectionTitle}>Learning Tips</Text>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>
              • Practice daily to reinforce concepts
            </Text>
          </View>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>
              • Try modifying examples to understand them better
            </Text>
          </View>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>
              • Don't rush - understanding is more important than speed
            </Text>
          </View>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>
              • Use the playground to experiment freely
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3776ab',
    marginBottom: 24,
  },
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  statsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3776ab',
  },
  percentageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3776ab',
    textAlign: 'center',
  },
  achievementsSection: {
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  achievementIcon: {
    fontSize: 40,
    marginRight: 16,
  },
  achievementText: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666',
  },
  resetButton: {
    backgroundColor: '#f44336',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipsSection: {
    marginBottom: 32,
  },
  tipCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3776ab',
  },
  tipText: {
    fontSize: 14,
    color: '#333',
  },
});
