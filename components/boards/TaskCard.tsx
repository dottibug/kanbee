import { Text } from 'react-native';
import TaskModel from '@/models/TaskModel';
import { Card } from 'react-native-paper';
import { taskCardStyles } from '@/styles/boardStyles';

interface TaskCardProps {
  readonly task: TaskModel;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Card
      mode="outlined"
      style={taskCardStyles.card}
      contentStyle={taskCardStyles.cardContent}>
      <Text style={taskCardStyles.cardTitle}>{task.title}</Text>
      <Text style={taskCardStyles.cardSubtasks}>{task.description}</Text>
    </Card>
  );
}
