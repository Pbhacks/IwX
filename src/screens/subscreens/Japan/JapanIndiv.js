import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';


const JapanIndiv = () => {
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
  title="Significant developments"
  description="Last reviewed - 23 January 2024"
  onPress={() => handleReadMore('Significant developments')}
  showMore={showMore['Significant developments']}
>
<OptionBlock
  title="Individual income tax"
  description="Implementation new measures for significantly high individual income"
  pointers = {[
    [
      "An additional tax burden will be imposed on individuals who have a significantly high level of income. Specifically, if the minimum tax (threshold) calculated based on the following formula (i) is greater than the individual’s income tax liability for the year, such excess (i.e. [i] minus [ii]) will be added to (ii):",
      "- Threshold: 22.5% x (standard taxable income - 330 million Japanese yen [JPY])",
      "- Income tax liability for the year.",
      "This revision will apply to individual income tax for 2025 and beyond."
    ],
    [
      "Taxation requirements of individuals as major shareholders holding shares in listed domestic corporations",
      "These amendments are published in the 2022 tax reform and are effective for dividends payable by listed domestic corporations on or after 1 October 2023.",
      "- Dividends paid by listed domestic corporations to an individual shareholder are subject to separate taxation as financial income if the shareholder’s holding ratio is less than 3%.",
      "- An individual shareholder is subject to comprehensive taxation if their shareholding ratio is 3% or more."
    ],
    [
      "Additionally, the following measures apply in cases where an individual shareholder directly holds less than 3% in a listed domestic corporation, but whose actual (indirect) holding ratio is 3% or more, due for example to investments made through other controlling corporations:",
      "- Dividends paid by listed domestic corporations to a resident individual (hereinafter, the individual) will be subject to comprehensive taxation if the percentage of the total number of outstanding stocks, etc., held by the individual and any corporation that is considered a family corporation belonging to the individual’s family (the total shareholding ratio) is 3% or more.",
      "- A listed domestic corporation that distributes dividends shall submit a report including the names, individual numbers (‘My Numbers’), shareholding ratios, and other matters pertaining to any individuals whose shareholding ratio is 1% or more on the dividend record date to the Japanese tax authority within one month from the date on which the payment is determined."
    ]
  ]}
  
  onPress={() => handleReadMore('Individual income tax')}
  showMore={showMore['Individual income tax']}
/>





<OptionBlock
  title="Inheritance tax and gift tax"
  description="The two revisions below will be applied to the inheritance tax on assets acquired by gift on or after 1 January 2024."
  pointers = {[
    [
      "Revision to the taxation system for settling gift taxes at the time of inheritance",
      "Under the current rule, if assets are gifted to an heir of a decedent and the special measures for settlement at the time of inheritance apply, the value of the gifted assets as of the time of the gift is added to the value of inherited assets and is subject to the inheritance tax. The gift tax already paid at the time of the gift is deducted from the inheritance tax. Under this special measure, a special deduction of JPY 25 million is applied in calculating the taxable amount of the gift tax.",
      "Under the 2023 tax reform, an additional special deduction of JPY 1.1 million will be available in addition to the previous special deductions of JPY 25 million."
    ],
    [
      "Add-back period for gifts received prior to inheritance",
      "Under the current inheritance tax law, the value of the assets acquired by heir(s) by way of gift from the decedent within three years prior to the inheritance should be added back to the taxable amount of the inheritance.",
      "Under the 2023 tax reform, the add-back period of three years will be extended to seven years, and a deduction of JPY 1 million will be applied in calculating the taxable amount of the inheritance. Note that if the assets are acquired by gift within three years prior to the inheritance, this deduction of JPY 1 million is not applicable."
    ]
  ]}
  
  onPress={() => handleReadMore('Inheritance tax and gift tax')}
  showMore={showMore['Inheritance tax and gift tax']}
/>









</OptionBlock>




<OptionBlock
  title="Taxes on personal income"
  description="In Japan, permanent resident taxpayers are taxed on their worldwide income. Non-resident taxpayers are taxed only on their Japan-sourced income. Non-permanent resident taxpayers are taxed on their income other than foreign-source income (in particular, potentially, on certain capital gains) that are not remitted into Japan plus potentially part of their foreign-sourced income that is paid in or remitted to Japan."
  onPress={() => handleReadMore('Taxes on personal income')}
  showMore={showMore['Taxes on personal income']}
>


<OptionBlock
  title="Personal income tax rates"
  description="Japan has a progressive tax system for personal income tax, with rates ranging from 5% to 45% depending on the income level. The tax rates are applied to different income brackets."
  textData={["The current national income tax rates are:"]}
  tableData={[
    { column1: "0", column2: "1,950,000", rate: "5", deduction: "0", tax: "0" },
    { column1: "1,950,000", column2: "3,300,000", rate: "10", deduction: "97,500", tax: "97,500" },
    { column1: "3,300,000", column2: "6,950,000", rate: "20", deduction: "427,500", tax: "232,500" },
    { column1: "6,950,000", column2: "9,000,000", rate: "23", deduction: "636,000", tax: "962,500" },
    { column1: "9,000,000", column2: "18,000,000", rate: "33", deduction: "1,536,000", tax: "1,434,000" },
    { column1: "18,000,000", column2: "40,000,000", rate: "40", deduction: "2,796,000", tax: "4,404,000" },
    { column1: "40,000,000", column2: "", rate: "45", deduction: "4,796,000", tax: "13,204,000" },
  ]}
  textData2={["The tax liability is determined by multiplying the excess taxable income for each bracket by the percentage above and adding the cumulative tax figure (see the Sample personal income tax calculation section for more information)."]}
  onPress={() => handleReadMore('Personal income tax rates')}
  showMore={showMore['Personal income tax rates']}
/>



<OptionBlock
  title="Surtaxes"
  description="A 2.1% surtax is assessed on an individual's national income tax, effective from 1 January 2013."
  onPress={() => handleReadMore('Surtaxes')}
  showMore={showMore['Surtaxes']}
/>

<OptionBlock
  title="Local income taxes"
  description="Local inhabitant's tax is imposed at a flat rate of 10% by Japanese local governments on a taxpayer's prior year income, with an additional equalisation per capita tax. The standard annual amount for the per capita tax is JPY 5,000."
  onPress={() => handleReadMore('Local income taxes')}
  showMore={showMore['Local income taxes']}
/>

<OptionBlock
  title="Non-residents"
  description="Non-resident taxpayers in Japan are subject to a flat 20.42% national income tax on gross compensation, including a 2.1% surtax. They may also be liable for the local inhabitant's tax at a rate of 10% if registered as a resident on the local municipality ledger as of 1 January of the following year."
  onPress={() => handleReadMore('Non-residents')}
  showMore={showMore['Non-residents']}
/>

















</OptionBlock>
















<OptionBlock
  title="Tax administration"
  description="Last reviewed - 23 January 2024"
  onPress={() => handleReadMore('Tax administration')}
  showMore={showMore['Tax administration']}
>




<OptionBlock
  title="Taxable period"
  description="The Japanese individual income tax year runs from 1 January to 31 December."
  onPress={() => handleReadMore('Taxable period')}
  showMore={showMore['Taxable period']}
/>

<OptionBlock
  title="Tax returns"
  description="All income tax returns are filed on an individual basis in Japan; joint tax returns are not permitted. The tax year is the calendar year for all resident-status individuals, and a taxpayer is required to file a national tax return by 15 March of the following year."
  textData={["If a taxpayer’s income consists only of employment income paid by one local employer (including a Japanese branch of a foreign corporation) that does not exceed JPY 20 million in a year, the payer of the income makes a so-called ‘year-end adjustment’ on the employment income, and if total income other than employment income is JPY 200,000 or less, the employee is not required to file an income tax return."]}
  onPress={() => handleReadMore('Tax returns')}
  showMore={showMore['Tax returns']}
>

<OptionBlock
  title="Overseas assets reporting"
  description="Permanent residents of Japan who own assets outside of Japan that exceed JPY 50 million in value as of 31 December of the year must disclose such assets by submitting an annual report by 15 March of the following year."
  onPress={() => handleReadMore('Overseas assets reporting')}
  showMore={showMore['Overseas assets reporting']}
/>

<OptionBlock
  title="Assets and liabilities reporting"
  description="Global asset and liability reporting is required for resident taxpayers who have total income on the tax return exceeding JPY 20 million and hold worldwide assets with a gross fair value of JPY 300 million or more, or financial assets subject to the exit tax of JPY 100 million or more as of 31 December. Individuals meeting these conditions will need to report, in detail, their worldwide assets and liabilities. These reports are not a part of the income tax return and need to be filed separately with the tax office by 15 March of the following year."
  onPress={() => handleReadMore('Assets and liabilities reporting')}
  showMore={showMore['Assets and liabilities reporting']}
/>


</OptionBlock>


<OptionBlock
  title="Payment of tax for salary paid in Japan"
  description="If salary is paid in Japan by a local employer, monthly withholding of national income tax is required. The national tax due on overseas payments of salary is payable when the tax return is filed, rather than through payroll withholding. Two provisional payments of national tax may be required in July and November if the previous year’s final tax liability (after the deduction of WHT) was JPY 150,000 or more."
  textData={["Local inhabitant's tax is assessed on the prior year’s income if a taxpayer is registered as a resident as of 1 January of the current year. The tax is paid on a four-instalment basis (i.e. in June, August, October, and January of the following year) or withheld from monthly salary from June through May of the following year if the salary is paid in Japan."]}
  onPress={() => handleReadMore('Payment of tax for salary paid in Japan')}
  showMore={showMore['Payment of tax for salary paid in Japan']}
/>

<OptionBlock
  title="Tax audit process in Japan"
  description="The tax authority of Japan is the National Tax Agency, and individual tax audits are conducted by the national tax office where the individual resides and cover the previous three to five years."
  onPress={() => handleReadMore('Tax audit process in Japan')}
  showMore={showMore['Tax audit process in Japan']}
/>
<OptionBlock
  title="Statute of limitations"
  description="The standard statute of limitations under audit is currently five years, though this can be extended in cases of tax evasion."
  pointers = {[
    [
      "From tax year 2020, an additional three-year statute of limitation is applied when a taxpayer does not produce supporting documents related to overseas transactions or overseas assets by the due date set forth by tax auditors (no more than 60 days from the date of request) when the National Tax Agency requests a treaty country for information related to overseas transactions or overseas assets; except in the following circumstances:",
      "- The additional three-year statute of limitation does not apply when the request to the treaty country is made when the remaining period until the original statute of limitation is six months or less.",
      "- The additional three-year statute of limitation only applies when the National Tax Agency informs the taxpayer about the request to a treaty country within three months from the date of such request."
    ]
  ]}
  
  onPress={() => handleReadMore('Statute of limitations')}
  showMore={showMore['Statute of limitations']}
/>



<OptionBlock
  title="Topics of focus for tax authorities"
  description="The topics covered under tax audits can be wide-ranging and varied and will largely depend on the individual taxpayer."
  onPress={() => handleReadMore('Topics of focus for tax authorities')}
  showMore={showMore['Topics of focus for tax authorities']}
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
  tableData00,
  tableData1,
  pointers,
  onPress,
  showMore,
  children,
  order,
  textData,
  textData00,
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


{tableData00 && (
          <View style={styles.table}>
            {tableData00.map((row, rowIndex) => (
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




{Array.isArray(textData00) ? textData00.map((text, index) => <Text style={styles.textData} key={index}>{text}</Text>) : <Text  >{textData00}</Text>}

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

export default JapanIndiv;

