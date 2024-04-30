import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';


const ChinaIndv = () => {
  const [showMore, setShowMore] = useState({
    'Tax credits and incentives': false,
    'Withholding taxes': false,
    'Tax administration': false,
    'Other issues': false,
  });

  const handleReadMore = (title) => {
    setShowMore({...showMore, [title]:!showMore[title] });
  };



  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/random' }}
      style={styles.background}
    >
    <ScrollView 
        style={{flex: 1}}
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 50}}
    >








                   



<OptionBlock
  title="Significant Developments"
  description="There have been no significant developments in the taxation of individuals in China during the past year."
  onPress={() => handleReadMore('Significant Developments')}
  showMore={showMore['Significant Developments']}
/>           




<OptionBlock
  title="Taxes on Personal Income"
  description="Residents are generally subject to China individual income tax (IIT) on their worldwide income. Non-residents are generally taxed in China on their China-source income only (see the Residence section for more information)."
  textData={[
    "An individual is taxed in China on one's income by category. China's IIT law groups personal income into 9 categories.",
  ]}
  pointers={[
    "Employment income (i.e. wages and salaries).",
    "Remuneration for labour services.",
    "Author's remuneration.",
    "Royalties.",
    "Business income.",
    "Interest, dividends, and profit distribution.",
    "Rental income.",
    "Income from transfer of property.",
    "Incidental income.",
  ]}
  textData2={[
    "Each income category has its own tax rate(s), allowable deductions, etc.",
    "For residents, employment income, remuneration for labour services, author’s remuneration, and royalties are combined as 'comprehensive income' for aggregate tax calculation purpose on an annual basis. Income from the other categories is taxed separately by category on a monthly or transaction basis.",
    "For non-residents, income from each of the 9 categories is taxed separately on a monthly or transaction basis.",
  ]}
  onPress={() => handleReadMore('Taxes on Personal Income')}
  showMore={showMore['Taxes on Personal Income']}
>





<OptionBlock
  title="Comprehensive Income Tax Rates"
  description="For residents, calculation of IIT on annual comprehensive income is based on progressive tax rates using the following formula: (Annual taxable income x Tax rate) - Quick deduction."
  textData={[
    "Annual taxable income after deducting the standard basic deduction, specific deductions, specific additional deductions, and other allowable deductions.",
  ]}
  tableData={[
    { key: '0 to 36,000', value: '3%', quickDeduction: '0' },
    { key: 'Over 36,000 to 144,000', value: '10%', quickDeduction: '2,520' },
    { key: 'Over 144,000 to 300,000', value: '20%', quickDeduction: '16,920' },
    { key: 'Over 300,000 to 420,000', value: '25%', quickDeduction: '31,920' },
    { key: 'Over 420,000 to 660,000', value: '30%', quickDeduction: '52,920' },
    { key: 'Over 660,000 to 960,000', value: '35%', quickDeduction: '85,920' },
    { key: 'Over 960,000', value: '45%', quickDeduction: '181,920' },
  ]}
  tableData2={[
    { key: '0 to 3,000', value: '3%', quickDeduction: '0' },
    { key: 'Over 3,000 to 12,000', value: '10%', quickDeduction: '210' },
    { key: 'Over 12,000 to25,000', value: '20%', quickDeduction: '1,410' },
    { key: 'Over 25,000 to 35,000', value: '25%', quickDeduction: '2,660' },
    { key: 'Over 35,000 to 55,000', value: '30%', quickDeduction: '4,410' },
    { key: 'Over 55,000 to 80,000', value: '35%', quickDeduction: '7,160' },
    { key: 'Over 80,000', value: '45%', quickDeduction: '15,160' },
  ]}
  onPress={() => handleReadMore('Comprehensive Income Tax Rates')}
  showMore={showMore['Comprehensive Income Tax Rates']}
/>


<OptionBlock
  title="Business Income Tax Rates"
  description="Income earned by individuals from privately-owned businesses, sole proprietorship enterprises, or partnerships is generally subject to IIT at progressive rates from 5% to 35%, as follows:"
  tableData={[
    { key: 'Annual taxable income (CNY)', value: 'Tax rate (%)' },
    { key: '0 to 30,000', value: '5' },
    { key: 'Over 30,000 to 90,000', value: '10' },
    { key: 'Over 90,000 to 300,000', value: '20' },
    { key: 'Over 300,000 to 500,000', value: '30' },
    { key: 'Over 500,000', value: '35' },
  ]}
/>
<OptionBlock
  title="Tax Rates for Other Personal Income"
  description="A flat rate of 20% is applied on the remaining categories of income, including incidental income, rental income, interest income, dividends, and capital gains, unless specifically reduced by the State Council."
/>





<OptionBlock
  title="Local Income Taxes"
  description="There are no local taxes on personal income in China."
/>


</OptionBlock>




<OptionBlock
  title="Residence"
  description="China-domiciled individuals and non-China-domiciled individuals who reside in China for 183 days or more in a tax year are considered residents for Individual Income Tax (IIT) purposes. Residents in general are subject to IIT on their worldwide income."
  const residenceTextData ={ [
    "Non-China-domiciled individuals who reside in China for less than 183 days in a tax year are considered non-residents for Individual Income Tax (IIT) purposes. Non-residents in general are subject to IIT on their China-source income only.",
    "China-domiciled individuals are those who habitually reside in China because of their legal residency status, family, or economic ties in China.",
    "Chinese nationals, excluding residents of Hong Kong, Macau, and Taiwan who are normally considered residents for tax purposes.",
  ]}
  textData = {[
    "Non-China-domiciled individuals who reside in China for less than 183 days in a tax year are considered non-residents for Individual Income Tax (IIT) purposes. Non-residents in general are subject to IIT on their China-source income only.",
    "China-domiciled individuals are those who habitually reside in China because of their legal residency status, family, or economic ties in China.",
    "Chinese nationals, excluding residents of Hong Kong, Macau, and Taiwan who are normally considered as non-China-domiciled individuals, are generally considered to have a domicile in China."
  ]}
  pointers = {[
    [
    "Foreign individuals and residents of Hong Kong, Macau, and Taiwan are generally taxed in accordance with their physical presence in China, as follows:",
    "Foreign individuals who reside in China for less than 183 days will be taxed only on their China-source income (see the Income determination section for more information on China-source income).",
    "Foreign individuals who reside in China for 183 days or more in a tax year but not more than six consecutive years will be subject to tax on both their China-source income and their foreign-source income. However, as a concession, foreign-source income is taxed only to the extent of income paid and/or borne by a China entity or individual.",
    "Foreign individuals who reside in China for 183 days or more per year for over six consecutive years will be subject to Individual Income Tax (IIT) on their worldwide income from the seventh consecutive year onward if they reside in China for 183 days or more during the year. The 'six-year' count is reset if the foreign individual spends more than 30 consecutive days outside of China during any tax year.",
    "Foreign individuals who travel to China and derive income from an overseas employer with no permanent establishment in China will be tax exempt if they do not physically stay in China cumulatively for more than 90 days in a calendar year. If the individual is a tax resident of a country/region that has concluded a tax treaty/arrangement with China, the 90-day threshold is extended to 183 days during a calendar year or any 12 consecutive months, depending on the applicable tax treaty/arrangement."
  ]
  ,
  [
    "Income derived from employment or contracted labour services performed within the territory of China.",
    "Rental income in relation to property used within the territory of China.",
    "Income derived from the transfer of real property located within China or other property transfer transactions incurred within the territory of China.",
    "Income derived through the grant of various franchises to be used within the territory of China.",
    "Interest and dividend income paid by companies, enterprises, other organisations, or resident individuals within the territory of China."
  ],
  [
    "Author's remuneration paid or borne by companies, enterprises, or other organisations within the territory of China.",
    "Incidental income paid or borne by companies, organisations, or resident individuals within the territory of China.",
    "Business income derived from business activities performed within the territory of China.",
    "Income from transfer of equity in a foreign entity if, at any time during the three-year period (36 consecutive calendar months) prior to the transfer, more than 50% of the fair value of the assets of the invested foreign entity is derived directly or indirectly from immovable properties located within the territory of China."
  ]
]}
 

  
  
  onPress={() => handleReadMore('Residence')}
  showMore={showMore['Residence']}
/>

<OptionBlock
  title="Other taxes"
  description="Last reviewed - 15 January 2024"
  onPress={() => handleReadMore('Other taxes')}
  showMore={showMore['Other taxes']}
>

<OptionBlock
  title="Social security contributions"
  description="Social security contributions to pension funds, medical funds, etc. are mandatory for Chinese employees. As of 15 October 2011, foreign individuals who hold a China work permit for working in China are required to make social security contributions in relation to pension, medical (including maternity), unemployment, and work-related injury according to the China Social Security Law. Monthly employer and employee social security contribution rates, applicable caps, etc. are governed by local rules, which may vary among the local jurisdictions. For example, contribution rates and caps applicable to local Chinese in Shanghai, Beijing, and Guangzhou are as follows:"

    tableData={[
        { key: <Text style={styles.tableheading}>City</Text>, value: <Text style={styles.tableheading}>Social insurance items</Text>, value2: <Text style={styles.tableheading}>Employee portion</Text>, value3: <Text style={styles.tableheading}>Employer portion</Text> },
        { key: 'Shanghai', value: 'Pension', value2: '8%', value3: '16%' },
        { key: '', value: 'Medical (including maternity)', value2: '2%', value3: '10%' },
        { key: '', value: 'Unemployment', value2: '0.5%', value3: '0.5%' },
        { key: '', value: 'Work-related injury', value2: '0%', value3: '0.16% to 1.52%' },
        { key: '', value: 'Total', value2: '10.5%', value3: '26.66% to 28.02%' },
        { key: '', value: 'Ceiling for monthly salary base', value2: 'CNY 36,549', value3: 'CNY 33,891' },
        { key: 'Beijing', value: 'Pension', value2: '8%', value3: '16%' },
        { key: '', value: 'Medical (including maternity)', value2: '2%', value3: '9.8%' },
        { key: '', value: 'Unemployment', value2: '0.5%', value3: '0.5%' },
        { key: '', value: 'Work-related injury', value2: '0%', value3: '0.2% to 1.9%' },
        { key: '', value: 'Total', value2: '10.5%', value3: '26.5% to 28.2%' },
        { key: '', value: 'Ceiling for monthly salary base', value2: 'CNY 36,549', value3: 'CNY 33,891' },
        { key: 'Guangzhou', value: 'Pension', value2: '8%', value3: '14%' },
        { key: '', value: 'Medical (including maternity)', value2: '2%', value3: '6.85%' },
        { key: '', value: 'Unemployment', value2: '0.2%', value3: '0.8%' },
        { key: '', value: 'Work-related injury', value2: '0%', value3: '0.2% to 1.4%' },
        { key: '', value: 'Total', value2: '10.2%', value3: '21.85% to 23.05%' },
        { key: '', value: 'Ceiling for monthly salary base', value2: 'CNY 26,421 for pension.\nCNY 28,368 for medical.\nCNY 38,082 for unemployment.', value3: '' }
    ]}

   pointers={[[
  "Note:",
  " The rates and ceilings are valid as of 31 December 2023 and are subject to changes in accordance with local regulations.",
  "The contribution base is normally capped at 300% of the Region/City Average Salary of the preceding year and adjusted annually or on needed basis."
   ],]}
  
   textData2={[
   " The employer is obligated to withhold the applicable social contributions of employees from payroll for onward payment, together with the employer's contributions, to the relevant local authorities on a monthly basis.",
  "China now has totalisation agreements in force with eleven countries. Inbound employees who are citizens or assigned by employers of these countries can be partly exempted from China's social security contributions in accordance with the coverage of the relevant totalisation agreements. Set out below is a list summarising the respective dates of entry into force of the eleven agreements and the social security items exempted under each agreement."
]}
  
  
  
tableData1={[
  { key: <Text style={styles.tableheading}>Country</Text>, value: <Text style={styles.tableheading}>Date of entry into force</Text>, value2: <Text style={styles.tableheading}>Items of social security exempted</Text> },
  { key: 'Germany', value: '4 April 2002', value2: 'Pension and Unemployment Insurance' },
  { key: 'Republic of Korea', value: '16 January 2013', value2: 'Pension and Unemployment Insurance' },
  { key: 'Denmark', value: '14 May 2014', value2: 'Pension' },
  { key: 'Canada', value: '1 January 2017', value2: 'Pension' },
  { key: 'Finland', value: '1 February 2017', value2: 'Pension and Unemployment Insurance' },
  { key: 'Switzerland', value: '19 June 2017', value2: 'Pension and Unemployment Insurance' },
  { key: 'The Netherlands', value: '1 September 2017', value2: 'Pension and Unemployment Insurance' },
  { key: 'Spain', value: '20 March 2018', value2: 'Pension and Unemployment Insurance' },
  { key: 'Luxembourg', value: '1 May 2019', value2: 'Pension' },
  { key: 'Japan', value: '1 September 2019', value2: 'Pension' },
  { key: 'Serbia', value: '1 February 2021', value2: 'Pension and Unemployment Insurance' }
]}
  textData3={["China has also signed a totalisation agreement with France, which will not enter into force until both contracting states complete the necessary internal legal procedures. "]}
  
  onPress={() => handleReadMore('Social security contributions')}
  showMore={showMore['Social security contributions']}
/>

<OptionBlock
  title="Value-added tax (VAT)"
  description="An individual engaged in the sale or importation of goods, the provision of services, and the sales of intangible properties and immovable properties is subject to VAT. For general VAT payers, input VAT can be credited against output VAT."
  textData={["The applicable VAT rates (for general VAT payers) from 1 April 2019 are set out in the following table, and the rate for small-scale VAT payers is 3%."]}
  tableData={[
    { key: <Text style={styles.tableheading}>Industries</Text>, value: <Text style={{ ...styles.tableheading, textAlign: 'right' }}>Applicable VAT rate (%)</Text> },
    { key: 'Sales or importation of goods', value: '13' },
    { key: 'Sales or importation of necessity goods (e.g. agricultural products, water, gas)', value: '9' },
    { key: 'Provision of repairs, replacement, and processing services', value: '13' },
    { key: 'Tangible movable property leasing services', value: '13' },
    { key: 'Transportation services, postal services, basic telecommunications services, construction services, immovable property leasing services, sales of immovable properties, transfer of land-use right', value: '9' },
    { key: 'Value-added telecommunications services, financial services, modern services (except for leasing services), consumer services, sales of intangible properties (except for land-use right)', value: '6' },
    
]}
    pointers={[[
      "Exportation of goods; exportation of repair, replacement, and processing services; international transportation services and spacecraft transportation services; exported services that are completely consumed outside China, including:",
      "Research and development (R&D) services.",
"Energy performance contracting services.",
"Design services.",
"Production and distribution services for radio, film, and television programs.",
"Software services.",
"Circuit design and testing services.",
"Information system service.",
"Process management services.",
"Offshore outsourcing services.",
'Transfer of technology.',
    ],
    [
      [
        "Individuals are exempt from VAT if the income derived is below certain thresholds.The provincial level tax bureaus are authorised to determine the exact thresholds within the following ranges:",
        "- Monthly sales amount of no more than CNY 100,000 for registered VAT payer.",
        "- Sales amount of no more than CNY 300 or CNY 500 per transaction/day if the individual is subject to VAT on a transaction basis and not a registered VAT payer."
      ]
    ],
    ]}                      
  
   textData2={["An individual is usually a small-scale VAT taxpayer subject to the VAT rate of 3%. However, individuals engaged in privately-owned business may be recognised as general VAT taxpayers as long as certain criteria, such as sales amount, etc., have been met. Unlike general VAT taxpayers, small-scale taxpayers are not allowed to claim input VAT credits for the VAT paid on their purchases.",
  "The VAT rate for small-scale VAT payers is reduced from 3% to 1% for the period from 1 January to 31 December 2027.",]}
  onPress={() => handleReadMore('Value-added tax (VAT)')}
  showMore={showMore['Value-added tax (VAT)']}
/>




<OptionBlock
  title="Consumption Tax"
  description="A consumption tax is imposed on specified categories of luxury and environmentally unfriendly goods, including cigarettes, alcoholic beverages, high-end cosmetics, jewelry, gasoline, automobiles, battery and coating, etc. The tax liability is computed based on the sales amount and/or the sales volume, depending on the nature of the goods."
  onPress={() => handleReadMore('Consumption Tax')}
  showMore={showMore['Consumption Tax']}
/>

<OptionBlock
  title="Urban Construction and Maintenance Tax"
  description="Urban construction and maintenance tax is imposed at a certain rate on the amount of China's indirect taxes (i.e. VAT and consumption tax) payable by the taxpayer. Effectively, the taxpayers of indirect taxes are also the taxpayers of urban construction and maintenance tax. It is charged at three different rates depending on the taxpayer's location, i.e. 7% for urban areas, 5% for county areas, and 1% for other areas. Urban construction and maintenance tax is not levied on VAT and/or consumption tax paid on imported goods and the sale of services/intangible assets by overseas individuals."
  onPress={() => handleReadMore('Urban Construction and Maintenance Tax')}
  showMore={showMore['Urban Construction and Maintenance Tax']}
/>

<OptionBlock
  title="Educational Surtax"
  description="Educational surtax is imposed at 3% on the amount of China's indirect taxes (i.e. VAT and consumption tax) payable by the taxpayer. Effectively, the taxpayers of indirect taxes are also the taxpayers of educational surtax. Educational surtax is not levied on VAT and/or consumption tax paid on imported goods and the sale of services/intangible assets by overseas individuals."
  onPress={() => handleReadMore('Educational Surtax')}
  showMore={showMore['Educational Surtax']}
/>

<OptionBlock
  title="Local Educational Surtax"
  description="Local educational surtax is levied at 2% on the amount of China's indirect taxes (i.e. VAT and consumption tax) payable by the taxpayer. Effectively, the taxpayers of indirect taxes are also the taxpayers of local educational surtax. Local educational tax is not levied on VAT and/or consumption tax paid on imported goods and the sale of services/intangible assets by overseas individuals."
  onPress={() => handleReadMore('Local Educational Surtax')}
  showMore={showMore['Local Educational Surtax']}
/>
<OptionBlock
  title="Net Wealth/Worth Taxes"
  description="There are no net wealth/worth taxes in China."
  onPress={() => handleReadMore('Net Wealth/Worth Taxes')}
  showMore={showMore['Net Wealth/Worth Taxes']}
/>

<OptionBlock
  title="Inheritance, Estate, and Gift Taxes"
  description="At present, there are no inheritance, estate, or gift taxes in China."
  onPress={() => handleReadMore('Inheritance, Estate, and Gift Taxes')}
  showMore={showMore['Inheritance, Estate, and Gift Taxes']}
/>

<OptionBlock
  title="Real Estate Tax"
  description="A real estate tax, which is based on the value of the real property or rental received, is assessed annually on land and real properties used for business purposes or leased. The annual tax rate is 1.2% of the original value of real properties, and a tax reduction of 10% to 30% is commonly offered by local governments. Alternatively, tax may be assessed at 12% of the rental value. Individuals are exempt from real estate tax if the property is not used for business purposes or rented out."
  onPress={() => handleReadMore('Real Estate Tax')}
  showMore={showMore['Real Estate Tax']}
/>

<OptionBlock
  title="Urban and Township Land-use Tax"
  description="An urban and township land-use tax is levied on taxpayers, including individuals, who utilise land within the area of city, country, township, and mining districts. It is computed annually based on the space of area actually occupied by a taxpayer multiplied by a fixed amount per square meter that is determined by the local governments. In many provinces/cities, individuals are exempt from urban and township land-use tax for holding residential properties."
  onPress={() => handleReadMore('Urban and Township Land-use Tax')}
  showMore={showMore['Urban and Township Land-use Tax']}
/>

<OptionBlock
  title="Land Appreciation Tax"
  description="A land appreciation tax is levied on the gain from the disposal of land-use rights or real estate properties at progressive rates ranging from 30% to 60%. Individuals are exempt from land appreciation tax for selling residential properties."
  onPress={() => handleReadMore('Land Appreciation Tax')}
  showMore={showMore['Land Appreciation Tax']}
/>

<OptionBlock
  title="Customs Duties"
  description="Import and export customs duty is levied on goods that are allowed to be imported into or exported based on the relevant customs regulations. The Consignee of imported goods, consignor of export goods, and owner of entry articles are parties held liable for paying customs duties."
  textData={[
   " The customs classification of import and export goods is the base for the customs supervision, customs taxation, and customs statistics. In 2017, along with the revisions of the classified catalogue in ‘International Convention for Harmonized Commodity Description and Coding System’ made by World Customs Organisation (WCO), large scale adjustments have been made to China’s import and export tariff system.",
  "Import duty is charged in ad valorem, specific, compound, or sliding terms, etc. Ad valorem duty is charged based on the customs valuation of the goods. The dutiable value of the goods is multiplied by an ad valorem duty rate to arrive at the amount of duty payable. Duty collection on an ad valorem basis is the main taxation measure used by most countries, including China. The dutiable value of import and export goods is the taxable value determined by the Customs to levy ad valorem duties on the import and export goods, which is the base to value and levy customs duties payable of import and export goods and import links taxes payable of the import goods.",
   "Import duties are categorised as normal tariff rate, Most Favoured Nation (MFN) tariff rate, contractual tariff rate, preferential tariff rate, tariff-rate quota (TRQ) rate, and temporary tariff rate.",
  "The Country of Origin of imported goods also plays a part in determining the applicability of a number of other trade policies, such as TRQ, preferential tariffs, anti-dumping duty, anti-subsidy duty, etc.",
  "Import and export goods are reduced with or exempted from customs duties, import VAT, and consumption tax according to state regulations.",
  "The importation of raw materials under processing trade is bonded, and customs duty, import VAT, and consumption tax exemption is allowed on the part to be re-exported after processing.",
  "For goods that enter into and exit from the customs special supervision zone, import duties, import VAT, and consumption tax are held over at the time of importation, which are to be exempted for exportation and to be paid for sales from the customs special supervision zone to domestic markets.",
  ]}


  onPress={() => handleReadMore('Customs Duties')}
  showMore={showMore['Customs Duties']}
/>


<OptionBlock
  title="Deed Tax"
  description="A deed tax, generally at rates ranging from 3% to 5%, may be levied on the purchase or sale, gift or exchange of ownership of land use rights or real properties. The transferee/assignee is the taxpayer."
  onPress={() => handleReadMore('Deed Tax')}
  showMore={showMore['Deed Tax']}
/>

<OptionBlock
  title="Stamp Tax"
  description="Individuals who conclude taxable documents or conduct securities trading in China, as well as individuals who conclude taxable contracts outside China while the contacts are used in China, are subject to stamp tax. The stamp tax rates vary between 0.005% on loan contracts and finance leasing contracts to 0.1% for property leasing (other than finance lease) and property insurance contracts."
  onPress={() => handleReadMore('Stamp Tax')}
  showMore={showMore['Stamp Tax']}
/>

<OptionBlock
  title="Treatment of Foreign-Owned Real Estate"
  description="A foreign individual is subject to deed tax and stamp duty upon the purchase of real property in China."
 
  textData={[
    "A foreign individual is subject to IIT, VAT, real estate tax, stamp duty, plus some minor local taxes on its rental income.",
    "A foreign individual is subject to IIT, VAT, land appreciation tax, and stamp duty, plus some minor local taxes, upon the disposal of real property in China. Individuals are exempt from land appreciation tax for selling residential properties and exempt from stamp duty for purchasing/selling residential properties."
  ]}
 
  onPress={() => handleReadMore('Treatment of Foreign-Owned Real Estate')}
  showMore={showMore['Treatment of Foreign-Owned Real Estate']}
/>

<OptionBlock
  title="Motor Vehicle Acquisition Tax"
  description="A motor vehicle acquisition tax, at a rate of 10% of the taxable consideration, is applicable on any purchase, import, self-production, receipt as a gift or award, etc. of an automobile, a tramcar, a trailer, or a motorcycle with a gas displacement of over 150 millilitres within China."
  onPress={() => handleReadMore('Motor Vehicle Acquisition Tax')}
  showMore={showMore['Motor Vehicle Acquisition Tax']}
/>

<OptionBlock
  title="Vehicle and Vessel Tax"
  description="A vehicle and vessel tax is a tax that is levied on all vehicles and vessels within China. A fixed amount is levied on a yearly basis. Transport vehicles are generally taxed on a fixed amount according to their own weight, with passenger cars, buses, and motorcycles being taxed on a fixed unit amount. Vessels are taxed on a fixed amount, according to the deadweight tonnage."
  onPress={() => handleReadMore('Vehicle and Vessel Tax')}
  showMore={showMore['Vehicle and Vessel Tax']}
/>





  
</OptionBlock>



<OptionBlock
  title="Income Determination"
  description="Last reviewed - 15 January 2024. There are 9 categories of income (see the Taxes on personal income section for more information). All types of income shall be grouped under the relevant category."
  onPress={() => handleReadMore('Income Determination')}
  showMore={showMore['Income Determination']}
>

<OptionBlock
  title="Employment Income"
  description="Employment income includes wages/salaries, awards, bonuses, hardship and foreign-service allowances, etc. It can take the form of cash, benefits in kind, marketable securities, and any other forms of economic benefits. On the other hand, reimbursements of business-related expenses to employees and certain non-taxable fringe benefits provided to foreign individuals, if the amounts are reasonable and supported by valid receipts, are not taxable."
  textData={["Chinese social security contributions made by the employer in accordance with the Social Security Law are not taxable for IIT purposes.",
              "Overseas social security contributions made by the employer, regardless of whether they are made on a voluntary or mandatory basis, are subject to IIT. IIT on these contributions is normally imposed when the contribution is made instead of at the time of cash withdrawal and/or distribution.",
              "Statutory pension income received after retirement in accordance with the Social Security Law is tax exempted income."]}
  
  onPress={() => handleReadMore('Employment Income')}
  showMore={showMore['Employment Income']}
/>

<OptionBlock
  title="Equity Compensation"
  description="Income derived by employees from equity plans upon exercise/vesting is generally treated as employment income in nature. Where applicable, equity plan income may be allocated between China and non-China sources. Depending on the features of the plan (e.g. equity holding interest relationship between the listed company and the employee's employing entity, completion of the required record filing procedure), equity plan income may be eligible for favorable tax calculation treatment."
  onPress={() => handleReadMore('Equity Compensation')}
  showMore={showMore['Equity Compensation']}
/>

<OptionBlock
  title="Labour Service Income"
  description="Labour service income refers to gross income derived by individuals from independent services such as design, medical practice, legal practice, accounting, consulting, etc."
  onPress={() => handleReadMore('Labour Service Income')}
  showMore={showMore['Labour Service Income']}
/>

<OptionBlock
  title="Business Income"
  description="In China, an individual may engage in the following types of businesses: privately-owned business, sole proprietorship enterprise, and partnership enterprise. These three types of business entities are taxed at the individual investor/partner level rather than the entity level. Qualified expenses and costs are allowed to be deducted from the gross business income to arrive at the net taxable income."
  onPress={() => handleReadMore('Business Income')}
  showMore={showMore['Business Income']}
/>

<OptionBlock
  title="Income from the Transfer of Property (Capital Gain)"
  description="Income from the transfer of property includes income from transfer of securities, shares, real estate properties, shares of partnership interest, etc. The cost basis of the property and reasonable expenses incurred are deductible from the sales proceeds to arrive at the taxable income."
  onPress={() => handleReadMore('Income from the Transfer of Property (Capital Gain)')}
  showMore={showMore['Income from the Transfer of Property (Capital Gain)']}
/>

<OptionBlock
  title="Dividend Income"
  description="Dividend income is taxed on the gross amount received, without deductions."
  onPress={() => handleReadMore('Dividend Income')}
  showMore={showMore['Dividend Income']}
/>

<OptionBlock
  title="Interest Income"
  description="Interest income is taxed on the gross amount received, without deductions. Interest income received from bank deposits in China is currently not taxable."
  onPress={() => handleReadMore('Interest Income')}
  showMore={showMore['Interest Income']}
/>

<OptionBlock
  title="Rental Income"
  description="Rental income refers to income derived through the leasing of buildings, granting of rights to land usage, machinery and equipment, motor vehicles, ships, and other property."
  onPress={() => handleReadMore('Rental Income')}
  showMore={showMore['Rental Income']}
/>

<OptionBlock
  title="Income from Intellectual Property (IP)"
  description="Royalties are subject to the progressive tax rates of 3% to 45% applicable to comprehensive income but may be reduced under a tax treaty/arrangement."
  textData={["Income derived from the transfer of IP is considered capital gain and subject to the flat tax rate of 20%",
             "Author's remuneration is subject to the progressive tax rates of 3% to 45% applicable to comprehensive income.",
             "Certain income derived by foreign individuals in relation to IP is not taxable in China, depending on the individual's physical presence in China (see the Residence section for more information) and the source of the income."]}
  
  
  onPress={() => handleReadMore('Income from Intellectual Property (IP)')}
  showMore={showMore['Income from Intellectual Property (IP)']}
/>







</OptionBlock>




<OptionBlock
  title="Deductions"
  description="Last reviewed - 15 January 2024."
  onPress={() => handleReadMore('Deductions')}
  showMore={showMore['Deductions']}
>

<OptionBlock
  title="Personal Deductions for Residents"
  description="When calculating taxable comprehensive income for residents, the IIT law allows the following personal deductions. These deductions are non-refundable and have no carryback/forward provisions."
  onPress={() => handleReadMore('Personal Deductions for Residents')}
  showMore={showMore['Personal Deductions for Residents']}
>






<OptionBlock
  title="Standard Basic Deduction"
  description="As of 1 January 2019, the amount of the standard basic deduction is CNY 60,000 per annum (i.e. CNY 5,000 for monthly tax withholding purpose)."
  onPress={() => handleReadMore('Standard Basic Deduction')}
  showMore={showMore['Standard Basic Deduction']}
/>

<OptionBlock
  title="Specific Deductions"
  description="Chinese social security contributions made in accordance with the Social Security Law and contributions made to the statutory Housing Fund are deductible for IIT purpose."
  onPress={() => handleReadMore('Specific Deductions')}
  showMore={showMore['Specific Deductions']}
/>

<OptionBlock
  title="Specific Additional Deductions"
  description="Residents deriving comprehensive income, if eligible, can claim specific additional deductions when calculating the annual taxable income."

  textData="The following table lists deductible items and their respective deductible amounts (CNY):"
  tableData={[
    { key: <Text style={{ height: "15px", width: "288px" }}>Deductible item</Text>, value: <Text style={{ height: "15px", width: "288px" }}>Deductible amount (CNY)</Text> },
    { key: 'Child education', value: '2,000 per child per month' },
    { key: 'Continued education', value: '400 per month or 3,600 per year depending on the type of qualified continued education' },
    { key: 'Mortgage interest', value: '1,000 per month' },
    { key: 'Rental expense', value: '800, 1,100, or 1,500 per month depending on the location' },
    { key: 'Elderly care', value: 'Up to 3,000 per month depending on the status of the taxpayer' },
    { key: 'Major medical expense', value: 'Qualified self-paid portion above 15,000 and capped at 80,000 per year for each eligible individual' },
    { key: 'Care expense for children under the age of 3', value: '2,000 per child per month' },
  ]}

  
  onPress={() => handleReadMore('Specific Additional Deductions')}
  showMore={showMore['Specific Additional Deductions']}
/>


<OptionBlock
  title="Other Allowable Deductions"
  description="There are also certain deductible items specifically provided by various IIT regulations, such as employee contributions to qualified corporate annuities, premiums paid to commercial health insurance eligible for IIT incentives, premiums paid to commercial endowment insurance or contribution made to individual pension accounts eligible for IIT deferral treatment, etc."
  onPress={() => handleReadMore('Other Allowable Deductions')}
  showMore={showMore['Other Allowable Deductions']}
/>

</OptionBlock>






<OptionBlock
  title="Personal Deductions from Employment Income for Non-Residents"
  description="When calculating taxable employment income for non-residents, the IIT law only allows the standard basic deduction of CNY 5,000 per month."
  onPress={() => handleReadMore('Personal Deductions from Employment Income for Non-Residents')}
  showMore={showMore['Personal Deductions from Employment Income for Non-Residents']}
/>

<OptionBlock
  title="Charitable Contributions"
  description="If an individual makes charitable contributions to qualified domestic non-profit organizations, such contributions are generally deductible to the extent of 30% of one's taxable income reported. This deduction is applicable to all categories of income."
  onPress={() => handleReadMore('Charitable Contributions')}
  showMore={showMore['Charitable Contributions']}
/>

<OptionBlock
  title="Remuneration for Labour Services, Author's Remuneration, and Royalties"
  description="A deduction equal to 20% of the gross receipt is allowed when determining the income from labour services, author's remuneration, and royalties. A further deduction of 30% is allowable for author’s remuneration."
  onPress={() => handleReadMore('Remuneration for Labour Services, Author\'s Remuneration, and Royalties')}
  showMore={showMore['Remuneration for Labour Services, Author\'s Remuneration, and Royalties']}
/>

<OptionBlock
  title="Rental Income Deductions"
  description=""
 pointers={[[
    "The following deductions are provided for rental income:",
    "- If the amount received in a month is not more than CNY 4,000, a deduction of CNY 800 is allowed.",
    "- If the amount received in a month exceeds CNY 4,000, a deduction equal to 20% of the gross receipt is allowed."
  ],
]}
  onPress={() => handleReadMore('Rental Income Deductions')}
  showMore={showMore['Rental Income Deductions']}
/>
<OptionBlock
  title="Business Deductions"
  description="There are specific and complex tax rules to address the deductions available for income derived from the operation of privately-owned businesses, sole proprietorship enterprises, and partnerships. Certain deduction caps are similar to those applicable to companies that are subject to corporate income tax."
  textData={"In addition, for individuals who derive both comprehensive income and business income during the tax year, the standard basic deduction of CNY 60,000, specific deductions, specific additional deductions, and other allowable deductions (i.e. personal deductions applicable to comprehensive income) are allowed to be deducted from either income category provided that no double deduction is claimed."}
  onPress={() => handleReadMore('Business Deductions')}
  showMore={showMore['Business Deductions']}
/>


<OptionBlock
  title="Income from the Transfer of Property (Capital Gain)"
  description="For sales of property, the original cost of the property and reasonable expenses incurred are deductible from the sales proceeds to arrive at the taxable income."
  onPress={() => handleReadMore('Income from the Transfer of Property (Capital Gain)')}
  showMore={showMore['Income from the Transfer of Property (Capital Gain)']}
/>

<OptionBlock
  title="Losses"
  description="Generally, capital losses are not allowed to be set off against other income or carried forward to other years. However, losses from privately-owned business and sole proprietorship enterprise can be carried forward for five years."
  onPress={() => handleReadMore('Losses')}
  showMore={showMore['Losses']}
/>






</OptionBlock>




<OptionBlock
  title="Foreign Tax Relief and Tax Treaties"
  description="Last reviewed - 15 January 2024"
  onPress={() => handleReadMore('Foreign Tax Relief and Tax Treaties')}
  showMore={showMore['Foreign Tax Relief and Tax Treaties']}
>


<OptionBlock
  title="Foreign Tax Relief"
  description="Foreign taxes paid on non-China-source income may be claimed as a credit on the China tax return, but only to the extent of the IIT payable on the same category of income derived from the same country. Unused excess credits are non-refundable and can only be carried forward for a maximum of five years. Documentary evidence of the tax payment (e.g. tax payment certificate, tax clearance certificate) to substantiate claims of foreign tax credits is required by the Chinese tax authorities."
  onPress={() => handleReadMore('Foreign Tax Relief')}
  showMore={showMore['Foreign Tax Relief']}
/>

<OptionBlock
  title="Tax Treaties"
  description="As of 31 December 2023, China has concluded tax treaties/arrangements with 112 countries/regions."
  textData={[
    "As of 31 December 2023, China has signed tax information exchange agreements with Argentina, Bahamas, Bermuda, British Virgin Islands, Cayman Islands, Guernsey, Isle of Man, Jersey, Liechtenstein, and San Marino.",
    "As of 31 December 2023, China has totalisation agreements in force with 11 countries, including Canada, Denmark, Finland, Germany, Japan, the Republic of Korea, Luxembourg, the Netherlands, Serbia, Spain, and Switzerland. China has also signed a totalisation agreement with France, which has not entered into force."
  ]}
  onPress={() => handleReadMore('Tax Treaties')}
  showMore={showMore['Tax Treaties']}
/>



</OptionBlock>


<OptionBlock
  title="Other Tax Credits and Incentives"
  description="Dividend income is generally taxed at 20% unless otherwise provided for in the applicable income tax treaty. Dividend income derived from shares traded on the Shanghai, Shenzhen, and Beijing Stock Exchanges is entitled to 50% or 100% tax reduction, depending on the length of holding."
  textData={[
    "Capital gains from transfer of shares traded on the Shanghai, Shenzhen, and Beijing Stock Exchanges are generally exempt from IIT.", 
    "Interest on government bonds and finance bonds issued by the Chinese Government, as well as bank deposit interest income, is currently exempt from IIT.",
    "Income of diplomatic representatives, consuls, and other personnel of foreign embassies and consulates is also exempt from IIT.",
    "China's domestic law states that those foreign individuals who stay in China for no more than 90 days within a tax year may be exempted from IIT on their China-sourced employment income provided such income is paid or borne by a non-China entity (see the Residence section for more information).",
    "A tax incentive is available for eligible talents deriving comprehensive income (or employment income, remuneration for labour services, author's remuneration, and royalties in case of non-resident taxpayers) or business income from specific regions, such as the Hainan Free Trade Port (from 1 January 2020 to 31 December 2024), the nine cities in the Guangdong-Hong Kong-Macao Greater Bay Area (from 1 January 2019 to 31 December 2027), and the Guangdong-Macao In-Depth Cooperation Zone in Hengqin (from 1 January 2021 to 31 December 2025). The effective tax rate on the above-mentioned income is capped at 15%, and an IIT refund or rebate claim is available for any excess IIT paid or withheld."
  ]}
  onPress={() => handleReadMore('Other Tax Credits and Incentives')}
  showMore={showMore['Other Tax Credits and Incentives']}
/>



<OptionBlock
  title="Tax Administration"
  description="Last reviewed - 15 January 2024"
  onPress={() => handleReadMore('Tax Administration')}
  showMore={showMore['Tax Administration']}
>

<OptionBlock
  title="Taxable Period"
  description="China's tax year runs from 1 January to 31 December, but tax filing is generally administered on a monthly basis."
  onPress={() => handleReadMore('Taxable Period')}
  showMore={showMore['Taxable Period']}
/>

<OptionBlock
  title="Tax Returns"
  description="For employment income, the employer is obligated to file the provisional or final withholding IIT returns with its tax authority on a monthly basis."
 textData={["For other categories of income, the tax return, either provisional or final, has to be filed on a monthly, annual, or transaction basis, depending on the specific circumstances.",
 "Certain types of residents must file an annual reconciliation tax return on comprehensive income (see Withholding requirements below for more information). The filing period for the annual reconciliation tax return is between 1 March and 30 June of the following year.",
 "There is no joint tax return in China. Husbands and wives are assessed and taxed separately.",
 "Tax returns must be filed on a timely basis. Extensions to file may be granted under 'special circumstances' only."]}
 
  onPress={() => handleReadMore('Tax Returns')}
  showMore={showMore['Tax Returns']}
/>


<OptionBlock
  title="Withholding Requirements"
  description="The payer of income is usually obligated to withhold the IIT payable upon payment of taxable income to the payee. Where the payer fails to withhold the full amount of IIT payable, it is the payee who is ultimately liable for the IIT payable and responsible for filing of the tax return and settling the IIT payable with the tax authority."
  onPress={() => handleReadMore('Withholding Requirements')}
  showMore={showMore['Withholding Requirements']}
/>


<OptionBlock
  title="Provisional Tax Withholding on Comprehensive Income Paid to Residents"
  description="The payer of employment income, remuneration for labor services, author’s remuneration, and royalties made to residents is generally obligated to perform provisional tax withholding on such income by adopting the required withholding method."
  onPress={() => handleReadMore('Provisional Tax Withholding on Comprehensive Income Paid to Residents')}
  showMore={showMore['Provisional Tax Withholding on Comprehensive Income Paid to Residents']}
/>

<OptionBlock
  title="Employment Income"
  description="Monthly provisional tax withholding amount is calculated on an accumulative basis with the annual tax table on comprehensive income. Eligible personal deductions are generally allowed (accumulative monthly amount) in calculating the monthly provisional withholding tax."
  textData={["The taxpayer can also choose to claim specific additional deductions on one's own through the annual reconciliation tax filing instead of having them included in the monthly provisional withholding tax calculation by the employer."]}
  onPress={() => handleReadMore('Employment Income')}
  showMore={showMore['Employment Income']}
/>
<OptionBlock
  title="Remuneration for Labour Services, Author’s Remuneration, and Royalties"
  description="Provisional tax withholding on the above income paid to residents is calculated on a monthly or transaction basis."
  pointers = {[
    [
      "The following deductions are allowed when calculating the taxable income for provisional tax withholding purpose:",
      "- If the gross receipt is not more than CNY 4,000, a deduction of CNY 800 is allowed.",
      "- If the gross receipt exceeds CNY 4,000, a deduction of 20% is allowed.",
      "- A further deduction of 30% is allowable for author’s remuneration."
    ]
  ]}
  

  textData={["Provisional tax at a flat rate of 20% should be withheld from the taxable income of author’s remuneration and royalties.",
             "For income derived from labour services, provisional tax is calculated and withheld based on progressive tax rates ranging from 20% to 40% as below:"]}
  tableData={[
               { key: <Text style={{ width: "428px" }}>Taxable labour service income (CNY)</Text>, value: <Text style={{ width: "279px", textAlign: "right" }}>Provisional withholding tax rate (%)</Text> },
               { key: '0 to 20,000', value: '20' },
               { key: 'Over 20,000 to 50,000', value: '30' },
               { key: 'Over 50,000', value: '40' },
             ]}
                    
  onPress={() => handleReadMore('Remuneration for Labour Services, Author’s Remuneration, and Royalties')}
  showMore={showMore['Remuneration for Labour Services, Author’s Remuneration, and Royalties']}
/>

<OptionBlock
  title="Actual Tax Withholding on Employment Income, Remuneration for Labour Services, Author’s Remuneration, and Royalties Paid to Non-Residents"
  description="Payer of employment income, remuneration for labour services, author’s remuneration, and royalties made to non-residents is generally obligated to withhold IIT by each income category on a monthly or transaction basis at the progressive tax rates. Such tax withholding is considered actual and final."
  onPress={() => handleReadMore('Actual Tax Withholding on Employment Income, Remuneration for Labour Services, Author’s Remuneration, and Royalties Paid to Non-Residents')}
  showMore={showMore['Actual Tax Withholding on Employment Income, Remuneration for Labour Services, Author’s Remuneration, and Royalties Paid to Non-Residents']}
/>

<OptionBlock
  title="Self-Reporting Requirement"
  description=""
  pointers = {[
    [
      "The following types of individuals are obligated to self-report their income to the tax authorities:",
      "- A resident who derives comprehensive income and is required to perform an annual reconciliation tax filing.",
      "- An individual who derives taxable income on which the withholding agent does not perform tax withholding and filing.",
      "- An individual who derives income from outside China.",
      "- An individual who derives taxable income but does not have a withholding agent.",
      "- A non-resident who derives employment income from two or more sources within China.",
      "- An individual who applies to de-register Chinese household due to emigration."
    ],
      [
        "Residents deriving comprehensive income are generally required to file an annual reconciliation tax return in case of the following:",
        "- A resident who derives comprehensive income from two or more sources with an annual amount exceeding the total of the standard basic deduction (i.e. CNY 60,000) and the specific deductions.",
        "- A resident who derives remuneration for labour services, author’s remuneration, and/or royalties and whose annual comprehensive income exceeds the total of the standard basic deduction (i.e. CNY 60,000) and the specific deductions.",
        "- A resident whose provisional tax withheld from comprehensive income is below the final tax payable thereon.",
        "- A resident who claims tax refund on comprehensive income."
      ]
    
  ]}
  
 textData3={["For the tax years 2019 to 2027, residents whose annual comprehensive income or IIT underpaid on comprehensive income is less than the stipulated threshold can be exempted from the annual reconciliation tax filing if the withholding agents have fulfilled their responsibility of withholding the correct amount of IIT. The stipulated threshold is annual comprehensive income not exceeding CNY 120,000 or IIT underpaid not more than CNY 400."]}

  onPress={() => handleReadMore('Self-Reporting Requirement')}
  showMore={showMore['Self-Reporting Requirement']}
/>


<OptionBlock
  title="Payment of Tax"
  description="Generally, the withholding IIT return should be filed and IIT payable should be settled by the 15th day of the month following the income receiving month."
  textData={["For employment income, the employer is obligated to withhold and settle the IIT payable generally within 15 days after the end of each month.",
             "A surcharge of 0.05% per day for all taxes, including IIT, will be assessed on delinquent payments, pursuant to the China Tax Administration and Collection Law."
            ]}
  onPress={() => handleReadMore('Payment of Tax')}
  showMore={showMore['Payment of Tax']}
/>

<OptionBlock
  title="Audit Cycle"
  description="There is no fixed audit cycle in China. Tax audit targets are selected pursuant to certain criteria."
  onPress={() => handleReadMore('Audit Cycle')}
  showMore={showMore['Audit Cycle']}
/>

<OptionBlock
  title="Statute of Limitations"
  description="For unintentional errors (e.g. calculation errors) committed by the taxpayer/tax withholding agent in the tax filing, the statute of limitations is three years and extended to five years if the amount of tax underpaid is CNY 100,000 or more. There is no statute of limitations for tax evasion, refusal to pay tax, or defrauding of tax payment."
  onPress={() => handleReadMore('Statute of Limitations')}
  showMore={showMore['Statute of Limitations']}
/>


<OptionBlock
  title="Topics of Focus for Tax Authorities"
  description=""
  pointers = {[
    [
      "Topics of Focus for Tax Authorities",
      "Non-employment income derived by individuals with real estate investment, mining resources investment, private equity, and investment through trust.",
      "Tax compliance in fast developing industries, such as live-streaming platforms, and key areas, such as share transfer by high-income individuals.",
      "Employment income (including share-based incentives) derived by individuals in high-income industries.",
      "Reconciliation of staff expenses with IIT withholding for employers in high-income industries.",
      "Tax evasion via illegal offsetting of employment income by fapiaos (receipts), such as non-taxable fringe benefits for foreign employees that are not properly implemented.",
      "Enhancing the database of foreigners' earnings by country, industry, and grade for detection of cases of underreporting.",
      "More effectively use of the information exchange provision in the income tax treaties to recover IIT on offshore income earned by those individuals who are subject to IIT on their worldwide income.",
      "Reviewing IIT compliance in relation to deemed permanent establishment/fixed base in order to detect abuse of tax treaty benefits by foreign individuals."
    ]
  ]}
  
  onPress={() => handleReadMore('Topics of Focus for Tax Authorities')}
  showMore={showMore['Topics of Focus for Tax Authorities']}
/>




</OptionBlock>









<OptionBlock
  title="Sample Personal Income Tax Calculation"
  description="Below is a sample calculation of the annual IIT liability on comprehensive income derived by a resident individual for the year 2023 (for illustrative purpose)."
  pointers = {[
    [
      "Assumptions:",
      "- The individual derives employment income of CNY 35,000 per month and one-off remuneration for labour services in the amount of CNY 50,000.",
      "- The individual makes monthly contribution of CNY 5,000 to China statutory social security and housing fund (i.e. specific deductions).",
      "- The individual claims the following specific additional deductions for the whole year:",
      "  - Child education for one qualified child.",
      "  - Mortgage interest."
    ]
  ]}
  tableData={[
    { key: "Calculation of annual IIT on comprehensive income", value: "CNY", value2: "CNY" },
    { key: 'Employment income', value: '420,000', value2: '' },
    { key: 'Remuneration for labour services', value: '50,000', value2: '' },
    { key: "Less: 20% of gross remuneration for labour services", value: '(10,000)', value2: '' },
    { key: "Total comprehensive income", value: '', value2: '460,000' },
    { key: "Less: Personal deductions", value: '', value2: '' },
    { key: 'Standard basic deduction', value: '(60,000)', value2: '' },
    { key: 'Specific deductions', value: '(60,000)', value2: '' },
    { key: 'Specific additional deductions', value: '(36,000)', value2: '(156,000)' },
    { key: "Taxable comprehensive income", value: '', value2: '304,000' },
    { key: 'Applicable tax rate @ 25%', value: '', value2: '76,000' },
    { key: 'Less: Quick deduction', value: '', value2: '(31,920)' },
    { key: "Tax on comprehensive income", value: '', value2: '44,080' },
  ]}
  
  
  onPress={() => handleReadMore('Sample Personal Income Tax Calculation')}
  showMore={showMore['Sample Personal Income Tax Calculation']}
/>


<OptionBlock
  title="Other Issues"
  description=""
  onPress={() => handleReadMore('Other Issues')}
  showMore={showMore['Other Issues']}
>

<OptionBlock
  title="Treatment of Partnerships"
  description="Partnerships established in China are not taxable entities. The income of a partnership is taxable at the partners' level. The corporate partners and individual partners are subject to corporate income tax (CIT) and individual income tax (IIT), respectively, on the taxable income so allocated. In other words, the taxpayers are the corporate partners and individual partners, instead of the partnership."
  onPress={() => handleReadMore('Treatment of Partnerships')}
  showMore={showMore['Treatment of Partnerships']}
/>

<OptionBlock
  title="Anti-Avoidance Rules"
  description="Anti-avoidance rules are introduced into the IIT Law taking effect since 1 January 2019. The tax authorities are provided legal basis to perform tax adjustment in case of transactions against arm’s-length principles, controlled foreign company (CFC) arrangements in tax havens, as well as arrangements deriving inappropriate tax benefits without reasonable commercial substance."
  onPress={() => handleReadMore('Anti-Avoidance Rules')}
  showMore={showMore['Anti-Avoidance Rules']}
/>


</OptionBlock>
































      </ScrollView>
    </ImageBackground>
  );
};

const OptionBlock = ({
  title,
  description,
  newComponent,
  readMoreText,
  subheading,
  tableData,
  tableData1,
  pointers,
  onPress,
  showMore,
  children,
  order,
  textData,
  textData1,
  textData2,
  textData3,
  image,
}) => {

  return (
    <TouchableOpacity style={[styles.button, styles.card]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: '#FFFF00' }]}>{title}</Text>
      {showMore? (
        <>
         {(order || []).map((componentKey) => components[componentKey])}
           <Text style={styles.optionText}>{description}</Text>
           
           {Array.isArray(textData) ? textData.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text>{textData}</Text>}

           {image && <Image source={image} style={styles.image} />}
          {subheading && <Text style={styles.subheading}>{subheading}</Text>}
          
               

        {tableData && (
          <View style={styles.table}>
            {tableData.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {Object.entries(row).map(([key, value], cellIndex) => (
                  <Text key={cellIndex} style={key === 'key' ? styles.tableCellKey : styles.tableCellValue}>
                    {value}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}




          {Array.isArray(textData1) ? textData1.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text  >{textData1}</Text>}
          
          {/* {pointers && (
            <View style={styles.pointersContainer}>
              {pointers.map((pointer, index) => (
                <Text key={index} style={styles.pointer}>
                 {'\u2022'} {pointer}
                </Text>
              ))}
            </View>
          )} */}


          


           {pointers && pointers.map((pointerArray, index) => (
            <View key={index} style={styles.pointersContainer}>
              {pointerArray.map((pointer, index) => (
                 <Text key={index} style={index === 0 ? styles.description : styles.pointer}>
                 {index === 0 ? pointer : '\u2022 ' + pointer}
               </Text>
              ))}
            </View>
          ))}
          {Array.isArray(textData2) ? textData2.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text  >{textData2}</Text>}
          
           {typeof children === 'string' ? <Text>{children}</Text> : children}


           {tableData1 && (
          <View style={styles.table}>
            {tableData1.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {Object.entries(row).map(([key, value], cellIndex) => (
                  <Text key={cellIndex} style={key === 'key' ? styles.tableCellKey : styles.tableCellValue}>
                    {value}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}
         {Array.isArray(textData3) ? textData3.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text  >{textData3}</Text>}
        </>
      ) : (
        <Text style={styles.optionText}>{description ? description.substring(0, 100) : ''}...</Text>
      )}
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.readMoreText}>{showMore? 'Show Less' : 'Read More'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({


  image: {
    width: 100, // or whatever width you want
    height: 100, // or whatever height you want
  },

  
  textData: {
    padding: 10,
    paddingVertical: 10,
    fontSize: 14,
    color: '#ffffff',
  },
  
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    backgroundColor: 'rgba(17, 25, 40, 0.75)',
    borderRadius: 12,
    border: '1px solid rgba(255, 255, 255, 0.125)',
    marginBottom: 20,
    padding: 20,
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  optionText: {
    color: '#ffffff',
  },
  readMoreText: {
    color: '#ffffff',
    marginTop: 10,
    textDecorationLine: 'underline',
  },


subheading: {
    fontSize: 20,
    color: '#FF5733',
    marginTop: 10,
  },
  pointer: {
    fontSize: 18,
    color: '#008CBA',
    marginTop: 5,
    textAlign: 'left',
    
    },
    tableHeaderKey: {
      width: '40%',
      backgroundColor: '#333', // change this to your desired color
    },
    tableHeaderValue: {
      width: 'auto',
      maxWidth: '60%',
      backgroundColor: '#333', // change this to your desired color
     
    },
    tableHeaderCell: {
      flex: 1,
      color: '#fff', // change this to your desired color
      fontWeight: 'bold',
      marginHorizontal: 5,
    }, 
  table: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tableCellKey: {
    width: '40%',
    color: '#fff',
  },
  tableCellValue: {
    width: 'auto',
    maxWidth: '30%',
    textAlign: 'center',
    color: '#fff',
  },
  pointersContainer: {
    marginTop: 10,
  },
  description: {
    color: '#ffffff',
    fontSize: 20, 
    fontWeight: 'bold', 
  },
});

export default ChinaIndv;