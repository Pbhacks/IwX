import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';


const IndiaIndiv = () => {
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
  description="Last reviewed - 11 April 2024"
  onPress={() => handleReadMore('Significant Developments')}
  showMore={showMore['Significant Developments']}
>

<OptionBlock
  title="Alternate Tax Regime"
  description="The optional alternate personal tax regime, devoid of any deductions or exemptions, has been made the default tax regime effective 1 April 2023. The tax rates under this regime have been revised. Further, a rebate of 100% income tax has been allowed for resident individuals where total income does not exceed 700,000 Indian rupees (INR), and a standard deduction of INR 50,000 has been allowed. See the corresponding sections of India’s individual tax summary for details."
  textData={["The taxpayers who want to opt for the old tax regime have to specifically indicate this preference in the manner as prescribed."]}
  onPress={() => handleReadMore('Alternate Tax Regime')}
  showMore={showMore['Alternate Tax Regime']}
/>



<OptionBlock
  title="Increased Withholding Tax Rate (WHT) for Royalty and Fee for Technical Service (FTS) Payments Made to Non-Residents"
  description="The 10% special tax rate, as provided under the domestic tax laws, on royalty and FTS income earned by a non-resident or a foreign company that does not have permanent establishment (PE) in India has been increased to 20%. Accordingly, royalty/FTS incomes that are chargeable to tax for a non-resident on or after 1 April 2023 will require tax to be deducted at the rate of 20% plus applicable surcharge and cess under the domestic tax laws."
  textData={["However, non-residents or foreign companies can still avail the benefit of a lower tax rate provided in the tax treaties, subject to compliance with the treaty eligibility conditions."]}
  onPress={() => handleReadMore('Increased WHT for Royalty and FTS Payments')}
  showMore={showMore['Increased WHT for Royalty and FTS Payments']}
/>
<OptionBlock
  title="E-filing of Form 10F without Permanent Account Number (PAN) enabled"
  description="In order to be eligible to claim the tax treaty benefits, a non-resident is, inter alia, required to furnish certain details in Form 10F. The said form is required to be filed electronically on the income-tax portal. The Central Board of Direct Taxes (CBDT) has enabled non-residents, who do not have a PAN (i.e. tax identification number) and are not required to have a PAN, to e-file Form 10F on the income-tax portal by creating an account without the requirement of first obtaining a PAN."
  onPress={() => handleReadMore('E-filing of Form 10F without PAN enabled')}
  showMore={showMore['E-filing of Form 10F without PAN enabled']}
/>

<OptionBlock
  title="Withdrawal of small outstanding direct tax demands"
  description="In the Interim Budget 2024-25, the Finance Minister announced withdrawal of petty, non-verified, non-reconciled or disputed tax demands under the Income-tax Act, 1961, Wealth-tax Act, 1957 and Gift-tax Act, 1958 (relevant Act). To bring this into effect, the CBDT has issued an order broadly providing below guidelines/ conditions based on which the tax demands will be withdrawn."
  pointers = {[
    [ "",
      "The monetary limit of outstanding tax demands (which are outstanding as on 31 January 2024 under the relevant Acts) which are to be remitted or extinguished are as follows:",
      "- Up to tax year 2009-10 – Each demand entry up to INR 25,000",
      "- For tax years 2010-11 to 2014-15 – Each demand entry up to INR 10,000",
      "The tax demands will include principal amount of tax, interest, surcharge, cess, penalty or fee levied under the relevant Acts. However, remission/ extinguishment of outstanding demands qua a particular taxpayer cannot exceed the maximum ceiling limit of INR 100,000 and any demand entry exceeding the individual monetary limit will not form part of the maximum ceiling limit;",
      "Fractions of demand will be ignored for computing the maximum ceiling.",
      "Remission/ extinguishment of demand will be undertaken in a chronological manner;",
      "Interest levied under the relevant Acts on account of delay in payment of demand will not be considered;",
      "The demand waived will not be regarded as income of the taxpayer and hence no additional tax liability will arise in the hands of the taxpayer pursuant to remission or waiver of tax demands.",
      "There will be no remission/ extinguishment of outstanding demands with respect to tax deduction at source (TDS) and tax collection at source (TCS) provisions of the income-tax law.",
      "Post the remission/ extinguishment of demands, no interest on account of delay in payment of demand will be levied under any relevant Acts.",
      "Withdrawal/ remission of tax demands will not give any right to the taxpayers to claim credit or refund of waived amount and such waiver will also not grant immunity from any ongoing criminal proceedings or litigations in the case of a taxpayer.",
      "The withdrawal will be implemented by Directorate of Income-tax (Systems)/ Centralised Processing Centre (CPC), Bengaluru, preferably within two months from the date of CBDT order, i.e. 13 February 2024."
    ]
  ]}
  
  onPress={() => handleReadMore('Withdrawal of small outstanding tax demands')}
  showMore={showMore['Withdrawal of small outstanding tax demands']}
/>






</OptionBlock>




<OptionBlock
  title="Taxes on Personal Income"
  description="Taxation of individuals in India is primarily based on their residential status in the relevant tax year. The residential status of individuals is determined independently for each tax year and is ascertained on the basis of their physical presence in India during the relevant tax year and past years. See the Residence section for more information."
  pointers = {[
    [
      "The following types of residential status are envisaged for an individual:",
      "- Resident in India, which is further divided into the following two categories:",
      "  - Resident and ordinarily resident (ROR).",
      "  - Resident but not ordinarily resident (RNOR).",
      "- Non-resident in India (NR)."
    ],
    [
        "Under Indian tax laws, the scope of taxation differs as per the residential status of an individual:",
        "- RORs are subject to tax in India on their worldwide income, wherever received.",
        "- RNORs are subject to tax in India only in respect to income that accrues/arises or is deemed to accrue/arise in India, or is received or deemed to be received in India, or is from a business controlled in or a profession set up in India.",
        "- NRs are subject to tax in India only in respect to income that accrues/arises or is deemed to accrue/arise, or is received or deemed to be received in India."
      ],
  ]}
  
  textData2={["RNOR and NR individuals are not subject to tax in respect to their income earned and received outside of India."]} 
 
 
 
  onPress={() => handleReadMore('Taxes on Personal Income')}
  showMore={showMore['Taxes on Personal Income']}
>

<OptionBlock
  title="Personal Income Tax Rates"
  description="The personal income tax rates in India vary based on the income slab and the residential status of the taxpayer. Tax rates are subject to change and may differ for different assessment years. Please refer to the latest tax regulations for accurate information."
  onPress={() => handleReadMore('Personal Income Tax Rates')}
  showMore={showMore['Personal Income Tax Rates']}
>

<OptionBlock
  title="Alternate Personal Tax Regime (APTR)"
  description="Effective 1 April 2023, the tax rates under the ATPR, devoid of any deductions or exemptions, have been revised as follows:"
  tableData={[
    { key: "Taxable income (INR)", value: "Tax on column 1 (INR)", value2: "Tax on excess (%)" },
    { key: 'Over (column 1)', value: 'Not over', value2: '' },
    { key: '0', value: '300,000', value2: '-' },
    { key: '300,000', value: '600,000', value2: '-' },
    { key: '600,000', value: '900,000', value2: '15,000', value3: '10' },
    { key: '900,000', value: '1,200,000', value2: '45,000', value3: '15' },
    { key: '1,200,000', value: '1,500,000', value2: '90,000', value3: '20' },
    { key: '1,500,000', value: '', value2: '150,000', value3: '30' },
  ]}
  pointers = {[
    [
      "Under the APTR, the taxpayer is not eligible to claim certain exemptions/deductions/set-off of losses/carry forward of losses, such as:",
      "- Leave travel allowance.",
      "- House rent allowance.",
      "- Allowance under which incomes that do not form part of the total income of the Income-tax Act, except certain prescribed allowances.",
      "- Exemption of free food and beverages through vouchers provided by the employer.",
      "- Deduction for professional tax.",
      "- Deduction of interest payment on housing loans for self-occupied property and restrictions on set-off of loss from let out property.",
      "- All Chapter VIA deductions of the Income-tax Act available for expenditure by way of employee’s contribution to provident fund, children tuition fees, insurance premium, donations, medical premium, etc., except employer’s contribution to notified pension scheme, such as National Pension Scheme."
    ]
  ]}

textData2={[
    "Note that this is not an exhaustive list and just an overview of certain deduction/exemptions that are not allowed in the APTR.",
    "The APTR option can be exercised for every financial year (FY) if the taxpayer has no business income. If the taxpayer has business income, the option, once exercised, will be mandatory for all subsequent financial years as well, with only a one-time change being permitted later.",
    "The Revenue Department has clarified that the employer will seek information from each of its employees having salary income regarding their intended tax regime, and each such employee will intimate the same to the employer. Upon intimation, the employer will compute the total income and deduct tax at source thereon according to the option exercised.",
    "If intimation is not made by the employee, it will be presumed that the employee continues to be in the default tax regime and has not exercised the option to opt out of the alternate tax regime.",
    "It is also clarified that the employee can elect to change the option of the tax regime at the time of filing one's India tax return."
]}
  
  onPress={() => handleReadMore('Alternate Personal Tax Regime (APTR)')}
  showMore={showMore['Alternate Personal Tax Regime (APTR)']}
/>


<OptionBlock
  title="Old Tax Regime"
  description="The slab rates applicable to individuals for tax year 2022/23 are as follows. Please refer to the latest tax regulations for accurate information."
  tableData={[
    { key: "Taxable income (INR)", value: "Tax on column 1 (INR)", value2: "Tax on excess (%)" },
    { key: 'Over (column 1)', value: 'Not over', value2: '' },
    { key: '0', value: '250,000', value2: '-', value3: '0' },
    { key: '250,000', value: '500,000', value2: '-', value3: '5' },
    { key: '500,000', value: '1,000,000', value2: '12,500', value3: '20' },
    { key: '1,000,000', value: '', value2: '112,500', value3: '30' },
  ]}
 textData={["The basic exemption limit for resident individuals who are 60 years of age or more but less than 80 years of age at any time during the tax year is INR 300,000. For resident individuals who are 80 years of age or more, it is INR 500,000."]}

  
  onPress={() => handleReadMore('Old Tax Regime')}
  showMore={showMore['Old Tax Regime']}
/>



</OptionBlock>




<OptionBlock
  title="Surcharge"
  description="In addition to the income tax, a surcharge is to be levied where the total income of individuals exceeds INR 5 million, as follows. Please refer to the latest tax regulations for accurate information."
 tableData={[
    { key: "Taxable income (INR)", value: "Surcharge (%)" },
    { key: 'Up to 5 million', value: '0' },
    { key: 'Above 5 million but up to 10 million', value: '10' },
    { key: 'Above 10 million but up to 20 million', value: '15' },
    { key: 'Above 20 million but up to 50 million', value: '25' },
    { key: 'Above 50 million', value: '25 (37 in case old tax regime is opted)' },
  ]}
textData1={["However, on income arising on account of long-term capital gains, the rate of surcharge would be capped at 15%."]}

  
  
  onPress={() => handleReadMore('Surcharge')}
  showMore={showMore['Surcharge']}
/>


<OptionBlock
  title="Health and Education Cess"
  description="Health and education cess at the rate of 4% of the income tax and surcharge (if applicable) will be levied to compute the effective tax rate of individuals."
  onPress={() => handleReadMore('Health and Education Cess')}
  showMore={showMore['Health and Education Cess']}
/>

<OptionBlock
  title="Tax Rebate"
  description="Resident individuals are eligible for a tax rebate of the lower of the income tax or INR 12,500 where the total income does not exceed INR 500,000. However, in case the alternate tax regime is exercised, tax rebate would be the lower of the income tax or INR 25,000 where the total income does not exceed INR 500,000."
  onPress={() => handleReadMore('Tax Rebate')}
  showMore={showMore['Tax Rebate']}
/>

<OptionBlock
  title="COVID-19 Reliefs"
  description="COVID-19 reliefs may include special provisions or exemptions aimed at mitigating the financial impact of the pandemic on taxpayers. Please refer to the latest announcements and regulations for details on COVID-19 reliefs."
  pointers = {[
    [ "",
      "Any payment received from employer and/or any other person for medical treatment of COVID-19 during FY 2019/20 and subsequent years is fully exempt in the hands of the recipient individual.",
      "Any ex-gratia payment made by the employer to the family members of an employee who died on account of COVID-19 during FY 2019/20 and subsequent years is fully exempt from tax in the hands of the recipient family members without any limit. However, the tax exemption shall be limited to INR 1 million in aggregate where such amount is received from any other persons."
    ]
  ]}
  
  
  onPress={() => handleReadMore('COVID-19 Reliefs')}
  showMore={showMore['COVID-19 Reliefs']}
/>

<OptionBlock
  title="Alternative Minimum Tax (AMT)"
  description="AMT is applicable to all persons, other than a company, having income from a business or profession. AMT means an amount of tax that is computed on the adjusted total income. The taxpayer is liable to pay tax on such income at a rate of 18.5% (plus surcharge and health and education cess) on the adjusted total income. For a person located in an international financial services centre deriving income solely in convertible foreign exchange, one shall be liable to pay tax on such income at the rate of 9% (plus surcharge and health and education cess). AMT paid in a year is eligible to be carried forward for set-off against normal tax liability for 15 years. In case of an individual, Hindu undivided family (HUF), an association of persons, a body of individuals, or an artificial juridical person, AMT is not applicable where the adjusted total income does not exceed INR 2 million."
  onPress={() => handleReadMore('Alternative Minimum Tax (AMT)')}
  showMore={showMore['Alternative Minimum Tax (AMT)']}
/>

<OptionBlock
  title="Local Taxes on Income"
  description="Profession taxes imposed by certain states on individuals are minimal and deductible while calculating taxable income."
  onPress={() => handleReadMore('Local Taxes on Income')}
  showMore={showMore['Local Taxes on Income']}
/>







</OptionBlock>







<OptionBlock
  title="Residence"
  description="Taxation of individuals in India is primarily based on their residential status in the relevant tax year. See the Taxes on personal income section for a description of the types of residential status envisaged for an individual."
  pointers = {[
    [
      "An individual is said to be a resident in the tax year if he/she is:",
      "- Physically present in India for a period of 182 days or more in the tax year (182-day rule), or",
      "- Physically present in India for a period of 60* days or more during the relevant tax year and 365 days or more in aggregate in four preceding tax years (60-day rule).",
      "If none of the above two conditions are met, the individual is said to be an NR in that tax year."
    ],
        [
          "Example:",
          "- If Mr. A comes to India on or before 30 September, he will be treated as resident for that tax year.",
          "- If Mr. B comes to India on or before 31 January and has stayed in India for 365 days or more during the four tax years preceding the relevant tax year, he will be treated as resident for that tax year."
        ],
        [
            "A resident individual is treated as RNOR if he/she satisfies any one of the following conditions:",
            "- He/she has been an NR in nine out of ten tax years preceding the tax year for which residential status is being determined.",
            "- His/her physical presence in India is less than or equal to 729 days during seven tax years preceding the tax year for which residential status is being determined.",
            "A resident individual not satisfying both of the above conditions is treated as ROR."
          ],
          [
            "Example:",
            "- If an expatriate stays in India for 300 days for each of three tax years, then he/she will not qualify as RNOR in the fourth year because of the following reasons:",
            "1. He/she is not an NR in nine out of ten tax years.",
            "2. His/her physical presence in India exceeds 729 days in the preceding seven tax years."
          ],
      
          [
            "",
              "In determining the physical presence of individuals in India, it is not essential that their stay in the country needs to be continuous or at the same place.",
              "Furthermore, their date of arrival in India and date of departure from it may be considered as their period of stay in the country. The purpose of their residence in India is irrelevant, and even if it is for a visit to their families or tourism, it is counted as a stay in India for residency purposes.",
              "In effect, a newcomer to India normally remains an NR/RNOR for the first two to three tax years of stay in India."
            ],
            [
                "The rules are slightly more liberal for a person who is of Indian origin or an Indian citizen residing abroad and visiting India, or who is an Indian citizen and leaves India for employment abroad.",
                "An Indian citizen who leaves India as a member of the crew of an Indian ship or for taking employment abroad will qualify as a resident of India only if physically present in India for 182 days or more during that tax year.",
                "An Indian citizen or a person of Indian origin having taxable India-sourced income not exceeding INR 1.5 million and who, being outside India, comes on a visit to India will qualify as a resident of India only if physically present in India for 182 days or more during that tax year."
              ]
          
          
  ]}


  textData2={["Effective 1 April 2020, an Indian citizen or person of India origin who, being outside India, comes on a visit to India and whose India-sourced taxable income exceeds INR 1.5 million during the relevant tax year will qualify as a resident of India only if physically present in India for 120 days or more during that tax year and 365 days or more during the previous four tax years immediately preceding the relevant tax year. Further, such an individual will qualify as RNOR if the total stay in India during the relevant tax year is 120 days or more but less than 182 days."]}

  
 
 
  onPress={() => handleReadMore('Residence')}
  showMore={showMore['Residence']}
>



<OptionBlock
  title="Deemed Resident"
  description="An Indian citizen having India-sourced taxable income exceeding INR 1.5 million during the relevant tax year will be deemed to be a resident of India if one is not liable to tax in any other country by reason of domicile or residence or any other criteria of similar nature. Further, such an individual will qualify as RNOR in India for the relevant tax year."
  textData={["The above rule of determining a person as a 'deemed resident' of India will only be applicable where the normal rule of residency based on the individual's physical presence in India during the relevant previous year and/or past four tax years is not applicable.",
            "For the purpose of residency in India, the expression 'India-sourced taxable income' will include income deemed to accrue or arise in India.",
            "To provide more clarity on the applicability of this provision, the definition of the term 'liable to tax' is introduced, which means that there is a liability of tax on the person under any law for the time being in force in any country and also includes cases where, subsequent to imposition of tax liability, an exemption has been provided."]}
  
  
  
  
  
  onPress={() => handleReadMore('Deemed Resident')}
  showMore={showMore['Deemed Resident']}
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

export default IndiaIndiv;


         