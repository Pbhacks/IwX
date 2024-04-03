import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const Performance = ({ navigation, route }) => {
  const { monthlySalary, totalCost } = route.params;

  // Calculate percentage of budget spent
  const percentageSpent = (totalCost / monthlySalary) * 100;

  // Determine performance based on budget percentage
  let performance = '';
  if (percentageSpent > 90) {
    performance = 'Bad';
  } else if (percentageSpent >= 75 && percentageSpent <= 90) {
    performance = 'Moderate';
  } else {
    performance = 'Good';
  }

  // Data for the pie chart
  const data = [
    {
      key: 1,
      amount: totalCost,
      svg: { fill: '#F00' },
    },
    {
      key: 2,
      amount: monthlySalary - totalCost,
      svg: { fill: '#0F0' },
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Performance Analysis</Text>
      <PieChart
        style={{ height: 220 }}
        data={data}
        innerRadius={'50%'}
        outerRadius={'70%'}
      />
      <Text style={styles.label}>Budget Performance: {performance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Performance;
