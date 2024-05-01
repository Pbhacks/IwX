import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const ChinaRebate = () => {
  return (
    <ImageBackground
      source={require('../../6.gif')} // Replace './background.gif' with the path to your GIF image
      style={styles.background}
    >
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
        <Text style={styles.title}>Personal Deductions from Comprehensive Income for Residents</Text>
        <Text style={styles.content}>
          When calculating taxable comprehensive income for residents, IIT law allows the following personal deductions (non-refundable and no carryback/forward provisions).
        </Text>
        {/* Insert the provided content here */}
        <Text style={styles.content}>
          <Text style={styles.subTitle}>Deductible Item</Text> | <Text style={styles.subTitle}>Deductible amount (CNY)</Text>
        </Text>
        <Text style={styles.content}>
          Child education | 2,000 per child per month {"\n"}
          Continued education | 400 per month or 3,600 per year depending on the type of qualified continued education {"\n"}
          Mortgage interest | 1,000 per month {"\n"}
          Rental expense | 800, 1,100, or 1,500 per month depending on the location {"\n"}
          Elderly care | Up to 3,000 per month depending on the status of the taxpayer {"\n"}
          Major medical expense | Qualified self-paid portion above 15,000 and capped at 80,000 per year for each eligible individual {"\n"}
          Care expense for children under the age of 3 | 2,000 per child per month {"\n"}
        </Text>
        {/* Insert the remaining provided content here */}
        <Text style={styles.title}>Personal Deductions from Employment Income for Non-Residents</Text>
        <Text style={styles.content}>
          When calculating taxable employment income for non-residents, IIT law only allows the standard basic deduction of CNY 5,000 per month.
        </Text>
        {/* Insert the provided content here */}
        <Text style={styles.title}>Charitable Contributions</Text>
        <Text style={styles.content}>
          If an individual makes charitable contributions to qualified domestic non-profit organisations, such contributions are generally deductible to the extent of 30% of one's taxable income reported. This deduction is applicable to all categories of income.
        </Text>
        {/* Insert the provided content here */}
        <Text style={styles.title}>Remuneration for Labour Services, Author's Remuneration, and Royalties</Text>
        <Text style={styles.content}>
          A deduction equal to 20% of the gross receipt is allowed when determining the income from labour services, author's remuneration, and royalties. A further deduction of 30% is allowable for author’s remuneration.
        </Text>
        {/* Insert the provided content here */}
        <Text style={styles.title}>Rental Income</Text>
        <Text style={styles.content}>
          The following deductions are provided for rental income:
        </Text>
        {/* Insert the provided content here */}
        <Text style={styles.title}>Business Deductions</Text>
        <Text style={styles.content}>
          There are specific and complex tax rules to address the deductions available for income derived from the operation of privately-owned businesses, sole proprietorship enterprises, and partnerships. Certain deduction caps are similar to those applicable to companies that are subject to corporate income tax.
        </Text>
        {/* Insert the provided content here */}
        <Text style={styles.title}>Income from the Transfer of Property (Capital Gain)</Text>
        <Text style={styles.content}>
          For sales of property, the original cost of the property and reasonable expenses incurred are deductible from the sales proceeds to arrive at the taxable income.
        </Text>
        {/* Insert the provided content here */}
        <Text style={styles.title}>Losses</Text>
        <Text style={styles.content}>
          Generally, capital losses are not allowed to be set off against other income or carried forward to other years.
        </Text>
        {/* Insert the provided content here */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(180, 255, 255, 0.7)', // Add a semi-transparent background to improve readability
  },
  title: {
    fontSize: 24, // Increase font size for the title
    fontWeight: 'bold',
    marginBottom: 16, // Increase margin bottom for the title
  },
  subTitle: {
    fontWeight: 'bold',
  },
  content: {
    fontSize: 18, // Increase font size for content
    lineHeight: 26, // Increase line height for content
    marginBottom: 16, // Increase margin bottom for content
  },
});

export default ChinaRebate;
