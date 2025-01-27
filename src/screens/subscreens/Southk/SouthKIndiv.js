import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';


const SouthKIndiv = () => {
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
      source={{ uri: 'https://cdn.pixabay.com/photo/2017/11/09/18/08/south-korea-2934220_640.png' }}
      style={styles.background}
    >
    <ScrollView 
        style={{flex: 1}}
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 50}}
    >


<OptionBlock
  title="Special tax concession for foreign employees or engineers"
  description="The applicable period for special tax concession for foreign employees or engineers has been extended under the latest amendment of the Individual Income Tax Law (‘IITL’). Foreign employees working in Korea may elect to have their employment income subject to a flat tax rate of 19% (rather than a progressive income tax rate with the highest marginal tax rate) for 20 years from the date they start working in Korea. This flat tax rate can be elected for those who initially started to work in Korea not later than the end of December 2026."
  textData={[
    "Currently, 50% tax-exempt treatment is allowed for wages received by a qualified foreign technician/engineer providing services in Korea to a domestic entity for ten years from the date one starts to render services in Korea. This treatment shall apply for those who start to work in Korea not later than the end of December 2026. In addition, a 70% tax reduction is applicable to wages received by the above qualified expatriate, if one works in the categories of raw materials, parts, and equipment, for the first three years as long as one started to work in Korea not later than 31 December 2022.",
    "Another noticeable change in the recently amended IITL is a new provision that outlines a special withholding treatment concerning non-resident omnibus accounts.  Under the new provision, when a non-resident receives Korean-source income through the non-resident omnibus account, the company paying Korean source income to the non-resident is mandated to withhold income tax upon making the payment.  To avail of income tax exemption, non-taxation, or a reduced rate as per the applicable income tax treaty, the non-resident must initiate the process by filing a tax refund request with the pertinent district tax office."
  ]}
  onPress={() => handleReadMore("Special tax concession for foreign employees or engineers")}
  showMore={showMore["Special tax concession for foreign employees or engineers"]}
/>




<OptionBlock
  title="Taxes on personal income"
  description="A taxpayer in Korea, who is liable to pay the income tax on their income, is classified into resident and non-resident for income tax purposes (see the Residence section for more information)."
  textData={[
    "A resident is subject to income tax on all incomes derived from sources both within and outside Korea. Foreign residents who have stayed in Korea for longer than five years during the last ten-year period are taxed on their worldwide income. However, foreign residents who have stayed in Korea for five years or less during the last ten-year period are taxed on Korea-source income, and foreign-source income is reportable only in the case where foreign-source income is paid by a Korean entity or transferred to Korea.",
    "A non-resident is subject to income tax only on income derived from sources within Korea. When a non-resident who does not have a domestic place of business has Korea-source income to report through an annual tax return, most provisions concerning the tax rates and the filing procedures of residents shall apply to them. However, in calculating taxable income and tax amount, a non-resident is not entitled to claim any personal exemptions for their dependants (except for themselves), income deductions, and tax credits."
  ]}
  onPress={() => handleReadMore("Taxes on personal income")}
  showMore={showMore["Taxes on personal income"]}
>
<OptionBlock
  title="Personal income tax (PIT) rates"
  description="The following tax table summarises the basic global income tax rates applicable for the income received from 1 January 2023 and thereafter."
  tableData={[
    { over: "Over (column 1)", lessThan: "Less than", taxOnColumn1: "Tax on column 1 (KRW thousands)", marginalTaxRate: "Marginal tax rate (%)" },
    { over: "0", lessThan: "14,000", taxOnColumn1: "0", marginalTaxRate: "6" },
    { over: "14,000", lessThan: "50,000", taxOnColumn1: "840", marginalTaxRate: "15" },
    { over: "50,000", lessThan: "88,000", taxOnColumn1: "6,240", marginalTaxRate: "24" },
    { over: "88,000", lessThan: "150,000", taxOnColumn1: "15,360", marginalTaxRate: "35" },
    { over: "150,000", lessThan: "300,000", taxOnColumn1: "37,060", marginalTaxRate: "38" },
    { over: "300,000", lessThan: "500,000", taxOnColumn1: "94,060", marginalTaxRate: "40" },
    { over: "500,000", lessThan: "1,000,000", taxOnColumn1: "174,060", marginalTaxRate: "42" },
    { over: "1,000,000", lessThan: "", taxOnColumn1: "384,060", marginalTaxRate: "45" },
  ]}
  textData1={[
    "* Korean won",

   " ** Before applying the local income tax."
  ]}
  
  onPress={() => handleReadMore("Personal income tax (PIT) rates")}
  showMore={showMore["Personal income tax (PIT) rates"]}
/>

<OptionBlock
  title="Local income tax"
  description="Local income tax in Korea is imposed on a taxpayer's income allocated to each local government. The rates vary depending on the local government and the taxpayer's income level. For more details, consult the relevant local tax authorities."
  pointers = {[
    [
      "Besides the above PIT, there is also a local income tax that is assessed at a rate of 10% of the PIT rates.",
      "PIT is paid to the National Tax Service (NTS).",
      "Local income tax is paid to the city or the province that is the domicile of the taxpayer."
    ]
  ]}
  tableData1={[
    { over: "Over (column 1)", lessThan: "Less than", taxOnColumn1: "Tax on column 1 (KRW thousands)", marginalTaxRate: "Marginal tax rate (%)" },
    { over: "0", lessThan: "14,000", taxOnColumn1: "0", marginalTaxRate: "0.6" },
    { over: "14,000", lessThan: "50,000", taxOnColumn1: "84", marginalTaxRate: "1.5" },
    { over: "50,000", lessThan: "88,000", taxOnColumn1: "624", marginalTaxRate: "2.4" },
    { over: "88,000", lessThan: "150,000", taxOnColumn1: "1,536", marginalTaxRate: "3.5" },
    { over: "150,000", lessThan: "300,000", taxOnColumn1: "3,706", marginalTaxRate: "3.8" },
    { over: "300,000", lessThan: "500,000", taxOnColumn1: "9,406", marginalTaxRate: "4.0" },
    { over: "500,000", lessThan: "1,000,000", taxOnColumn1: "17,406", marginalTaxRate: "4.2" },
    { over: "1,000,000", lessThan: "", taxOnColumn1: "38,406", marginalTaxRate: "4.5" },
  ]}
  
  
  onPress={() => handleReadMore("Local income tax")}
  showMore={showMore["Local income tax"]}
/>






<OptionBlock
  title="Alternative minimum tax (AMT)"
  description="The AMT, with exceptions, will be calculated at the greater of 45% of income tax liability (35% applied to income tax liabilities of up to KRW 30 million) before exemptions or actual tax after exemptions."
  textData={["The AMT is applied to business income of a resident individual and Korean-source business income of a non-resident individual, but it is not applied to employment income."]}
  onPress={() => handleReadMore("Alternative minimum tax (AMT)")}
  showMore={showMore["Alternative minimum tax (AMT)"]}
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

export default SouthKIndiv;

