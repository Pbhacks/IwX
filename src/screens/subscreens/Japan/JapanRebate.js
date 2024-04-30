import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const JapanRebate = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Taxes in Japan: Filing Japanese Income Tax in Japan</Text>
      <Text style={styles.content}>
        For many foreign residents living in Japan it’s possible that the confusion and hours or research spent in filing Japanese taxes are negligible since their companies file on their behalf.
      </Text>
      <Text style={styles.content}>
        However, if 1) you’re self-employed, 2) your company happens to be based overseas, or 3) your company doesn’t provide tax filing services to employees, then there are a few steps you must take before Japan’s mid-March filing deadline. Let’s take a look.
      </Text>
      <Text style={styles.content}>
        Who needs to pay taxes in Japan?
      </Text>
      <Text style={styles.content}>
        If you’ve had some type of income in Japan, chances are you owe the Japanese government. Three categories exist for compulsory tax payers: Residents, Non-Residents, and Temporary Residents.
      </Text>
      <Text style={styles.content}>
        Residents are people who have a domicile in Japan through ownership or rental for one (1) year or more. Additionally, if your employment contract expresses a term of a year or more, you may be considered a resident with or without a listed domicile. Residents are also taxed on their income worldwide.
      </Text>
      <Text style={styles.content}>
        Non-Residents are people who are not domiciled in Japan. Even if you do not live in Japan, any income earned in the country is subject to taxation. However, if you are domiciled in Japan for five years or less and you are not a Japanese national, you are considered a non-resident. Please be aware of the above. If you have an employment contract that has a long term, you may be subject to taxation. And as below, money brought into Japan will be taxed.
      </Text>
      <Text style={styles.content}>
        Temporary Residents are people who come to Japan and work temporarily outside of Japan while being on a foreign payroll. Income from overseas that is not remitted to Japan is exempt from taxation. However, if income is transferred into Japan for any reason, such as to pay for a bill or goods, or even into a Japanese bank, then that remitted money is considered taxable income.
      </Text>
      <Text style={styles.content}>
        Which forms are needed to file your taxes?
      </Text>
      <Text style={styles.content}>
        In recent years, many people have completed their applications online. This is convenient if you have someone who understands Japanese or can assist you in Japanese.
      </Text>
      <Text style={styles.content}>
      [  https://www.keisan.nta.go.jp/]
      </Text>
      <Text style={styles.content}>
        Tax offices also offer advice on tax returns, although this service is only available in Japanese. Check [https://www.nta.go.jp/about/organization/access/map.htm] for the tax office with jurisdiction and make an appointment before going. Some municipal offices also offer consultation services however, as they may not be able to answer about certain types of taxes, it would be best to consult the tax office.
      </Text>
      <Text style={styles.content}>
        [Find all the tax forms here](https://www.nta.go.jp/taxes/shiraberu/shinkoku/syotoku/r05.htm)
      </Text>
      <Text style={styles.content}>
        Abolishment of Tax Return Form A and B: Consolidation of Formats
      </Text>
      <Text style={styles.content}>
        The distinction between A and B upon submission has been eliminated, and the format now displays only as "[Tax Return Form](https://www.nta.go.jp/taxes/shiraberu/shinkoku/yoshiki/01/shinkokusho/pdf/r05/01.pdf)."</Text>
      <Text style={styles.content}>
        Withholdings Tax Slip
      </Text>
      <Text style={styles.content}>
        Around December (or sometimes August), your withholdings tax slip is provided to you by your employer or mailed to the address that you registered with the municipality you are domiciled. If you do not have this slip in your possession, you should make a trip to the city hall in the municipality of your registration.
      </Text>
      <Text style={styles.content}>
        Changes of the Tax Return Documents for 2024
      </Text>
      <Text style={styles.content}>
        The changes to the tax return documents for the year 2024 have been announced in the "Forms and Guidelines for Income Tax and Special Income Tax for Reconstruction for the Year 5 of Reiwa." While there are no major changes overall, some modifications apply to specific individuals.
      </Text>
      <Text style={styles.content}>
        The following is a translation based on the information found on [this page](https://biz.moneyforward.com/tax_return/basic/43836/).
      </Text>
      <Text style={styles.content}>
        Here are the key changes:
      </Text>
      <Text style={styles.content}>
        Family section in the Second Table of the Tax Return Form
      </Text>
      <Text style={styles.content}>
        If a spouse or relative falls under categories such as having a disability or residing abroad, mark the corresponding checkbox in the "Details about Spouse or Relatives" section on the right side.
      </Text>
      <Text style={styles.content}>
        Background of the change: The change in how to fill out the family section is influenced by the stricter requirements for dependents living abroad in the Japanese tax system since January 2023. Previously, dependents living abroad with an annual income of 480,000 yen or less and aged 16 or older were eligible for the dependency deduction.
      </Text>
      <Text style={styles.content}>
        After the legal amendment, additional criteria have been introduced for dependents aged 30 to under 70 who reside abroad. To qualify for the dependency deduction, these dependents must meet one of the following conditions:
      </Text>
      <Text style={styles.content}>
        1\. They have ceased to have a residence or domicile in Japan due to studying abroad.
      </Text>
      <Text style={styles.content}>
        2\. They are individuals with disabilities.
      </Text>
      <Text style={styles.content}>
        3\. They receive living or educational expenses of 380,000 yen or more from the taxpayer claiming the dependency deduction in the respective year.
      </Text>
      <Text style={styles.content}>
        Removal of the "Non-Declaration System" Entry Section for Specific Stock Income
      </Text>
      <Text style={styles.content}>
        Previously, there was a section related to the "Non-Declaration System" for income from specific stocks in the Second Table of the tax return form. However, as depicted in the image above, due to the impact of the Reiwa 4 fiscal year tax system revision, this section has been removed starting from the income tax return for the fiscal year 2023.
      </Text>
      <Text style={styles.content}>
        Specifically, beginning with the income tax return for the fiscal year 2023 (including municipal and prefectural taxes [individual inhabitant tax] for the fiscal year 2024), the taxation method for dividend income, transfer income from listed stocks, and interest income from specific public bonds will be unified between income tax and individual inhabitant tax.
      </Text>
      <Text style={styles.content}>
        While it was previously possible to choose different taxation methods between income tax and individual inhabitant tax, this revision has been implemented based on the policy of designing financial income taxation as a cohesive system, considering fairness.
      </Text>
      <Text style={styles.content}>
        Overview:
      </Text>
      <Text style={styles.content}>
        1\. If you choose non-declaration for income tax, the same applies to individual inhabitant tax.
      </Text>
      <Text style={styles.content}>2\. If you choose declaration for income tax, the same applies to individual inhabitant tax.
      </Text>
      <Text style={styles.content}>
        3\. If you choose non-declaration for individual inhabitant tax, the same applies to income tax.
      </Text>
      <Text style={styles.content}>
        4\. If you choose declaration for individual inhabitant tax, the same applies to income tax.
      </Text>
      <Text style={styles.content}>
        The following is a summary of the changes to the tax return documents for the year 2024:
      </Text>
      <Text style={styles.content}>
        - The distinction between Tax Return Form A and B has been eliminated.
      </Text>
      <Text style={styles.content}>
        - The "Non-Declaration System" entry section for specific stock income has been removed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for dividend income, transfer income from listed stocks, and interest income from specific public bonds has been unified between income tax and individual inhabitant tax.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from specific stocks has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from mutual funds has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign stocks has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign bonds has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign mutual funds has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign real estate has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign partnerships has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign trusts has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign pensions has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign employment has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign self-employment has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign copyrights has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign patents has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign trademarks has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign royalties has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign leases has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign licenses has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign dividends has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign interest has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign capital gains has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign inheritance has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign gifts has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign prizes has been changed.
      </Text>
      <Text style={styles.content}>
        - The taxation method for income from foreign awards has been changed.
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

export default JapanRebate;