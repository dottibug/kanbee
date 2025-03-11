import { StyleSheet } from 'react-native';
import { colors, typography } from './typography';

export const boardStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export const columnStyles = StyleSheet.create({
  columnHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  columnHeader: {
    marginTop: 12,
    marginBottom: 12,
    textTransform: 'uppercase',
    ...typography.smHeading,
  },
});

export const taskCardStyles = StyleSheet.create({
  card: {
    marginBottom: 12,
  },
  cardContent: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
  },
  cardTitle: {
    marginBottom: 8,
    ...typography.mdHeading,
  },
  cardSubtasks: {
    ...typography.boldBody,
  },
});
