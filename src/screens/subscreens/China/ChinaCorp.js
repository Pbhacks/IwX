import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';


const ChinaCorp = () => {
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
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png' }}
      style={styles.background}
    >
    <ScrollView 
        style={{flex: 1}}
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 50}}
    >
        <OptionBlock
          title="Significant Developments"
          description="From 1 January 2023, 200% of the eligible research and development (R&D) expenses incurred by enterprises are tax-deductible.For R&D expenses that have formed intangible assets, the tax amortisation shall be based on 200% of the cost of the intangible assets."
          onPress={() => handleReadMore('Tax credits and incentives')}
          showMore={showMore['Tax credits and incentives']}
        />
         
          

         <OptionBlock
           title="Taxes on Corporate Income"
           description="Tax resident enterprises (TREs) are subject to corporate income tax (CIT) on their worldwide income. A non-TRE that has no establishment or place in China is taxed only on its China-source income. A non-TRE with an establishment or place in China shall pay CIT on income derived by such establishment or place from sources in China as well as income derived from outside China that effectively is connected with such establishment or place.

              Under the CIT law, the standard tax rate is 25%."
                  subheadings={[
                 'Qualified new/high tech enterprises are eligible for a reduced CIT rate of 15%. An enterprise has to fulfil a set of prescribed criteria and be subject to an assessment in order to qualify as a new/high tech enterprise.',
                  'Encouraged designated key software enterprises and encouraged designated integrated circuits (IC) design enterprises are eligible for a reduced CIT rate of 10% after the first five years of CIT exemption.',
                  'Qualified technology-advanced service enterprises are eligible for a reduced CIT rate of 15%. An enterprise has to fulfil a set of prescribed criteria and be subject to an assessment in order to qualify as a technology-advanced service enterprise.',
                  'For qualified small and thin-profit enterprises, the annual taxable income up to 3 million yuan renminbi (CNY) (inclusive) is subject to an effective CIT rate of 5% from 1 January 2023 to 31 December 2027.',
                  'Qualified enterprises engaged in pollution prevention and control are eligible for a reduced preferential CIT rate of 15% from 1 January 2019 to 31 December 2027.',
                  'From 1 January 2011 to 31 December 2030, encouraged enterprises in the Western Regions are eligible for a reduced preferential CIT rate of 15%.',
                  'From 1 January 2014 to 31 December 2025, encouraged enterprises established in the Qianhai Shenzhen-Hong Kong Modern Services Industry Cooperation Zone with operational substance are eligible for a reduced CIT rate of 15%.',
                  'Encouraged enterprises established in the Guangdong-Macao Intensive Cooperation Zone in Hengqin with operational substance are eligible for a reduced CIT rate of 15%.',
                  'From 1 January 2014 to 31 December 2025, encouraged enterprises established in the Pingtan Comprehensive Experimental Zone with operational substance are eligible for a reduced CIT rate of 15%.',
                  'From 1 January 2020 to 31 December 2024, encouraged enterprises registered in the Hainan Free Trade Port with operational substance in the Hainan Free Trade Port are eligible for a reduced CIT rate of 15%.',
                  'From 1 January 2022 to 31 December 2026, encouraged enterprises registered in the trial-run areas of Nansha (covering 23 square kilometres) with operational substance are eligible for a reduced CIT rate of 15%.',
                  'From 1 January 2020, qualified enterprises engaged in substantial production or R&D activities in key industries, such as integrated circuits, artificial intelligence, biomedicine, civil aviation, etc., in the Lingang New Area of the Shanghai Pilot Free Trade Zone are eligible for a reduced CIT rate of 15% for five years commencing from the date of establishment.'
                  ]}
            pointers={[
    'The standard CIT rate is 25%.',
    'Reduced CIT rates are available for various sectors and regions.',
    'Special incentives exist for high-tech and advanced service enterprises.',
    'Small and thin-profit enterprises benefit from a reduced effective CIT rate of 5% under certain conditions.',
    'Enterprises engaged in pollution prevention and control enjoy a preferential CIT rate of 15%.',
    'Regional incentives are provided for enterprises in the Western Regions, Qianhai Zone, Hengqin Zone, Pingtan Zone, Hainan Free Trade Port, Nansha trial-runareas, and Lingang New Area.',
                ]}
  onPress={() => handleReadMore('Taxes on Corporate Income')}
  showMore={showMore['Taxes on Corporate Income']}
              /> 


<OptionBlock
           title=" Corporate residence"
           subheading="Permanent establishment (PE)"
           description= "Enterprises established in China are always TREs. A foreign enterprise with a place of effective management in China is also regarded as a TRE. An 'establishment or place' is defined in the CIT regulations as an establishment or place in China engaging in production and business operations, including the following:"
          
           
           subheadings={[
                 'Qualified new/high tech enterprises are eligible for a reduced CIT rate of 15%. An enterprise has to fulfil a set of prescribed criteria and be subject to an assessment in order to qualify as a new/high tech enterprise.',
                  'Encouraged designated key software enterprises and encouraged designated integrated circuits (IC) design enterprises are eligible for a reduced CIT rate of 10% after the first five years of CIT exemption.',
                  'Qualified technology-advanced service enterprises are eligible for a reduced CIT rate of 15%. An enterprise has to fulfil a set of prescribed criteria and be subject to an assessment in order to qualify as a technology-advanced service enterprise.',
                  'For qualified small and thin-profit enterprises, the annual taxable income up to 3 million yuan renminbi (CNY) (inclusive) is subject to an effective CIT rate of 5% from 1 January 2023 to 31 December 2027.',
                  'Qualified enterprises engaged in pollution prevention and control are eligible for a reduced preferential CIT rate of 15% from 1 January 2019 to 31 December 2027.',
                  'From 1 January 2011 to 31 December 2030, encouraged enterprises in the Western Regions are eligible for a reduced preferential CIT rate of 15%.',
                  'From 1 January 2014 to 31 December 2025, encouraged enterprises established in the Qianhai Shenzhen-Hong Kong Modern Services Industry Cooperation Zone with operational substance are eligible for a reduced CIT rate of 15%.',
                  'Encouraged enterprises established in the Guangdong-Macao Intensive Cooperation Zone in Hengqin with operational substance are eligible for a reduced CIT rate of 15%.',
                  'From 1 January 2014 to 31 December 2025, encouraged enterprises established in the Pingtan Comprehensive Experimental Zone with operational substance are eligible for a reduced CIT rate of 15%.',
                  'From 1 January 2020 to 31 December 2024, encouraged enterprises registered in the Hainan Free Trade Port with operational substance in the Hainan Free Trade Port are eligible for a reduced CIT rate of 15%.',
                  'From 1 January 2022 to 31 December 2026, encouraged enterprises registered in the trial-run areas of Nansha (covering 23 square kilometres) with operational substance are eligible for a reduced CIT rate of 15%.',
                  'From 1 January 2020, qualified enterprises engaged in substantial production or R&D activities in key industries, such as integrated circuits, artificial intelligence, biomedicine, civil aviation, etc., in the Lingang New Area of the Shanghai Pilot Free Trade Zone are eligible for a reduced CIT rate of 15% for five years commencing from the date of establishment.'
                  ]}
            pointers={[
                     ' . Management organisations, business organisations, and representative offices.'
                     ,'Factories, farms, and places where natural resources are exploited.',
                      '. Places where labour services are provided.',
                    'Places where contractor projects, such as construction, installation, assembly, repair, and exploration are undertaken.',
                    'Other establishments or places where production and business activities are undertaken.',
                    'Business agents who regularly sign contracts, store and deliver goods, etc. on behalf of the non-TRE.'
                      ]}
                   onPress={() => handleReadMore(' Corporate residence')}
                  showMore={showMore[' Corporate residence']}
                 /> 

<OptionBlock
  title="Other Taxes"
  description="Below are the details of taxes"
  onPress={() => handleReadMore('Other Taxes')}
  showMore={showMore['Other Taxes']}
  
>
  <OptionBlock
    title="Value-added tax (VAT)"
    description="The sales or importation of goods, the provision of services, and the sales of intangible properties and immovable properties are subject to VAT. For general VAT payers, input VAT can be credited against output VAT."

   
    textData ='The applicable VAT rates for general VAT payers from 1 April 2019 are set out in the following table:'
  
    tableData={[
      { key: <Text style={styles.tableHeaderKey}>Industries</Text>, value: <Text style={styles.tableHeaderValue}>Applicable VAT rate (%)</Text> },
      { key: 'Sales or importation of goods', value: '13' },
      { key: 'Sales or importation of necessity goods (e.g. agricultural products, water, gas)', value: '9' },
      { key: 'Provision of repairs, replacement, and processing services', value: '13' },
      { key: 'Tangible movable property leasing services', value: '13' },
      { key: 'Transportation services, postal services, basic telecommunications services, construction services, immovable property leasing services, sales of immovable properties, transfer of land-use right', value: '9' },
      { key: 'Value-added telecommunications services, financial services, modern services (except for leasing services, consumer services, sales of intangible properties (except for land-use right)', value: '6' },
      { key: 'Exportation of goods; exportation of repair, replacement, and processing services; international transportation services and spacecraft transportation services; exported services that are completely consumed outside China, including:', value: '0' }, // Assuming 0% for exported services
    ]}

     textData1 ='Exportation of goods; exportation of repair, replacement, and processing services; international transportation services and spacecraft transportation services; exported services that are completely consumed outside China, including:'
     pointers={[
                     'R&D services.',
                     'Energy performance contracting services.',
                     'Design services',
                     'Production and distribution services for radio, film, and television programs.',
                     'Software services.'  ,
                     'Circuit design and testing services.',
                     'Information system services.',
                     'Process management services.',
                     'Offshore outsourcing services.',
                     'Transfer of technology.',
     ]}
    textData2={['For taxpayers that are eligible for the above zero rate, generally they may be entitled to a credit or refund of the input VAT incurred.',
    'The VAT refund rate for exported services is the same as the applicable VAT rate. For exported goods, the VAT refund rates range from 0% to 13%. There is a prescribed formula for determining the amount of refund, under which full refund of input VAT is not available to many exported goods and the exporter will suffer different degrees of export VAT costs.',  
     'In addition, certain taxable activities, including a few types of sale of goods, services, and cross-border transactions, are applicable to the VAT exemption treatment. In that respect, the relevant input VAT incurred cannot be credited or refunded.',
     'The rate for small-scale VAT payers is 3%. From 1 January 2023 to 31 December 2027, the VAT rate for small-scale VAT payers is reduced from 3% to 1%.',            
  ]}
               
  
    onPress={() => handleReadMore('Value-added tax (VAT)')}
    showMore={showMore['Value-added tax (VAT)']}

    
  />

  <OptionBlock
    title="Customs duties"
    description="Import and export customs duty is levied on goods that are allowed to be imported into or exported based on the relevant customs regulations. The Consignee of imported goods, consignor of export goods, and owner of entry articles are parties held liable for paying customs duties."
    textData={[
      'The customs classification of import and export goods is the base for the customs supervision, customs taxation, and customs statistics. In 2017, along with the revisions of the classified catalogue in ‘International Convention for Harmonized Commodity Description and Coding System’ made by World Customs Organisation (WCO), large scale adjustments have been made to China’s import and export tariff system.',
      'Import duty is charged in ad valorem, specific, compound, or sliding terms, etc. Ad valorem duty is charged based on the customs valuation of the goods. The dutiable value of the goods is multiplied by an ad valorem duty rate to arrive at the amount of duty payable. Duty collection on an ad valorem basis is the main taxation measure used by most countries, including China. The dutiable value of import and export goods is the taxable value determined by the Customs to levy ad valorem duties on the import and export goods, which is the base to value and levy customs duties payable of import and export goods and import links taxes payable of the import goods.',
      'Import duties are categorised as normal tariff rate, Most Favoured Nation (MFN) tariff rate, contractual tariff rate, preferential tariff rate, tariff-rate quota (TRQ) rate, and temporary tariff rate.',
      'The Country of Origin of imported goods also plays a part in determining the applicability of a number of other trade policies, such as TRQ, preferential tariffs, anti-dumping duty, anti-subsidy duty, etc.',
      'Import and export goods are reduced with or exempted from customs duties, import VAT, and consumption tax according to state regulations.',
      'The importation of raw materials under processing trade is bonded, and customs duty, import VAT, and consumption tax exemption is allowed on the part to be re-exported after processing.',
      'For goods that enter into and exit from the customs special supervision zone, import duties, import VAT, and consumption tax are held over at the time of importation, which are to be exempted for exportation and to be paid for sales from the customs special supervision zone to domestic markets.',
    ]}
    onPress={() => handleReadMore('Customs duties')}
    showMore={showMore['Customs duties']}
  />
  <OptionBlock
  title="Consumption tax"
  description="A consumption tax is imposed on specified categories of luxury and environmental unfriendly goods, including cigarettes, alcoholic beverages, high-end cosmetics, jewellery, gasoline, automobiles, battery and coating, etc. The tax liability is computed based on the sales amount and/or the sales volume, depending on the goods concerned. Consumption tax is not recoverable but is deductible as an expense for CIT purposes."
  onPress={() => handleReadMore('Consumption tax')}
  showMore={showMore['Consumption tax']}
  />
  <OptionBlock
  title="Real estate tax"
  description="A real estate tax, which is based on the value of the property or rental received, is assessed annually on land and buildings used for business purpose or leased. The tax rate is 1.2% of the original value of buildings. A tax reduction of 10% to 30% is commonly offered by local governments. Alternatively, tax may be assessed at 12% of the rental income. Real estate tax is deductible for CIT purposes."
  onPress={() => handleReadMore('Real estate tax')}
  showMore={showMore['Real estate tax']}
  ></OptionBlock>

<OptionBlock
  title="Urban and township land-use tax"
  description="An urban and township land-use tax is levied on taxpayers who utilise land within the area of city, country, township, and mining districts. It is computed annually based on the area of lands actually occupied by a taxpayer multiplied by a fixed amount per square metre that is determined by the local governments."
  onPress={() => handleReadMore('Urban and township land-use tax')}
  showMore={showMore['Urban and township land-use tax']}
  ></OptionBlock>
<OptionBlock
  title="Arable land occupation tax"
  description="Arable land occupation tax is levied on companies and individuals who build houses or carry out non-agricultural construction on arable lands. It is computed based on the area of arable lands actually occupied by a taxpayer multiplied by a fixed amount per square metre that is determined by the local governments and is settled on a one-off basis."
  onPress={() => handleReadMore('Arable land occupation tax')}
  showMore={showMore['Arable land occupation tax']}
  ></OptionBlock>
  <OptionBlock
  title="Land appreciation tax"
  description="A land appreciation tax is levied on the gain from the disposal of land use rights or real estate properties at progressive rates from 30% to 60%. Land appreciation tax is deductible for CIT purposes."
  onPress={() => handleReadMore('Land appreciation tax')}
  showMore={showMore['Land appreciation tax']}
  ></OptionBlock>
<OptionBlock
  title="Stamp tax"
  description="All enterprises and individuals who conclude taxable documents or conduct securities trading in China, as well as enterprises and individuals who conclude taxable contracts outside China while the contacts are used in China, are subject to stamp tax. The stamp tax rates vary between 0.005% on loan contracts and finance leasing contracts to 0.1% for property leasing (other than finance lease) and property insurance contracts."
  onPress={() => handleReadMore('Stamp tax')}
  showMore={showMore['Stamp tax']}
></OptionBlock>

<OptionBlock
  title="Deed tax"
  description="A deed tax, generally at rates from 3% to 5%, may be levied on the purchase, sale, gift, or exchange of ownership of land-use rights or real properties. The transferee/assignee is the taxpayer."
  onPress={() => handleReadMore('Deed tax')}
  showMore={showMore['Deed tax']}
></OptionBlock>

<OptionBlock
  title="Payroll taxes"
  description="For employment income, an employer is obligated to withhold individual income tax from an employee’s salary and settle the payment with the tax authorities on a monthly basis."
  onPress={() => handleReadMore('Payroll taxes')}
  showMore={showMore['Payroll taxes']}
></OptionBlock>

<OptionBlock
  title="Social security contributions"
  description="Social security contributions to pension funds, medical funds, etc. are mandatory for both employers and employees in China. Employers are normally required to make social security contributions in relation to pension, medical, unemployment, maternity, and work-related injury for their employees. The percentage of social security benefits borne by employers and employees, as well as the contribution base, vary from city to city."
  onPress={() => handleReadMore('Social security contributions')}
  showMore={showMore['Social security contributions']}
></OptionBlock>

<OptionBlock
  title="Urban construction and maintenance tax"
  description="Urban construction and maintenance tax is imposed at a certain rate on the amount of China's indirect taxes (i.e. VAT and consumption tax) payable by the taxpayer. Effectively, the taxpayers of indirect taxes are also the taxpayers of urban construction and maintenance tax. It is charged at three different rates depending on the taxpayer's location: 7% for urban areas, 5% for county areas, and 1% for other areas."
  onPress={() => handleReadMore('Urban construction and maintenance tax')}
  showMore={showMore['Urban construction and maintenance tax']}
></OptionBlock>

<OptionBlock
  title="Educational surtax"
  description="Educational surtax is imposed at 3% on the amount of China's indirect taxes (i.e. VAT and consumption tax) payable by the taxpayer. Effectively, the taxpayers of indirect taxes are also the taxpayers of educational surtax."
  onPress={() => handleReadMore('Educational surtax')}
  showMore={showMore['Educational surtax']}
></OptionBlock>

<OptionBlock
  title="Local educational surtax"
  description="Local educational surtax is levied at 2% on the amount of China's indirect taxes (i.e. VAT and consumption tax) payable by the taxpayer. Effectively, the taxpayers of indirect taxes are also the taxpayers of local educational surtax."
  onPress={() => handleReadMore('Local educational surtax')}
  showMore={showMore['Local educational surtax']}
></OptionBlock>

<OptionBlock
  title="Motor vehicle acquisition tax"
  description="A motor vehicle acquisition tax is levied at 10% of the taxable consideration, on any purchase, import, self-production, receipt as a gift or award, etc. of an automobile, a tramcar, a trailer, or a motorcycle with a gas displacement of over 150 millilitres within China."
  onPress={() => handleReadMore('Motor vehicle acquisition tax')}
  showMore={showMore['Motor vehicle acquisition tax']}
></OptionBlock>

<OptionBlock
  title="Vehicle and vessel tax"
  description="A vehicle and vessel tax is a tax that is levied on all vehicles and vessels within China. A fixed amount is levied on a yearly basis. Transport vehicles generally are taxed on a fixed amount according to their own weight, with passenger cars, buses, and motorcycles being taxed on a fixed unit amount. Vessels are taxed on a fixed amount, according to the deadweight tonnage."
  onPress={() => handleReadMore('Vehicle and vessel tax')}
  showMore={showMore['Vehicle and vessel tax']}
></OptionBlock>

<OptionBlock
  title="Vessel tonnage tax"
  description="Vessel tonnage tax is levied on any vessel entering into a port inside the territory of China from overseas and is collected by the General Customs. The tax payable is computed based on the net tonnage multiplied by the applicable tax rate that is determined based on the nettonnage and the term of the tonnage tax license."
  onPress={() => handleReadMore('Vessel tonnage tax')}
  showMore={showMore['Vessel tonnage tax']}
></OptionBlock>

<OptionBlock
  title="Resource tax"
  description="The exploitation of natural resources, including crude oil, natural gas, coal, salt, raw metallic metals, and non-metallic metals, mineral water, carbon dioxide gas, etc., is subject to resource tax on a sales turnover or tonnage/volume basis."
  onPress={() => handleReadMore('Resource tax')}
  showMore={showMore['Resource tax']}
></OptionBlock>

<OptionBlock
  title="Environmental protection tax (EPT)"
  description="EPT is collected from enterprises that directly discharge taxable pollutants (i.e. air pollutants, water pollutants, solid waste, and noise pollution) within the territory of China. EPT is calculated based on the volume of pollutants discharged, multiplied by the specific EPT amount."
  onPress={() => handleReadMore('Environmental protection tax (EPT)')}
  showMore={showMore['Environmental protection tax (EPT)']}
></OptionBlock>

<OptionBlock
  title="Tobacco tax"
  description="Tobacco tax is levied on taxpayers who purchase tobacco leaves within the territory of China. The tax is assessed at the rate of 20% on the purchasing value and shall be settled with the local tax bureau at the place of the purchase."
  onPress={() => handleReadMore('Tobacco tax')}
  showMore={showMore['Tobacco tax']}
></OptionBlock>

<OptionBlock
  title="Cultural business development levy"
  description="Companies and individuals engaged in entertainment and advertising businesses shall pay cultural business development levy at 3% on the relevant income."
  onPress={() => handleReadMore('Cultural business development levy')}
  showMore={showMore['Cultural business development levy']}
></OptionBlock>


</OptionBlock>



<OptionBlock
  title="Branch income"
  description="Under the CIT law, a branch of a non-TRE in China is taxed at the branch level. If there is more than one branch, they can select its main office in China to conduct consolidated CIT filing, which requires the overall tax payable to be calculated and adjusted on a consolidated basis but with tax payment settled separately at the respective branches’ locations."
  onPress={() => handleReadMore('Branch income')}
  showMore={showMore['Branch income']}
></OptionBlock>


<OptionBlock
  title="Income determination"
  description="Taxable income is defined as ‘gross income in a tax year after deduction of non-taxable income, tax exempt income, various deductions, and allowable losses brought forward from previous years’. The accrual method of accounting should be used."
  textData={['Gross income refers to monetary and non-monetary income derived by an enterprise from various sources, including, but not limited to, the sales of goods, provision of services, transfer of property, dividends, interest, rentals, royalties, and donations.',
              'Non-taxable income refers to fiscal appropriation, governmental administration charges, governmental funds, and other income specified by the central government.']}
  onPress={() => handleReadMore('Income determination')}
  showMore={showMore['Income determination']}
>
<OptionBlock
  title="Inventory valuation"
  description="Inventory must be valued according to costs. In computing the cost of inventories, the enterprise may choose one of the following methods: first in first out (FIFO), weighted average, or specific identification."
  onPress={() => handleReadMore('Inventory valuation')}
  showMore={showMore['Inventory valuation']}
></OptionBlock>

<OptionBlock
  title="Unrealised gain or loss due to changes in fair value"
  description="An unrealised gain or loss due to changes in the fair value of financial assets, financial liabilities, and investment properties held by an enterprise is not taxable/deductible for CIT purpose. The gain/loss is taxable/deductible only when the asset/liability actually is disposed of or realised."
  onPress={() => handleReadMore('Unrealised gain or loss due to changes in fair value')}
  showMore={showMore['Unrealised gain or loss due to changes in fair value']}
></OptionBlock>

<OptionBlock
  title="Capital gains"
description="Capital gains are treated in the same way as ordinary income of a revenue-nature for a TRE."
  onPress={() => handleReadMore('Capital gains')}
  showMore={showMore['Capital gains']}
></OptionBlock>

<OptionBlock
  title="Dividend income"
  description="An exemption exists for CIT on dividend derived by a TRE from the direct investment into another TRE except for where the dividend is from stocks publicly traded on the stock exchanges and the holding period is less than 12 months. Dividends derived by a non-TRE from China are subject to a 10% withholding tax (WHT). Starting from 1 January 2018, if a non-TRE shareholder uses dividends distributed from a China TRE to make direct investment into China or acquire another China TRE from third parties, the non-TRE shareholder is eligible for WHT deferral treatment on the dividends, provided that certain conditions are met. The non-TRE shareholder shall report and settle the deferred tax if it later recoups the investment through equity transfer, equity buyback, liquidation of the China TRE being invested, etc. Dividends distributed by a foreign investment enterprise out of its pre-2008 profit to its non-TRE shareholder(s) are exempted from WHT."
  onPress={() => handleReadMore('Dividend income')}
  showMore={showMore['Dividend income']}
></OptionBlock>

<OptionBlock
  title="Interest income"
  description="Interest income is treated as ordinary income."
  onPress={() => handleReadMore('Interest income')}
  showMore={showMore['Interest income']}
></OptionBlock>

<OptionBlock
  title="Rental income"
  description="Rental income is treated as ordinary income."
  onPress={() => handleReadMore('Rental income')}
  showMore={showMore['Rental income']}
></OptionBlock>

<OptionBlock
  title="Royalty income"
  description="Royalty income is treated as ordinary income."
  onPress={() => handleReadMore('Royalty income')}
  showMore={showMore['Royalty income']}
></OptionBlock>

<OptionBlock
  title="Partnership income"
  description="Partnerships registered in China are not subject to CIT. The income of a partnership is taxable at the partners’ level."
  onPress={() => handleReadMore('Partnership income')}
  showMore={showMore['Partnership income']}
></OptionBlock>

<OptionBlock
  title="Unrealised exchange gains"
  description="Unrealised exchange gain (loss) from the year-end translation of assets (liabilities) denominated in foreign currency generally is taxable (deductible)."
  onPress={() => handleReadMore('Unrealised exchange gains')}
  showMore={showMore['Unrealised exchange gains']}
></OptionBlock>

<OptionBlock
  title="Foreign income"
  description="The worldwide income of a TRE and its branches both within and outside China is taxable. There are no provisions in the CIT law that allow foreign income directly earned by the TRE to be deferred for tax purposes. The CIT law contains a controlled foreign company (CFC) rule under which the unremitted earnings of a foreign company controlled by Chinese enterprises may be taxable in China (see the Group taxation section for more information). A foreign tax credit is allowed for foreign income taxes paid on foreign-source income."
  textData='Enterprises engaged in tourism, modern service, and high-tech industries in the Hainan Free Trade Port (from 2020 to 2024) and Hengqin are exempted from CIT on the income generated by new overseas direct investment.  '
  onPress={() => handleReadMore('Foreign income')}
  showMore={showMore['Foreign income']}
></OptionBlock>

</OptionBlock>







<OptionBlock
  title="Deductions"
  description="Generally, an enterprise is allowed to deduct reasonable expenditures that actually have been incurred and are related to the generation of income."
  onPress={() => handleReadMore('Deductions')}
  showMore={showMore['Deductions']}
>

<OptionBlock
  title="Depreciation of fixed assets"
  description="Fixed assets with useful lives of more than 12 months must be capitalised and depreciated in accordance with the CIT regulations. Generally, depreciation is calculated by the straight-line method. Production-nature biological assets, such as livestock held for breeding and commercial timber, also have to be capitalised and depreciated using the straight-line method."
  textData='Under the straight-line method, the cost of an item, less its residual value, is depreciated over the useful life of the asset. Residual value should be reasonably determined based on the nature and usage of the asset. The CIT law provides minimum useful lives for the following assets:'
  tableData={[
    { key: <Text style={styles.tableHeaderKey}>Assets</Text>, value: <Text style={styles.tableHeaderValue}>Years</Text> },
    { key: 'Buildings and structures', value: '20' },
    { key: 'Aircraft, trains, vessels, machinery, mechanisms, and other production equipment', value: '10' },
    { key: 'Appliances, tools, and furniture etc. related to production and business operations', value: '5' },
    { key: 'Means of transport other than aircraft, trains, and vessels', value: '4' },
    { key: 'Electronic equipment', value: '3' },
    { key: 'Production-nature biological assets in the nature of forestry', value: '10' },
    { key: 'Production-nature biological assets in the nature of livestock', value: '3' },
  ]}
  
  textData1={['Shorter tax depreciation life or accelerated depreciation is allowed for particular types of fixed assets (e.g. fixed assets that need to be replaced more frequently due to advancement of technology, fixed assets that suffer from constant vibration or severe corrosion).',
              'New fixed assets acquired by companies engaging in manufacturing industries and new fixed assets and equipment acquired specifically for R&D purposes may be depreciated over a shorter period or under an accelerated depreciation method.',
              'Where a shorter depreciation period method is applied, the minimum depreciation period cannot be less than 60% of the minimum depreciation period as prescribed in the CIT Law; where an accelerated depreciation method is applied, the double-declining-balance method or sum-of-years-digits method can be used.',
            'The following capital expenditure may be expensed-off in one lump sum in the year of acquisition:',]}
  pointers={['Newly acquired instruments and equipment for the purpose of R&D activities by all enterprises, with unit value not exceeding CNY 1 million, and newly acquired instruments and equipment used in both R&D and operating activities by small-scale and thin-profit manufacturing enterprises, with unit value not exceeding CNY 1 million may be expensed in one lump sum for CIT.',
            'From 1 January 2018 to 31 December 2027, newly acquired fixed assets, other than real estate properties, with unit value not exceeding CNY 5 million may be expensed in one lump sum for CIT.',
            'Newly acquired fixed assets (excluding real estate properties) and intangible assets by enterprises in Hainan (from 2020 to 2024) and Hengqin with unit value not exceeding CNY 5 million may be expensed in one lump sum for CIT.']}
  onPress={() => handleReadMore('Depreciation of fixed assets')}
  showMore={showMore['Depreciation of fixed assets']}
></OptionBlock>

<OptionBlock
  title="Amortisation of intangibles and goodwill"
  description="A deduction is allowed for amortisation of intangible assets, such as, but not limited to, patents, trademarks, copyrights, and land-use rights. Generally, intangible assets have to be amortised over a period of not less than ten years. For an intangible asset obtained through capital contribution or assignment, it can be amortised according to the useful life prescribed in the laws or agreed in the contracts, if any. However, acquired goodwill is not deductible until the invested enterprise is entirely transferred or liquidated."
  onPress={() => handleReadMore('Amortisation of intangibles and goodwill')}
  showMore={showMore['Amortisation of intangibles and goodwill']}
></OptionBlock>

<OptionBlock
  title="Organisational and start-up expenses"
  description="Organisational and start-up expenses are tax deductible fully in the first year of operation."
  onPress={() => handleReadMore('Organisational and start-up expenses')}
  showMore={showMore['Organisational and start-up expenses']}
></OptionBlock>

<OptionBlock
  title="Research and development (R&D) expense"
  description="From 1 January 2023, 200% of the eligible R&D expenses incurred by enterprises are tax-deductible. For R&D expenses that have formed intangible assets, the tax amortisation shall be based on 200% of the cost of the intangible assets. From 1 January 2023 to 31 December 2027, 220% of the eligible R&D expenses incurred by integrated circuit enterprises and enterprises manufacturing industrial mother machines are tax-deductible. For R&D expenses that have formed intangible assets, the tax amortisation shall be based on 220% of the cost of the intangible assets. From 1 January 2022, 200% of funds contributed by enterprises to non-profit scientific and technological R&D institutions, higher education institutions, or governmental natural science funds for basic research purposes are deductible."
  onPress={() => handleReadMore('Research and development (R&D) expense')}
  showMore={showMore['Research and development (R&D) expense']}
></OptionBlock>

<OptionBlock
  title="Asset loss"
  description="Asset loss (including bad debt loss) may be deductible in the tax year during which such loss is incurred, provided that supporting documents are maintained for inspection by the in-charge tax bureau."
  onPress={() => handleReadMore('Asset loss')}
  showMore={showMore['Asset loss']}
></OptionBlock>

<OptionBlock
  title="Interest expenses"
  description="Interest on loans generally is tax-deductible. For interest expenses on borrowings from non-financial institutions by a non-financial institution, the portion that does not exceed the commercial rate is deductible. The tax deduction of interest paid to related parties is subject to the thin capitalisation rule under the CIT law (see the Group taxation section for more information)."
  onPress={() => handleReadMore('Interest expenses')}
  showMore={showMore['Interest expenses']}
></OptionBlock>

<OptionBlock
  title="Reserves and provisions"
  description="Provisions for asset impairment reserves (e.g. bad debt provisions) and risk reserves generally are not tax-deductible unless otherwise prescribed in the tax rules. Financial institutions and insurance companies may deduct certain provisions and reserves, subject to the caps specified in the relevant tax circulars."
  onPress={() => handleReadMore('Reserves and provisions')}
  showMore={showMore['Reserves and provisions']}
></OptionBlock>

<OptionBlock
  title="Charitable donations"
  description="Charitable donations are tax-deductible at up to 12% of the annual accounting profit, and any excess amount in the current year can be carried forward and deductible in the following three years. From 1 January 2019 to 31 December 2025, donation for poverty alleviation purpose to targeted poverty-stricken areas can be fully deducted. Non-charitable donations, as well as sponsorship expenditures that are non-advertising and non-charitable in nature, are not deductible."
  onPress={() => handleReadMore('Charitable donations')}
  showMore={showMore['Charitable donations']}
></OptionBlock>

<OptionBlock
  title="Wages and staff welfare expenses"
  description="Reasonable wages and salaries of employees incurred by an enterprise are tax-deductible. Directors’ fees are also tax-deductible. As an incentive to encourage the hiring of handicapped people, 200% of the actual salary expenses paid to handicapped staff are deductible. Basic social security contributions, including basic pension insurance, basic medical insurance, unemployment insurance, injury insurance, maternity insurance, and housing funds, that are made by an enterprise in accordance with the scope and criteria as prescribed by the state or provincial governments are deductible. Commercial insurance premiums paid for investors or employees shall not be tax-deductible unless they are paid for safety insurance for workers conducting special types of work. Staff welfare expenses, labour union fees, and staff education expenses are tax-deductible at up to 14%, 2%, and 8% of the total salary expenses, respectively."
  onPress={() => handleReadMore('Wages and staff welfare expenses')}
  showMore={showMore['Wages and staff welfare expenses']}
></OptionBlock>

<OptionBlock
  title="Entertainment expenses"
  description="Entertainment expenses are tax-deductible up to the lesser of 60% of the costs actually incurred and 0.5% of the sales or business income of that year. The excess amount must not be carried forward to and deducted in the following tax years."
  onPress={() =>handleReadMore('Entertainment expenses')}
  showMore={showMore['Entertainment expenses']}
></OptionBlock>

<OptionBlock
  title="Advertising expenses and business promotion expenses"
  description="Advertising expenses and business promotion expenses are deductible at up to 15% (30% for certain enterprises in the cosmetics, medicine, and beverage industries) of the sales (business) income of that year unless otherwise prescribed in the tax regulations. Any excess amount is allowed to be carried forward and deductible in the following tax years. Advertising expenses and business promotion expenses incurred by the tobacco industry are entirely not tax-deductible."
  onPress={() => handleReadMore('Advertising expenses and business promotion expenses')}
  showMore={showMore['Advertising expenses and business promotion expenses']}
></OptionBlock>

<OptionBlock
  title="Fines and penalties"
  description="Fines, penalties, and losses arising from confiscation of property are not deductible for CIT purposes."
  onPress={() => handleReadMore('Fines and penalties')}
  showMore={showMore['Fines and penalties']}
></OptionBlock>

<OptionBlock
  title="Taxes"
  description="CIT payments and surcharges that are imposed on overdue taxes are not deductible for CIT purposes."
  onPress={() => handleReadMore('Taxes')}
  showMore={showMore['Taxes']}
></OptionBlock>

<OptionBlock
  title="Net operating losses"
  description="Generally, tax losses can be carried forward for no longer than five years starting from the year subsequent to the year in which the loss was incurred. Loss carryback is not permitted."
  textData='Tax loss can be carried forward for ten years for enterprises in the following industries:'
  pointers={['High/new tech enterprises (HNTEs).',
             'Small and medium-sized technology enterprises (technological SMEs).',
             'Qualified integrated circuit production enterprises with a line-width less than 130 nanometres (inclusive).',]}
  textData2='From 1 January 2022 to 31 December 2026, tax loss can be carried forward for 13 years for HNTEs or technological SMEs registered in Nansha of Guangzhou, provided that the HNTE or technological SME is engaged in the high-tech key industries in the Catalogue for CIT Preferential Treatments of Nansha.'
  
  onPress={() => handleReadMore('Net operating losses')}
  showMore={showMore['Net operating losses']}
></OptionBlock>

<OptionBlock
  title="Payments to affiliates"
  description="Management fees for stewardship are not deductible, but services fees paid for genuine services provided by affiliates in China or overseas and charged at arm’s length should be deductible. Other payments to affiliates, such as royalties, are also tax-deductible, provided that the charges are at arm’s length."
  onPress={() => handleReadMore('Payments to affiliates')}
  showMore={showMore['Payments to affiliates']}
></OptionBlock>


</OptionBlock>











<OptionBlock
  title="Group taxation"
  description="Group taxation is not permitted under the CIT law unless otherwise prescribed by the State Council."
  onPress={() => handleReadMore('Group taxation')}
  showMore={showMore['Group taxation']}
>

<OptionBlock
  title="Transfer pricing"
  description="All enterprises are required to conduct transactions with related parties on an arm’s-length basis. The Chinese tax authorities are empowered to make adjustments to transactions between related parties that are not conducted at arm’s length and result in the reduction of taxable income of the enterprise or its related parties using the following appropriate methods: comparable uncontrolled price method, resale price method, cost plus method, transactional net margin method, profit split method, and other methods (e.g. cost approach, market approach, income approach) that are consistent with the arm’s-length principle. In June 2016, the State Taxation Administration (STA) issued a circular that imposed new transfer pricing compliance requirements in China, including annual reporting forms for related-party transactions (RPT forms), country-by-country (CbC) reporting, and transfer pricing documentation, all of which contain substantial changes to the previous rules. Specifically, the transfer pricing documentation requirement has adopted a three-tiered approach, including a master file, local file, and special issue file (i.e. cost sharing agreement special issue file and thin capitalisation special issue file)."
  textData={['The STA also issued a revised circular on advance pricing arrangements (APAs) in October 2016, which provides process and requirements for an enterprise to apply for an APA as well as the situations where an APA application will be prioritised or declined.',
               'The STA issued a circular in March 2017 to renew the Chinese rules on the procedures of transfer pricing investigation and mutual agreement procedures (MAPs). This circular empowers the Chinese tax authorities to collect financial information of overseas related parties under the transfer pricing audit for value chain purpose. In addition, this circular reiterates and reinforces the Chinese tax authorities’ focus on outbound related-party remittance, such as service fees and royalty payments (see Recent focus of Chinese tax authorities in the Tax administration section for details).',
              'The CIT law also contains a few tax avoidance rules, such as a thin capitalisation rule (see below), a CFC rule (see below), and general anti-avoidance rules (GAAR) (see the Tax administration section).',]}
  onPress={() => handleReadMore('Transfer pricing')}
  showMore={showMore['Transfer pricing']}
></OptionBlock>

<OptionBlock
  title="Thin capitalisation"
  description="The CIT law has a thin capitalisation rule disallowing interest expense arising from excessive related-party loans. The safe harbour debt/equity ratio for enterprises in the financial industry is 5:1 and for enterprises in other industries is 2:1. However, if there is sufficient evidence (e.g. a thin capitalisation special issue file) to show that the financing arrangement is at arm’s length, these interests may still be fully deductible even if the ratios are exceeded."
  onPress={() => handleReadMore('Thin capitalisation')}
  showMore={showMore['Thin capitalisation']}
></OptionBlock>

<OptionBlock
  title="Controlled foreign companies (CFCs)"
  description="Under the CFC rule, the undistributed profits of CFCs located in low-tax jurisdictions with an effective income tax rate of less than 12.5% may be taxed as a deemed distribution to the TRE shareholders. The Chinese tax authorities have published a list of countries (i.e. a 'white list') that they do not regard to be low-tax jurisdictions."
  onPress={() => handleReadMore('Controlled foreign companies (CFCs)')}
  showMore={showMore['Controlled foreign companies (CFCs)']}
></OptionBlock>

</OptionBlock>

<OptionBlock
  title="Tax credits and incentives"
  description="The CIT law adopts the ‘Predominantly Industry-oriented, Limited Geography-based’ tax incentive policy. Key emphasis is placed on ‘industry-oriented’ incentives aiming at directing investments into those industry sectors and projects encouraged and supported by the state. The tax incentive policies mainly include the following and are applicable to both domestic and foreign investments."
  onPress={() => handleReadMore('Tax credits and incentives')}
  showMore={showMore['Tax credits and incentives']}
>

<OptionBlock
  title="Tax reduction and exemption"
  description="CIT may be reduced or exempted on income derived from the following projects:"
  onPress={() => handleReadMore('Tax reduction and exemption')}
  showMore={showMore['Tax reduction and exemption']}

  tableData={[
    { key: <Text style={styles.tableHeaderKey}>Projects/industries</Text>, value: <Text style={styles.tableHeaderValue}>CIT incentive</Text>, validity: <Text style={styles.tableHeaderValue}>Valid period</Text> },
    { key: 'Agriculture, forestry, animal-husbandry, and fishery projects', value: 'Exemption or 50% reduction', validity: 'All years, as long as it is engaged in these projects' },
    { key: 'Specified basic infrastructure projects', value: '3 + 3 years tax holiday (2)', validity: 'Starting from the first income-generating year' },
    { key: 'Qualified new/high tech enterprises established in Shenzhen, Zhuhai, Shantou, Xiamen, Hainan, and Pudong New Area of Shanghai after 1 January 2008', value: '2 + 3 years tax holiday (1)', validity: 'Starting from the first income-generating year' },
    { key: 'Encouraged designated integrated circuit production enterprises or projects with a line-width less than 28 nm (inclusive), provided that its operation period exceeds 15 years', value: 'Exemption for 10 years', validity: 'Starting from the first profit-making year for enterprises; Starting from the first income-generating year for projects' },
    { key: 'Encouraged designated integrated circuits production enterprises or projects that produce integrated circuits with a line-width of less than 65nm (inclusive), provided that its operation period exceeds 15 years', value: '5 + 5 years tax holiday (3)', validity: 'Starting from the first profit-making year for enterprises; Starting from the first income-generating year for projects' },
    { key: 'Encouraged designated integrated circuits production enterprises or projects that produce integrated circuits with a line-width of less than 130nm (inclusive), provided that its operation period exceeds 10 years', value: '2 + 3 years tax holiday (1)', validity: 'Starting from the first profit-making year for enterprises; Starting from the first income-generating year for projects' },
    { key: 'Encouraged integrated circuits design/equipment/material/packaging/testing enterprises', value: '2 + 3 years tax holiday (1)', validity: 'Starting from the first profit-making year' },
    { key: 'Encouraged designated key integrated circuits design enterprises', value: 'Exemption for 5 years', validity: 'Starting from the first profit-making year' },
    { key: 'Encouraged designated key software enterprises', value: 'Exemption for 5 years', validity: 'Starting from the first profit-making year' },
    { key: 'Encouraged software enterprises (4)', value: '2 + 3 years tax holiday (1)', validity: 'Starting from the first profit-making year' },
    { key: 'Environment protection projects and energy/water conservative projects', value: '3 + 3 years tax holiday (2)', validity: 'Starting from the first income-generating year' },
    { key: 'Qualified energy-saving service enterprises', value: '3 + 3 years tax holiday (2)', validity: 'Starting from the first income-generating year' },
    { key: 'Projects involving a clean development mechanism (CDM)', value: '3 + 3 years tax holiday(2)', validity: 'Starting from the first year during which the first disposal of certified emission reduction units takes place' },
    { key: 'From 1 January 2021 to 31 December 2030, newly established encouraged enterprises in the impoverished areas of Xinjiang', value: '2 + 3 years tax holiday (1)', validity: 'Starting from the first income-generating year' },
    { key: 'From 1 January 2021 to 31 December 2030, newly established encouraged enterprises in the Kashgar Special Economic Zone and Horgos Special Economic Zone', value: 'Exemption for 5 years', validity: 'Starting from the first income-generating year' },
  ]}

  textData1='Notes'
  pointers={['‘2 + 3 years tax holiday’ refers to two years of exemption from CIT followed by three years of 50% reduction of CIT.',
              '‘3 + 3 years tax holiday’ refers to three years of exemption from CIT followed by three years of 50% reduction of CIT.',
             '‘5 + 5 years tax holiday’ refers to five years of exemption from CIT followed by five years of 50% reduction of CIT.',
             'Certified animation enterprises that produce self-developed animation products are eligible to enjoy the same CIT incentives as encouraged software enterprises.',
            ]}
  textData2={['For income derived from the transfer of qualified technology in a tax year, the portion that does not exceed CNY 5 million shall be exempted from CIT and the portion that exceeds CNY 5 million shall be allowed a 50% reduction of CIT.',
              'A CIT exemption applies to the dividend derived by a TRE from the direct investment into another TRE, except where the dividend is from stocks publicly traded on the stock exchanges and the holding period is less than 12 months.',
              'A CIT exemption also applies to the income derived by recognised non-profit-making organisations engaging in non-profit-making activities.', 
             ]}

></OptionBlock>


<OptionBlock
  title="Reduced tax rate"
  description="The CIT rate may be reduced under certain conditions for different industries (see the Taxes on corporate income section for more information)."
  onPress={() => handleReadMore('Reduced tax rate')}
  showMore={showMore['Reduced tax rate']}
></OptionBlock>

<OptionBlock
  title="Reduction of revenue"
  description="Where an enterprise uses resources specified by the state as its major raw materials to produce non-restricted and non-prohibited products, only 90% of the income derived is taxable."
  onPress={() => handleReadMore('Reduction of revenue')}
  showMore={showMore['Reduction of revenue']}
></OptionBlock>

<OptionBlock
  title="Offset of certain venture capital investment"
  description="For a venture capital enterprise that makes an equity investment in a non-listed small to medium-sized new/high tech enterprise or a start-up technology enterprise for more than two years, 70% of its investment amount may be used to offset against the taxable income of the venture capital enterprise in the year after the holding period has reached two years. Any portion that is not utilised in that year can be carried forward and deductible in the following years. A Chinese corporate partner of a venture capital in the form of a limited partnership is also eligible for such incentive."
  onPress={() => handleReadMore('Offset of certain venture capital investment')}
  showMore={showMore['Offset of certain venture capital investment']}
></OptionBlock>

<OptionBlock
  title="Investment tax credit"
  description="Enterprises purchasing and using equipment specified by the state for environmental protection, energy and water conservation, or production safety purposes are eligible for a tax credit of 10% of the investment in such equipment. Any unutilised amount can be carried forward and creditable in the following five years."
  onPress={() => handleReadMore('Investment tax credit')}
  showMore={showMore['Investment tax credit']}
></OptionBlock>

<OptionBlock
  title="Foreign tax credit"
  description="A TRE is allowed to claim foreign tax credit in relation to foreign income tax already paid overseas in respect of income derived from sources outside China on a country-basket basis or under the comprehensive method. The creditable foreign tax also includes foreign income tax paid by qualified CFCs. However, the creditable amount may not exceed the amount of income tax otherwise payable in China in respect of the foreign-sourced income. In addition, there is a five-year carryforward period for any unutilised foreign tax."
  onPress={() => handleReadMore('Foreign tax credit')}
  showMore={showMore['Foreign tax credit']}
></OptionBlock>




</OptionBlock>









<OptionBlock
  title="Withholding taxes"
  description="Non-TREs without establishments or places of business in China shall be subject to a WHT at 10% on gross income from dividends, interest, lease of property, royalties, and other China-source passive income unless reduced under a tax treaty."
  textData={['If a non-TRE shareholder uses dividends distributed from a China TRE to make direct investment into China or acquire a China TRE from third parties, the non-TRE shareholder is eligible for WHT deferral treatment on the dividends, provided that certain conditions are met. The non-TRE shareholder shall report and settle the deferred tax if it later recoups the investment through equity transfer, equity buyback, liquidation of the China TRE, etc.',
            'Dividends distributed by a foreign investment enterprise out of its pre-2008 profit to non-TRE shareholders are still exempted from WHT.',
            'WHT rates under China’s tax treaties with other countries/nations are as follows (as of 31 December 2023):']}
         


    tableData={[
        { key: <Text style={styles.tableHeaderKey}>Recipient</Text>, dividends: <Text style={styles.tableHeaderValue}>Dividends</Text>, interest: <Text style={styles.tableHeaderValue}>Interest (1)</Text>, royalties: <Text style={styles.tableHeaderValue}>Royalties (2)</Text> },
        { key: 'Non-treaty', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Treaty: Albania', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Algeria', dividends: '5/10 (3a)', interest: '7', royalties: '10' },
        { key: 'Angola', dividends: '0/5/8 (3w)', interest: '8', royalties: '8' },
        { key: 'Armenia', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'Argentina', dividends: '5/10/15 (3t)', interest: '0/12 (4d)', royalties: '3/5/7/10 (5f)' },
        { key: 'Australia', dividends: '15', interest: '10', royalties: '10' },
        { key: 'Austria', dividends: '7/10 (3b)', interest: '7/10 (4a)', royalties: '6/10' },
        { key: 'Azerbaijan', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Bahrain', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Bangladesh', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Barbados', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'Belarus', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Belgium', dividends: '5/10 (3i)', interest: '10', royalties: '7' },
        { key: 'Bosnia and Herzegovina', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Botswana', dividends: '5', interest: '7.5', royalties: '5' },
        { key: 'Brazil', dividends: '15', interest: '15', royalties: '15/25 (5a)' },
        { key: 'Brunei', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Bulgaria', dividends: '10', interest: '10', royalties: '7/10' },
        { key: 'Cambodia', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Canada', dividends: '10/15 (3f)', interest: '10', royalties: '10' },
        { key: 'Chile', dividends: '10', interest: '4/5/10/15 (4b)', royalties: '2/10' },
        { key: 'Congo', dividends: '0/5/10 (3j)', interest: '10', royalties: '5' },
        { key: 'Croatia', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Cuba', dividends: '5/10 (3a)', interest: '7.5', royalties: '5' },
        { key: 'Cyprus', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Czech Republic', dividends: '5/10 (3a)', interest: '7.5', royalties: '10' },
        { key: 'Denmark', dividends: '5/10 (3a)', interest: '10', royalties: '7/10' },
        { key: 'Ecuador', dividends: '3/5 (6)', interest: '8/10 (6)', royalties: '8/10 (6)' },
        { key: 'Egypt', dividends: '8', interest: '10', royalties: '8' },
        { key: 'Estonia', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'Ethiopia', dividends: '5', interest: '7', royalties: '5' },
        { key: 'Finland', dividends: '5/10 (3a)', interest: '10', royalties: '7/10' },
        { key: 'France', dividends: '0/5/10 (3q)', interest: '10', royalties: '6/10' },
        { key: 'Gabon', dividends: '0/5 (3s)', interest: '10', royalties: '5/7.5 (5e)' },
        { key: 'Georgia', dividends: '0/5/10 (3c)', interest: '10', royalties: '5' },
        { key: 'Germany', dividends: '5/10/15 (3o)', interest: '10', royalties: '6/10' },
        { key: 'Greece', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'Hong Kong Special Administrative Region', dividends: '5/10 (3d)', interest: '7', royalties: '5/7 (5d)' },
        { key: 'Hungary', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Iceland', dividends: '5/10 (3a)', interest: '10', royalties: '7/10' },
        { key: 'India', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Indonesia', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Iran', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Ireland, Republic of', dividends: '5/10 (3b)', interest: '10', royalties: '6/10' },
        { key: 'Israel', dividends: '10', interest: '7/10 (4a)', royalties: '7/10' },
        { key: 'Italy', dividends: '10', interest: '10', royalties: '7/10' },
        { key: 'Jamaica', dividends: '5', interest: '7.5', royalties: '10' },
        { key: 'Japan', dividends: '10',interest: '10', royalties: '10' },
        { key: 'Kazakhstan', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Kenya', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Korea, Republic of', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'Kuwait', dividends: '0/5 (3l)', interest: '5', royalties: '10' },
        { key: 'Kyrgyzstan', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Laos', dividends: '5', interest: '5 (in Laos)', royalties: '5 (in Laos)\n10 (in Mainland China)' },
        { key: 'Latvia', dividends: '5/10 (3a)', interest: '10', royalties: '7' },
        { key: 'Lithuania', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'Luxembourg', dividends: '5/10 (3a)', interest: '10', royalties: '6/10' },
        { key: 'Macao Special Administrative Region', dividends: '5/10 (3a)', interest: '7', royalties: '5/7 (5d)' },
        { key: 'Macedonia', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Malaysia', dividends: '10', interest: '10', royalties: '10/15 (5b)' },
        { key: 'Malta', dividends: '5/10 (3a)', interest: '10', royalties: '7/10' },
        { key: 'Mauritius', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Mexico', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Moldova', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'Mongolia', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Morocco', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Nepal', dividends: '10', interest: '10', royalties: '15' },
        { key: 'Netherlands', dividends: '0/5/10 (3j)', interest: '10', royalties: '6/10' },
        { key: 'New Zealand', dividends: '0/5/15(3u)', interest: '10', royalties: '10' },
        { key: 'Nigeria', dividends: '7.5', interest: '7.5', royalties: '7.5' },
        { key: 'Norway', dividends: '15', interest: '10', royalties: '10' },
        { key: 'Oman', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Pakistan', dividends: '10', interest: '10', royalties: '12.5' },
        { key: 'Papua New Guinea', dividends: '15 (3n)', interest: '10', royalties: '10' },
        { key: 'Philippines', dividends: '10/15 (3g)', interest: '10', royalties: '10/15 (5b)' },
        { key: 'Poland', dividends: '10', interest: '10', royalties: '7/10' },
        { key: 'Portugal', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Qatar', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Romania', dividends: '0/3 (3r)', interest: '0/3 (4c)', royalties: '3' },
        { key: 'Russia', dividends: '5/10 (3p)', interest: '0', royalties: '6' },
        { key: 'Rwanda', dividends: '7.5', interest: '8', royalties: '10' },
        { key: 'Saudi Arabia', dividends: '0/5 (3m)', interest: '10', royalties: '10' },
        { key: 'Seychelles', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Singapore', dividends: '5/10 (3a)', interest: '7/10 (4a)', royalties: '6/10' },
        { key: 'Slovak Republic', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Slovenia', dividends: '5', interest: '10', royalties: '10' },
        { key: 'South Africa', dividends: '5', interest: '10', royalties: '7/10' },
        { key: 'Spain', dividends: '0/5/10 (3v)', interest: '0/10 (4e)', royalties: '10' },
        { key: 'Sri Lanka', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Sudan', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Sweden', dividends: '5/10 (3a)', interest: '10', royalties: '6/10' },
        { key: 'Switzerland', dividends: '0/5/10 (3j)', interest: '10', royalties: '9' },
        { key: 'Syria', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'Taiwan', dividends: '5/10 (3d)', interest: '7', royalties: '7' },
        { key: 'Tajikistan', dividends: '5/10 (3a)', interest: '8', royalties: '8' },
        { key: 'Thailand', dividends: '15/20 (3d)', interest: '10', royalties: '15' },
        { key: 'Trinidad and Tobago', dividends: '5/10 (3e)', interest: '10', royalties: '10' },
        { key: 'Tunisia', dividends: '8', interest: '10', royalties: '5/10 (5c)' },
        { key: 'Turkey', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Turkmenistan', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'Uganda', dividends: '7.5', interest: '10', royalties: '7/10' },
        { key: 'Ukraine', dividends: '5/10 (3a)', interest: '10', royalties: '10' },
        { key: 'United Arab Emirates', dividends: '0/7 (3l)', interest: '7', royalties: '10' },
        { key: 'United Kingdom', dividends: '0/5/10/15 (3k)', interest: '10', royalties: '6/10' },
        { key: 'United States', dividends: '10', interest: '10', royalties: '7/10' },
        { key: 'Uzbekistan', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Venezuela', dividends: '5/10 (3h)', interest: '5/10 (4a)', royalties: '10' },
        { key: 'Vietnam', dividends: '10', interest: '10', royalties: '10' },
        { key: 'Yugoslavia', dividends: '5', interest: '10', royalties: '10' },
        { key: 'Zambia', dividends: '5', interest: '10', royalties: '5' },
        { key: 'Zimbabwe', dividends: '2.5/7.5 (3e)', interest: '7.5', royalties: '7.5' }
    ]}

  textData1={['Notes','This table is a summary only and does not reproduce all the provisions relevant in determining the application of WHT in each tax treaty/arrangement.']}
  pointers={[
            '1] 0% is due on interest paid to government bodies, except for Australia, Bosnia and Herzegovina, Brunei, Chile, Cyprus, Israel, and Slovenia. Reference should be made to the individual tax treaties.',
            '2] The lower rate on royalties applies for the use of or right to use any industrial, commercial, or scientific equipment.',
            '3] The following notes apply to dividend WHT',
            'a. The lower rate applies where the beneficial owner of the dividend is a company (not a partnership) that directly owns at least 25% of the capital of the paying company.',
            'b. The lower rate applies where the beneficial owner of the dividend is a company that directly owns at least 25% of the voting shares of the paying company.',
            'c. The lowest rate (i.e. 0%) applies where the beneficial owner is a company that direct or indirectly owns at least 50% of the capital of the paying company and the investment exceeding 2 million euros (EUR). The lower rate (l.e. 5%) applies where th beneficial owner is a company that directly or indirectly owns at least 10% of the capital of the paying company and the investment exceeding EUR 100,000.',
            'd. The lower rate applies where the beneficial owner of the dividend is a company that directly owns at least 25% of the capital of the paying company.',
            'e. The lower rate applies where the beneficial owner of the dividend is a company that directly or indirectly owns at least 25% of the capital of the paying company.',
            'f. The lower rate applies where the beneficial owner of the dividend is a company that owns at least 10% of the voting stock of the paying company.',
            'g. The lower rate applies where the beneficial owner of the dividend is a company that directly owns at least 10% of the capital of the paying company',
            'h. The lower rate applies where the beneficial owner is a company (other than a partnership) that directly owns at least 10% of the capital of the paying company.',
            '1. The lower rate applies where the beneficial owner of the dividend is a company (not a partnership) that directly owns at least 25% of the capital of the paying company within at least 12 consecutive months before the payment takes place.', 
            'j. The lowest rate (i.e. 0%) applies if the beneficial owner of the dividends is the governmental bodies specified in the treaty, any of its institutions, or other entity the capital of which is wholly owned, directly or indirectly, by that contracting state. The lower rate (i.e. 5%) applies if the beneficial owner is a company (other than a partnership) that directly holds at least 25% of the capital of the company paying the dividends. The 10% rate applies in all other cases.',
            'k. The 0% rate applies if the beneficial owner of the dividends is the government of the other contracting state. The 5% rate applies if the beneficial owner of the dividends is a company that directly holds at least 25% of the capital of the company paying the dividends. The 15% rate applies where those dividends are paid out of income or gains derived directly or indirectly from immovable property within the meaning of Article 6 by an investment vehicle that distributes most of this income or gains annually and whose income or gains from such immovable property is exempted from tax. The 10% rate applies in all other cases.',
            '1. The lower rate (i.e. 0%) applies where the beneficial owner of the dividend is (i) the government of the other contracting state or any of its institutions or other entity wholly owned, directly or indirectly, by the government of the other contracting state or (ii) a company that is a resident of the other contracting state whose shares are at least 20% owned, directly or indirectly, by the government of the other contracting state. The 5% rate applies where the beneficial owner of the dividend is a company that directly holds at least 25% of the capital of the company paying the dividends. The 10% rate applies in all other cases.', 
            'm. The lowest rate (i.e. 0%) applies where the beneficial owner of the dividend is the government of the other contracting state or any of its institutions or other entity wholly owned, directly or indirectly, by the government of the other contracting state.' ,
            'n. In the case of Papua New Guinea, the WHT shall be limited to 10% of the dividend while the Chinese tax law existing on the date of the signing of the tax treaty regarding dividends still applies; otherwise, the tax rate shall be 15%.   ',
            'o. The lowest rate (i.e. 5%) applies if the beneficial owner of the dividends is a company (other than a partnership) that directly holds at least 25% of the capital of the company paying the dividends. The highest rate (i.e. 15%) applies where those dividends are paid out of income or gains derived directly or indirectly from immovable property within the meaning of Article 6 by an investment vehicle that distributes most of this income or gains annually and whose income or gains from such immovable property is exempted from tax. The 10% rate applies in all other cases.',
            'p. The lower rate (e. 5%) applies if the beneficial owner of the dividends is a company. (other than a partnership) that directly holds at least 25% of the capital of the company paying the dividends and this holding amounts to at least EUR 80,000 or its equivalent in any other currency.   ',
            'q. The lowest rate (ie. 0%) applies if the dividends are derived by a sovereign wealth fund specified in the treaty. The lower rate (ie. 5%) applies if the beneficial owner of the dividends is a company (other than a partnership) that directly holds at least 25% of the capital of the company paying the dividends. The 10% rate applies in all other cases. However, the dividends may be taxed at the rate under the domestic law if the dividends are paid out of income or gains derived from immovable property within the meaning of Article 6 by an investment vehicle that distributes most of this income or gains annually, whose income or gains from such immovable property is exempted from tax, and where the beneficial owner of those dividends holds, directly or indirectly, 10% or more of the capital of the vehicle paying the dividends..',
            'r. The lower rate (0.e. 0%) applies if the dividends arise in a contracting state and are paid to the other contracting state or a political subdivision, local authority, or aciministrative territorial unit thereof, or any entity wholly or mainly owned by the other contracting state. The 3% rate applies if the beneficial owner of the dividends is a company (other than a partnership) that directly holds at least 25% of the capital of the company paying the dividends. The 10% rate applies in all other cases.',
            's. The lower rate (l.e. 0%) applies in Gabon if the dividend is derived by the China-Africa Development Fund from Gabon',
            't. The lowest rate (i.e. 5%) applies if the beneficial owner is an institution owned or controlled by the other contracting state. The lower rate (Le. 10%) applies if the beneficial owner is a company that directly holds at least 25% of the capital of the company paying the dividends throughout a 365 day period that includes the day of the payment of the dividend (for the purpose of computing that period, no account shall be taken of changes of ownership that would directly result from a corporate reorganisation, such as a merger or divisive reorganisation, of the company that holds the shares or that pays the dividend).',
            'u. The lowest rate (ie. 0%) applies in the contracting state of which the company paying the dividends is a resident if the beneficial owner of the dividends holds, together with any associated enterprises, directly or indirectly, no more than 25% of the voting power in the company paying the dividends, and the beneficial owner is the government of the other contracting state. The lower rate (i.e. 5%) applies if the beneficial owner is a company that directly holds at least 25% of the capital of the company paying the dividends throughout a 365-day period that includes the day of the payment of the dividend (for the purpose of computing that period, no account shall be taken of changes of ownership that would directly result from a corporate reorganisation, such as a merger or divisive reorganisation, of the company that holds the shares or that pays the dividend).' ,
            'w. The lowest rate (i.e. 0%) applies in the contracting state of which the company paying the dividends is a resident if the beneficial owner of the dividends is the government of the other contracting state or political subdivisions, local authorities thereof, or the Central Bank of the other contracting state or any entity the capital of which is mainly owned by the other contracting state. The lower rate (5%) applies if the beneficial owner is a company that directly holds at least 10% of the capital of the company paying the dividends throughout a 365-day period that includes the day of the payment of the dividend (for the purpose of computing that period, no account shall be taken of changes of ownership that would directly result from a corporate reorganisation, such as a merger or divisive reorganisation, of the company that holds the shares or that pays the dividend). The 8% rate applies in all other cases. ',
            '4]The following notes apply to interest WHT:',
            'a.The lower rate applies to interest payable to banks or financial institutions.',
            'b.The lowest rate of 4% applies if the beneficial owner of the interest is: (i) a bank, (ii) an insurance company or financial institution; (iii) an enterprise substantially deriving its gross income from the active and regular conduct of a lending or finance business involving transactions with unrelated persons, provided that it is unrelated to the payer of the interest and that the interest is not derived from a back-to-back loan; or (iv) an enterprise that sells machinery or equipment if the interest is paid concerning indebtedness arising as part of the credit sale of that machinery or equipment. The rate of 5% applies to interest arising from bonds or securities regularly traded on recognised exchanges. The rate of 10% applies in other cases. The highest rate of 15% applies for a period of two years from the date on which the treaty takes effect.',
            'c.The 0% rate applies to the interest that is paid: (i) in respect of indebtedness arising as a consequence of the sales on credit of any equipment, merchandise, or service; (ii) on any loan granted by a financial institute of that contracting state; or (iii) to that other state or a political subdivision, local authority, or administrative - territorial unit thereof, or any entity wholly or mainly owned by that other state. The 3% rate applies to all other cases.',
            'd.The interest shall be exempted from tax if (i) interest is on commercial debt-claims, including debt-claims represented by commercial paper, resulting from deferred payments for machinery or equipment supplied by an enterprise, except where such interest is paid between associated enterprises; (ii) interest is on loans of any nature not represented by bearer instruments granted on preferential terms for a period of at least three years by a banking enterprise; or (iii) interest is paid to the other contracting state, a political subdivision, or a local authority thereof, or to the Central Bank of that contracting state or to an institution owned or controlled by that state, or by a political subdivision or a local authority thereof.',
            'e.The interest shall be exempt from tax if (i) the interest is paid to the other contracting state or political subdivisions, local authorities thereof, the Central Bank of the other contracting state, or any entity the capital of which is wholly owned directly or indirectly by the other contracting state, or paid on loans guaranteed or insured by the other contracting state, or political subdivisions, local authorities thereof, the Central Bank of the other contracting state, or any entity the capital of which is wholly owned directly or indirectly by the other contracting state; or (ii) the interest is paid in connection with the sale of commercial or scientific equipment on credit.',
            '5]The following notes apply to royalties WHT:',
            'a.The higher rate applies to trademarks.',
            'b.The higher rate applies to copyright of literary, artistic, or scientific work, including cinematography films or tapes for television or broadcasting.',
            'c.The lower rate applies to royalties paid for technical or economic studies or for technical assistance.',
            'd.The lower rate applies to royalties paid to an aircraft and ship leasing business.',
            'e.The higher rate applies to copyright of literacy, artistic, or scientific work, including cinematography films, or films or tapes for radio or television broadcasting, any patent, trade mark, design or model, plan, secret formula or process, or for information concerning industrial, commercial, or scientific experience; the lower rate applies for studies, technical, financial, accounting, or tax support.',
            'f.The lowest rate (3%) applies to royalties paid for the use of, or the right to use, any item of news; the lower rate (5%) applies to royalties paid for the use of, or the right to use, any copyright of literary, artistic, or scientific work; the 7% rate applies to royalties paid for the use or the right to use containers.',
            '6]The lower rates apply in cases where the dividend, interest, or royalty paid from Ecuador to China is applicable to the Foreign Exchange Control Tax in Ecuador.',
            '7]The tax treaty with the former Socialist Federal Republic of Yugoslavia is now applicable to Bosnia and Herzegovina.',
            '8]The tax treaty with the former Federal Republic of Yugoslavia is now applicable to the nations of Serbia and Montenegro.',
            '9]These tax treaties have not yet entered into force as of 31 December 2023.',
            'In addition to the above tax treaties, China has also entered into tax information exchange agreements (TIEAs) with a few countries. For example',
            'Argentina',
            'Bahamas',
            'Bermuda',
            'British Virgin Islands (BVI).',
            'Cayman Islands',
            'Guernsey',
            'Isle of Man',
            'Jersey.',
            'Liechtenstein',
            'San Marino',
            'China also signed special agreements in respect of international transportation with a few counties (e.g. Belgium, Chile, Denmark, Sweden, the United States).',

            ]}
  onPress={() => handleReadMore('Withholding taxes')}
  showMore={showMore['Withholding taxes']}
>






</OptionBlock>


<OptionBlock
  title="Tax administration"
  onPress={() => handleReadMore('Tax administration')}
  showMore={showMore['Tax administration']}
>


<OptionBlock
  title="Taxable period"
  description="The tax year commences on 1 January and ends on 31 December."
  onPress={() => handleReadMore('Taxable period')}
  showMore={showMore['Taxable period']}
></OptionBlock>


<OptionBlock
  title="Tax returns"
  description="Enterprises are required to file and pay provisional income taxes on a monthly or quarterly basis within 15 days following the end of each month/quarter, and file and settle their annual income tax return within five months after the end of the tax year, together with an audit certificate of a registered public accountant in China. Information on related-party transactions must be filed with the annual income tax return."
  onPress={() => handleReadMore('Tax returns')}
  showMore={showMore['Tax returns']}
></OptionBlock>

<OptionBlock
  title="Payment of tax"
  description="Enterprises are required to file and pay provisional income taxes on a monthly or quarterly basis within 15 days following the end of each month/quarter. Settlement of annual tax payment is due, in conjunction with the annual income tax return, within five months after the end of the tax year."
  onPress={() => handleReadMore('Payment of tax')}
  showMore={showMore['Payment of tax']}
></OptionBlock>

<OptionBlock
  title="Tax audit process"
  description="There is no fixed audit cycle in China. Tax audit targets are selected pursuant to certain criteria."
  onPress={() => handleReadMore('Tax audit process')}
  showMore={showMore['Tax audit process']}
></OptionBlock>

<OptionBlock
  title="Statute of limitations"
  description="For unintentional errors (e.g. calculation errors) committed by the taxpayer in its tax filing, the statute of limitation is three years and extended to five years if the amount of tax underpaid is CNY 100,000 or more. For special tax adjustments, such as transfer pricing adjustments, adjustments under CFC rules, adjustments under the general anti-avoidance rules, the statute of limitation is ten years. There is no statute of limitation for tax evasion, refusal to pay tax, or defrauding of tax payment."
  onPress={() => handleReadMore('Statute of limitations')}
  showMore={showMore['Statute of limitations']}
></OptionBlock>

<OptionBlock
  title="Recent focus of Chinese tax authorities"
  description="Since 2009, the Chinese tax authorities have strengthened their tax administration on transfer pricing and income derived by non-TREs. The STA has released a number of tax circulars addressing the tax administration of transfer pricing, foreign contractors and service providers, WHT on passive income, etc."
  textData={['Under the CIT Law, non-TREs are subject to CIT on the capital gain derived from the disposal of equity investment in Chinese companies. In addition, the transfer has to be effected at fair value so that any gain shall be recognised for tax purpose at the time when the transaction takes places (unless the transaction qualifies for deferral tax treatment provided under the tax regulations). The Chinese tax authorities have, in recent years, challenged and clawed back CIT on several equity transfer cases whereby non-TREs disposed of their equity investment in China to related parties at cost or below fair value. In addition, they have become more knowledgeable on valuation theories and methodologies and are applying them in reviewing valuation reports in order to ascertain the fair value of equity transfer transactions for tax purposes.',
             'In addition, the Chinese tax authorities have geared up their efforts in recent years to scrutinise investment structures involving intermediate holding companies incorporated in low-tax jurisdictions. One of their focuses is on the indirect equity transfer of Chinese companies by non-TREs. The income derived by a non-TRE from the disposal of a non-Chinese company is not taxable under China’s domestic income tax law. However, if the Chinese tax authorities are of the view that the non-TRE transferor has used an abusive arrangement to indirectly transfer the equity of the Chinese company (i.e. interposing and disposing of the special purpose vehicle for no reasonable commercial purpose, but just for avoidance of China withholding income tax), it may re-characterise the equity transfer based on the substance over form principle and disregard the existence of the special purpose vehicle. Once the special purpose vehicle is disregarded, the transfer would be effectively a transfer of the underlying Chinese company’s equity, and the transfer gain would be China source and subject to China withholding income tax. In early 2015, the STA issued a circular that sets out new guidance on the assessment of indirect transfer of China taxable properties by non-TREs. This guidance extends the scope to capture all ‘China taxable properties’, including not only equity investment in Chinese companies but also immovable properties located in China and assets of an establishment or place of a foreign company in China. It also provides clearer criteria on how to assess ‘reasonable commercial purpose’ and introduces ‘safe harbour’ scenarios.',
             'The STA has also released circulars relating to the claiming of treaty benefits by non-TREs and interpretation of certain articles and terms in the tax treaties, such as dividends, royalties, beneficial ownership, etc. Aggressive tax planning (including, but not limited to, tax-avoidance and treaty-abusive arrangements) not supported by reasonable commercial purposes and substance will be subject to scrutiny by the Chinese tax authorities. Non-residents and their withholding agents are required to file certain prescribed forms and other supporting documents when performing tax filing to justify their claims for the tax treaty benefits. The tax position taken by the non-residents or withholding agents are subject to examination by the Chinese tax authorities after the tax filing.',            
             'The STA issued a Departmental Interpretation Note (DIN) in 2010 for the tax treaty concluded between China and Singapore. It is the first time the STA has introduced a set of technical views, interpretation, and practice guidelines for the implementation of a tax treaty in such a comprehensive manner. More importantly, this set of interpretation is also applicable to other tax treaties concluded by China if the provisions of the relevant articles in those tax treaties are the same as those in the China/Singapore tax treaty. Thus, it is likely to have a wide impact to tax residents of other countries/regions that have entered into tax treaties with China.',
             'For transfer pricing investigation, increasing scrutiny has been imposed on outbound related-party remittance, such as service fees and royalty payments. Specifically, in addition to the arm’s-length nature of the service fees and royalty transactions, the Chinese tax authorities may also require taxpayers to demonstrate the commercial substance of the overseas service provider or intangible property owner. The Chinese tax authorities are also stringent on activities for the decision-making, monitoring, control, and compliance purposes of the group, and may challenge the service remittance for group finance, tax, human resources, and legal activities, which is different from common positions taken by Organisation for Economic Co-operation and Development (OECD) countries. Another focus of the Chinese tax authorities in transfer pricing investigation is location-specific advantages (e.g. location saving of Chinese low-cost resources, market premium of Chinese market). As such, the Chinese tax authorities often expect a different transfer pricing policy in China, which will pose difficulties on multinational groups who implement a consistent transfer pricing policy around the world.',

            ]}
  
  
  onPress={() => handleReadMore('Recent focus of Chinese tax authorities')}
  showMore={showMore['Recent focus of Chinese tax authorities']}
></OptionBlock>


<OptionBlock
  title="General anti-avoidance rules (GAAR)"
  description="There is a GAAR provision in the CIT law allowing the Chinese tax authorities to make adjustments to taxable revenue or taxable income where business arrangements, structures, or transactions are entered into without reasonable commercial purpose and result in a reduction, exemption, or deferral of tax payment. The Chinese tax authorities may initiate a GAAR investigation if they suspect that an enterprise undertakes any of the following arrangements: abuse of preferential tax treatments, abuse of tax treaties, abuse of corporate structure, use of tax havens for tax avoidance purposes, or other arrangements that do not have a reasonable commercial purpose."
  textData='The STA released the Administrative Measures on GAAR in late 2014. The Administrative Measures provides comprehensive guidance on the implementation of GAAR, including elaboration on certain principles, adjustment methods, procedures throughout the GAAR life cycle, and relevant documentation requirements.'
  
  onPress={() => handleReadMore('General anti-avoidance rules (GAAR)')}
  showMore={showMore['General anti-avoidance rules (GAAR)']}
></OptionBlock>










</OptionBlock>






<OptionBlock
  title="Other issues"
  description=""
  onPress={() => handleReadMore('Other issues')}
  showMore={showMore['Other issues']}
>


<OptionBlock
    title="Choice of business entity"
    description="According to the Foreign Investment Law of the People’s Republic of China and its detailed implementation rules, from 1 January 2020, foreign investors (including foreign individuals, enterprises, and other organisations) may directly or indirectly invest in China. Foreign investors shall assess whether their investment projects are restricted, prohibited, or encouraged in China before they make the investment decisions. Foreign companies, enterprises, or individuals may establish foreign-invested enterprises, partnerships, or representative offices in China. Certain foreign financial institutions, including banks and insurance companies, may, subject to approval, set up branches in China. For certain foreign invested industries and projects, approval is needed from the relevant Chinese government authorities."
    onPress={() => handleReadMore('Choice of business entity')}
    showMore={showMore['Choice of business entity']}
  ></OptionBlock>

  <OptionBlock
    title="Exchange controls"
    description="Foreign exchange transactions are administered by the State Administration of Foreign Exchange (SAFE) and its branches. The regulatory administration on foreign exchange transactions of an enterprise depends on whether the transaction is a current account item or a capital account item. Current account items refer to ordinary transactions within the context of international receipts and payments, including, but not limited to, balance of payments from trade, labour services, and unilateral transfers. Capital account items refer to items of increase or decrease in debt and equity due to inflow or outflow of capital within the context of international receipts and payments, including, but not limited to, direct investment, all forms of loans, and investment in securities. Generally, a payment that falls under the category of a current account may be remitted overseas if supported with proper contracts, invoices, and tax payment/exemption certificates. In the past, most of the transactions under the category of capital account items had to be approved by the SAFE. Since the end of 2012, the SAFE has relaxed the administration of certain capital account items so that approval is no longer needed for a few types of transactions."
    onPress={() => handleReadMore('Exchange controls')}
    showMore={showMore['Exchange controls']}
  ></OptionBlock>

  <OptionBlock
    title="Intellectual properties"
    description="Patents, trademarks, and copyrights are governed by separate laws and administered by separate governmental bodies. The government encourages the development and transfer of intellectual properties. The transfer of qualified technology and qualified technical services are exempted from VAT."
    onPress={() => handleReadMore('Intellectual properties')}
    showMore={showMore['Intellectual properties']}
  ></OptionBlock>

  <OptionBlock
    title="Mergers and acquisitions (M&A) activities"
    description="Both Chinese domestic and foreign investors increasingly are using M&A transactions to establish or expand their Chinese operations.

    The MoF and the STA jointly released several circulars that address the CIT treatment for six forms of restructuring transactions, namely, change in legal form, debt restructuring, equity acquisition, assets acquisition, merger, and spin-off. The general principle is that enterprises undergoing corporate restructuring should recognise the gain/loss from the transfer of relevant assets/equity at fair value when the transaction takes place. However, if certain prescribed conditions are satisfied, the parties involved could opt for special tax treatments, which are essentially tax deferral tax treatment. In other words, recognition of gain/loss of the transferor from transfer of assets/equity can be deferred with respect to the equity-payment portion; and the transferee may take over the transferor’s tax basis of the acquired assets/equity. Such special tax treatments are only available to a very few specific types of cross-border transactions."
    onPress={() => handleReadMore('Mergers and acquisitions (M&A) activities')}
    showMore={showMore['Mergers and acquisitions (M&A) activities']}
  ></OptionBlock>

  <OptionBlock
    title="Development of the Foreign Account Tax Compliance Act (FATCA) in China"
    description="In late June 2014, the Chinese government reached an agreement in substance with the United States (US) on the terms of a Model 1 Intergovernmental Agreement (IGA). However, as of 31 December 2023, the China-US IGA has not been signed, and the financial institutions in China have not started implementing FATCA."
    onPress={() => handleReadMore('Development of the Foreign Account Tax Compliance Act (FATCA) in China')}
    showMore={showMore['Development of the Foreign Account Tax Compliance Act (FATCA) in China']}
  ></OptionBlock>

  <OptionBlock
    title="Base Erosion and Profit Shifting (BEPS) and the Multilateral Instrument (MLI)"
    description="China has been actively involved in the BEPS project as a partner of the OECD and one of the G20 members. After the final reports on all the 15 action plans were endorsed in 2015, China has implemented and localised the BEPS action plans on a needed basis."
    textData={['China imposed new transfer pricing compliance requirements, including annual reporting forms for related-party transactions (RPT forms), country-by-country (CbC) reporting, and transfer pricing documentation, all of which contain substantial changes to the previous rules.',
               'China entered into the Multilateral Competent Authority Agreement (MCAA) for the Automatic Exchange of Country-by-Country Reports in 2016. ',
               'China also entered into the Multilateral Instrument (MLI) in June 2017, and, on 25 May 2022, China ratified the MLI and deposited its instrument of ratification to the OECD. For Mainland China, the MLI has taken effect from 1 September 2022. Some important positions of China in relation to the articles in the MLI are as follows:',
              ]}
    pointers={['Covered tax agreement: China puts all of its existing tax treaties (excluding China’s three tax arrangements with Hong Kong, Macau, and Taiwan) into the covered agreement, except for seven effective tax treaties with Angola, Chile, Republic of Congo, India, New Zealand, Rwanda, and Spain, as well as two not-yet-effective tax treaties with Argentina and Kenya.',
               'Hybrid mismatches: The MLI requires that the competent authorities of the contracting jurisdictions shall consider the place of effective management, the place where it is incorporated or otherwise constituted, and any other relevant factors, and endeavour to determine by mutual agreement the entity’s tax residence. China has adopted this provision.',
               'Treaty abuse: China adopts the principle purpose test (PPT) provision but does not adopt the simplified limitation of benefits (LOB) test. The threshold period for enjoying treaty benefit on capital gain from the transfer of property-rich companies is three years instead of the one-year period provided in the MLI.',
               'China opts out of all the provisions in the avoidance of PE section and the arbitration clause for MAPs.',]}
    
    onPress={() => handleReadMore('Base Erosion and Profit Shifting (BEPS) and the Multilateral Instrument (MLI)')}
    showMore={showMore['Base Erosion and Profit Shifting (BEPS) and the Multilateral Instrument (MLI)']}
  ></OptionBlock>

<OptionBlock
  title="Common Reporting Standard (CRS)"
  description="China entered into the Multilateral Competent Authority Agreement on Automatic Exchange of Financial Account Information. In May 2017, the relevant Chinese authorities jointly issued the Administrative Measures on Due Diligence Procedures for Non-residents’ Financial Account Information in Tax Matters (the Measures) to implement CRS in China. Financial institutions established in China are required to carry out due diligence procedures on financial accounts starting from 1 July 2017. China completed the exchange of the first round of financial account information by September 2018."
  onPress={() => handleReadMore('Common Reporting Standard (CRS)')}
  showMore={showMore['Common Reporting Standard (CRS)']}
></OptionBlock>


  
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
  pointers,
  onPress,
  showMore,
  children,
  order,
  textData,
  textData1,
  textData2,
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
          {/* {tableData && (
            <View style={styles.table}>
              {(tableData || []).map((row, index) => (
                <View key={row.key} style={styles.tableRow}>
                  <Text style={styles.tableCellKey}>{row.key}</Text>
                  <Text style={styles.tableCellValue}>{row.value}</Text>
                </View>
              ))}
            </View>
          )} */}
         {/* {tableData && (
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
)} */}
               

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
          
          {pointers && (
            <View style={styles.pointersContainer}>
              {pointers.map((pointer, index) => (
                <Text key={index} style={styles.pointer}>
                 {'\u2022'} {pointer}
                </Text>
              ))}
            </View>
          )}
          {Array.isArray(textData2) ? textData2.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text  >{textData2}</Text>}
          
           {typeof children === 'string' ? <Text>{children}</Text> : children}
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
});

export default ChinaCorp;