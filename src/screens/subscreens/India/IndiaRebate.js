import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const IndiaRebate = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>How To File ITR Online - Step by Step Guide to Efile Income Tax Return, FY 2023-24 (AY 2024-25)</Text>
      <Text style={styles.content}>
        An Income Tax Return (ITR) is a form that enables a taxpayer to declare his income, expenses, tax deductions, investments, taxes, etc. The Income-tax Act, 1961 makes it mandatory for a taxpayer to file an income tax return under various scenarios. However, there may be various other reasons to file an income tax return even in the absence of requisite income, like carrying forward losses, claiming an income tax refund, for availing the VISA, loan from banking institutions, term Insurance, etc.
      </Text>
      <Text style={styles.content}>
        E-filing refers to the process of filing an Income Tax Return (ITR) online, using the Internet. By accessing the new income tax portal using PAN-based login credentials, individuals can take advantage of a range of features that simplify the tax filing process.
      </Text>
      <Text style={styles.content}>
        The Income Tax Department provides the facility for e-filing an income tax return. Before discussing the steps involved in e-filing an ITR, it is essential for a taxpayer to keep the following documents/information readily available for e-filing their ITR.
      </Text>
      <Text style={styles.content}>
        - PAN and Aadhaar
        - Bank Statements
        - Form 16
        - Donation receipts
        - Stock trading statements from the broker platform
        - Insurance policy paid receipts related to life and health
        - Bank account information linked to PAN
        - Aadhaar registered mobile number for e-verifying the return
        - Interest certificates from banks
      </Text>
      <Text style={styles.content}>
        However, you can e-file your ITR on Cleartax by just adding your PAN. We will auto-fill most of your details, like salary income, TDS, deduction details, etc, from the Income Tax Department. Here's a detailed guide on how to e-file your ITR on Cleartax.
      </Text>
      <Text style={styles.content}>
        The following are the steps to e-file your ITR on the Income Tax Department's e-filing portal:
      </Text>
      <Text style={styles.content}>
        Step 1: Visit the Income Tax Department's e-filing portal at [https://incometaxindiaefiling.gov.in/]
      </Text>
      <Text style={styles.content}>
        Step 2: Login to the portal using your PAN and password
      </Text>
      <Text style={styles.content}>
        Step 3: Click on the 'e-File' tab and select 'Income Tax Returns'
      </Text>
      <Text style={styles.content}>
        Step 4: Select the assessment year for which you want to file your ITR
      </Text>
      <Text style={styles.content}>
        Step 5: Select the ITR form applicable to you
      </Text>
      <Text style={styles.content}>
        Step 6: Download the ITR form, fill in the required details, and save it
      </Text>
      <Text style={styles.content}>
        Step 7: Upload the filled ITR form to the e-filing portal
      </Text>
      <Text style={styles.content}>
        Step 8: Verify your ITR using any of the following methods:
      </Text>
      <Text style={styles.content}>
        - Aadhaar OTP
        - Netbanking
        - Bank Account
        - Demat Account
      </Text>
      <Text style={styles.content}>
        Step 9: Submit the ITR and download the acknowledgment receipt
      </Text>
      <Text style={styles.content}>
        Itis important to note that the due date for filing an ITR for the financial year 2023-24 (assessment year 2024-25) is 31st July 2024.
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

export default IndiaRebate;