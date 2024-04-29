import React from 'react';
import { View,ScrollView, Text } from 'react-native';

const SouthKRebate = () => {
  return (
    <ScrollView>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Returns you may file at the Center</Text>
        <Text>1. VAT</Text>
        <Text>2. Comprehensive Income Tax</Text>
        <Text>3. Corporate Income Tax</Text>
        <Text>4. Capital Gains Tax</Text>
        <Text>5. Inheritance & Gift Tax</Text>
        <Text>6. All other tax returns that can be filed at a tax office</Text>
        <Text>7. Claim for reassessment, including filing past due returns</Text>
      </View>

      <View>
        <Text style={{ fontWeight: 'bold' }}>Filing deadlines</Text>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>VAT</Text>
          <Text>VAT - Tax Period, Taxable Period (MM/DD), Filing/Payment Deadline (MM/DD), Taxpayer</Text>
          <Text>| --- | --- | --- | --- |</Text>
          <Text>| H1 | Preliminary | 1/1~3/31 | 4/25 | Corporate |</Text>
          <Text>| Final | 1/1~6/30 | 7/25 | Corporate, Individual |</Text>
          <Text>| H2 | Preliminary | 7/1~9/30 | 10/25 | Corporate |</Text>
          <Text>| Final | 7/1~12/31 | 1/25 following year | Corporate, Individual |</Text>
          <Text>| - | Final | 1/1~12/31 | 1/25 following year | Simplified |</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Global Income Tax</Text>
          <Text>Global Income Tax - Taxable Period(MM/DD), Filing/Payment Deadline (MM/DD), Taxpayer</Text>
          <Text>| Taxable Period(MM/DD) | Filing/Payment Deadline (MM/DD) | Taxpayer |</Text>
          <Text>| 1/1~12/31 | 5/1~5/31 following year | Taxpayers with an ‘aggregate income’ (business, wage & salary, interest, dividend, annuity and other income aggregated) |</Text>
          <Text>| 1/1~12/31 | 5/1~6/30 following year | Taxpayers with obligation to undergo tax return review by professional tax service providers prior to filing |</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Corporate Income Tax</Text>
          <Text>Corporate Income Tax - Taxable Period, Filing/Payment Deadline</Text>
          <Text>| Taxable Period | Filing/Payment Deadline |</Text>
          <Text>| Business Year | No later than 3 months from the last day of the month in which the business year ends |</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Capital Gains Tax</Text>
          <Text>Capital Gains Tax - Filing, Filing/Payment Deadline (MM/DD), Taxpayer</Text>
          <Text>| Filing | Filing/Payment Deadline (MM/DD) | Taxpayer |</Text>
          <Text>| Preliminary Return | No later than 2 months from the last day of the month in which the asset was sold | Taxpayer subject to capital gains tax |</Text>
          <Text>| Final Return | 5/1~5/31 following year | Taxpayer subject to capital gains tax |</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Inheritance & Gift Tax</Text>
          <Text>Inheritance & Gift Tax - Filing, Filing/Payment Deadline (MM/DD), Taxpayer</Text>
          <Text>| Filing | Filing/Payment Deadline (MM/DD) | Taxpayer |</Text>
          <Text>| Preliminary Return | 1 month from the date of inheritance | Heir |</Text>
          <Text>| Final Return | 5/1~5/31 following year | Heir |</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SouthKRebate;