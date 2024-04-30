import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ChinaRebate = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>China Export Tax Refund Policy: Recent Changes, Documentation Process, Foreign Exchange Management</Text>
      <Text style={styles.content}>
        China has improved the export tax refund policy and traders should note the changes in documentation requirements and penalties for violation. The improvements to the tax refund process are facilitating electronic filing of export tax refund documents and new administration measures to optimize foreign exchange management.
      </Text>
      <Text style={styles.content}>
        Export tax refund, or export tax rebates, refer to refunds of value-added tax (VAT) and consumption tax (CT) paid by exporting enterprises on exported goods during the production and circulation process.
      </Text>
      <Text style={styles.content}>
        The export tax refund policy is a crucial part of China's foreign trade policy and is used to promote export growth and improve the competitiveness of Chinese exports in the global market.
      </Text>
      <Text style={styles.content}>
        The export tax refund policy is implemented by the State Administration of Taxation (SAT) and is subject to change based on the needs of the Chinese economy and the global trade environment.
      </Text>
      <Text style={styles.content}>
        The SAT has implemented a number of measures to improve the export tax refund process, including:
      </Text>
      <Text style={styles.content}>
        - Simplifying the application process for export tax refunds
      </Text>
      <Text style={styles.content}>
        - Reducing the time it takes to process export tax refund applications
      </Text>
      <Text style={styles.content}>
        - Increasing the transparency of the export tax refund process
      </Text>
      <Text style={styles.content}>
        - Implementing stricter penalties for violations of the export tax refund policy
      </Text>
      <Text style={styles.content}>
        Traders should be aware of the changes in the export tax refund policy and ensure that they comply with the documentation requirements to avoid penalties.
      </Text>
      <Text style={styles.content}>
        The export tax refund policy is an important tool for promoting export growth and improving the competitiveness of Chinese exports. By simplifying the application process and increasing transparency, the SAT is making it easier for traders to take advantage of the export tax refund policy and grow their businesses.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
});

export default ChinaRebate;