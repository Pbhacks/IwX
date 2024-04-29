import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';


const SouthKCorp = () => {
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
  description="Korea’s National Assembly approved the government's Bill to amend 15 tax laws, including the Corporate Income Tax Law (CITL), on December 21, 2023. The approved Bill includes measures to refine domestic global minimum tax rules which are implemented from the fiscal year starting on or after January 1, 2024 and generally aligned with the OECD Pillar Two Model Rules and Administrative Guidance on the GloBE Model Rules (note that the application of the undertaxed payment rule (UTPR) will be delayed by one year, revising the effective date to January 1, 2025, in consideration of global progress in UTPR implementation). Furthermore, the Bill introduces new reporting requirements concerning offshore trusts and employee stock-based compensations to bolster regulations against tax avoidance."
  textData={[
              "The approved bill includes amendments aimed at fostering corporate investment by extending and expanding the existing tax credits.  Notably, the Bill adds bio-pharmacy to the list of designated national strategic technology sectors, such as semiconductors and secondary batteries which are eligible for preferential higher rates of R&D tax credits to qualifying expenditures and facility investments aimed at commercializing technologies.  In addition, the Bill raises the basic deduction rate for video content production costs by two or three percentage points and provides an additional credit of 10-15% for expenditures meeting specific criteria.  Additionally, a new tax credit is introduced for SMEs and middle-scale enterprises investing in film, TV series, and OTT contents making through specialized companies in the cultural content industry.  Moreover, the approved Bill reinstates tax credits for investments in overseas natural resource developments, which had been sunset in 2013. This move aims to support corporate investments in securing core minerals, extending the application of the tax credit until 2026.",
              "Under the approved bill, the application period for special tax for rural development is extended by ten years, lasting until June 30, 2034. This extension is intended to continuously enhance the industrial competitiveness of the agricultural and fisheries sector to cope with the expanded opening of the agricultural and fishery market."
  ]}
  onPress={() => handleReadMore("Significant developments")}
  showMore={showMore["Significant developments"]}
/>





<OptionBlock
  title="Taxes on corporate income"
  description="Resident corporations are taxed at normal CIT rates on their worldwide income, whereas non-resident corporations with a permanent establishment (PE) in Korea are taxed at normal CIT rates only to the extent of their Korean-source income. Non-resident corporations without a PE in Korea are generally taxed through a withholding tax (WHT) on each separate item of Korean-source income (see the Withholding taxes section)."
  textData={["The following tax table summarises the CIT rates applicable for the fiscal year starting on or after 1 January 2023:"]}
  tableData={[
    { taxBase: "Over (column 1)", lessThan: "Less than", taxOnColumn1: "Tax on column 1 (KRW)*", marginalTaxRate: "Marginal tax rate (%)" },
    { taxBase: "0", lessThan: "200", taxOnColumn1: "0", marginalTaxRate: "9" },
    { taxBase: "200", lessThan: "20,000", taxOnColumn1: "18", marginalTaxRate: "19" },
    { taxBase: "20,000", lessThan: "300,000", taxOnColumn1: "3,780", marginalTaxRate: "21" },
    { taxBase: "300,000", lessThan: "", taxOnColumn1: "62,580", marginalTaxRate: "24" },
  ]}
  textData1={[
    "* Korean won",

    "** Excluding the local income tax."
  ]}
  onPress={() => handleReadMore("Taxes on corporate income")}
  showMore={showMore["Taxes on corporate income"]}
>


<OptionBlock
  title="Additional tax on corporate income"
  description="To facilitate the use of corporate retained earnings to fund facility investment and payroll increases, 20% additional tax shall be applied for excess corporate earnings reserve of a company (excluding small and mid-size enterprises [SMEs], etc.) by 31 December 2025."
  pointers = {[
    [
      "Companies should elect one of the following methods in computing excess corporate earnings reserve subject to the additional tax:",
      "- ([adjusted taxable income for the year x 70%] - the total amount of facility investment, wage increases, and expenditures for mutual growth of large corporations and SMEs) x 20%, or",
      "- ([adjusted taxable income for the year x 15%] - the total amount of wage increases and mutual growth expenditures) x 20%."
    ]
  ]}

  
  textData2={["The rule for 20% additional tax was scheduled to sunset at the end of December 2022 although a company having untaxed excess corporate earnings reserve carried over from prior years from 2021 and 2022 shall be subject to additional tax in a current year according to the former rule if qualifying expenditures, such as facility investment, salary increase, etc., in a current year is less than the prior year’s excess corporate earnings reserve.  The sunset date has been extended by additional three years until December 31, 2025.   In extending the sunset, the application of the additional tax has been refined to only include those within a conglomerate group which are subject to restrictions on cross-shareholdings as specified in the Anti-Monopoly and Fair Trade Act."]}
  onPress={() => handleReadMore("Additional tax on corporate income")}
  showMore={showMore["Additional tax on corporate income"]}
/>




<OptionBlock
  title="Special Tax for Rural Development"
  description="When a corporate taxpayer claims certain tax credits or exemptions under the Special Tax Treatment Control Law (STTCL), a 20% agriculture and fishery surtax is levied on the reduced CIT liability. The application period has been extended for 10 years to June 30, 2034."
  onPress={() => handleReadMore("Special Tax for Rural Development")}
  showMore={showMore["Special Tax for Rural Development"]}
/>

<OptionBlock
  title="Minimum tax"
  description="Corporate taxpayers (except SMEs) are liable for the minimum tax, which is defined as the greater of 10% (if the tax base is KRW 10 billion or less, 12% on the tax base exceeding KRW 10 billion but not more than KRW 100 billion, 17% on the tax base exceeding KRW 100 billion) of the taxable income before certain tax deductions and credits pursuant to the STTCL or the actual CIT liability after certain deductions and credits under the STTCL."
  textData={[
    "For SMEs, the minimum tax is the greater of 7% of taxable income before certain tax deductions and credits or actual CIT liability after the deductions and credits. For the companies that are disqualified from SMEs due to specific reasons, the applicable rates are 7% during the first four years after ceasing to qualify, 8 percent for the next three years, and 9 percent for the subsequent two years.",
    "The local income tax is a separate income tax that has its own tax base, tax exemption and credits, and tax rates. The local income tax rates for corporations are 0.9% on the first KRW 200 million, 1.9% for the tax base between KRW 200 million and KRW 20 billion, 2.1% for the tax base between KRW 20 billion and KRW 300 billion, and 2.4% for the excess."
  ]}
  onPress={() => handleReadMore("Minimum tax")}
  showMore={showMore["Minimum tax"]}
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

export default SouthKCorp;

